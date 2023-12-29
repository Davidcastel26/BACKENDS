import { NextFunction, Request, Response } from "express"
import { prisma } from "../../data/postgres"
import { CreateTodoDto } from '../../domain/dtos/todos/create-todo.dto';
import { TodoRepository } from "../../domain/repositories/todo.repository";
import { UpdateTodoDto } from '../../domain/dtos/todos/update-todo.dto';
import { GetTodosCase } from "../../use-cases/todo/get-todos";
import { CreateTodoCase } from "../../use-cases/todo/create-todo";
import { UpdateTodoCase } from "../../use-cases/todo/update-todo";
import { DeleteTodoCase } from "../../use-cases/todo/delete-todo";
import { CustomError } from "../../domain/errors/custom.error";

interface Todo {
    id?: string
    text: string
    completedAt?: Date
}

type todoExcep = Pick<Todo, 'text'>;

export class TodosControllers {
    

    //DI
    constructor(
        private readonly todoRepository: TodoRepository
    ){}

    private handleError = ( res: Response, error: unknown ) => {
        if( error instanceof CustomError ){
            res.status(error.statusCode).json({ error: error.message })
            return;
        }

        res.status(500).json({ error: 'Internal server error - check logs'})
    }

    public getTodos = async(req: Request, res: Response) => {

        new GetTodosCase( this.todoRepository )
            .execute()
            .then( todos => res.json(todos) )
            .catch( error => this.handleError(res, error))

    }

    public getTodoById = async( req: Request, res: Response) => {
        
        const  {id} = req.params;

        try {
            
            const getOneTodo = await this.todoRepository.findById(id)
            return  res.status(200).json(getOneTodo)

        } catch (error) {
            // res.status(400).json({ error })
            this.handleError(res, error)
        }

    }

    public createTodo = async(
        req:Request,
        res: Response,
        next: NextFunction
    ) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body)

        if( error ) return res.status(400).json({error})

        new CreateTodoCase( this.todoRepository )
            .execute( createTodoDto! )
            .then( todo => res.status(201).json(todo))
            .catch( error => this.handleError(res, error) )

    } 

    public updateTodo = async(
        req:Request,
        res: Response,
        next: NextFunction
    ) => {
        
        const {id} = req.params;
        const [ error, updateTodoDto ] = UpdateTodoDto.create({...req.body, id})
        // const { text, completedAt} = req.body;
        if( error ) return res.status(400).json({error})

        new UpdateTodoCase( this.todoRepository )
            .execute( updateTodoDto! )
            .then( todo => res.json(todo))
            .catch( error => this.handleError(res, error))

    }

    public deleteTodo = (
        req:Request,
        res: Response,
        next: NextFunction
    ) => {

        const {id} = req.params;

        new DeleteTodoCase( this.todoRepository )
            .execute( id )
            .then( todo => res.status(204).json(todo))
            .catch(error => this.handleError(res, error))

    } 
}