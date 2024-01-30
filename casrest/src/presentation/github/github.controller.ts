import { Request, Response } from "express";
import { GitHubService } from "../../presentation/services/github.service";
import { DiscordService } from '../services/discord.service';


export class GitHubController {

    constructor(
        private readonly githubService = new GitHubService(),
        private readonly discordService = new DiscordService()
    ){}
    
    webhookHandler = ( req: Request, res: Response ) => {

        const githubEvent = req.header('x-github-event') ?? 'unknow'
        const signature = req.header('x-hub-signature-256') ?? 'unknown'
        const payload = req.body;
        // console.log( payload )
        // console.log( githubEvent, signature )
        let message: string;


        // doing this in order to get the interface 
        // console.log( JSON.stringify( payload ) )
        
        switch( githubEvent ){
            case 'star':
                message = this.githubService.onStart( payload )
            break;
            case 'issues':
                message = this.githubService.onIssue( payload )
            default:
                message = `Unknown event ${ githubEvent }`
        }

        // console.log({message})

        this.discordService.notify(message)
            .then(() => res.status(202).send('Accepted'))
            .catch( () => res.status(500).json({ error: 'internal server error, at sending message to discord'}))

    }

}