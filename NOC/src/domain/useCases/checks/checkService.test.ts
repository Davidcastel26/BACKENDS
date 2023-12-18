import { LogEntity } from '../../entities/log.entity';
import { CheckService } from './checkService';


describe('CheckService UseCase', () => {

    const mockRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const successCallback = jest.fn()
    const errorCallback = jest.fn()

    const chekcService = new CheckService(
        mockRepository,
        successCallback,
        errorCallback
    );


    test('should call succesCallback when fetch returns true', async () => {
        
        const wasOk = await chekcService.execute('https://www.google.com')

        expect( wasOk ).toBe(true);
        expect( successCallback ).toHaveBeenCalled();
        expect( errorCallback ).not.toHaveBeenCalled();

        // expect( mockRepository.saveLog ).toHaveBeenCalledWith()
        expect( mockRepository.saveLog ).toBeCalledWith(
            expect.any( LogEntity )
        )

    })

})