import nodemailer from 'nodemailer';

import { envs } from '../../config/plugins/envs.plugins';
import { Attachments,
        LogSeverityLevel, 
        SendEmailOptions } from '../../ts';

import { LogRepository } from '../../domain/repositories/log.repository';
import { LogEntity } from '../../domain/entities/log.entity';

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    constructor (
        private readonly logRepository:LogRepository
    ){

    }

    async sendEmail( options: SendEmailOptions): Promise<boolean> {

        const { to, subject, htmlBody, attachments = [] } = options;

        try {
            
            const sendInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachments
            })

            console.log(sendInformation)

            let log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Email sent succefully',
                origin: 'email.service.ts',
            })
            this.logRepository.saveLog( log )

            return true;

        } catch (error) {

            let log = new LogEntity({
                level: LogSeverityLevel.high,
                message: 'Email not sent',
                origin: 'email.service.ts',
            })

            this.logRepository.saveLog( log )
            return false;
        }

    }

    async sendEmailWithFilesSystemLog(to: string | string[]) {
        const subject = 'EXA send Email With Files System Log';
        const htmlBody = `
        <h3> Logs de sistema - NOC </h3>
        <p>. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye ver </p>
        <p> ver log adjuntos </p>
        `
        const attachments:Attachments[] = [
            { filename: 'logs-high.log', path: './logs/logs-high.log'},
            { filename: 'logs-low.log', path: './logs/logs-low.log'},
            { filename: 'logs-medium.log', path: './logs/logs-medium.log'},
        ]

        return this.sendEmail({
            to,
            subject,
            htmlBody,
            attachments
        })
    }

}