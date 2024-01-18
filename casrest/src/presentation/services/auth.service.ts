import { UserEntity } from "../../domain/entities/user.entity";
import { prisma } from "../../data/postgres";
import { RegisterUserDto } from "../../domain/dtos";
import { CustomError } from "../../domain/errors/custom.error";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { bcryptAdpter } from "../../config/bcrypt.adapter";
import { JWTGenerator } from "../../config/jwt.adapter";
import { EmailService } from './email.service';
import { envs } from "../../config/envs";



export class AuthService {

    constructor(
        private readonly EmailService: EmailService,
    ){}



    public async registerUser( registerUserDto: RegisterUserDto){
        const existUser = await prisma.user.findUnique({
            where:{ 
                email: registerUserDto.email
            }
        })

        if( existUser ) throw CustomError.badRequest('User with email already exist');

        try {

            const user = registerUserDto
            
            user.password = bcryptAdpter.hash( registerUserDto.password )

            
            const newUser = await prisma.user.create({
                data: {
                    name: user.name,
                    email: user.email,
                    password: user.password
                }
            })

            await this.sendEmailValidationLink( newUser.email)

            const { password, ...rest } = UserEntity.fromObject( newUser )

            const token = await JWTGenerator.generateToken({ id: newUser.id, name: newUser.name })
            if( !token ) throw CustomError.internalServer('Error while creating JWT')

            return {
                user: { ...rest },
                token: token
            }
            
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    }

    public async loginUser( loginUserDto: LoginUserDto){
        const existUser = await prisma.user.findFirst({
            where:{ 
                email: loginUserDto.email
            }
        })

        if( !existUser ) throw CustomError.badRequest('User doest not exist here!');

        const isMatch = bcryptAdpter.compare( loginUserDto.password, existUser.password )
        if( !isMatch ) throw CustomError.badRequest('Password not valid')

        const { password, ...userProperties } = UserEntity.fromObject( existUser )

        const token = await JWTGenerator.generateToken({ id: existUser.id, name: existUser.name })
        if( !token ) throw CustomError.internalServer('Error while creating JWT')

        return {
            user: userProperties,
            token: token
        }
    }

    private sendEmailValidationLink = async( email: string ) => {

        const token = await JWTGenerator.generateToken({ email })
        if( !token ) throw CustomError.internalServer('Error getting jwt')

        const link = `${ envs.WEBSERVICE_URL}/auth/emial-token/${token}`
        const html = `
            <h1>Validate your email</h1>
            <p> Click on the following linke to validate your email </p>
            <a href="${ link }"> Validate your email: ${ email } </a>
        `
        const optionsToSendEmail = {
            to: email,
            subject: 'Validate your email',
            htmlBody:  html
        }

        const isSent = await this.EmailService.sendEmail(optionsToSendEmail);
        if( !isSent ) throw CustomError.internalServer('Error sending email')

        return true;
    }

    public validateEmail = async(token: string) => {

        const payload = await JWTGenerator.validateToken(token)
        if( !payload ) throw CustomError.unauthorized('Invalid token')

        const { email } = payload as { email: string};
        if( !email ) throw CustomError.internalServer('Email not in token')

        const user = await prisma.user.findUnique({ where: { email } })
        if( !user ) throw CustomError.internalServer('Email not exist')

        await prisma.user.update({
            where:{
                id: user.id
            },
            data:{
                emailValidated: true
            }
        })
    }
}