import { CheckService } from "../domain/useCases/checks/checkService";
import { CronService } from "./cron/cronTask";

export class Server {
    
    public static start(){

        console.log('Server Started...');

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
                    () => console.log(`${ url } is ok`),
                    ( error ) => console.log( error )
                ).execute( url )
            }
        )

    }
}