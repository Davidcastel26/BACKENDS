import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugins';
import { SendEmailOptions } from '../../ts';

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    async sendEmail( options: SendEmailOptions): Promise<boolean> {

        const { to, subject, htmlBody } = options;

        try {
            
            const sendInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody
            })

            console.log(sendInformation)

            return true;

        } catch (error) {
            return false;
        }

    }

}