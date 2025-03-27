import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../lib/prisma'
import { z } from 'zod'

export async function DeleteTask(request: FastifyRequest, reply: FastifyReply) {
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
    await prisma.tasks.delete({
      where: { id },
    })

    return reply.status(200).send()
  } catch (error) {
    return reply.status(400).send({
      message: 'Invalid ID',
    })
  }
}
