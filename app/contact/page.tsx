"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LucideArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const resp = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.CONTACT_RECEIVER_EMAIL || "contact@zonify.ai"],
          subject: `Contact form message: ${subject}`,
          text: `You have received a new message from the contact form Zonify.ai.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`,
        }),
      });

      const data = await resp.json();
      if (!resp.ok || !data.ok) {
        throw new Error(data?.error || "Failed to send email");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setErrorMessage(err?.message || "Unknown error");
      setStatus("error");
    }
  }

  return (
    <main className="container mx-auto px-4 py-20 mt-20 flex flex-row gap-16">
      <div className="mb-12 flex flex-col gap-8 w-1/4">
        <div className="text-sm">
          <p className="text-muted-foreground">
            <span>→ Contact</span>
          </p>
          <p>contact@zonify.ai</p>
          <p>+45 60 10 86 87</p>
        </div>
        <div className="text-sm">
          <p className="text-muted-foreground">
            <span>→ Location</span>
          </p>
          <p>Lyngby</p>
          <p>Hollandsvej 12</p>
          <p>2800 Kgs. Lyngby</p>
          <p>Denmark</p>
        </div>
      </div>
      <div className="w-full flex-1">
        <h1 className="text-3xl  mb-4">Contact us</h1>
        <p className="text-muted-foreground mb-8">
          Send us a message and we'll get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <Input
              className="w-full rounded-md border px-3 py-2 h-10"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <Input
              type="email"
              className="w-full rounded-md border px-3 py-2 h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <Input
              className="w-full rounded-md border px-3 py-2 h-10"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <Textarea
              className="w-full rounded-md border px-3 py-2 h-40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div>
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>
          </div>

          {status === "success" && (
            <p className="text-green-600">Message sent — thank you!</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Error: {errorMessage}</p>
          )}
        </form>
      </div>
    </main>
  );
}
