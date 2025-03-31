# CRIAÇÃO API REST

- [X] Criação de uma task
- [X] Listagem de todas as tasks
- [X] Atualização de uma task pelo id
- [X] Remover uma task pelo id
- [X] Marcar pelo id uma task como completa
- [X] E o verdadeiro desafio: Importação de tasks em massa por um arquivo CSV

# TEST

- [ ] Criar testes automatizados e2e

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
