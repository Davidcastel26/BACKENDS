import { Vlidators } from "../../../config/validators"

export class CreateProductDto {

    private constructor(   
        public readonly cateogryId :string,
        public readonly userId : string,
        public readonly name :string,
        public readonly price : number,
        public readonly description: string,
    ){}

    static create( 
        props: {
            [key: string]: any
        }
    ): [string?, CreateProductDto?] {

        const {
            cateogryId,
            userId,
            name,
            price,
            description,
          } = props


          if( !name ) return ['Missing name']
          if( !userId ) return ['Missing userId']
          if( !price ) return ['Missing price']
          if( !description ) return ['Missing description']
          if( !cateogryId ) return ['Missing cateogryId']
          if( !Vlidators.isValidId(cateogryId) ) return ['Invalid Category Id']

        return [ 
            undefined, 
            new CreateProductDto( cateogryId, userId, name, price, description, )
        ]

    }
}