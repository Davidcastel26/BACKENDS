import { LogSeverityLevel } from "../../ts"
import { LogEntity } from "../entities/log.entity"
import { LogDataSource } from "./log.datasource"


describe('log.datasource.ts LogDatasource', () => {

    const newLog = new LogEntity({
        origin: 'log.datasource.test.ts',
        message: 'test-message',
        level: LogSeverityLevel.low
    })

    class MockLogDatasource implements LogDataSource {

        async saveLog(log: LogEntity): Promise<void> {
            return 
        }

        async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
            return []
        }

    }

    test('sholud test the abstract class', () => {

        // const logDatasource = new LogDataSource()

    })
    
})
