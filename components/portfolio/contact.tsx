"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";
import {
  GithubIcon,
  DiscordIcon,
  LinkedinIcon,
  InstagramIcon,
} from "./icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Internship / Project Opportunity",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    status: "success" | "mailtoFallback" | "error";
    message: string;
    links?: {
      gmail: string;
      outlook: string;
      yahoo: string;
      mailto: string;
      detectedProvider: "gmail" | "outlook" | "yahoo" | "default";
      providerName: string;
      fullMessageText: string;
    };
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const emailAddress = "nikhil73x@gmail.com";
  const discordUsername = "nikhil73x";
  const instagramUrl = "https://www.instagram.com/ifw_nikhil";
  const instagramHandle = "@ifw_nikhil";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordUsername);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const getComposeLinks = (
    userEmail: string,
    subject: string,
    message: string,
    senderName: string
  ) => {
    const formattedSubject = `Portfolio [${subject}]: ${senderName}`;
    const formattedBody = `Hi Nikhil,\n\n${message}\n\nFrom: ${senderName}\nEmail: ${userEmail}`;

    const encTo = encodeURIComponent(emailAddress);
    const encSubject = encodeURIComponent(formattedSubject);
    const encBody = encodeURIComponent(formattedBody);

    const domain = userEmail.split("@")[1]?.toLowerCase().trim() || "";

    let detectedProvider: "gmail" | "outlook" | "yahoo" | "default" = "default";
    let providerName = "Default Email App";

    if (domain.includes("gmail") || domain.includes("googlemail")) {
      detectedProvider = "gmail";
      providerName = "Gmail";
    } else if (
      domain.includes("outlook") ||
      domain.includes("hotmail") ||
      domain.includes("live") ||
      domain.includes("msn")
    ) {
      detectedProvider = "outlook";
      providerName = "Outlook Web";
    } else if (domain.includes("yahoo") || domain.includes("ymail")) {
      detectedProvider = "yahoo";
      providerName = "Yahoo Mail";
    }

    return {
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encTo}&su=${encSubject}&body=${encBody}`,
      outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${encTo}&subject=${encSubject}&body=${encBody}`,
      yahoo: `https://compose.mail.yahoo.com/?to=${encTo}&subj=${encSubject}&body=${encBody}`,
      mailto: `mailto:${emailAddress}?subject=${encSubject}&body=${encBody}`,
      detectedProvider,
      providerName,
      fullMessageText: `To: ${emailAddress}\nSubject: ${formattedSubject}\n\n${formattedBody}`,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const links = getComposeLinks(
      formData.email,
      formData.subject,
      formData.message,
      formData.name
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitResult({
          status: "success",
          message:
            "Your message has been sent directly to Nikhil! I will reply to you as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "Internship / Project Opportunity",
          message: "",
        });
      } else if (data.fallbackToMailto) {
        // Auto-open based on detected provider
        if (links.detectedProvider === "gmail") {
          window.open(links.gmail, "_blank");
        } else if (links.detectedProvider === "outlook") {
          window.open(links.outlook, "_blank");
        } else if (links.detectedProvider === "yahoo") {
          window.open(links.yahoo, "_blank");
        } else {
          window.location.href = links.mailto;
        }

        setSubmitResult({
          status: "mailtoFallback",
          message:
            links.detectedProvider !== "default"
              ? `Detected ${links.providerName}! Opened ${links.providerName} in a new tab with your message pre-filled to nikhil73x@gmail.com.`
              : `Opening your email client to deliver your message to nikhil73x@gmail.com.`,
          links,
        });
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (err) {
      console.warn("API route fallback to email client:", err);

      if (links.detectedProvider === "gmail") {
        window.open(links.gmail, "_blank");
      } else if (links.detectedProvider === "outlook") {
        window.open(links.outlook, "_blank");
      } else if (links.detectedProvider === "yahoo") {
        window.open(links.yahoo, "_blank");
      } else {
        window.location.href = links.mailto;
      }

      setSubmitResult({
        status: "mailtoFallback",
        message:
          links.detectedProvider !== "default"
            ? `Detected ${links.providerName}! Opened ${links.providerName} in a new tab with your message pre-filled to nikhil73x@gmail.com.`
            : `Opening your email client to deliver your message to nikhil73x@gmail.com.`,
        links,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-neutral-200/80 dark:border-neutral-900 bg-[#f8f9fa] dark:bg-[#09090b] transition-colors">
      <div className="w-full max-w-[940px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131316] text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-4 shadow-xs transition-colors">
            <Mail className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-300" />
            <span>Contact</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-neutral-950 dark:text-white tracking-tight leading-tight transition-colors">
            Get in touch &bull; Let&apos;s collaborate.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-xl transition-colors">
            Whether you have an internship opportunity, freelance project, or simply want to connect with a passionate 2nd year CS student, feel free to reach out!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact details card with distinctive elevation */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131316] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_25px_rgba(0,0,0,0.45)] space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]">
              
              {/* Email card */}
              <div>
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
                  Professional Email
                </span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-black dark:hover:text-neutral-200 hover:underline"
                  >
                    {emailAddress}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-1.5 rounded-md hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1 block">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Instagram Card */}
              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
                  Instagram
                </span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-black dark:hover:text-neutral-200 hover:underline flex items-center gap-1.5"
                  >
                    <InstagramIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                    <span>{instagramHandle}</span>
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    title="Visit Instagram Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Discord Card */}
              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
                  Discord
                </span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href={`https://discord.com/users/${discordUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-[#5865F2] hover:underline flex items-center gap-1.5"
                  >
                    <DiscordIcon className="w-4 h-4 text-[#5865F2]" />
                    <span>{discordUsername}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyDiscord}
                    className="p-1.5 rounded-md hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                    title="Copy Discord Username"
                    aria-label="Copy Discord username"
                  >
                    {copiedDiscord ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
                  Location
                </span>
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  <MapPin className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <span>Chandigarh, Punjab, India</span>
                </div>
              </div>

              {/* Availability */}
              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
                  Current Status
                </span>
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>B.Tech CSE &bull; 2nd Year &bull; Open for Internships</span>
                </div>
              </div>

            </div>

            {/* Social Network Links: White Circles with Thick Borders */}
            <div>
              <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                <a
                  href="https://github.com/nikhilyadav0455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-xs flex items-center justify-center text-neutral-900 dark:text-white transition-all duration-200 hover:scale-110 hover:border-neutral-900 dark:hover:border-white hover:shadow-md active:scale-95"
                  title="GitHub: nikhilyadav0455"
                  aria-label="GitHub: nikhilyadav0455"
                >
                  <GithubIcon className="w-4 h-4 stroke-[2.2]" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nikhil-yadav-2a0382440/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-xs flex items-center justify-center text-[#0A66C2] transition-all duration-200 hover:scale-110 hover:border-[#0A66C2] hover:shadow-[0_0_14px_rgba(10,102,194,0.3)] active:scale-95"
                  title="LinkedIn: Nikhil"
                >
                  <LinkedinIcon className="w-4 h-4 stroke-[2.2]" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ifw_nikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-[#E4405F] hover:shadow-[0_0_14px_rgba(228,64,95,0.3)] active:scale-95"
                  title="Instagram: @ifw_nikhil"
                >
                  <InstagramIcon className="w-4 h-4 stroke-[2.2]" />
                </a>

                {/* Discord */}
                <a
                  href={`https://discord.com/users/${discordUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-xs flex items-center justify-center text-[#5865F2] transition-all duration-200 hover:scale-110 hover:border-[#5865F2] hover:shadow-[0_0_14px_rgba(88,101,242,0.3)] active:scale-95"
                  title={`Discord: ${discordUsername}`}
                  aria-label={`Discord: ${discordUsername}`}
                >
                  <DiscordIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form Card with distinctive elevation */}
          <div className="md:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131316] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_25px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]">
              <h3 className="font-bold text-lg text-neutral-950 dark:text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Send me a note directly and I’ll get back to you as soon as possible.
              </p>

              {submitResult ? (
                <div className="p-6 sm:p-7 rounded-xl bg-neutral-50/80 dark:bg-[#1a1a20] border border-neutral-200 dark:border-neutral-700 text-center space-y-4 animate-hero-fade">
                  <div className="w-11 h-11 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-base sm:text-lg">
                    {submitResult.status === "success"
                      ? "Message Sent Successfully!"
                      : `Opening in ${submitResult.links?.providerName || "Email"}`}
                  </h4>

                  {/* Provider Quick Launch Buttons */}
                  {submitResult.links && (
                    <div className="pt-2 border-t border-neutral-200/80 dark:border-neutral-800 space-y-3">
                      <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
                        Open with your preferred email service
                      </span>
                      <div className="flex flex-wrap items-center justify-center gap-2.5">
                        {/* Gmail */}
                        <a
                          href={submitResult.links.gmail}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-xs ${
                            submitResult.links.detectedProvider === "gmail"
                              ? "bg-red-500 text-white hover:bg-red-600 hover:shadow-md"
                              : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 hover:bg-red-500/20 hover:shadow-xs"
                          }`}
                        >
                          <span>Gmail Web</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        {/* Outlook Web */}
                        <a
                          href={submitResult.links.outlook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-xs ${
                            submitResult.links.detectedProvider === "outlook"
                              ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
                              : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-xs"
                          }`}
                        >
                          <span>Outlook Web</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        {/* Yahoo Mail */}
                        <a
                          href={submitResult.links.yahoo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-xs ${
                            submitResult.links.detectedProvider === "yahoo"
                              ? "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md"
                              : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:shadow-xs"
                          }`}
                        >
                          <span>Yahoo Mail</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      {/* Copy Message Fallback */}
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => handleCopyMessage(submitResult.links!.fullMessageText)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                        >
                          {copiedMessage ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Message copied to clipboard!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy message text</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitResult(null)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 ease-out cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50/70 dark:bg-[#1a1a20] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white focus:bg-white dark:focus:bg-[#141418] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50/70 dark:bg-[#1a1a20] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white focus:bg-white dark:focus:bg-[#141418] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50/70 dark:bg-[#1a1a20] text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white focus:bg-white dark:focus:bg-[#141418] transition-colors"
                    >
                      <option value="Internship / Project Opportunity">
                        Internship / Project Opportunity
                      </option>
                      <option value="Freelance Web Development">
                        Freelance Web Development
                      </option>
                      <option value="Frontend UI Implementation">
                        Frontend UI Implementation
                      </option>
                      <option value="General Networking / Chat">
                        General Networking / Chat
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Nikhil, I saw your portfolio and would like to talk about..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50/70 dark:bg-[#1a1a20] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white focus:bg-white dark:focus:bg-[#141418] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 transition-all duration-300 ease-out disabled:opacity-60 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 stroke-[2]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
