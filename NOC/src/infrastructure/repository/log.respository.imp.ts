import { LogEntity } from '../../domain/entities/log.entity';
import { LogRepository } from '../../domain/repositories/log.repository';
import { LogSeverityLevel } from '../../ts';
import { LogDataSource } from '../../domain/datasources/log.datasource';


export class LogRepositoryImp implements LogRepository {

    // private logDataSource: LogDataSource

    constructor( 
        private readonly logDataSource: LogDataSource,
    ) {

    }

    async saveLog(log: LogEntity): Promise<void> {
        return this.logDataSource.saveLog( log )
    }
    
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDataSource.getLogs( severityLevel )
    }
    
} 