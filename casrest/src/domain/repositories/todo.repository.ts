import { CreateTodoDto } from '../dtos/todos/create-todo.dto';
import { TodoEntity } from '../entities/todo.entity';
import { UpdateTodoDto } from '../dtos/todos/update-todo.dto';


export abstract class TodoRepository {
    
    abstract create(createTodoDto:CreateTodoDto): Promise<TodoEntity>

    abstract getAll(): Promise<TodoEntity[]>;

    abstract findById( id: string ): Promise<TodoEntity | undefined>;

    abstract updateById( UpdateTodoDto: UpdateTodoDto ): Promise<TodoEntity>

    abstract deleteById(id: string) : Promise<TodoEntity>
}