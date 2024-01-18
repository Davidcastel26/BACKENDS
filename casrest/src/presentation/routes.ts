import { Router } from "express";
import { TodoRoutes } from "./todos/routes";
import { AuthRoutes } from "./auth/routes";
import { CategoryRoute } from "./category/routes";
import { ProductRoutes } from "./products/products.routes";


export class AppRoutes { 

    

    static get routes(): Router{

        const router = Router();

        router.use('/api/todos', TodoRoutes.routes )

        router.use('/api/auth', AuthRoutes.routes)

        router.use('/api/categories', CategoryRoute.routes)

        router.use('/api/products', ProductRoutes.routes  )

        return router;
    }

}