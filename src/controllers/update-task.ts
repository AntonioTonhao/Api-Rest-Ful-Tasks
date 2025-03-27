import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../lib/prisma'
import { z } from 'zod'

export async function UpdateTask(request: FastifyRequest, reply: FastifyReply) {
  const checkId = z.object({
    id: z.string().uuid(),
  })
  try {
    const { id } = checkId.parse(request.params)

    const task = await prisma.tasks.findUnique({
      where: { id },
    })

    if (!task) {
      return reply.status(404).send({
        message: 'Task not found',
      })
    }

    const taskUpdate = z.object({
      title: z.string(),
      description: z.string(),
    })

    const { title, description } = taskUpdate.parse(request.body)

    await prisma.tasks.update({
      where: { id },
      data: {
        title,
        description,
        updated_at: new Date(),
      },
    })
    return reply.status(200).send()
  } catch (error) {
    return reply.status(400).send({
      message: 'Invalid ID',
    })
  }
}
