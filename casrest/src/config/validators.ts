import { prisma } from "../data/postgres";


export class Vlidators {

    static isValidId( id: string ){
        
        return prisma.category.findFirst({
            where:{
                id
            }
        }) 

    }

}