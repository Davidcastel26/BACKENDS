import { CreateTodoDto } from "../../domain/dtos"
import { TodoEntity } from "../../domain/entities/todo.entity"
import { TodoRepository } from "../../domain/repositories/todo.repository"

export interface DeleteTodoUseCase {
    execute( id: string ): Promise<TodoEntity>
}

export class DeleteTodoCase implements DeleteTodoUseCase {

    constructor(
        private readonly repository: TodoRepository
    ){}

    execute(id: string): Promise<TodoEntity> {
        return this.repository.deleteById(id)
    }

}