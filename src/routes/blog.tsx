import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Clock, ArrowRight, Tag } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Threat Intelligence Blog — GrowSecure" },
      { name: "description", content: "Cyber threat intelligence, pentesting deep-dives, and compliance playbooks from GrowSecure's offensive security team." },
      { property: "og:title", content: "GrowSecure Threat Intelligence" },
      { property: "og:description", content: "Field notes from the offensive security trenches." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { title: "Anatomy of an IDOR: How One Endpoint Leaked 12M Records", category: "Web Pentesting", read: "8 min", date: "Jun 18, 2026", featured: true },
  { title: "SOC 2 Type II in 90 Days: The Evidence Vault Method", category: "Compliance", read: "12 min", date: "Jun 14, 2026" },
  { title: "GraphQL Introspection Attacks Are Back — and Worse", category: "API Security", read: "6 min", date: "Jun 10, 2026" },
  { title: "Why Your Cloud Bucket Is Already Indexed by Google", category: "Cloud Audits", read: "5 min", date: "Jun 04, 2026" },
  { title: "HIPAA in 2026: PHI Boundaries in AI-Powered Healthcare", category: "Healthcare", read: "9 min", date: "May 29, 2026" },
  { title: "Reverse Engineering React Native: What Your App Reveals", category: "Mobile", read: "11 min", date: "May 22, 2026" },
  { title: "The Quiet Death of MD5 in 2026 Audits", category: "Cryptography", read: "4 min", date: "May 15, 2026" },
];

function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <section className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Threat Intelligence</p>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Field notes from the offensive security trenches.</h1>
            <p className="mt-5 text-lg text-muted-foreground">Deep-dives on real vulnerabilities, compliance playbooks, and the patterns we see breaking enterprise systems.</p>
          </div>

          <Link to="/" className="glass-card group mt-12 grid gap-6 overflow-hidden rounded-2xl p-6 md:grid-cols-[1.2fr_1fr] md:p-10">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"><Tag className="h-3 w-3" />{featured.category}</span>
              <h2 className="mt-4 font-display text-2xl font-bold md:text-4xl group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="mt-3 text-muted-foreground">A walkthrough of a real broken-object-level-authorization finding that started with an off-by-one in a UUID parser and ended in a 12-million-record data exposure.</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{featured.date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{featured.read}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read the breakdown <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </div>
            <div className="relative h-48 overflow-hidden rounded-xl bg-surface md:h-full">
              <div className="absolute inset-0 bg-grid-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/10" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="glass-card rounded-lg p-4 font-mono text-xs">
                  <div className="text-destructive">[CRITICAL] CVE-pending</div>
                  <div className="mt-1 text-muted-foreground">IDOR · 12,431,902 records<br />Severity: 9.8</div>
                </div>
              </div>
            </div>
          </Link>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.title} to="/" className="glow-border glass-card group flex flex-col rounded-2xl p-6 transition hover:-translate-y-0.5">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                <div className="mt-auto flex items-center gap-4 pt-6 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
