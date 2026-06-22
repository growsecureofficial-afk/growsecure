import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { SalesModal, BookingModal } from "@/components/site/modals";
import { Toaster } from "@/components/ui/sonner";
import {
  Shield, Smartphone, Code2, Cloud, FileCode2, ArrowRight, Check, Lock,
  Bug, Network, KeyRound, ShieldAlert, Terminal,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GrowSecure Penetration Testing & Cloud Audits" },
      { name: "description", content: "Web, mobile, API, cloud and source-code penetration testing led by certified senior engineers (OSCP, OSWE, CREST)." },
      { property: "og:title", content: "GrowSecure Services" },
      { property: "og:description", content: "Offensive security across your entire perimeter." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Shield,
    title: "Web Application Penetration Testing",
    tag: "OWASP Top 10 + Business Logic",
    desc: "Full-stack exploit simulation across your customer-facing web platforms. We chase the flaws automated scanners can't see — broken access control, auth-bypass chains, stored XSS, SSRF, and business-logic abuse.",
    points: ["OWASP Top 10 coverage", "Authenticated + unauthenticated paths", "Session manipulation testing", "Privilege escalation chains", "Stored + DOM XSS verification"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Pentesting",
    tag: "iOS · Android · Hybrid",
    desc: "Binary reverse engineering, runtime instrumentation with Frida, and tamper-resistance verification. Static + dynamic testing aligned with OWASP MASVS.",
    points: ["MASVS L1 / L2 coverage", "Frida runtime hooking", "Certificate pinning bypass tests", "Local storage / keychain audits", "Reverse engineering hardening"],
  },
  {
    icon: Code2,
    title: "API Security Testing",
    tag: "REST · GraphQL · gRPC",
    desc: "Deep inspection of endpoints for BOLA, broken function-level authorization, mass assignment, rate-limit abuse, and schema poisoning across REST, GraphQL and gRPC surfaces.",
    points: ["OWASP API Top 10", "BOLA / IDOR detection", "GraphQL introspection abuse", "JWT + OAuth flow review", "Rate-limit & abuse simulation"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Audits",
    tag: "AWS · Azure · GCP",
    desc: "Hardened configurations across your cloud architecture. We hunt the misconfigurations and over-permissioned IAM roles that attackers use to pivot.",
    points: ["IAM least-privilege review", "S3 / Blob / GCS exposure scans", "VPC + network segmentation", "Secrets management audit", "CIS Benchmark alignment"],
  },
  {
    icon: FileCode2,
    title: "Secure Source Code Review",
    tag: "Static + Dynamic Engineering",
    desc: "Manual line-by-line review combined with SAST/DAST tooling to surface zero-day execution bugs, insecure deserialization, and dependency chain risks before they ship.",
    points: ["Manual + SAST hybrid review", "Dependency vulnerability map", "Insecure deserialization checks", "Crypto + secret leak detection", "Architectural threat modeling"],
  },
  {
    icon: Network,
    title: "Network & Infrastructure Pentesting",
    tag: "Internal · External · Active Directory",
    desc: "Adversary-simulation across your perimeter and internal networks. Kerberoasting, lateral movement, AD domain compromise simulations against your blue team.",
    points: ["External perimeter recon", "Internal lateral movement", "Active Directory abuse paths", "Phishing + social-engineering ops", "Detection coverage gap report"],
  },
];

function ServicesPage() {
  const [salesOpen, setSalesOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-12 md:pt-40">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="relative mx-auto max-w-5xl px-4 text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
              <Lock className="h-3 w-3" /> Services
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="text-gradient">Offensive security</span><br/>
              <span className="text-gradient-primary">across every layer.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Every engagement is led by senior, certified engineers — OSCP, OSWE, CREST. No outsourcing. No script-only scans. Just deep, methodical, auditor-grade testing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="lg" asChild><Link to="/book">Book a 15-Min Briefing <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button variant="cyber" size="lg" onClick={() => setSalesOpen(true)}>Talk to Sales</Button>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="glow-border glass-card group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20"><s.icon className="h-5 w-5" /></span>
                    <span className="rounded-full border border-border bg-surface/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.tag}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 grid gap-2 text-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between">
                    <Button variant="cyber" size="sm" onClick={() => setSalesOpen(true)}>Scope this engagement</Button>
                    <Link to="/book" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">Book briefing <ArrowRight className="h-3 w-3" /></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="glass-card relative overflow-hidden rounded-3xl p-10 md:p-14">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute inset-0 bg-grid-sm opacity-20" />
              <div className="relative grid items-center gap-8 md:grid-cols-2">
                <div>
                  <Terminal className="mb-4 h-10 w-10 text-primary" />
                  <h2 className="font-display text-3xl font-bold md:text-4xl">Engagement workflow</h2>
                  <p className="mt-3 text-muted-foreground">From scoping call to clean re-test, every engagement follows the same defensible, evidence-driven process.</p>
                </div>
                <ol className="grid gap-3">
                  {[
                    { icon: KeyRound, t: "Scope & NDA", d: "48-hour scoping and paperwork close." },
                    { icon: Bug, t: "Recon + Exploitation", d: "Manual + automated discovery and chained exploitation." },
                    { icon: ShieldAlert, t: "Reporting", d: "Executive summary + developer-grade reproduction steps." },
                    { icon: Check, t: "Re-test", d: "Free 30-day patch verification window." },
                  ].map((step, i) => (
                    <li key={step.t} className="flex items-start gap-4 rounded-xl border border-border bg-surface/40 p-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20"><step.icon className="h-4 w-4" /></span>
                      <div>
                        <p className="text-sm font-semibold">{String(i+1).padStart(2,"0")} · {step.t}</p>
                        <p className="text-xs text-muted-foreground">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SalesModal open={salesOpen} onOpenChange={setSalesOpen} />
      <BookingModal open={bookOpen} onOpenChange={setBookOpen} />
      <Toaster />
    </div>
  );
}
