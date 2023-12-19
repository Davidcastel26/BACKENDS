import { SendEmailOptions } from "../../ts"
import { EmailService } from "./email.service"


describe('Email Service into Presentation', () => {

    test('should send email', async() => {

        const emailService = new EmailService()

        const options: SendEmailOptions = {
            to: 'david.castellanos@popoyan.com.gt',
            subject: 'Test',
            htmlBody:'<h1>Test</h1>'
        }

        const emailSent = await emailService.sendEmail( options );

        expect( emailSent ).toBeTruthy()

    })

})