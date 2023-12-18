import { LogSeverityLevel } from "../../ts"
import { LogEntity } from "./log.entity"


describe('Log ENTITY into log.entity.test.ts', () => { 
    

    const dataObj = {
        message: 'Hola mundo',
        level: LogSeverityLevel.high,
        origin: '/entities/log.entity.ts'
    }

    test('should create a log entity instance', () => { 

        
        
        const log = new LogEntity(dataObj);

        expect( log ).toBeInstanceOf( LogEntity  );
        expect( log.message ).toBe(dataObj.message);
        expect( log.level ).toBe(  dataObj.level  );
        expect( log.origin ).toBe( dataObj.origin );
        expect( log.createdAt).toBeInstanceOf(Date);
     });

     test('should create a LogEnity instance from Json', () => { 
        
        const jsonxd = `{"message":"Service http://google.com working","level":"low","createdAt":"2023-12-18T15:00:20.217Z","origin":"check-service.ts"}`

        const log = LogEntity.fromJson(jsonxd)

        expect( log ).toBeInstanceOf( LogEntity  );
        expect( log.message ).toBe( "Service http://google.com working" );
        expect( log.level ).toBe( LogSeverityLevel.low );
        expect( log.origin ).toBe("check-service.ts"  );
        expect( log.createdAt).toBeInstanceOf(Date);

      })

      test('should create a LogEntity instance from Object', () => {

        const log = LogEntity.fromObject(dataObj)

        expect( log ).toBeInstanceOf( LogEntity  );
        expect( log.message ).toBe(dataObj.message);
        expect( log.level ).toBe(  dataObj.level  );
        expect( log.origin ).toBe( dataObj.origin );
        expect( log.createdAt).toBeInstanceOf(Date);

      })

 })