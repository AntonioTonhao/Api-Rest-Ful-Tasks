import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../lib/prisma'

export async function CompletedTask(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const checkId = z.object({
    id: z.string().uuid(),
  })

  try {
    const { id } = checkId.parse(request.params)

    const task = await prisma.tasks.findUnique({ where: { id } })

    if (!task) {
      return reply.status(404).send({
        message: 'Task not found',
      })
    }

    await prisma.tasks.update({
      where: { id },
      data: { completed_at: true, updated_at: new Date() },
    })

    return reply.status(200).send()
  } catch (error) {
    return reply.status(404).send({
      message: 'Invalid ID',
    })
  }
}
