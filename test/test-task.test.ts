import { execSync } from 'child_process'
import { app } from '../src/app'
import request from 'supertest'
import { afterAll, beforeAll, describe, it } from 'vitest'

describe('Tasks Routes', () => {
  beforeAll(async () => {
    execSync('dotenv -e .env.test -- npx prisma migrate reset --force')
    execSync('dotenv -e .env.test -- npx prisma migrate deploy ')
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Create Task', async () => {
    await request(app.server)
      .post('/tasks')
      .send({
        title: 'Title Test',
        description: 'Title Description',
      })
      .expect(201)
  })
})
