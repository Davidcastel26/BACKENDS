import { Router } from "express";
import { CategoryController } from "./controller";
import { AuthMiddleware } from "../../presentation/middleware/auth.middleware";
import { CategoryService } from "../../presentation/services/category.service";

export class CategoryRoute {


    static get routes():Router{
        const router = Router()

        const categoryService = new CategoryService()
        const controller = new CategoryController(categoryService)

        router.get('/', controller.getCategory  )
        router.post('/', [
            AuthMiddleware.validateJWT
        ], controller.createCategory)

        return router
    }

}