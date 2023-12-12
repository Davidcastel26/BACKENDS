import fs from 'fs';

import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity } from "../../domain/entities/log.entity";
import { LogSeverityLevel } from "../../ts";


export class FileSystemDataSource implements LogDataSource {

    private readonly logPath = 'logs/'
    private readonly allLogsPath = 'logs/logs-low.log'
    private readonly mediumLogsPath = 'logs/logs-medium.log'
    private readonly highLogsPath = 'logs/logs-high.log'

    constructor() {
        this.CreateLogsFiles();
    }

    private CreateLogsFiles = () => {
        if( !fs.existsSync(this.logPath)){
            fs.mkdirSync( this.logPath );
        }
        
        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach( path => {

            if( fs.existsSync( path )) return;
            
            fs.writeFileSync( path, '');
        })


        
    }

    async saveLog(newLog: LogEntity): Promise<void> {

        const logAsJSON = `${JSON.stringify(newLog)}\n`


        fs.appendFileSync( this.allLogsPath, logAsJSON)

        if( newLog.level === LogSeverityLevel.low ) return;

        if( newLog.level === LogSeverityLevel.medium ){
            fs.appendFileSync( this.mediumLogsPath, logAsJSON)
        }else {
            fs.appendFileSync( this.highLogsPath, logAsJSON)
        }

    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}
