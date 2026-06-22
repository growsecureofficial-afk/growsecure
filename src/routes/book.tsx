import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Calendar, Clock, Video, ShieldCheck, Zap, FileText, Lock, Check } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Meeting — GrowSecure Security Briefing" },
      { name: "description", content: "Book a free 15-minute briefing with a senior GrowSecure security engineer. NDA-protected, no sales fluff, instant calendar confirmation." },
      { property: "og:title", content: "Book a Security Briefing — GrowSecure" },
      { property: "og:description", content: "Talk to a senior pentest engineer. 15 minutes. Zero commitment." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-10 md:pt-40">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
              <Lock className="h-3 w-3" /> Free Security Briefing
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="text-gradient">15 minutes with</span><br/>
              <span className="text-gradient-primary">a senior pentest engineer.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              No sales fluff. No discovery-call paywall. A certified GrowSecure engineer reviews your architecture and tells you exactly where the gaps are — straight to your calendar.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" />15 minutes</span>
              <span className="inline-flex items-center gap-1.5"><Video className="h-3.5 w-3.5 text-primary" />Google Meet / Zoom</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" />NDA on request</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" />Instant confirmation</span>
            </div>
          </div>
        </section>

        <section className="relative pb-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
              {/* Value props */}
              <aside className="space-y-4">
                {[
                  { icon: Zap, t: "What you'll walk away with", d: "An honest read of your attack surface, the top 3 gaps we'd hunt first, and a realistic timeline." },
                  { icon: FileText, t: "Bring your stack", d: "Web app, mobile, API, cloud accounts — share whatever's in scope and we'll tailor the briefing on the call." },
                  { icon: ShieldCheck, t: "Confidential by default", d: "Everything discussed is privileged. We sign your NDA before deeper architecture details." },
                  { icon: Check, t: "Zero commitment", d: "If we're not the right fit, we'll tell you. Many calls end with a referral to a partner — no upsell." },
                ].map((v) => (
                  <div key={v.t} className="glass-card rounded-2xl border-border p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20"><v.icon className="h-4 w-4" /></span>
                    <h3 className="mt-3 text-sm font-semibold">{v.t}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{v.d}</p>
                  </div>
                ))}
              </aside>

              {/* HubSpot meeting embed */}
              <div className="glass-card overflow-hidden rounded-2xl border-border p-2 shadow-elevated">
                <div className="flex items-center gap-1.5 px-3 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground">meetings-na2.hubspot.com › grow-secure</span>
                </div>
                <div className="rounded-xl bg-background/80 p-1">
                  <iframe
                    src="https://meetings-na2.hubspot.com/grow-secure?embed=true"
                    title="Book a meeting with GrowSecure"
                    className="h-[820px] w-full rounded-lg border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-xs text-muted-foreground">
              Prefer email? Reach us at <a href="mailto:growsecureofficial@gmail.com" className="font-semibold text-primary hover:underline">growsecureofficial@gmail.com</a> — we respond within 1 business hour.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
