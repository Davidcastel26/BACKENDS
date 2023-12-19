import { NextFunction, Request, Response } from "express"

const todos = [
    {id: 1, text: 'Buy milk', createdAt: new Date()},
    {id: 2, text: 'Buy bread', createdAt: null},
    {id: 3, text: 'Buy butter', createdAt: new Date()},
  ]


export class TodosControllers {
    

    //DI
    constructor(){}

    public getTodos = (req: Request, res: Response) => {

        return res.json( todos )
  
    }

    public getTodoById = ( req: Request, res: Response) => {

        // parseInt(id)
        // console.log(typeof( id ), id)
        const  id = +req.params.id;
        const todo = todos.find( (todo) => todo.id === id);

        ( todo )
        ? res.status(200).json(todo)
        : res.status(400).json({error: 'message error bitch'})

    }

    public createTodo = (
        req:Request,
        res: Response,
        next: NextFunction
    ) => {
        
        const { text } = req.body;

        if( !text ) throw new Error(` ${text} is a must`)

        todos.push({
            id: todos.length + 1,
            text,
            createdAt: new Date()
        })

        res.json( text )

    } 

    public updateTodo = (
        req:Request,
        res: Response,
        next: NextFunction
    ) => {
        
        const id = +req.params.id;
        const { text } = req.body;
        
        const todo = todos.find( todo => todo.id === id);
        if(!todo) throw new Error(` ${text} is a must`)

        
        todo.text = text || todo?.text;


        return res.status(201).json(todo)

    }

    public deleteTodo = (
        req:Request,
        res: Response,
        next: NextFunction
    ) => {

        const id = +req.params.id;

        const todo = todos.find(todo => todo.id === id);
        if( !todo ) throw new Error(`the fuck with that id?`)
        
        todos.splice( todos.indexOf(todo), 1)

        return res.status(204)
    } 

}