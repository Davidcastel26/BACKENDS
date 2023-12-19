import { Router } from "express";
import { TodosControllers } from "./controllers";

export class TodoRoutes { 

    static get routes(): Router{

        const router = Router()
        const todoController = new TodosControllers()

        router.get('/', todoController.getTodos )
        router.get('/:id', todoController.getTodoById )

        router.post('/', todoController.createTodo )

        router.put('/:id', todoController.updateTodo )

        router.delete('/:id', todoController.deleteTodo)

        return router;
    }

}