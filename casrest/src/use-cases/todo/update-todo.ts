import { CreateTodoDto } from "../../domain/dtos"
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto"
import { TodoEntity } from "../../domain/entities/todo.entity"
import { TodoRepository } from "../../domain/repositories/todo.repository"

export interface UpdateTodoUseCase {
    execute( dto: UpdateTodoDto ): Promise<TodoEntity>
}

export class UpdateTodoCase implements UpdateTodoUseCase {

    constructor(
        private readonly repository: TodoRepository
    ){}

    execute(dto: UpdateTodoDto): Promise<TodoEntity> {
        return this.repository.updateById(dto)
    }

}