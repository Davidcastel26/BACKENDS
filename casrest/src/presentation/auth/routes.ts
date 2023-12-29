import { Router } from "express";
import { AuthController } from "./controller";
import { AuthService } from '../services/auth.service';
import { EmailService } from "../services/email.service";
import { envs } from '../../config/envs';


export class AuthRoutes {

    static get routes(): Router{

        const router = Router()

        const emailServices = new EmailService(
            envs.MAILER_SERVICE,
            envs.MAILER_EMAIL,
            envs.MAILER_SECRET_KEY,
            envs.SEND_EMAILL
        )
        const authService = new AuthService(emailServices)
        const controller = new AuthController(authService);

        router.post('/sigin', controller.sigin )
        router.post('/login', controller.login )
        router.get('/emial-token/:token',controller.emailTokenValidation )


        return router;
    }

}