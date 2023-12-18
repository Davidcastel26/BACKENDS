import { CheckService } from './checkService';


describe('CheckService UseCase', () => {


    test('should call succesCallback when fetch returns true',async () => {
        
        const chekcService = new CheckService();

        const wasOk = await chekcService.execute('https://www.google.com')


        expect( wasOk ).toBe(true);

    })

})