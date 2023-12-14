

export interface SendLogEmailUseCases {
    execute: ( to: string | string[]) => Promise<boolean>
}