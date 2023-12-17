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
            return [newLog]
        }

    }

    test('sholud test the abstract class', async() => {

        const logDatasource = new MockLogDatasource();

        expect( logDatasource ).toBeInstanceOf(MockLogDatasource);
        // expect( logDatasource ).toHaveProperty( 'saveLog');
        expect( typeof logDatasource.saveLog ).toBe('function');
        // expect( logDatasource ).toHaveProperty( 'getLogs');
        expect( typeof logDatasource.getLogs ).toBe('function');

        await logDatasource.saveLog( newLog);
        const logs = await logDatasource.getLogs( LogSeverityLevel.high )
        expect( logs ).toHaveLength(1);
        expect( logs[0] ).toBeInstanceOf( LogEntity )

    })
    
})
