import { UserEntity } from "domain/entities/user.entity";
import { CreateCategoryDto } from "../../domain/dtos/catogry.ts/createCategoryDto";
import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { PaginationDto } from "../../domain/dtos/shared/pagination.dto";


export class CategoryService {

    constructor(){}

    async createCategory( createCategoryDto: CreateCategoryDto, user: UserEntity){

        const categoryExist = await prisma.category.findFirst({
            where:{
                name: createCategoryDto.name
            }
        })

        if( categoryExist ) throw CustomError.badRequest('Category already exist')

        try {

            const category = await prisma.category.create({
                data:{
                    name: createCategoryDto.name,
                    available: createCategoryDto.available,
                    userId: user.id
                }
            })


            return {
                id: category.id,
                name: category.name,
                available: category.available
            }
            
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    }

    async getCategories( paginationDto: PaginationDto ){


        const { limit, page } = paginationDto;

        try {

            // const total = await prisma.category.count()
            // const categories = await prisma.category.findMany({
            //     take: limit ? Number(limit): undefined,
            //     skip: page ? Number(page): undefined
            // })

            const [total, categories] = await Promise.all([
                prisma.category.count({
                    select:{
                        _all: true
                    }
                }),
                prisma.category.findMany({
                    take: limit ? Number(limit): undefined,
                    skip: page ? Number(page): undefined
                })
            ])

            return {
                page,
                limit,
                total,
                next: `/api/categories?page=${( page + 1 )}&limit=${limit}`,
                prev:(page - 1 > 0) ? `/api/categories?page=${( page - 1 )}&limit=${limit}` : null,
                categories: categories.map( cate => ({
                    id: cate.id,
                    name: cate.name,
                    available: cate.available
                }))
            }

            
        } catch (error) {
            throw CustomError.internalServer(`Internal server error`)
        }

    }


}