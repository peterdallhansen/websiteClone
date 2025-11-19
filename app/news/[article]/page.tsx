import Image from "next/image";
import Link from "next/link";
import { NewsGrid } from "../components/news-grid";

export default function NewsArticle() {
  return (
    <>
      <main className="min-h-screen bg-white mt-8">
        <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          {/* Article Header */}
          <header className="mb-16 text-center">
            <h1 className="mb-6 text-balance font-sans text-4xl font-normal leading-tight tracking-tight text-neutral-700 md:text-5xl lg:text-6xl">
              Zonify.ai to Develop World’s First Holistic Footfall Mapping
              System
            </h1>

            <div className="flex flex-col items-center gap-1 text-sm text-neutral-500">
              <time dateTime="2025-10-10">October 10, 2025</time>
              <p>by Zonify.ai</p>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-16">
            <div className="relative aspect-video w-full overflow-hidden rounded-sm">
              <Image
                src="/images/banners/ZonifyXKlepperie.png"
                alt="Zonify.ai Holistic Footfall Mapping Project"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-neutral mx-auto max-w-none">
            <div className="space-y-8 text-base leading-relaxed text-neutral-700 md:text-lg">
              <p>
                <strong>Zonify.ai</strong>, a Danish startup specialising in
                AI-powered footfall analytics, is launching an ambitious project
                to develop the world’s first end-to-end, holistic mapping of
                customer behaviour in physical spaces such as shopping centres,
                airports, and retail destinations.
              </p>

              <p>
                Founded in 2024, Zonify.ai has built a next-generation analytics
                platform that provides a real-time, stitching-free, and{" "}
                <strong>GDPR-compliant</strong> overview of customer flows. Its
                globally scalable architecture allows behaviour data to be
                processed from multiple camera sources with unprecedented
                precision.
              </p>

              <p>
                Zonify.ai’s technology is already in use across Denmark’s
                largest shopping centre portfolio, tracking over{" "}
                <strong>60 million annual visitors</strong> across 14 centres.
                With its new second-generation software, the company is now
                onboarding additional centres from Denmark’s second-largest
                portfolio — a key milestone ahead of international expansion.
              </p>

              <h2 className="mt-12 text-xl font-semibold text-neutral-800">
                Next-Generation Footfall Intelligence
              </h2>

              <p>
                The upcoming project will push the boundaries of behavioural
                analytics in physical spaces, bringing digital-level insight to
                the offline world. Zonify.ai will develop advanced{" "}
                <strong>graph-based AI models</strong> capable of analysing
                multi-camera movement patterns in real time, building a
                foundation for a truly interconnected understanding of human
                navigation and interaction.
              </p>

              <ul className="list-disc pl-6">
                <li>
                  Development of advanced AI algorithms to interpret behaviour
                  across multiple video streams.
                </li>
                <li>
                  Creation of one of Europe’s largest anonymised datasets of
                  human movement, expected to include more than 50 million
                  individual observations.
                </li>
              </ul>

              <h2 className="mt-12 text-xl font-semibold text-neutral-800">
                Collaboration and Ethics
              </h2>

              <p>
                Zonify.ai is working closely with leading research institutions
                and commercial partners to ensure both scientific rigour and
                practical application. The project’s framework guarantees full
                compliance with <strong>GDPR</strong> and the{" "}
                <strong>EU AI Act</strong>, using privacy-first anonymisation to
                ensure ethical data use.
              </p>

              <p>
                The resulting dataset will enable broader innovation across the
                AI and computer vision ecosystem, allowing trusted partners to
                train and validate next-generation algorithms for behavioural
                analytics and spatial intelligence.
              </p>

              <h2 className="mt-12 text-xl font-semibold text-neutral-800">
                Looking Ahead
              </h2>

              <p>
                This initiative marks a defining step in Zonify.ai’s mission to
                advance human insight through ethical, scalable, and
                high-resolution analytics. By combining cutting-edge AI with
                privacy-first design, Zonify.ai aims to set a new global
                standard for understanding movement in the physical world.
              </p>

              <p className="pt-8 text-sm text-neutral-500">
                © {new Date().getFullYear()} Zonify.ai — Advancing human insight
                through vision-driven analytics.
              </p>
            </div>
          </div>
        </article>
      </main>
      <div className="max-w-7xl mx-auto">
        <NewsGrid max={6} />
      </div>
    </>
  );
}
