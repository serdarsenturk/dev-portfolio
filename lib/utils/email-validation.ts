import {
  EmailData,
  EmailServiceConfig,
  EmailServiceValidation,
} from "../interfaces/email.interface";

export class EmailDataValidator {
  static validate(data: EmailData): EmailServiceValidation {
    const errors: string[] = [];

    if (!data.name || data.name.trim().length === 0) {
      errors.push("Name is required");
    } else if (data.name.trim().length < 2) {
      errors.push("Name must be at least 2 characters long");
    } else if (data.name.trim().length > 100) {
      errors.push("Name must be less than 100 characters");
    }

    // Email validation
    if (!data.email || data.email.trim().length === 0) {
      errors.push("Email is required");
    } else if (!this.isValidEmail(data.email)) {
      errors.push("Email format is invalid");
    } else if (data.email.length > 254) {
      errors.push("Email must be less than 254 characters");
    }

    // Message validation
    if (!data.message || data.message.trim().length === 0) {
      errors.push("Message is required");
    } else if (data.message.trim().length < 10) {
      errors.push("Message must be at least 10 characters long");
    } else if (data.message.trim().length > 5000) {
      errors.push("Message must be less than 5000 characters");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Email service configuration validation
export class EmailServiceConfigValidator {
  static validate(config: EmailServiceConfig): EmailServiceValidation {
    const errors: string[] = [];

    if (!config.serviceId || config.serviceId.trim().length === 0) {
      errors.push("Service ID is required");
    }

    if (!config.templateId || config.templateId.trim().length === 0) {
      errors.push("Template ID is required");
    }

    if (!config.publicKey || config.publicKey.trim().length === 0) {
      errors.push("Public Key is required");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
