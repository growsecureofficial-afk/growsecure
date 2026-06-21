import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield, Smartphone, Code2, Cloud, FileCode2, ArrowRight, CheckCircle2,
  Zap, FileText, RefreshCw, Lock, Activity, Terminal, ShieldCheck,
  Building2, Stethoscope, CreditCard, Check, Sparkles
} from "lucide-react";
import { SalesModal, BookingModal } from "@/components/site/modals";

/* ---------------- HERO ---------------- */
export function Hero({ onBook, onReport }: { onBook: () => void; onReport: () => void }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
            Now booking Q3 engagements · CERT-In aligned
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">Enterprise-Grade</span>
            <br />
            <span className="text-gradient-primary">Penetration Testing.</span>
            <br />
            <span className="text-gradient">Audit-Ready Compliance.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Identify critical vulnerabilities before attackers do. GrowSecure delivers compliance-aligned offensive security built to secure your infrastructure, protect your data, and clear legal bottlenecks.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button variant="hero" size="lg" onClick={onBook}>Book a 15-Min Briefing <ArrowRight className="h-4 w-4" /></Button>
            <Button variant="cyber" size="lg" onClick={onReport}>View Sample Security Report</Button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">No commitment · NDA-protected · Response within 1 business hour</p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute inset-x-12 -inset-y-6 -z-10 rounded-[2rem] bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-3xl opacity-50" />
          <div className="glass-card overflow-hidden rounded-2xl p-1.5 shadow-elevated">
            <div className="flex items-center gap-1.5 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">growsecure-vault › engagement › acme-corp.report</span>
            </div>
            <div className="grid gap-3 rounded-xl bg-background/80 p-4 md:grid-cols-3">
              {[
                { label: "Critical", count: 3, color: "destructive", icon: ShieldCheck },
                { label: "High", count: 8, color: "amber", icon: Activity },
                { label: "Patched", count: 47, color: "primary", icon: Check },
              ].map((s) => (
                <div key={s.label} className="glass-card flex items-center justify-between rounded-lg p-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                    <p className="mt-1 font-display text-3xl font-bold">{s.count}</p>
                  </div>
                  <s.icon className={`h-8 w-8 ${s.color === "destructive" ? "text-destructive" : s.color === "amber" ? "text-amber-400" : "text-primary"}`} />
                </div>
              ))}
              <div className="md:col-span-3">
                <div className="glass-card rounded-lg p-4 font-mono text-xs leading-relaxed">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground"># Live: OWASP Top 10 Scan</span>
                    <span className="inline-flex items-center gap-1 text-primary"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> RUNNING</span>
                  </div>
                  <div className="mt-2 space-y-1 text-muted-foreground">
                    <p><span className="text-primary">[✓]</span> A01: Broken Access Control — 2 findings</p>
                    <p><span className="text-primary">[✓]</span> A02: Cryptographic Failures — 0 findings</p>
                    <p><span className="text-primary">[✓]</span> A03: Injection — 1 finding <span className="text-destructive">(critical)</span></p>
                    <p><span className="text-amber-400">[~]</span> A04: Insecure Design — scanning…</p>
                    <p className="text-muted-foreground/60">A05: Security Misconfiguration — queued</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAND ---------------- */
const badges = ["SOC 2 Type II", "ISO 27001", "HIPAA Compliant", "PCI DSS", "GDPR", "CERT-In Aligned", "OWASP", "NIST CSF"];
export function TrustBand() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-10">
      <div className="mx-auto mb-6 max-w-7xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Aligned with the frameworks that pass your audit</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-track flex w-max gap-4">
          {[...badges, ...badges].map((b, i) => (
            <div key={i} className="glass flex items-center gap-2 rounded-full border-border px-5 py-2.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="whitespace-nowrap text-sm font-semibold">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES BENTO ---------------- */
const services = [
  { icon: Shield, title: "Web & Mobile Application Pentesting", desc: "Full-stack exploit simulation catching OWASP Top 10 flaws across web, iOS, Android, and hybrid stacks.", size: "lg" },
  { icon: Code2, title: "API Security Assessments", desc: "Deep inspection of REST, GraphQL, and gRPC endpoints for broken object-level authorization." },
  { icon: Cloud, title: "Cloud Infrastructure Audits", desc: "Hardened configurations across AWS, Azure, and GCP architectures to block data leaks." },
  { icon: FileCode2, title: "Secure Source Code Review", desc: "Automated + manual line-by-line static and dynamic engineering audits to stop zero-day execution bugs." },
  { icon: Smartphone, title: "Mobile Reverse Engineering", desc: "Binary analysis, runtime instrumentation, and tamper-resistance verification." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Services" title="Offensive security across your entire perimeter" subtitle="Each engagement is led by certified senior testers — OSCP, OSWE, CREST. No outsourcing. No script-only scans." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          <BentoCard {...services[0]} className="md:col-span-2 md:row-span-2" featured />
          <BentoCard {...services[1]} />
          <BentoCard {...services[2]} />
          <BentoCard {...services[3]} className="md:col-span-2" />
          <BentoCard {...services[4]} />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ icon: Icon, title, desc, className = "", featured = false }: any) {
  return (
    <div className={`group glow-border glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-0.5 ${className}`}>
      {featured && <div className="absolute inset-0 -z-10 bg-grid-sm opacity-30" />}
      {featured && <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />}
      <div className="flex h-full flex-col">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={`mt-4 font-display font-bold ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}>{title}</h3>
        <p className={`mt-2 text-sm text-muted-foreground ${featured ? "md:text-base md:max-w-md" : ""}`}>{desc}</p>
        {featured && (
          <ul className="mt-6 grid gap-2 text-sm md:grid-cols-2">
            {["Business logic flaws", "Auth bypass chains", "Session manipulation", "Stored & DOM XSS"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary" />{t}</li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">Explore <ArrowRight className="h-3 w-3" /></span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPLIANCE ---------------- */
const compliance = [
  {
    id: "soc2",
    icon: Building2,
    label: "SOC 2 & ISO 27001",
    title: "Turn technical gaps into verifiable evidence",
    desc: "Audit-ready evidence collection mapped to Trust Services Criteria. We translate every finding into a control owner, an artifact, and a remediation deadline.",
    bullets: ["Gap analysis → Type I → Type II runway", "Pre-audit evidence kit for your assessor", "ISO 27001 Annex A control mapping"],
  },
  {
    id: "hipaa",
    icon: Stethoscope,
    label: "HIPAA Healthcare",
    title: "Lock down PHI and your digital medical surface",
    desc: "Risk analyses, technical safeguards, and breach simulations purpose-built for healthcare platforms handling Protected Health Information.",
    bullets: ["§164.308 administrative safeguards review", "PHI flow mapping + access reduction", "Breach Notification Rule readiness"],
  },
  {
    id: "pci",
    icon: CreditCard,
    label: "PCI DSS Fintech",
    title: "Eliminate perimeter weaknesses around payments",
    desc: "Scoped to your Cardholder Data Environment. We hunt the same paths a QSA will inspect — before the QSA does.",
    bullets: ["CDE scoping + segmentation validation", "Quarterly ASV scan coordination", "v4.0.1 customized approach support"],
  },
];

export function Compliance() {
  return (
    <section id="compliance" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Compliance Solutions" title="Built to clear the audit that's actually coming" subtitle="We don't just hand you a PDF. We hand your auditor an evidence kit." />
        <Tabs defaultValue="soc2" className="mt-12">
          <TabsList className="mx-auto grid h-auto w-full max-w-2xl grid-cols-3 gap-1 rounded-2xl border border-border bg-surface/40 p-1.5 backdrop-blur">
            {compliance.map((c) => (
              <TabsTrigger key={c.id} value={c.id} className="rounded-xl py-2.5 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:text-sm">
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {compliance.map((c) => (
            <TabsContent key={c.id} value={c.id} className="mt-8">
              <div className="glass-card grid gap-8 rounded-2xl p-8 md:grid-cols-2 md:p-12">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20"><c.icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 font-display text-2xl font-bold md:text-3xl">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground">{c.desc}</p>
                </div>
                <ul className="grid gap-3 self-center">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-lg border border-border bg-surface/40 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
const features = [
  { icon: Zap, title: "Zero-Friction Scoping", desc: "Projects engineered and deployed with elite testers on-demand. No procurement overhead. No scoping calls that go nowhere." },
  { icon: FileText, title: "Audit-Ready Report Vault", desc: "Executive summaries paired with raw, developer-friendly reproduction steps. One PDF for the board, one for the dev team." },
  { icon: RefreshCw, title: "Continuous Remediation Support", desc: "Free re-testing access within 30 days to verify your patches are bulletproof. We don't disappear after the report." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Platform" title="Three advantages your incumbent vendor can't match" subtitle="Built by engineers who got tired of slow, opaque, copy-paste pentests." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title} className="glow-border glass-card group relative overflow-hidden rounded-2xl p-7">
              <span className="absolute right-5 top-5 font-mono text-xs text-muted-foreground/40">0{i + 1}</span>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20"><f.icon className="h-5 w-5" /></span>
              <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
const tiers = [
  {
    name: "Startup Core",
    tagline: "Fixed-scope single application audit",
    price: { single: "$4,900", retainer: "$1,900/mo" },
    desc: "Early-stage teams needing a quick, defensible security check.",
    features: ["Single web or mobile app", "OWASP Top 10 coverage", "Exec summary + dev report", "30-day patch re-test", "1 round of remediation Q&A"],
    cta: "Start with Core",
  },
  {
    name: "Growth Compliance",
    tagline: "Most popular",
    price: { single: "$12,500", retainer: "$4,800/mo" },
    desc: "Full architecture pentesting + SOC 2 / HIPAA assessment kit.",
    features: ["Web + API + Cloud surface", "SOC 2 / HIPAA evidence kit", "Threat-modeling workshop", "Quarterly delta scans", "Slack-channel response (4h SLA)", "Auditor-handoff package"],
    cta: "Scale with Compliance",
    highlight: true,
  },
  {
    name: "Enterprise Retainer",
    tagline: "Continuous monitoring",
    price: { single: "Custom", retainer: "From $9,500/mo" },
    desc: "Ongoing security, on-demand API scans, zero-day patch assurance.",
    features: ["Unlimited engagement scope", "Named lead security engineer", "On-demand attack simulations", "Zero-day patch verification", "Compliance program co-management", "24/7 incident escalation line"],
    cta: "Talk to an Engineer",
  },
];

export function Pricing({ onSales }: { onSales: () => void }) {
  const [mode, setMode] = useState<"single" | "retainer">("single");
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Pricing" title="Transparent. Scoped. Senior-led." subtitle="No discovery-call paywalls. Pick a shape, then refine with an engineer." />
        <div className="mt-8 flex justify-center">
          <div className="glass inline-flex gap-1 rounded-full p-1">
            {(["single", "retainer"] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)} className={`rounded-full px-5 py-1.5 text-xs font-semibold capitalize transition ${mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {m === "single" ? "Single Assessment" : "Ongoing Retainer"}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`glass-card relative flex flex-col overflow-hidden rounded-2xl p-7 ${t.highlight ? "border-primary/40 shadow-glow" : ""}`}>
              {t.highlight && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary ring-1 ring-primary/30">
                  <Sparkles className="h-3 w-3" /> {t.tagline}
                </div>
              )}
              <h3 className="font-display text-xl font-bold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold">{t.price[mode]}</span>
                {t.price[mode] !== "Custom" && !t.price[mode].includes("mo") && <span className="text-sm text-muted-foreground">/ engagement</span>}
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{f}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant={t.highlight ? "hero" : "cyber"} className="w-full" onClick={onSales}>{t.cta}</Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need a custom scope? <button onClick={onSales} className="font-semibold text-primary hover:underline">Connect with an expert security engineer</button> instantly.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export const faqs = [
  {
    q: "What makes GrowSecure different from generic testing platforms?",
    a: "We combine elite, certified manual testing (OSCP/OSWE/CREST) with rigorous compliance alignment. Automated scanners catch ~30% of real vulnerabilities — our senior engineers catch the business-logic flaws, chained auth bypasses, and architectural weaknesses that scanners miss.",
  },
  {
    q: "How long does a standard penetration test take to complete?",
    a: "Scoping is finalized within 48 hours of first contact. Execution and detailed reporting take 7–14 business days depending on your application architecture, attack surface, and compliance scope.",
  },
  {
    q: "How is our sensitive data protected during a simulated attack?",
    a: "All assessments execute under strict isolation in segmented environments. Data is encrypted at rest with AES-256, exfiltrated findings live only inside our SOC 2 Type II audited vault, and every engagement is bound under a comprehensive enterprise NDA before discovery begins.",
  },
  {
    q: "Do you provide remediation guidance, or just the findings?",
    a: "Both. Every finding includes reproduction steps, severity scoring (CVSS 3.1), code-level fix recommendations, and architectural mitigations. Your developers also get a free 30-day re-test window to validate patches.",
  },
  {
    q: "Can you sign our procurement, MSA, and DPA paperwork?",
    a: "Yes — we operate under standard enterprise paperwork including MSAs, DPAs (GDPR/India DPDP aligned), security questionnaires, and subcontractor NDA commitments. Most procurement cycles close in under 5 business days.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader eyebrow="FAQ" title="Questions we get from CISOs" subtitle="Can't find what you need? Email growsecureofficial@gmail.com" />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass-card overflow-hidden rounded-xl border-border px-5">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- HELPERS ---------------- */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
        <Lock className="h-3 w-3" /> {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
    </div>
  );
}

/* ---------------- CTA ---------------- */
export function FinalCTA({ onBook, onSales }: { onBook: () => void; onSales: () => void }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-card relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute inset-0 bg-grid-sm opacity-20" />
          <div className="relative mx-auto max-w-2xl text-center">
            <Terminal className="mx-auto mb-5 h-10 w-10 text-primary" />
            <h2 className="font-display text-3xl font-bold md:text-5xl">Ready to find what your scanner missed?</h2>
            <p className="mt-4 text-muted-foreground">A senior engineer will review your architecture in 15 minutes — no sales fluff.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="lg" onClick={onBook}>Book a 15-Min Briefing</Button>
              <Button variant="cyber" size="lg" onClick={onSales}>Talk to Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
