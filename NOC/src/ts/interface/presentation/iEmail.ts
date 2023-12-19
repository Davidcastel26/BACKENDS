
export interface SendEmailOptions {
    to          : string | string[];
    subject     : string;
    htmlBody    : string;
    attachments? : Attachments[]
}

export interface Attachments {
    filename    : string
    path        : string
}

