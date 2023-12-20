import { CreateTodoDto } from "../../domain/dtos"
import { TodoEntity } from "../../domain/entities/todo.entity"
import { TodoRepository } from "../../domain/repositories/todo.repository"

export interface CreateTodoUseCase {
    execute( dto: CreateTodoDto ): Promise<TodoEntity>
}

export class CreateTodoCase implements CreateTodoUseCase {

    constructor(
        private readonly repository: TodoRepository
    ){}

    execute(dto: CreateTodoDto): Promise<TodoEntity> {
        return this.repository.create(dto)
    }

}