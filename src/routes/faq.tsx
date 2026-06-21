import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — GrowSecure" },
      { name: "description", content: "Answers to common questions from CISOs about GrowSecure's pentesting, compliance, and security engineering process." },
      { property: "og:title", content: "GrowSecure FAQ" },
      { property: "og:description", content: "Pentesting, compliance, and procurement answered." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
