import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Check, Calendar as CalendarIcon, Clock, Video } from "lucide-react";
import { toast } from "sonner";

export function SalesModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setTimeout(() => setSubmitted(false), 300); }}>
      <DialogContent className="glass-card border-border sm:max-w-[520px]">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold">Thanks — we'll be in touch</h3>
            <p className="max-w-sm text-sm text-muted-foreground">A GrowSecure security engineer will respond within 1 business hour to <span className="text-foreground">growsecureofficial@gmail.com</span>.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Talk to Sales</DialogTitle>
              <DialogDescription>Scope your pentest with a senior security engineer. Response within 1 hour.</DialogDescription>
            </DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); toast.success("Inquiry sent to GrowSecure"); }} className="grid gap-4 py-2">
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="Jane Doe" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" required placeholder="Acme Inc." />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" required placeholder="jane@acme.com" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="msg">What do you need secured?</Label>
                <Textarea id="msg" rows={3} placeholder="e.g. Web app + API pentest, SOC 2 readiness…" />
              </div>
              <DialogFooter>
                <Button type="submit" variant="hero" className="w-full">Request Briefing</Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
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
