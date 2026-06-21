import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">Enterprise-grade offensive security. Audit-ready compliance. Built to clear bottlenecks.</p>
            <a href="mailto:growsecureofficial@gmail.com" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <Mail className="h-4 w-4" /> growsecureofficial@gmail.com
            </a>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#services" className="hover:text-primary">Web App Pentesting</a></li>
              <li><a href="/#services" className="hover:text-primary">API Security Testing</a></li>
              <li><a href="/#services" className="hover:text-primary">Cloud Audits</a></li>
              <li><a href="/#services" className="hover:text-primary">Source Code Review</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Subcontractor NDA Commitment</a></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Headquarters</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>GrowSecure HQ, Udaipur, Rajasthan, 313001, India</span></li>
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href="tel:+919352519811" className="hover:text-foreground">+91 93525 19811</a></li>
              <li className="flex gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href="https://wa.me/919352519811" target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp Business</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} GrowSecure. All rights reserved.</p>
          <p className="font-mono">Built for the perimeter. Tested for the breach.</p>
        </div>
      </div>
    </footer>
  );
}
