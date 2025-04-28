"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function CookieBanner({
  textColorClass,
}: {
  textColorClass: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem("cookieChoice");
    if (!cookieChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieChoice", "acceptAll");
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem("cookieChoice", "rejectNonEssential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur ${textColorClass} p-4 shadow-lg px-4 md:px-20  flex flex-row justify-center align-center `}
    >
      <div className=" w-full  ">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full ">
          <div className="flex-1">
            <p className="text-sm mb-1">
              We use cookies and similar technologies to deliver, maintain,
              improve our services and for security purposes.
            </p>
            <p className={`text-xs ${textColorClass}/60`}>
              Check our Cookie Policy for details. Click &apos;Accept all&apos;
              to let us use cookies for these purposes. Click &apos;Reject
              non-essential&apos; to say no to cookies, except those that are
              strictly necessary.
            </p>
          </div>
          <div className="flex flex-row-reverse md:flex-row items-center mt-2 md:mt-0 gap-2 whitespace-nowrap">
            <Button
              variant="link"
              className={`${textColorClass} bg-transparent hover:bg-transparent`}
              onClick={handleRejectNonEssential}
            >
              Reject non-essential
              <ChevronRight />
            </Button>
            <Button
              className="bg-primary/20 rounded-2xl text-white/90  hover:bg-primary/10 focus:bg-black/5"
              onClick={handleAcceptAll}
            >
              Accept all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
