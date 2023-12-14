// import { envs } from "../config/plugins/envs.plugins";
// import { CheckService } from "../domain/useCases/checks/checkService";
import { SendEmailLogs } from "../domain/useCases/logs/email/sendLogs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImp } from "../infrastructure/repository/log.respository.imp";
// import { CronService } from "./cron/cronTask";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImp(
    new FileSystemDataSource()
);

const emailService = new EmailService();

export class Server {
    
    public static start(){

        

        console.log('Server Started...');
        // console.table({key: envs.MAILER_SECRET_KEY, mail: envs.MAILER_EMAIL})
        
        // CLASS 4 SEND Email 
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute([
        //     'david.castellanos@popoyan.com.gt'
        // ])
        // const emailService = new EmailService(fileSystemLogRepository);
            
        // send mails---------- 
        // emailService.sendEmailWithFilesSystemLog([
        //     'david.castellanos@popoyan.com.gt'
        // ])

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         new CheckService(
        //             () => console.log('success'),
        //             ( error ) => console.log( error )
        //         ).execute( 'https://google.com')
        //     }
        // )

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://localhost:3000'

        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${ url } is ok`),
        //             ( error ) => console.log( error )
        //         ).execute( url )
        //     }
        // )

    }
}