import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Shield, Smartphone, Code2, Cloud, FileCode2, Building2, Stethoscope, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SalesModal, BookingModal } from "./modals";

const servicesItems = [
  { icon: Shield, title: "Web App Pentesting", href: "/services", desc: "OWASP Top 10 + business logic" },
  { icon: Smartphone, title: "Mobile App Pentesting", href: "/services", desc: "iOS, Android, hybrid stacks" },
  { icon: Code2, title: "API Security Testing", href: "/services", desc: "REST, GraphQL, gRPC audits" },
  { icon: Cloud, title: "Cloud Infrastructure", href: "/services", desc: "AWS, Azure, GCP hardening" },
  { icon: FileCode2, title: "Source Code Review", href: "/services", desc: "Static + dynamic engineering" },
];

const solutionsItems = [
  { icon: Building2, title: "Startup Compliance", href: "/#compliance", desc: "SOC 2 Type II readiness" },
  { icon: Stethoscope, title: "Healthcare Security", href: "/#compliance", desc: "HIPAA aligned audits" },
  { icon: ShoppingCart, title: "E-commerce Protection", href: "/#compliance", desc: "PCI DSS coverage" },
];

function DropdownLink({ label, items }: { label: string; items: typeof servicesItems }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition hover:text-foreground">
        {label} <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3">
          <div className="glass-card overflow-hidden rounded-xl p-2 shadow-elevated">
            {items.map((it) => (
              <a key={it.title} href={it.href} className="flex items-start gap-3 rounded-lg p-3 transition hover:bg-primary/5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary/10 text-primary"><it.icon className="h-4 w-4" /></span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{it.title}</span>
                  <span className="block text-xs text-muted-foreground">{it.desc}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [salesOpen, setSalesOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className={`glass flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${scrolled ? "shadow-elevated" : ""}`}>
            <Link to="/" className="shrink-0"><Logo /></Link>

            <nav className="hidden items-center gap-7 lg:flex">
              <DropdownLink label="Services" items={servicesItems} />
              <DropdownLink label="Solutions" items={solutionsItems} />
              <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">Features</a>
              <a href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">Pricing</a>
              <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground">Blog</Link>
              <Link to="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground">FAQ</Link>
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <Button variant="cyber" size="sm" onClick={() => setSalesOpen(true)}>Talk to Sales</Button>
              <Button variant="hero" size="sm" onClick={() => setBookOpen(true)}>Book a Meeting</Button>
            </div>

            <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen && (
            <div className="glass-card mt-2 rounded-2xl p-4 lg:hidden">
              <nav className="flex flex-col gap-1">
                <a href="/#services" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-primary/5">Services</a>
                <a href="/#compliance" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-primary/5">Solutions</a>
                <a href="/#features" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-primary/5">Features</a>
                <a href="/#pricing" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-primary/5">Pricing</a>
                <Link to="/blog" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-primary/5">Blog</Link>
                <Link to="/faq" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-primary/5">FAQ</Link>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Button variant="cyber" size="sm" onClick={() => { setSalesOpen(true); setMobileOpen(false); }}>Talk to Sales</Button>
                  <Button variant="hero" size="sm" onClick={() => { setBookOpen(true); setMobileOpen(false); }}>Book</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
      <SalesModal open={salesOpen} onOpenChange={setSalesOpen} />
      <BookingModal open={bookOpen} onOpenChange={setBookOpen} />
    </>
  );
}
