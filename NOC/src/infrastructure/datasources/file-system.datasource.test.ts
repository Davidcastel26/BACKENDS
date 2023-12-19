import fs from 'fs'
import path from 'path'
import { FileSystemDataSource } from './file-system.datasource'
import { LogEntity } from '../../domain/entities/log.entity'
import { LogSeverityLevel } from '../../ts'
// import { LogDataSource } from '../../domain/datasources/log.datasource';

describe('FileSystemDatasource into Infrastructure/datasources/file-system', ()=> {


    const logPath = path.join(__dirname, '../../../logs')

    beforeEach(() => {
        fs.rmSync( logPath, { recursive: true, force: true} )
    })

    test('should create log files if they do not exists', () => {

        new FileSystemDataSource()
        const files = fs.readdirSync( logPath );

        expect(files).toEqual([ 'logs-high.log', 'logs-low.log', 'logs-medium.log' ])
    })

    test('should save a log in logs-low.log', () => {

        const logDatasource = new FileSystemDataSource();
        const log = new LogEntity({
            message:'test',
            level: LogSeverityLevel.low,
            origin: 'files-system.datasource.test.ts'
        })

        logDatasource.saveLog(log)
        const allLogs = fs.readFileSync(`${logPath}/logs-low.log`, 'utf-8')
        
        expect( allLogs ).toContain( JSON.stringify(log))
    })


    test('should save a log in logs-medium.log', () => {

        const logDatasource = new FileSystemDataSource();
        const log = new LogEntity({
            message:'test',
            level: LogSeverityLevel.medium,
            origin: 'files-system.datasource.test.ts'
        })

        logDatasource.saveLog(log)
        const allLogs = fs.readFileSync(`${logPath}/logs-low.log`, 'utf-8')
        const mediumLog = fs.readFileSync(`${logPath}/logs-medium.log`,'utf-8');
        
        expect( allLogs ).toContain( JSON.stringify(log))
        expect( mediumLog ).toContain( JSON.stringify(log))
    })

    test('should save a log in logs-high.log', () => {

        const logDatasource = new FileSystemDataSource();
        const log = new LogEntity({
            message:'test',
            level: LogSeverityLevel.high,
            origin: 'files-system.datasource.test.ts'
        })

        logDatasource.saveLog(log)
        const allLogs = fs.readFileSync(`${logPath}/logs-low.log`, 'utf-8')
        const highLogs = fs.readFileSync(`${logPath}/logs-high.log`,'utf-8');
        
        expect( allLogs ).toContain( JSON.stringify(log))
        expect( highLogs ).toContain( JSON.stringify(log))
    })

    test('should return all logs', async() => {

        const LogDataSource = new FileSystemDataSource();

        const logLow= new LogEntity({
            message:'log-low',
            level: LogSeverityLevel.low,
            origin: 'low'
        })
        const logMedium = new LogEntity({
            message:'log-medium',
            level: LogSeverityLevel.medium,
            origin: 'medium'
        })
        const logHigh= new LogEntity({
            message:'log-high',
            level: LogSeverityLevel.high,
            origin: 'high'
        })

        await LogDataSource.saveLog( logLow )
        await LogDataSource.saveLog( logMedium )
        await LogDataSource.saveLog( logHigh )
        
        const logsLow = await LogDataSource.getLogs(LogSeverityLevel.low);
        const logsMedium = await LogDataSource.getLogs(LogSeverityLevel.medium);
        const logsHigh = await LogDataSource.getLogs(LogSeverityLevel.high);

        expect(logsLow).toEqual( expect.arrayContaining([ logLow, logMedium, logHigh]))
        expect(logsMedium).toEqual( expect.arrayContaining([logMedium]))
        expect(logsHigh).toEqual( expect.arrayContaining([ logHigh]))
         
    });


    test('should not throw an error if path exists', () => {

        new FileSystemDataSource();

        expect(true).toBeTruthy()

    }) 

    test('should throw an error if severity is not defined', async() => {

        const logDatasource = new FileSystemDataSource();
        const customSeverityLevel = 'SUPER_MEGA_HIGH' as LogSeverityLevel;

        try {
            
            await logDatasource.getLogs( customSeverityLevel )
            expect(true).toBeFalsy();

        } catch (error) {
            const errorString = `${error}`
            // console.log(errorString)

            expect( errorString ).toContain(`Error: Severity level does not exits`)
        }

    })

})