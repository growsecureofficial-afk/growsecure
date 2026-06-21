import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero, TrustBand, Services, Compliance, Features, Pricing, FAQ, FinalCTA } from "@/components/site/sections";
import { SalesModal, BookingModal } from "@/components/site/modals";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowSecure — Enterprise Penetration Testing & Compliance" },
      { name: "description", content: "Enterprise-grade pentesting and audit-ready compliance. SOC 2, ISO 27001, HIPAA, PCI DSS aligned offensive security from Udaipur, India." },
      { property: "og:title", content: "GrowSecure — Enterprise Pentesting" },
      { property: "og:description", content: "Identify critical vulnerabilities before attackers do." },
    ],
  }),
  component: Index,
});

function Index() {
  const [salesOpen, setSalesOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero onBook={() => setBookOpen(true)} onReport={() => setSalesOpen(true)} />
        <TrustBand />
        <Services />
        <Compliance />
        <Features />
        <Pricing onSales={() => setSalesOpen(true)} />
        <FAQ />
        <FinalCTA onBook={() => setBookOpen(true)} onSales={() => setSalesOpen(true)} />
      </main>
      <Footer />
      <SalesModal open={salesOpen} onOpenChange={setSalesOpen} />
      <BookingModal open={bookOpen} onOpenChange={setBookOpen} />
      <Toaster />
    </div>
  );
}
