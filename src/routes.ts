import { CreateUsers } from './controllers/create-tasks'
import { FastifyInstance } from 'fastify'

export async function TasksRoutes(app: FastifyInstance) {
  app.post('/tasks', CreateUsers)
}
