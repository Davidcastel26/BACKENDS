import { Router } from "express";
import { GitHubController } from "./github.controller";



export class GitHubRoute {

    static get routes(): Router{

        const router = Router()

        // const service = new 
        const controller = new GitHubController()

        router.post('/', controller.webhookHandler)

        return router
    }

}

