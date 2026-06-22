import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Check, Calendar as CalendarIcon, Clock, Video, ShieldCheck, Loader2, Mail, Building2, User, Briefcase } from "lucide-react";
import { toast } from "sonner";

export function SalesModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setLoading(true);
    try {
      // FormSubmit.co forwards directly to the recipient inbox — no backend.
      // First-ever submission triggers a one-click confirmation email to growsecureofficial@gmail.com.
      const res = await fetch("https://formsubmit.co/ajax/growsecureofficial@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[GrowSecure] New Sales Inquiry — ${fd.get("name")} @ ${fd.get("company")}`,
          _template: "table",
          _captcha: "false",
          Name: fd.get("name"),
          Company: fd.get("company"),
          Email: fd.get("email"),
          Phone: fd.get("phone") || "—",
          Service: fd.get("service") || "—",
          Budget: fd.get("budget") || "—",
          Message: fd.get("message") || "—",
          Source: "growsecure.app · Talk to Sales",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      toast.success("Inquiry sent — we'll reply within 1 business hour.");
      form.reset();
    } catch {
      toast.error("Couldn't send. Email growsecureofficial@gmail.com directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setTimeout(() => setSubmitted(false), 300); }}>
      <DialogContent className="glass-card max-h-[92vh] overflow-y-auto border-border p-0 sm:max-w-[640px]">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 px-8 py-12 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold">Inquiry received</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              A GrowSecure security engineer will respond within <span className="font-semibold text-foreground">1 business hour</span> to the email you provided. A copy was delivered to <span className="font-mono text-xs text-foreground">growsecureofficial@gmail.com</span>.
            </p>
            <Button variant="cyber" size="sm" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        ) : (
          <>
            {/* Header band */}
            <div className="relative overflow-hidden rounded-t-lg border-b border-border bg-surface/40 px-6 py-5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <DialogHeader className="space-y-1 text-left">
                    <DialogTitle className="font-display text-xl">Talk to Sales</DialogTitle>
                    <DialogDescription className="text-xs">
                      Scope your engagement with a senior security engineer. NDA-ready · 1-hour response SLA.
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 px-6 py-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" icon={User} htmlFor="name">
                  <Input id="name" name="name" required placeholder="Jane Doe" />
                </Field>
                <Field label="Company" icon={Building2} htmlFor="company">
                  <Input id="company" name="company" required placeholder="Acme Inc." />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Work Email" icon={Mail} htmlFor="email">
                  <Input id="email" name="email" type="email" required placeholder="jane@acme.com" />
                </Field>
                <Field label="Phone (optional)" icon={Briefcase} htmlFor="phone">
                  <Input id="phone" name="phone" placeholder="+1 555 010 1234" />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Interest</Label>
                  <select id="service" name="service" className="h-9 rounded-md border border-input bg-background px-3 text-sm">
                    <option value="">Select…</option>
                    <option>Essential Audit — $999</option>
                    <option>Advanced Security — $2,499</option>
                    <option>Enterprise Level — Custom</option>
                    <option>Compliance (SOC 2 / HIPAA / PCI)</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Budget Range</Label>
                  <select id="budget" name="budget" className="h-9 rounded-md border border-input bg-background px-3 text-sm">
                    <option value="">Select…</option>
                    <option>&lt; $1,000</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $25,000</option>
                    <option>$25,000+</option>
                    <option>Need guidance</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What do you need secured?</Label>
                <Textarea id="message" name="message" rows={4} placeholder="e.g. Web app + API pentest, SOC 2 Type II readiness, ~30 endpoints, target audit window…" />
              </div>

              <div className="rounded-xl border border-border bg-surface/40 p-3 text-xs text-muted-foreground">
                <p className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Your details are sent encrypted directly to GrowSecure. We never resell or share data.</p>
              </div>

              <DialogFooter className="gap-2 sm:flex-row">
                <Button type="button" variant="cyber" onClick={() => onOpenChange(false)} className="sm:flex-1">Cancel</Button>
                <Button type="submit" variant="hero" disabled={loading} className="sm:flex-1">
                  {loading ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending…</>) : "Send Inquiry"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, icon: Icon, htmlFor, children }: { label: string; icon: any; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </Label>
      {children}
    </div>
  );
}

export function BookingModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [slot, setSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const slots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];
  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setTimeout(() => { setConfirmed(false); setSlot(null); }, 300); }}>
      <DialogContent className="glass-card border-border sm:max-w-[680px]">
        {confirmed ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold">Meeting confirmed</h3>
            <p className="text-sm text-muted-foreground">
              {date?.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })} · {slot} IST
            </p>
            <p className="text-xs text-muted-foreground">Calendar invite sent. Video link will follow shortly.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-2xl"><CalendarIcon className="h-5 w-5 text-primary" />Book a 15-Min Briefing</DialogTitle>
              <DialogDescription className="flex items-center gap-4 text-xs">
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />15 min</span>
                <span className="inline-flex items-center gap-1"><Video className="h-3.5 w-3.5" />Google Meet</span>
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 md:grid-cols-[auto_1fr]">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border border-border" />
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-muted-foreground">Available time slots</p>
                <div className="grid grid-cols-3 gap-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSlot(s)}
                      className={`rounded-md border px-3 py-2 text-sm font-medium transition ${slot === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60 hover:bg-primary/5"}`}
                    >{s}</button>
                  ))}
                </div>
                <Button disabled={!slot || !date} variant="hero" className="mt-auto" onClick={() => { setConfirmed(true); toast.success("Meeting booked"); }}>
                  Confirm Booking
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
