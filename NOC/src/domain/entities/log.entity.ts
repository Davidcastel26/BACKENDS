import { LogEntityOptions, LogSeverityLevel } from "../../ts";


export class LogEntity {

    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;


    constructor( options: LogEntityOptions) {
        const { level, message, origin, createdAt = new Date()} = options;
        this.message = message;
        this.level = level;
        this.createdAt = createdAt;
        this.origin = origin;
    }

    static fromJson = (json: string):LogEntity =>{
        const { message, level, createdAt } = JSON.parse(json)

        if( !message ) throw new Error(`message is required`);

        const log = new LogEntity({
            level,
            message,
            createdAt,
            origin: 'log.entity'
        });
        
        return log;

    }

}