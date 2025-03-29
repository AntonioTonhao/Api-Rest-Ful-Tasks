import { parse } from 'csv-parse'
import fs from 'fs'
import path from 'path'
import { prisma } from '../lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'

const csvPath = path.join(__dirname, 'tasks.csv')

const csvParse = parse({
  delimiter: ',',
  skipEmptyLines: true,
  fromLine: 2, // Ignora o cabeçalho
})

export async function ImportCsvTasks(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const stream = fs.createReadStream(csvPath)
  const linesParse = stream.pipe(csvParse)

  for await (const line of linesParse) {
    const [title, description] = line

    await prisma.tasks.create({
      data: { title, description },
    })
  }
  return reply.status(201).send({ message: 'Upload Completed' })
}
