import { CreateUsers } from './controllers/create-tasks'
import { FastifyInstance } from 'fastify'
import { GetTasks } from './controllers/show-tasks'
import { ShowOneTask } from './controllers/show-one-task'
import { DeleteTask } from './controllers/delete-task'
import { UpdateTask } from './controllers/update-task'
import { CompletedTask } from './controllers/completed-task'
import { ImportCsvTasks } from '../middlewares/import-csv'

export async function TasksRoutes(app: FastifyInstance) {
  app.post('/tasks', CreateUsers)
  app.get('/tasks', GetTasks)
  app.get('/tasks/:id', ShowOneTask)
  app.delete('/tasks/:id', DeleteTask)
  app.put('/tasks/:id', UpdateTask)
  app.patch('/tasks/:id/completed', CompletedTask)

  app.post('/tasks/csv', ImportCsvTasks)
}
