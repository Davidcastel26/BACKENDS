import { CronJob } from "cron";
import { CronTime, OnTick } from "../../ts/types/configs";




export class CronService {

    static createJob( cronTime: CronTime, onTick: OnTick): CronJob{

        const job = new CronJob( cronTime, onTick )


        job.start();

        return job;
    } 

}