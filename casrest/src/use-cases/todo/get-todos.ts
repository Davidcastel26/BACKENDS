import { TodoEntity } from "../../domain/entities/todo.entity"
import { TodoRepository } from "../../domain/repositories/todo.repository"

export interface GetTodosUseCase {
    execute(): Promise<TodoEntity[]>
}

export class GetTodosCase implements GetTodosUseCase {

    constructor(
        private readonly repository: TodoRepository,
      ) {}
      
    execute(): Promise<TodoEntity[]> {
        return this.repository.getAll();
   }
    
}