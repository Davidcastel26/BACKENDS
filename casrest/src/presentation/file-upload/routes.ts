import { Router } from "express";
import { uploadFileController } from "./controller";
import { FileUploadService } from "../../presentation/services/file-upload.service";
import { FileUploadMiddleware } from "../../presentation/middleware/file-upload.middleware";
import { TypeMiddleware } from "../../presentation/middleware/type.middleware";

export class FileUploadRoute {


    static get routes():Router{
        const router = Router()

        const service = new FileUploadService()
        const controller = new uploadFileController( service )


        // router.use( FileUploadMiddleware.containFiles )
        // router.use( TypeMiddleware.validTypes(['user','products','categories']) )
        router.use([
            FileUploadMiddleware.containFiles, 
            TypeMiddleware.validTypes(['user','products','categories'])
        ])

        // Definir las rutas
        // api/upload/single/<user| category| product>
        // api/upload/multiple/<user| category| product>
        router.post('/single/:type', controller.uploadFile  )
        router.post('/multiple/:type', controller.uploadMultipleFiles  )

        return router
    }

}