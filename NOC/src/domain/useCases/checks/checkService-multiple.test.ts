import { LogEntity } from '../../entities/log.entity';
import { CheckServiceMultiple } from './checkService-mutiple';


describe('CheckService UseCase', () => {

    const mockRepo1 = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const mockRepo2 = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const mockRepo3 = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const successCallback = jest.fn()
    const errorCallback = jest.fn()

    const chekcService = new CheckServiceMultiple(
        [mockRepo1, mockRepo2, mockRepo3],
        successCallback,
        errorCallback
    );

    beforeEach(() => {

        jest.clearAllMocks()

    })


    test('should call succesCallback when fetch returns true', async () => {
        
        const wasOk = await chekcService.execute('https://www.google.com')

        expect( wasOk ).toBe(true);
        expect( successCallback ).toHaveBeenCalled();
        expect( errorCallback ).not.toHaveBeenCalled();

        // expect( mockRepository.saveLog ).toHaveBeenCalledWith()
        expect( mockRepo1.saveLog ).toBeCalledWith( expect.any( LogEntity ));
        expect( mockRepo2.saveLog ).toBeCalledWith( expect.any( LogEntity ));
        expect( mockRepo3.saveLog ).toBeCalledWith( expect.any( LogEntity ));
    });

    test('should call errorCallback when fetch returns False', async () => {
        
        const wasOk = await chekcService.execute('https://ww2.google.com')

        expect( wasOk ).toBe( false );
        expect( successCallback ).not.toHaveBeenCalled();
        expect( errorCallback ).toHaveBeenCalled();

        // expect( mockRepository.saveLog ).toHaveBeenCalledWith()
        expect( mockRepository.saveLog ).toBeCalledWith(
            expect.any( LogEntity )
        )
    });

})