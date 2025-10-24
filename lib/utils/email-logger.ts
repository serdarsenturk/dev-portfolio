/* eslint-disable no-console */
export class EmailLogger {
  private static isDevelopment = process.env.NODE_ENV === "development";

  static info(message: string, data?: unknown): void {
    if (this.isDevelopment) {
      console.log(`[Email Service] ${message}`, data || "");
    }
  }

  static error(message: string, error?: unknown): void {
    console.error(`[Email Service Error] ${message}`, error || "");
  }

  static warn(message: string, data?: unknown): void {
    if (this.isDevelopment) {
      console.warn(`[Email Service Warning] ${message}`, data || "");
    }
  }

  static debug(message: string, data?: unknown): void {
    if (this.isDevelopment) {
      console.debug(`[Email Service Debug] ${message}`, data || "");
    }
  }

  static success(message: string, data?: unknown): void {
    if (this.isDevelopment) {
      console.log(`[Email Service Success] ${message}`, data || "");
    }
  }
}
