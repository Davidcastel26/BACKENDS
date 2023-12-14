// import { envs } from "../config/plugins/envs.plugins";
import { CheckService } from "../domain/useCases/checks/checkService";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImp } from "../infrastructure/repository/log.respository.imp";
import { CronService } from "./cron/cronTask";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImp(
    new FileSystemDataSource()
);

export class Server {
    
    public static start(){

        console.log('Server Started...');
        // console.table({key: envs.MAILER_SECRET_KEY, mail: envs.MAILER_EMAIL})
        
        // Mandar Email 
        const emailService = new EmailService();
        
        emailService.sendEmail({
            to:'david.castellanos@popoyan.com.gt',
            subject:'EXA node mailer',
            htmlBody: `
                <h3> Logs de sistema - NOC </h3>
                <p>. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye ver </p>
                <p> ver log adjuntos </p>
            `
        })

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         new CheckService(
        //             () => console.log('success'),
        //             ( error ) => console.log( error )
        //         ).execute( 'https://google.com')
        //     }
        // )

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'http://localhost:3000'

                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`${ url } is ok`),
                    ( error ) => console.log( error )
                ).execute( url )
            }
        )

    }
}