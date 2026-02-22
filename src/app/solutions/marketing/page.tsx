"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { TensolLogo, SlackIcon, NotionIcon, HubSpotIcon, XIcon, LinkedInIcon } from "@/components/icons";

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

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="employees" className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-6">For Marketing Teams</span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-4 text-foreground">Your LinkedIn manager, <em className="font-[family-name:var(--font-playfair)] not-italic">always on</em></h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">Maintain a consistent social presence without the constant effort. Your AI employee drafts posts, responds to comments, and surfaces opportunities - all in your voice.</p>
          <div className="flex items-center gap-4 mb-12">
            <a href="/sign-up" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors">Start Free Trial <ArrowRight className="w-4 h-4" /></a>
            <a href="/sign-up" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><CircleCheck className="w-4 h-4" /> Talk to Marketing</a>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border mb-16">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded bg-foreground flex items-center justify-center flex-shrink-0"><span className="text-background text-sm font-bold">T</span></div>
              <div>
                <div className="flex items-baseline gap-2 mb-1"><span className="font-bold text-foreground text-sm">Tensol</span><span className="text-xs text-muted-foreground">Just now</span></div>
                <p className="text-sm text-foreground mb-3">I noticed you shipped the new dashboard feature yesterday. Here&apos;s a draft LinkedIn post:</p>
                <div className="p-4 rounded-lg bg-secondary/50 text-sm text-foreground leading-relaxed mb-3">
                  <p>&quot;We just shipped something our users have been asking for: real-time dashboards. No more refreshing. No more waiting. Your data, live.</p>
                  <p className="mt-2">Here&apos;s what&apos;s different about our approach...&quot;</p>
                </div>
                <p className="text-sm text-muted-foreground italic">Should I schedule this for Tuesday at 9am (your best performing time)?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">Content that creates itself</h2>
          <div className="space-y-8">
            {[
              { title: "Keeping LinkedIn and X active", problem: "You know you should post regularly, but between everything else, social media falls off. Your last LinkedIn post was 3 weeks ago.", solution: "Your AI employee drafts posts based on company updates, product launches, and industry news. It maintains your voice and schedules posts at optimal times. You just review and approve.", beforeLabel: "Sporadic posting, low engagement", afterLabel: "Consistent presence, growing audience" },
              { title: "Responding to social engagement", problem: "Someone influential commented on your post. You saw it 2 days later. The moment was gone.", solution: "Your AI employee monitors comments and mentions in real-time. It drafts thoughtful replies and flags high-value interactions for immediate attention.", beforeLabel: "Missed engagement opportunities", afterLabel: "Real-time social responsiveness" },
              { title: "Turning product updates into content", problem: "Engineering shipped a cool feature last week. You meant to write about it, but haven't gotten around to it.", solution: "Your AI employee monitors product updates, release notes, and internal announcements. It automatically drafts LinkedIn posts, tweets, and blog snippets for each update.", beforeLabel: "Features ship without fanfare", afterLabel: "Every update gets amplified" },
              { title: "Tracking mentions and sentiment", problem: "Someone mentioned your company on Twitter. You found out a week later from a coworker.", solution: "Your AI employee monitors brand mentions across social media. It surfaces important conversations, competitor mentions, and sentiment shifts in real-time.", beforeLabel: "Blind to what's being said", afterLabel: "Real-time brand monitoring" },
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

      <section id="integrations" className="py-16 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">Connects to your marketing stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <LinkedInIcon size={18} />, text: "LinkedIn - Draft posts, respond to comments" },
              { icon: <XIcon size={18} />, text: "X/Twitter - Threads, replies, monitoring" },
              { icon: <SlackIcon size={18} />, text: "Slack - Surface marketing-relevant discussions" },
              { icon: <NotionIcon size={18} />, text: "Notion - Pull content from docs and updates" },
              { icon: <HubSpotIcon size={18} />, text: "HubSpot - Sync marketing contacts and campaigns" },
              { icon: <CircleCheck className="w-4 h-4 text-accent" />, text: "Google Analytics - Surface performance insights" },
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
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Be everywhere without being exhausted</h2>
          <p className="text-muted-foreground mb-8">Free 3-day trial. Setup takes 5 minutes. Maintain your voice with AI assistance.</p>
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
            <div className="flex items-center gap-4"><a href="https://x.com/tensol_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><XIcon size={18} /></a><a href="https://www.linkedin.com/company/tensolai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><LinkedInIcon size={18} /></a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
