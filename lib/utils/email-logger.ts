export class EmailLogger {
  private static isDevelopment = process.env.NODE_ENV === "development";

  static info(message: string, data?: any): void {
    if (this.isDevelopment) {
      console.log(`[Email Service] ${message}`, data || "");
    }
  }

  static error(message: string, error?: any): void {
    console.error(`[Email Service Error] ${message}`, error || "");
  }

  static warn(message: string, data?: any): void {
    if (this.isDevelopment) {
      console.warn(`[Email Service Warning] ${message}`, data || "");
    }
  }

  static debug(message: string, data?: any): void {
    if (this.isDevelopment) {
      console.debug(`[Email Service Debug] ${message}`, data || "");
    }
  }

  static success(message: string, data?: any): void {
    if (this.isDevelopment) {
      console.log(`[Email Service Success] ${message}`, data || "");
    }
  }
}
