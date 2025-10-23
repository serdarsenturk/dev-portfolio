"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { emailService } from "@/lib/email-service";
import { DEVELOPER_INFO } from "@/lib/constants";

export function ContactSection() {
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
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setIsError(true);
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'An error occurred. Please try again.'
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
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="space-y-3 mb-8 sm:mb-10 text-center animate-blur-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Let&apos;s Connect
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Hi, I&apos;m <span className="font-semibold text-primary">{DEVELOPER_INFO.NAME}</span>. I&apos;m always open to discussing new projects, creative ideas,
              or opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4 animate-slide-in-left">
              {/* Email Card */}
              <Card className="p-4 group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-primary/10 hover:border-primary/30 bg-gradient-to-br from-card to-card/50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground mb-0.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${DEVELOPER_INFO.EMAIL}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                    >
                      {DEVELOPER_INFO.EMAIL}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Phone Card */}
              <Card className="p-4 group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-primary/10 hover:border-primary/30 bg-gradient-to-br from-card to-card/50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground mb-0.5">
                      Phone
                    </p>
                    <a
                      href={`tel:${DEVELOPER_INFO.PHONE}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                    >
                      {DEVELOPER_INFO.PHONE}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Social Links Card */}
              <Card className="p-4 border-primary/10 bg-gradient-to-br from-card to-card/50">
                <p className="text-xs font-medium text-muted-foreground mb-3">
                  Connect with me
                </p>
                <div className="flex gap-2">
                  {[
                    {
                      icon: Github,
                      href: DEVELOPER_INFO.GITHUB_URL,
                      label: "GitHub",
                      color: "hover:bg-foreground/10",
                    },
                    {
                      icon: Linkedin,
                      href: DEVELOPER_INFO.LINKEDIN_URL,
                      label: "LinkedIn",
                      color: "hover:bg-blue-500/10",
                    },
                    {
                      icon: Mail,
                      href: `mailto:${DEVELOPER_INFO.EMAIL}`,
                      label: "Email",
                      color: "hover:bg-primary/10",
                    },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social flex-1 p-2.5 rounded-lg bg-muted/30 ${color} transition-all duration-300 hover:scale-105 flex items-center justify-center`}
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4 text-muted-foreground group-hover/social:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </Card>

              {/* Info Card */}
              <Card className="p-4 border-primary/10 bg-gradient-to-br from-primary/5 to-accent/5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Response time:
                  </span>{" "}
                  {DEVELOPER_INFO.RESPONSE_TIME}
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-4 sm:p-5 md:p-6 animate-slide-in-right border-primary/10 hover:border-primary/20 transition-all duration-300 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
              {isSubmitted && (
                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex items-center justify-center animate-fade-in">
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 animate-scale-in">
                      <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1">
                        Message Sent!
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        I&apos;ll get back to you soon.
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
                        Error!
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={onMessageSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-xs sm:text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(event: any) =>
                        setFormData({ ...formData, name: event.target.value })
                      }
                      className="transition-all duration-300 focus:scale-[1.01] border-primary/20 focus:border-primary/50 text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(event: any) =>
                        setFormData({ ...formData, email: event.target.value })
                      }
                      className="transition-all duration-300 focus:scale-[1.01] border-primary/20 focus:border-primary/50 text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-xs sm:text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hi..."
                    rows={4}
                    value={formData.message}
                    onChange={(event: any) =>
                      setFormData({ ...formData, message: event.target.value })
                    }
                    className="transition-all duration-300 focus:scale-[1.01] border-primary/20 focus:border-primary/50 resize-none text-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full group transition-all duration-300 hover:scale-[1.02] bg-primary text-primary-foreground hover:bg-primary/90 h-10 sm:h-11 text-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="animate-fade-in">
              © {new Date().getFullYear()} {DEVELOPER_INFO.NAME}. All rights reserved.
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
