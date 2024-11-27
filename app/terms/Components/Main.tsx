import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const termsSections = [
  {
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    content: `By accessing or using Zonify.ai, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.`,
  },
  {
    id: "use-of-services",
    title: "2. Use of Services",
    content: `You agree to use Zonify.ai for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.`,
  },
  {
    id: "user-accounts",
    title: "3. User Accounts",
    content: `To access certain features of Zonify.ai, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password.`,
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: `The content, organization, graphics, design, and other matters related to Zonify.ai are protected under applicable copyrights and other proprietary laws. Copying, redistribution, use, or publication of any such matters or any part of the website is prohibited without our express permission.`,
  },
  {
    id: "limitation-of-liability",
    title: "5. Limitation of Liability",
    content: `Zonify.ai shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.`,
  },
  {
    id: "changes-to-terms",
    title: "6. Changes to Terms",
    content: `Zonify.ai reserves the right to update, redesign, modify, add new features, or optimize the system, elements of the system, or dashboard at any time that is deemed appropriate and relevant. Changes will be communicated appropriately.`,
  },
];

export default function Main() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[900px]">
      <Card className="bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">
            Welcome to Zonify.ai. By using our services, you agree to these
            terms. Please read them carefully.
          </p>

          {termsSections.map((section, index) => (
            <section id={section.id} key={index}>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
