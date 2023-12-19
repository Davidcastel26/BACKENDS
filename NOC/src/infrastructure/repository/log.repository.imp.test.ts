import { LogEntity } from "../../domain/entities/log.entity";
import { LogSeverityLevel } from "../../ts";
import { LogRepositoryImp } from "./log.respository.imp"


describe('LogRepositoryImp', () => {

    const mockLogDatasouce = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const logRepository = new LogRepositoryImp(mockLogDatasouce);

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('saveLog should call the datasource with arguments', async() => {

        const log = { level: LogSeverityLevel.high, message: 'hola'} as LogEntity;
        await logRepository.saveLog(log)
        expect(mockLogDatasouce.saveLog ).toHaveBeenCalledWith( log )
        
    })

    test('saveLog should call the datasource with arguments', async() => {

        await logRepository.getLogs( LogSeverityLevel.low );
        expect( mockLogDatasouce.getLogs ).toHaveBeenCalledWith( LogSeverityLevel.low)

    })


})