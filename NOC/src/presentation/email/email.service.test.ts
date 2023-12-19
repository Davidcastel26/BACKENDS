import nodemailer from 'nodemailer';
import { SendEmailOptions } from "../../ts"
import { EmailService } from "./email.service"


describe('Email Service into Presentation', () => {

    const mockSendMail = jest.fn()

    nodemailer.createTransport = jest.fn().mockReturnValue({
        sendEmail: mockSendMail
    })

    test('should send email', async() => {

        const emailService = new EmailService()

        const options: SendEmailOptions = {
            to: 'david.castellanos@popoyan.com.gt',
            subject: 'Test',
            htmlBody:'<h1>Test</h1>'
        }

        await emailService.sendEmail( options );

        // expect( emailSent ).toBeTruthy()
        expect( mockSendMail ).toHaveBeenCalledWith({
            attachments: expect.any(Array),
            to: 'david.castellanos@popoyan.com.gt',
            subject: 'Test',
            htmlBody:'<h1>Test</h1>'
        })

    })

})