import { LogSeverityLevel } from "../../ts"
import { LogEntity } from "./log.entity"


describe('Log ENTITY into log.entity.test.ts', () => { 
    
    test('should create a log entity instance', () => { 

        const dataObj = {
            message: 'Hola mundo',
            level: LogSeverityLevel.high,
            origin: '/entities/log.entity.ts'
        }
        
        const log = new LogEntity(dataObj);

        expect( log ).toBeInstanceOf( LogEntity  );
        expect( log.message ).toBe(dataObj.message);
        expect( log.level ).toBe(  dataObj.level  );
        expect( log.origin ).toBe( dataObj.origin );
        expect( log.createdAt).toBeInstanceOf(Date);
     });

     test('should create json from log entity ', () => { 
        
      })

 })