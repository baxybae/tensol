"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { TensolLogo, XIcon, LinkedInIcon } from "@/components/icons";

function Navbar() {
  const [showSolutions, setShowSolutions] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="/" className="flex items-center gap-2"><TensolLogo size={24} /></a>
        <div className="hidden md:flex items-center gap-1">
          <div className="relative" onMouseEnter={() => setShowSolutions(true)} onMouseLeave={() => setShowSolutions(false)}>
            <button className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md inline-flex items-center gap-1">Solutions<svg className={`w-3.5 h-3.5 transition-transform ${showSolutions ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></button>
            {showSolutions && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-xl shadow-lg py-2 z-50">
                <a href="/solutions/engineering" className="block px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">For Engineering</a>
                <a href="/solutions/sales" className="block px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">For Sales</a>
                <a href="/solutions/marketing" className="block px-5 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors">For Marketing</a>
              </div>
            )}
          </div>
          <a href="/#features" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md">Features</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/sign-in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign in</a>
          <a href="/sign-up" className="inline-flex items-center px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors">Get a Demo</a>
        </div>
      </div>
    </nav>
  );
}

export default function UseCasesPage() {
  const cases = [
    { team: "Engineering", title: "The CTO's second brain", desc: "Monitor Sentry errors, correlate with Linear tickets, track git pushes, and surface relevant context. When a customer reports a bug, know instantly if it's a known issue and who's working on it.", link: "/solutions/engineering", examples: ["Customer reports bug in Slack - full context in 30 seconds", "New engineer joins - instant ramp-up with AI context", "Sentry error spike at 3am - smart escalation, better sleep", "Context lost between team members - institutional memory"] },
    { team: "Sales", title: "Never drop a lead again", desc: "Your CRM updates itself. Every call gets logged, every email tracked, every deal stage updated. Follow up on leads automatically and always know the full context before a call.", link: "/solutions/sales", examples: ["Sales call ends - notes auto-logged, follow-up drafted", "Lead goes cold - automatic personalized check-ins", "Preparing for a call - briefed with full context", "CRM out of date - pipeline accuracy goes to 95%"] },
    { team: "Marketing", title: "Your LinkedIn manager, always on", desc: "Maintain a consistent social presence without the constant effort. Your AI employee drafts posts, responds to comments, and surfaces opportunities - all in your voice.", link: "/solutions/marketing", examples: ["Keeping LinkedIn and X active - consistent posting schedule", "Responding to social engagement - real-time replies", "Product updates into content - every feature gets amplified", "Tracking mentions and sentiment - real-time brand monitoring"] },
  ];
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">USE CASES</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-4 text-foreground">Built for every team</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">Not just for technical teams. Anyone drowning in repetitive work can hire an AI employee to help.</p>
          <div className="space-y-8">
            {cases.map((c) => (
              <div key={c.team} className="p-8 rounded-2xl bg-card border border-border">
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">{c.team}</span>
                <h2 className="text-2xl font-semibold text-foreground mb-3">{c.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
                <ul className="space-y-2 mb-6">
                  {c.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm text-foreground"><span className="text-accent mt-1">&#8226;</span>{ex}</li>
                  ))}
                </ul>
                <a href={c.link} className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:underline">See {c.team} Use Cases <ArrowRight className="w-3.5 h-3.5" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Ready to automate the busywork?</h2>
          <p className="text-muted-foreground mb-8">Free 3-day trial. Setup takes 5 minutes. No credit card required.</p>
          <a href="/sign-up" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors">Start Free Trial <ArrowRight className="w-4 h-4" /></a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-2"><TensolLogo size={28} className="text-foreground mb-4" /></div>
            <div><h4 className="text-sm font-semibold text-foreground mb-3">Product</h4><ul className="space-y-2"><li><a href="/employees" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Employees</a></li><li><a href="/use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Use Cases</a></li><li><a href="/integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li></ul></div>
            <div><h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4><ul className="space-y-2"><li><a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li><li><a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a></li><li><a href="/security-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a></li></ul></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
            <p className="text-sm text-muted-foreground">&copy; 2025 Tensol. All rights reserved.</p>
            <div className="flex items-center gap-4"><a href="https://x.com/tensolai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><XIcon size={18} /></a><a href="https://linkedin.com/company/tensol" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><LinkedInIcon size={18} /></a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
