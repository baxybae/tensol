"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { TensolLogo, SlackIcon, GitHubIcon, SentryIcon, LinearIcon, HubSpotIcon, GmailIcon, NotionIcon, JiraIcon, XIcon, LinkedInIcon } from "@/components/icons";

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

export default function IntegrationsPage() {
  const integrations = [
    { icon: <SlackIcon size={24} />, name: "Slack", desc: "Monitor channels, draft responses, share updates with your team automatically." },
    { icon: <GitHubIcon size={24} />, name: "GitHub", desc: "Track PRs, monitor deploys, correlate code changes with customer issues." },
    { icon: <SentryIcon size={24} />, name: "Sentry", desc: "Error monitoring, root cause analysis, automatic triage and escalation." },
    { icon: <LinearIcon size={24} />, name: "Linear", desc: "Create tickets, track issue status, link bugs to customer reports." },
    { icon: <HubSpotIcon size={24} />, name: "HubSpot", desc: "CRM updates, lead tracking, auto-log calls and emails." },
    { icon: <GmailIcon size={24} />, name: "Gmail", desc: "Read, draft, and send emails. Track customer communication." },
    { icon: <NotionIcon size={24} />, name: "Notion", desc: "Search docs, update pages, pull context from your knowledge base." },
    { icon: <JiraIcon size={24} />, name: "Jira", desc: "Issue tracking, sprint updates, sync with your project management." },
  ];
  const more = ["Salesforce", "Datadog", "PagerDuty", "Mixpanel", "Zoom", "Calendly", "Google Analytics", "Confluence"];
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">INTEGRATIONS</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-4 text-foreground">Connects to everything you use</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">Your AI employee gets read and write access to the tools your team already uses. One-click OAuth setup, no coding required.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {integrations.map((ig) => (
              <div key={ig.name} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-foreground">{ig.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">{ig.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{ig.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">+ 40 more integrations</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {more.map((m) => (
                <span key={m} className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Connect your tools in minutes</h2>
          <p className="text-muted-foreground mb-8">One-click OAuth. No coding. No DevOps. Your AI employee gets the same access as a real team member.</p>
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
