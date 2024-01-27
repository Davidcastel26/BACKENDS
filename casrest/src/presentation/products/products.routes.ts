import { Router } from 'express';
import { AuthMiddleware } from '../../presentation/middleware/auth.middleware';
import { ProductController } from './products.controllers';
import { ProductService } from '../../presentation/services/product.service';



export class ProductRoutes {
    
    static get routes(): Router{

        const router = Router()

        const productService = new ProductService()
        const controller = new ProductController( productService )

        router.get('/', controller.getProduct )
        router.post('/', [
            AuthMiddleware.validateJWT
        ], controller.createProduct)


        return router;
    }

}