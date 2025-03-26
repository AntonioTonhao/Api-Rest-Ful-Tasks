import { fastify } from 'fastify'
import { TasksRoutes } from './routes'

export const app = fastify()

app.register(TasksRoutes)
