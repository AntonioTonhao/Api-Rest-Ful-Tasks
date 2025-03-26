# CRIAÇÃO API REST

- [ ] Criação de uma task
- [ ] Listagem de todas as tasks
- [ ] Atualização de uma task pelo id
- [ ] Remover uma task pelo id
- [ ] Marcar pelo id uma task como completa
- [ ] E o verdadeiro desafio: Importação de tasks em massa por um arquivo CSV

# TASKS

- `id` - Identificador único de cada task
- `title` - Título da task
- `description` - Descrição detalhada da task
- `completed_at` - Data de quando a task foi concluída. O valor inicial deve ser `null`
- `created_at` - Data de quando a task foi criada.
- `updated_at` - Deve ser sempre alterado para a data de quando a task foi atualizada.

# ROUTES

- `POST - /tasks`
       
- `GET - /tasks`
    
- `PUT - /tasks/:id`
        
- `DELETE - /tasks/:id`

- `PATCH - /tasks/:id/complete`
