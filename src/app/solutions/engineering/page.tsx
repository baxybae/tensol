"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { TensolLogo, GitHubIcon, SentryIcon, LinearIcon, SlackIcon, XIcon, LinkedInIcon, GitHubIcon as GHIcon } from "@/components/icons";

function Navbar() {
  const [showSolutions, setShowSolutions] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
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
                <a href="/solutions/marketing" className="block px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">For Marketing</a>
              </div>
            )}
          </div>
          <a href="#features" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md">Features</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/sign-in" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition-colors">Sign in</a>
          <a href="/sign-up" className="hidden md:inline-flex items-center px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors">Get a Demo</a>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-foreground transition-all ${mobileMenu ? "rotate-45 translate-y-[4px]" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-foreground transition-all ${mobileMenu ? "opacity-0" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-foreground transition-all ${mobileMenu ? "-rotate-45 -translate-y-[4px]" : ""}`}></span>
          </button>
        </div>
      </div>
      {mobileMenu && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-1">
          <button onClick={() => setMobileSolutions(!mobileSolutions)} className="w-full flex items-center justify-between py-3 text-sm text-foreground font-medium">
            Solutions
            <svg className={`w-4 h-4 transition-transform ${mobileSolutions ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {mobileSolutions && (
            <div className="pl-4 space-y-1 pb-2">
              <a href="/solutions/engineering" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">For Engineering</a>
              <a href="/solutions/sales" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">For Sales</a>
              <a href="/solutions/marketing" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">For Marketing</a>
            </div>
          )}
          <a href="#features" onClick={() => setMobileMenu(false)} className="block py-3 text-sm text-foreground font-medium">Features</a>
          <div className="pt-3 border-t border-border space-y-3">
            <a href="/sign-in" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">Sign in</a>
            <a href="/sign-up" className="block w-full text-center px-4 py-2.5 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors">Get a Demo</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function EngineeringPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-6">For Engineering Teams</span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-4 text-foreground">The CTO&apos;s <em className="font-[family-name:var(--font-playfair)] not-italic">second brain</em></h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">Most of what makes senior engineers fast isn&apos;t being smarter - it&apos;s having seen more problems. Tensol captures that context and makes it available to your entire team. Everyone becomes 10x faster on customer issues.</p>
          <div className="flex items-center gap-4 mb-12">
            <a href="/sign-up" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors">Start Free Trial <ArrowRight className="w-4 h-4" /></a>
            <a href="/sign-up" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><CircleCheck className="w-4 h-4" /> Talk to Engineering</a>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border mb-16">
            <p className="text-sm text-foreground italic leading-relaxed mb-4">&quot;The goal is to duplicate the CTO&apos;s brain. I&apos;m constantly doing stuff all day - fixing customer issues, answering questions. The problem is I&apos;m the only one with all the context. My team takes 10x longer because they don&apos;t have it.&quot;</p>
            <p className="text-xs text-muted-foreground">- CTO, Series A Startup (Tensol customer)</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">Real scenarios, real solutions</h2>
          <div className="space-y-8">
            {[
              { title: "Customer reports bug in Slack", problem: "Someone reports an issue in #support. You need to check Sentry, search Linear for existing tickets, see if anyone's already working on it, and figure out what changed recently.", solution: "Your AI employee does this instantly. It checks Sentry for matching errors, searches Linear, finds related PRs, and surfaces who deployed what. You get a summary with full context in seconds.", beforeLabel: "2+ hours of context gathering", afterLabel: "30 seconds, full context summary" },
              { title: "New engineer joins the team", problem: "They ask 'What's the deal with Acme Corp?' - and you spend 30 minutes explaining the history of issues, workarounds, and decisions.", solution: "They ask your AI employee instead. It pulls up every interaction, every bug, every decision made. The new engineer has full context immediately.", beforeLabel: "Days to ramp up on each customer", afterLabel: "Full context in 30 seconds" },
              { title: "Sentry error spike at 3am", problem: "You wake up to 47 Sentry alerts. Most are noise. Some are critical. You spend an hour triaging before finding the one that matters.", solution: "Your AI employee correlates errors with deploys, checks if tickets exist, and only wakes you for genuinely new critical issues. Everything else gets triaged automatically.", beforeLabel: "Alert fatigue, missed criticals", afterLabel: "Smart escalation, better sleep" },
              { title: "Context lost between team members", problem: "Sarah fixed something for Acme Corp last month but didn't document it. Now Mike is debugging the same issue, unaware of the fix.", solution: "Every interaction, every fix, every decision is captured automatically. Your AI employee connects the dots and surfaces relevant history when needed.", beforeLabel: "Repeated work, frustrated engineers", afterLabel: "Institutional memory that never forgets" },
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
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">Connects to your engineering stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <GitHubIcon size={18} />, text: "GitHub - Track PRs, commits, deploys" },
              { icon: <SentryIcon size={18} />, text: "Sentry - Monitor errors, correlate issues" },
              { icon: <LinearIcon size={18} />, text: "Linear - Create tickets, track status" },
              { icon: <SlackIcon size={18} />, text: "Slack - Monitor channels, draft responses" },
              { icon: <CircleCheck className="w-4 h-4 text-accent" />, text: "Datadog - Surface anomalies, link to deploys" },
              { icon: <CircleCheck className="w-4 h-4 text-accent" />, text: "PagerDuty - Smart escalation, triage alerts" },
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
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Give your entire team CTO-level context</h2>
          <p className="text-muted-foreground mb-8">Free 3-day trial. Setup takes 5 minutes. Works with your existing tools.</p>
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
