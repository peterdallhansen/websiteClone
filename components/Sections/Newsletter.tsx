"use client";
import BlurFade from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { AnimatedSubscribeButton } from "../ui/animated-subscribe-button";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setIsSubscribed(true);
    // Perform subscription logic here
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-[900px]">
      <Card className="bg-transparent text-primary border-none">
        <BlurFade delay={0} inView>
          <CardContent className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight">
              Join Our Newsletter
            </h2>
            <p className="text-lg xl:text-xl text-opacity-90">
              Get the latest insights, updates, and news from Zonify.ai
              delivered straight to your inbox. Subscribe to our newsletter
              today!
            </p>
            <form
              className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4"
              onSubmit={handleSubmit}
            >
              <div className="w-full md:w-auto max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 h-11 text-primary text-opacity-70 ${
                    error ? "border-red-500" : ""
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
              </div>
              <AnimatedSubscribeButton
                buttonColor="#ffffff"
                buttonTextColor="#000000"
                subscribeStatus={isSubscribed}
                disabled={validateEmail(email)}
                initialText={
                  <span className="group inline-flex items-center">
                    Subscribe{" "}
                    <ChevronRightIcon
                      className={cn(
                        "ml-1 size-4 transition-transform duration-300 ",
                        validateEmail(email) ? "group-hover:translate-x-1" : ""
                      )}
                    />
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center text-black">
                    <CheckIcon className="mr-2 size-4" />
                    Subscribed{" "}
                  </span>
                }
              />
            </form>
          </CardContent>
        </BlurFade>
      </Card>
    </div>
  );
}
