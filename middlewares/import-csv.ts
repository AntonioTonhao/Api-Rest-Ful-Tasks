import { parse } from 'csv-parse'
import fs from 'fs'
import path from 'path'
import { prisma } from '../lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const csvPath = path.join(__dirname, 'tasks.csv')

const csvParse = parse({
  delimiter: ',',
  skipEmptyLines: true,
  fromLine: 2, // Ignora o cabeçalho
})

const csvSchema = z.object({
  title: z.string(),
  description: z.string(),
})

export async function ImportCsvTasks(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const stream = fs.createReadStream(csvPath)
  const linesParse = stream.pipe(csvParse)

  for await (const line of linesParse) {
    const [title, description] = line

    const csvSchemaResult = csvSchema.safeParse({ title, description })

    if (!csvSchemaResult) {
      console.error('Erro de validação CSV')
      continue
    }

    await prisma.tasks.create({
      data: { title, description },
    })
  }
  return reply.status(201).send({ message: 'Upload Completed' })
}
