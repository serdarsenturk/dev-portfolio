export interface EmailServiceConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface EmailServiceResult {
  success: boolean;
  error?: string;
  result?: any;
}

export interface IEmailService {
  initialize(): void;
  sendEmail(data: EmailData): Promise<EmailServiceResult>;
}

export interface IEmailServiceFactory {
  createEmailJSService(): IEmailService;
}

export type EmailServiceProvider =
  | "emailjs"
  | "sendgrid"
  | "resend"
  | "nodemailer";

export interface EmailServiceValidation {
  isValid: boolean;
  errors: string[];
}
