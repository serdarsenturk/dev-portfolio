import emailjs from "@emailjs/browser";
import { DEVELOPER_INFO } from "./constants";
import {
  EmailServiceConfig,
  EmailData,
  EmailServiceResult,
  IEmailService,
} from "./interfaces/email.interface";
import {
  EmailDataValidator,
  EmailServiceConfigValidator,
} from "./utils/email-validation";
import { EmailLogger } from "./utils/email-logger";

// EmailJS implementation
export class EmailJSService implements IEmailService {
  private config: EmailServiceConfig;
  private isInitialized: boolean = false;

  constructor(config: EmailServiceConfig) {
    this.config = config;
    this.validateConfig();
  }

  private validateConfig(): void {
    const validation = EmailServiceConfigValidator.validate(this.config);
    if (!validation.isValid) {
      EmailLogger.error("Invalid EmailJS configuration", validation.errors);
      throw new Error(
        `EmailJS configuration error: ${validation.errors.join(", ")}`
      );
    }
  }

  initialize(): void {
    if (this.isInitialized) {
      EmailLogger.warn("EmailJS service already initialized");
      return;
    }

    if (this.config.publicKey) {
      emailjs.init(this.config.publicKey);
      this.isInitialized = true;
      EmailLogger.success("EmailJS service initialized successfully");
    } else {
      EmailLogger.error("Cannot initialize EmailJS: Public key is missing");
      throw new Error("EmailJS public key is required for initialization");
    }
  }

  async sendEmail(data: EmailData): Promise<EmailServiceResult> {
    try {
      const dataValidation = EmailDataValidator.validate(data);
      if (!dataValidation.isValid) {
        EmailLogger.error("Invalid email data", dataValidation.errors);
        return {
          success: false,
          error: `Validation failed: ${dataValidation.errors.join(", ")}`,
        };
      }

      if (!this.isInitialized) {
        EmailLogger.warn(
          "EmailJS service not initialized, attempting to initialize..."
        );
        this.initialize();
      }

      const templateParams = this.prepareTemplateParams(data);
      EmailLogger.debug("Sending email with template params", templateParams);

      const result = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams
      );

      EmailLogger.success("Email sent successfully", {
        serviceId: this.config.serviceId,
        templateId: this.config.templateId,
      });

      return { success: true, result };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      EmailLogger.error("Failed to send email", errorMessage);

      return {
        success: false,
        error: errorMessage,
      };
    }
  }

  private prepareTemplateParams(data: EmailData) {
    return {
      // EmailJS template variables
      from_name: data.name.trim(),
      from_email: data.email.trim(),
      user_name: data.name.trim(),
      user_email: data.email.trim(),
      message: data.message.trim(),
      reply_to: data.email.trim(),
      to_email: DEVELOPER_INFO.EMAIL,

      // Alternative variable names (use whichever is used in your EmailJS template)
      name: data.name.trim(),
      email: data.email.trim(),
      subject: `Portfolio Contact: ${data.name.trim()}`,
    };
  }
}

export class EmailServiceFactory {
  static createEmailJSService(): IEmailService {
    const config: EmailServiceConfig = {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    };

    EmailLogger.info("Creating EmailJS service with config", {
      serviceId: config.serviceId
        ? "***" + config.serviceId.slice(-4)
        : "missing",
      templateId: config.templateId
        ? "***" + config.templateId.slice(-4)
        : "missing",
      publicKey: config.publicKey
        ? "***" + config.publicKey.slice(-4)
        : "missing",
    });

    return new EmailJSService(config);
  }

  static createService(provider: "emailjs" = "emailjs"): IEmailService {
    switch (provider) {
      case "emailjs":
        return this.createEmailJSService();
      default:
        EmailLogger.error(`Unsupported email service provider: ${provider}`);
        throw new Error(`Unsupported email service provider: ${provider}`);
    }
  }
}

// Default email service instance
export const emailService = EmailServiceFactory.createEmailJSService();
