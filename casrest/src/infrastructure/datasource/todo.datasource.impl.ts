import { CustomError } from "../../domain/errors/custom.error";
import { prisma } from "../../data/postgres";
import { TodoDatasource } from "../../domain/datasources/todo.datasource";
import { CreateTodoDto } from "../../domain/dtos";
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto";
import { TodoEntity } from "../../domain/entities/todo.entity";


export class TodoDatasourceImpl implements TodoDatasource {
    async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
       
        const todo = await prisma.todo.create({
            data: createTodoDto
        })

        return TodoEntity.fromObject( todo )

    }

    async getAll(): Promise<TodoEntity[]> {

        const allTodos = await prisma.todo.findMany()

        return allTodos.map( todo => TodoEntity.fromObject(todo))

    }
    
    async findById(id: string): Promise<TodoEntity | undefined> {
        const getOneTodo = await prisma.todo.findFirst({
            where:{
                id
            }
        });

        if( !getOneTodo ) throw  new CustomError(404,'message error bitch who u trying to look for?')

        return TodoEntity.fromObject(getOneTodo)
    }


    async updateById(UpdateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        
        await this.findById( UpdateTodoDto.id )

        const updateTodo = await prisma.todo.update({
            where:{ id: UpdateTodoDto.id },
            data: UpdateTodoDto!.values
        });

        return TodoEntity.fromObject( updateTodo)
    }

    async deleteById(id: string): Promise<TodoEntity> {

        await this.findById( id )

        const deleted = await prisma.todo.delete({
            where:{ id }
        })

        return TodoEntity.fromObject( deleted )

    }

}