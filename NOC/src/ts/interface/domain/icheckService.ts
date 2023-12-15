
export interface CheckServiceUseCase {
    execute( url: string ):Promise<boolean>;
}

export interface CheckServiceMultipleUseCase {
    execute( url: string ):Promise<boolean>;
}