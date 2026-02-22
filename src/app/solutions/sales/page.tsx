"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { TensolLogo, SlackIcon, HubSpotIcon, GmailIcon, XIcon, LinkedInIcon } from "@/components/icons";

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
                <a href="/solutions/sales" className="block px-5 py-3 text-sm text-foreground font-medium bg-secondary">For Sales</a>
                <a href="/solutions/marketing" className="block px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">For Marketing</a>
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

export default function SalesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-6">For Sales Teams</span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-4 text-foreground">Never drop a lead <em className="font-[family-name:var(--font-playfair)] not-italic">again</em></h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">Your CRM updates itself. Every call gets logged, every email tracked, every follow-up scheduled. You focus on selling, your AI employee handles the rest.</p>
          <div className="flex items-center gap-4 mb-12">
            <a href="/sign-up" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors">Start Free Trial <ArrowRight className="w-4 h-4" /></a>
            <a href="/sign-up" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><CircleCheck className="w-4 h-4" /> Talk to Sales</a>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-16">
            {[{ val: "95%", label: "CRM accuracy" }, { val: "100%", label: "Follow-up rate" }, { val: "2hrs", label: "Saved daily" }].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-3xl font-bold text-foreground mb-1">{s.val}</div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">Your AI employee handles the busywork</h2>
          <div className="space-y-8">
            {[
              { title: "Sales call ends with a prospect", problem: "You just finished a great call. Now you need to log notes in HubSpot, update the deal stage, set follow-up tasks, and send a recap email. You do half of it, forget the rest.", solution: "Your AI employee transcribes the call, extracts key points, updates HubSpot automatically, sets the deal stage, and drafts the follow-up email. You just review and send.", beforeLabel: "20 min of admin per call", afterLabel: "0 min - it's all automatic" },
              { title: "Lead goes cold", problem: "That promising prospect from 3 weeks ago? You forgot to follow up. They signed with a competitor. This happens more than you'd like to admit.", solution: "Your AI employee tracks every lead and sends follow-up reminders. It can even draft and send personalized check-ins on your behalf. No lead falls through the cracks.", beforeLabel: "Leads lost to forgetfulness", afterLabel: "100% follow-up rate" },
              { title: "Preparing for a call", problem: "You have a call in 10 minutes with someone you talked to 2 months ago. You scramble through HubSpot, email, and Slack trying to remember the context.", solution: "Your AI employee sends you a brief before every call: past interactions, deal history, key concerns, and what was promised. You're always prepared.", beforeLabel: "Scrambling for context", afterLabel: "Briefed before every call" },
              { title: "CRM is out of date", problem: "Your pipeline accuracy is 60% because nobody wants to manually update deal stages. Forecasting is basically guessing.", solution: "Your AI employee reads emails, listens to calls, and updates HubSpot automatically. Every call logged, every email tracked, every stage updated. Pipeline accuracy goes to 95%.", beforeLabel: "60% pipeline accuracy", afterLabel: "95% pipeline accuracy" },
            ].map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">{s.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-lg bg-red-50 border border-red-100">
                    <p className="text-xs font-semibold text-red-500 mb-2">THE PROBLEM</p>
                    <p className="text-sm text-foreground leading-relaxed">{s.problem}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                    <p className="text-xs font-semibold text-green-600 mb-2">WITH TENSOL</p>
                    <p className="text-sm text-foreground leading-relaxed">{s.solution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-red-500 font-medium">{s.beforeLabel}</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  <span className="text-green-600 font-medium">{s.afterLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">Works with your sales stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <HubSpotIcon size={18} />, text: "HubSpot - Auto-update deals, log calls" },
              { icon: <CircleCheck className="w-4 h-4 text-accent" />, text: "Salesforce - Sync contacts, update stages" },
              { icon: <GmailIcon size={18} />, text: "Gmail - Track emails, draft follow-ups" },
              { icon: <SlackIcon size={18} />, text: "Slack - Surface deal mentions, updates" },
              { icon: <CircleCheck className="w-4 h-4 text-accent" />, text: "Zoom - Transcribe calls, extract action items" },
              { icon: <CircleCheck className="w-4 h-4 text-accent" />, text: "Calendly - Prep briefs before calls" },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <div className="text-foreground">{t.icon}</div>
                <span className="text-sm text-foreground">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Close more deals, not browser tabs</h2>
          <p className="text-muted-foreground mb-8">Free 3-day trial. Setup takes 5 minutes. Your CRM stays up to date forever.</p>
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
            <p className="text-sm text-muted-foreground">© 2025 Tensol. All rights reserved.</p>
            <div className="flex items-center gap-4"><a href="https://x.com/tensolai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><XIcon size={18} /></a><a href="https://linkedin.com/company/tensol" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><LinkedInIcon size={18} /></a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
