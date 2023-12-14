import { 
        SuccessCallback, 
        ErrorCallBack, 
        CheckServiceUseCase, 
        LogSeverityLevel} from '../../../ts';
import { LogEntity } from '../../entities/log.entity';
import { LogRepository } from '../../repositories/log.repository';


export class CheckService implements CheckServiceUseCase{
    
    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallBack: ErrorCallBack
    ){

    }

    public async execute( url: string ): Promise<boolean> {


        try {

            const req = await fetch( url )

            if( !req.ok ){
                throw new Error(`Error on check services ${url}`)    
            }

            const log = new LogEntity({
                message: `Service ${ url } working`,
                level: LogSeverityLevel.low,
                origin: 'check-service.ts'
            });
            
            this.logRepository.saveLog( log )
            this.successCallback && this.successCallback();
             
            return true;
            
        } catch (error) {

            const ErrorMessage = `${url} is not ok, ${error}`
            const log = new LogEntity({
                message: ErrorMessage, 
                level: LogSeverityLevel.high,
                origin: 'check-service.ts'
            });
            this.logRepository.saveLog( log )
            this.errorCallBack && this.errorCallBack( ErrorMessage )
           return false; 
        }

        
    }
}