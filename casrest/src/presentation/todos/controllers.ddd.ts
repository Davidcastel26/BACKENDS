import { NextFunction, Request, Response } from "express"
import { prisma } from "../../data/postgres"
import { CreateTodoDto } from '../../domain/dtos/todos/create-todo.dto';
import { TodoRepository } from "../../domain/repositories/todo.repository";
import { UpdateTodoDto } from '../../domain/dtos/todos/update-todo.dto';

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

    public getTodos = async(req: Request, res: Response) => {

    //    try {
    //     const allTodos = await prisma.todo.findMany()
    //     return res.status(200).json(allTodos)
    //    } catch (error) {
    //     console.log(error)
    //    }
        const allTodos = await this.todoRepository.getAll()
        return res.status(200).json(allTodos)

    }

    public getTodoById = async( req: Request, res: Response) => {
        
        const  {id} = req.params;

        // parseInt(id)
        // console.log(typeof( id ), id)
        // const todo = todos.find( (todo) => todo.id === id);
        // const getOneTodo = await prisma.todo.findFirst({
        //     where:{
        //         id
        //     }
        // });
        // ( getOneTodo )
        // ? res.status(200).json(getOneTodo)
        // : res.status(400).json({error: 'message error bitch'})

        try {
            
            const getOneTodo = await this.todoRepository.findById(id)
            return  res.status(200).json(getOneTodo)

        } catch (error) {
            res.status(400).json({ error })
        }

    }

    public createTodo = async(
        req:Request,
        res: Response,
        next: NextFunction
    ) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body)

        if( error ) return res.status(400).json({error})

        // const { text }:todoExcep = req.body;
        // if( !text ) throw new Error(` ${text} is a must`)
        // const newText: Todo = {
        //     text,
        //     completedAt: new Date()
        // }; 
        // const newText = await prisma.todo.create({
        //     data: createTodoDto!,
        // })
        // res.json( newText )

        const postTodo = await this.todoRepository.create( createTodoDto! )
        res.json( postTodo )

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

        // const todo = todos.find( todo => todo.id === id);
        // const todo = await prisma.todo.findFirst({
        //     where:{ id }
        // });
        // if(!todo) throw new Error(` ${text} is a must`)
        // // todo.text = text || todo?.text;
        // const updatetodo = await prisma.todo.update({
        //     where:{ id },
        //     data:{
        //         text: text,
        //         completedAt: completedAt
        //     }
        // });
        // return res.status(201).json(updatetodo)

        try {
            const updateTodo = await this.todoRepository.updateById( updateTodoDto! )
            return res.json(updateTodo)
        } catch (error) {
            res.status(400).json({error})
        }

    }

    public deleteTodo = async(
        req:Request,
        res: Response,
        next: NextFunction
    ) => {

        const {id} = req.params;

        // const todo = todos.find(todo => todo.id === id);
        // const todo = await prisma.todo.findFirst({
        //     where:{ id }
        // });
        // if( !todo ) throw new Error(`the fuck with that id?`)
        // // todos.splice( todos.indexOf(todo), 1)
        // const deleted = await prisma.todo.delete({
        //     where:{ id }
        // })
        // return res.status(204)

        const deleteTodo = await this.todoRepository.deleteById( id )
        res.json( deleteTodo )

    } 

}