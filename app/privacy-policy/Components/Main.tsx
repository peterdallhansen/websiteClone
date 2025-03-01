import BlurFade from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const privacyPolicySections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `
      At Financia, we take your privacy seriously. We may collect personal information from you when you use our website, fill out forms, or communicate with us. This includes details such as your name, email address, phone number, company name, and any other information you provide.
    `,
  },
  {
    id: "how-we-use-your-information",
    title: "2. How We Use Your Information",
    content: `
      The information we collect may be used for the following purposes:
    `,
    bulletPoints: [
      "To tailor your experience and respond to your needs.",
      "To improve our website based on your feedback.",
      "To provide customer service and support.",
      "To send you emails about updates, promotions, or other important information.",
    ],
  },
  {
    id: "data-security",
    title: "3. Data Security",
    content: `
      We implement various security measures to protect your personal information when you enter, submit, or access it on our website.
    `,
  },
  {
    id: "third-party-disclosure",
    title: "4. Third-Party Disclosure",
    content: `
      We do not sell, trade, or otherwise share your personal information with outside parties. This excludes trusted third parties who assist us in operating our website, conducting our business, or serving you, provided they agree to keep this information confidential.
    `,
  },
  {
    id: "cookies",
    title: "5. Cookies",
    content: `
      We may use cookies to enhance your experience on our website. Cookies are small files transferred to your computer's hard drive through your web browser (if you allow) that enable our systems to recognize your browser and remember certain information.
    `,
  },
  {
    id: "changes-to-privacy-policy",
    title: "6. Changes to This Privacy Policy",
    content: `
      We reserve the right to modify this Privacy Policy at any time. Changes will take effect immediately upon posting on our website. If significant updates are made, we will notify you here to keep you informed about what information we collect, how we use it, and under what circumstances it may be shared.
    `,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[900px]">
      <Card className="bg-transparent border-none">
        <CardHeader>
          <BlurFade delay={0} inView>
            <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-primary text-center">
              Privacy Policy
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-xl md:text-lg xl:text-2xl mb-8 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
              Your privacy is important to us. This policy outlines the
              information we collect and how we handle it.
            </h2>
          </BlurFade>
        </CardHeader>
        <CardContent className="space-y-6">
          {privacyPolicySections.map((section, index) => (
            <BlurFade delay={0.25 + 0.1 * index} inView key={index}>
              <section id={section.id}>
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <p>{section.content}</p>
                {section.bulletPoints && (
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    {section.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>
            </BlurFade>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
