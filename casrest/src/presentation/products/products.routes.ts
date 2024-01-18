import { Router } from 'express';
import { AuthMiddleware } from '../../presentation/middleware/auth.middleware';
import { ProductController } from './products.controllers';



export class ProductRoutes {
    
    static get routes(): Router{

        const router = Router()

        const controller = new ProductController()

        router.get('/', controller.getProduct )
        router.post('/', [
            AuthMiddleware.validateJWT
        ], controller.createProduct)


        return router;
    }

}