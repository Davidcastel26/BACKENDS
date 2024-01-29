import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

import { CustomError } from "../../domain/errors/custom.error";
import { FileUploadService } from '../services/file-upload.service';


export class uploadFileController {

    constructor(
        private readonly fileUploadService: FileUploadService
    ){}

    private handleError = ( error: unknown, res: Response)=>{
        if( error instanceof CustomError){
            return res.status(error.statusCode).json({ error: error.message })
        }
 
        console.log(`${error}`)
        return res.status(500).json({ error: 'Internal Server Error'})
    }

    uploadFile  = (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        // console.log( req.files )

        const type = req.params.type
        const validType = ['user','products','categories']

        if( !validType.includes(type) ){
            return res.status(400).json({ error: `Invalid type: ${type}, valid ones ${validType}`})
        }


        const file = req.body.files.at(0) as UploadedFile

        this.fileUploadService.uploadSingle( file, `uploads/${ type }` )
            .then( uploaded => res.json(uploaded))
            .catch( error => this.handleError(error, res))

       
    }

    uploadMultipleFiles = async(
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        
        const type = req.params.type
        const validType = ['user','products','categories']

        if( !validType.includes(type) ){
            return res.status(400).json({ error: `Invalid type: ${type}, valid ones ${validType}`})
        }


        const files = req.body.files as UploadedFile[];

        this.fileUploadService.uploadMultiple( files, `uploads/${ type }` )
            .then( uploaded => res.json(uploaded))
            .catch( error => this.handleError(error, res))

    }

}