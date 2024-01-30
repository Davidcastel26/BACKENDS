import { envs } from "../../config/envs";


export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL

    constructor(){}

    async notify( message: string ){

        const body = {
            content: message,
            embeds: [
                {
                    image: { url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG1zb3l4Y2Judjd1Nmc0Mm9xNTZocTFma3Q1ZzlwM2I2eTBxdmx3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v82UyF8LC1l5rPQWG8/giphy.gif'}
                }
            ]
        } 

        const resp = await fetch( this.discordWebhookUrl,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })

        if( !resp.ok ){
            console.log('error sending message to discord')
            return false 
        }

        return true

    }

}