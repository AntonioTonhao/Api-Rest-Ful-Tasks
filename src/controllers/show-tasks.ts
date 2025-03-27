import { prisma } from '../../lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function GetTasks(request: FastifyRequest, reply: FastifyReply) {
  const tasks = await prisma.tasks.findMany()

  return reply.status(200).send(tasks)
}
