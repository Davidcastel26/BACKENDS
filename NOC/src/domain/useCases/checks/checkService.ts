import { CheckServiceUseCase } from "../../../ts/interface/domain/icheckService";
import { SuccessCallback, ErrorCallBack } from '../../../ts/types/domain/tuseCase';


export class CheckService implements CheckServiceUseCase{
    
    constructor(
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
            this.successCallback();
             
            return true;
            
        } catch (error) {

            this.errorCallBack(`${error}`)
           return false; 
        }

        
    }
}