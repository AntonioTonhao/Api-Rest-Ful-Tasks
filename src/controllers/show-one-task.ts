import { prisma } from '../../lib/prisma'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function ShowOneTask(
  request: FastifyRequest,
  reply: FastifyReply,
) {
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

    return reply.status(200).send(task)
  } catch (error) {
    return reply.status(400).send({
      message: 'ID Invalid',
    })
  }
}
