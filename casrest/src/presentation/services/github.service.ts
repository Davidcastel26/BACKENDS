import type { GitHubStart, GithubIssues } from '../../interfaces';


export class GitHubService {

    constructor(){}

    onStart( payload: GitHubStart ): string{

        // let message: string = '';
        const { action, sender, repository, starred_at, } = payload

        // console.log( starred_at) //returns the date

        // if( starred_at ){
        return `User ${ sender.login} ${action} start on ${repository.full_name}`
        // }

        // return message

    }

    onIssue( payload: GithubIssues){

        const { action, issue } = payload;

        if( action === 'opened'){
            const message = `An issue was opened with this title ${issue.title}`
            
            return message
        }

        if( action === 'closed'){
            const message = `An issue was closed by ${ issue.user.login }`
            
            return message
        }

        if( action === 'reopened'){
            const message = `An issue was reopened by ${ issue.user.login }`

            return message
        }
        
        return `Unhandled action for the issue event ${ action }`

    }

}