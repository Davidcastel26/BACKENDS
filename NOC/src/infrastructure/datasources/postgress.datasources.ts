import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity } from "../../domain/entities/log.entity";
import { LogSeverityLevel } from "../../ts";

const prisma = new PrismaClient()

const severityEnum = {
    low:    SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high:   SeverityLevel.HIGH
}   

export class PostgressDataSource implements LogDataSource {
    
    
    async saveLog( log: LogEntity ): Promise<void> {
      
        const level = severityEnum[log.level];
    
        const newLog = await prisma.logModel.create({
          data: {
            ...log,
            level: level,
          }
        });
    
        // console.log('Posgres saved');
      }
    
    
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        
        const level = severityEnum[severityLevel];

        const dbLogs = await prisma.logModel.findMany({
            where:{
                level
            }
        })

        return dbLogs.map( LogEntity.fromObject )
    }

}