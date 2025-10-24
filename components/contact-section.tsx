"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  AlertCircle,
  Download,
} from "lucide-react";
import { useState, useEffect } from "react";
import { emailService } from "@/lib/email-service";
import { DEVELOPER_INFO } from "@/lib/constants";

interface ContactSectionProps {
  dictionary: {
    contact: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      sendMessage: string;
      success: string;
      error: string;
      social: {
        github: string;
        linkedin: string;
        email: string;
      };
      form: {
        placeholder: string;
        nameLabel: string;
        emailLabel: string;
        messageLabel: string;
      };
      badge: string;
      connectWithMe: string;
      responseTime: string;
      responseTimeValue: string;
      messageSent: string;
      messageSentSubtitle: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      downloadCV: string;
      downloadFormat: string;
    };
  };
}

export function ContactSection({ dictionary }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    emailService.initialize();
  }, []);

  const handleDownloadCV = () => {
    // Check if we're on client side
    if (typeof window === "undefined") return;
    
    // Get current language from URL or default to 'tr'
    const currentLang = window.location.pathname.includes("/en") ? "en" : "tr";
    const cvFileName =
      currentLang === "en"
        ? "cv-serdar-senturk-en.pdf"
        : "cv-serdar-senturk-tr.pdf";

    // Open PDF in new tab for preview, then user can download if they want
    window.open(`/${cvFileName}`, "_blank");
  };

  const onMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setErrorMessage("");

    try {
      const result = await emailService.sendEmail(formData);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Close success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      // Email send error handled by state
      setIsError(true);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );

      setTimeout(() => {
        setIsError(false);
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 dark:from-slate-900 dark:via-blue-950/30 dark:to-indigo-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent dark:from-blue-900/20" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Modern Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 mb-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {dictionary.contact.badge}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent mb-6">
              {dictionary.contact.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {dictionary.contact.subtitle.replace(
                "{name}",
                DEVELOPER_INFO.NAME
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Modern Contact Info */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 hover:border-blue-400/60 dark:hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-purple-500/8 dark:from-blue-500/5 dark:to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-blue-500/15 group-hover:bg-blue-500/25 dark:bg-blue-500/10 dark:group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Mail className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-400">
                        Email
                      </span>
                    </div>
                    <a
                      href={`mailto:${DEVELOPER_INFO.EMAIL}`}
                      className="text-slate-800 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300 break-all text-sm"
                    >
                      {DEVELOPER_INFO.EMAIL}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 hover:border-green-400/60 dark:hover:border-green-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/20 dark:hover:shadow-green-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/8 to-emerald-500/8 dark:from-green-500/5 dark:to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-green-500/15 group-hover:bg-green-500/25 dark:bg-green-500/10 dark:group-hover:bg-green-500/20 transition-colors duration-300">
                        <Phone className="h-5 w-5 text-green-700 dark:text-green-400" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-400">
                        Phone
                      </span>
                    </div>
                    <a
                      href={`tel:${DEVELOPER_INFO.PHONE}`}
                      className="text-slate-800 dark:text-white font-medium hover:text-green-700 dark:hover:text-green-400 transition-colors duration-300"
                    >
                      {DEVELOPER_INFO.PHONE}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                  {dictionary.contact.connectWithMe}
                </h3>
                <div className="flex gap-3">
                  {[
                    {
                      icon: Github,
                      href: DEVELOPER_INFO.GITHUB_URL,
                      label: dictionary.contact.social.github,
                      color: "hover:bg-slate-200 dark:hover:bg-slate-800",
                      iconColor: "text-slate-700 dark:text-slate-400",
                    },
                    {
                      icon: Linkedin,
                      href: DEVELOPER_INFO.LINKEDIN_URL,
                      label: dictionary.contact.social.linkedin,
                      color: "hover:bg-blue-200 dark:hover:bg-blue-900/30",
                      iconColor: "text-blue-700 dark:text-blue-400",
                    },
                    {
                      icon: Mail,
                      href: `mailto:${DEVELOPER_INFO.EMAIL}`,
                      label: dictionary.contact.social.email,
                      color: "hover:bg-red-200 dark:hover:bg-red-900/30",
                      iconColor: "text-red-700 dark:text-red-400",
                    },
                  ].map(({ icon: Icon, href, label, color, iconColor }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social flex-1 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 ${color} transition-all duration-300 hover:scale-105 flex items-center justify-center border border-slate-300/50 dark:border-slate-700/50`}
                      aria-label={label}
                    >
                      <Icon
                        className={`h-6 w-6 ${iconColor} group-hover/social:scale-110 transition-transform duration-300`}
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Download CV */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/15 via-purple-500/8 to-blue-500/15 dark:from-blue-500/10 dark:via-purple-500/5 dark:to-blue-500/10 backdrop-blur-xl border border-blue-300/60 dark:border-blue-800/50 hover:border-blue-400/80 dark:hover:border-blue-700/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-500/20">
                <button
                  onClick={handleDownloadCV}
                  className="w-full flex items-center gap-4 p-2 rounded-xl hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-blue-500/25 group-hover:bg-blue-500/35 dark:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Download className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {dictionary.contact.downloadCV}
                    </p>
                    <p className="text-sm text-slate-700 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300">
                      {dictionary.contact.downloadFormat}
                    </p>
                  </div>
                </button>
              </div>

              {/* Response Time */}
              <div className="p-4 rounded-xl bg-green-100/80 dark:bg-green-900/20 border border-green-300/60 dark:border-green-800/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-green-800 dark:text-green-400">
                    {dictionary.contact.responseTime}
                  </span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  {dictionary.contact.responseTimeValue}
                </p>
              </div>
            </div>

            {/* Modern Contact Form */}
            <div className="relative p-6 rounded-2xl bg-white/90 dark:bg-white/5 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-blue-500/8 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-blue-500/5 rounded-2xl" />
              <div className="relative z-10">
                {isSubmitted && (
                  <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex items-center justify-center animate-fade-in">
                    <div className="text-center space-y-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 animate-scale-in">
                        <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-1">
                          {dictionary.contact.messageSent}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {dictionary.contact.messageSentSubtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {isError && (
                  <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex items-center justify-center animate-fade-in">
                    <div className="text-center space-y-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-500/10 animate-scale-in">
                        <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-1 text-red-600">
                          {dictionary.contact.error}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {errorMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={onMessageSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {dictionary.contact.form.nameLabel}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder={dictionary.contact.form.placeholder}
                        value={formData.name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, name: event.target.value })
                        }
                        className="h-10 px-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {dictionary.contact.form.emailLabel}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={dictionary.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          setFormData({
                            ...formData,
                            email: event.target.value,
                          })
                        }
                        className="h-10 px-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {dictionary.contact.form.messageLabel}{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={dictionary.contact.messagePlaceholder}
                      rows={3}
                      value={formData.message}
                      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setFormData({
                          ...formData,
                          message: event.target.value,
                        })
                      }
                      className="px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none transition-all duration-300 shadow-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  aria-label="Send contact message"
                >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        {dictionary.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                        {dictionary.contact.sendMessage}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="animate-fade-in">
              © {new Date().getFullYear()} {DEVELOPER_INFO.NAME}. All rights
              reserved.
            </p>
            <div
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex gap-2">
                {[
                  { icon: Github, href: DEVELOPER_INFO.GITHUB_URL },
                  {
                    icon: Linkedin,
                    href: DEVELOPER_INFO.LINKEDIN_URL,
                  },
                  { icon: Mail, href: `mailto:${DEVELOPER_INFO.EMAIL}` },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
