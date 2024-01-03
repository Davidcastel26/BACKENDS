import { Router } from "express";
import { TodoRoutes } from "./todos/routes";
import { AuthRoutes } from "./auth/routes";
import { CategoryRoute } from "./category/routes";


export class AppRoutes { 

    

    static get routes(): Router{

        const router = Router();

        router.use('/api/todos', TodoRoutes.routes )

        router.use('/api/auth', AuthRoutes.routes)

        router.use('/api/categories', CategoryRoute.routes)

        return router;
    }

}