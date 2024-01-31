import { Router } from "express";
import { GitHubController } from "./github.controller";
import { GithubSha256Middleware } from "../../presentation/middleware/github-shad256.middleware";



export class GitHubRoute {

    static get routes(): Router{

        const router = Router()

        // const service = new 
        const controller = new GitHubController()

        router.use( GithubSha256Middleware.verifySignature )

        router.post('/', controller.webhookHandler)

        return router
    }

}

