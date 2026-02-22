"use client";

import { useState } from "react";
import { Eye, MessageCircle, Zap, ArrowRight, Shield, CircleCheck, Lock, Cloud, Bell, Users, AlertTriangle, Clock } from "lucide-react";
import { SlackIcon, GitHubIcon, SentryIcon, LinearIcon, HubSpotIcon, GmailIcon, NotionIcon, JiraIcon, WhatsAppIcon, TelegramIcon, TensolLogo, OpenClawLogo, XIcon, LinkedInIcon, TensolIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhatIsSection />
      <SeeItInAction />
      <FeaturesSection />
      <UseCasesSection />
      <IntegrationsSection />
      <SetupSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </main>
  );
}

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
function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background">
            <span className="text-sm text-muted-foreground">Backed by</span>
            <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="text-sm font-semibold text-foreground">Combinator</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6 text-foreground text-center">AI employees that never forget, a single detail</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-center">Your AI team monitors Slack, tracks Sentry errors, updates your CRM, and shares context instantly. Powered by OpenClaw, they work 24/7 so you don&apos;t have to.</p>
        <div className="flex items-center justify-center mb-6">
          <a href="/sign-up" className="inline-flex items-center px-6 py-3 bg-foreground text-background text-base font-medium rounded-md hover:bg-foreground/90 transition-colors">Start for Free</a>
        </div>
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border-2 border-accent bg-background">
            <div className="w-6 h-6 bg-accent flex items-center justify-center text-white font-bold text-xs">Y</div>
            <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Featured on Launch YC</span>
            <span className="text-xs font-bold text-accent">193</span>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mb-6">Watch your AI employee proactively share updates in Slack</p>
        <div className="max-w-3xl mx-auto mb-12">
          <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
            <div className="bg-[#4A154B] px-4 py-3 flex items-center gap-2">
              <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">#</span></div>
              <span className="text-white text-sm font-semibold">#engineering</span>
            </div>
            <div className="p-6 space-y-4 bg-white">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded bg-foreground flex items-center justify-center flex-shrink-0"><span className="text-background text-sm font-bold">T</span></div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-bold text-foreground text-sm">Tensol</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-medium">APP</span>
                    <span className="text-xs text-muted-foreground">9:04 AM</span>
                  </div>
                  <div className="text-sm text-foreground mb-2"><strong>Daily Sentry Summary - 3 issues need attention</strong></div>
                  <div className="border border-border rounded-lg p-4 space-y-3 bg-background">
                    <div className="flex gap-2"><span className="text-xs font-bold text-red-500 flex-shrink-0">P0</span><div className="text-xs"><div className="font-semibold text-foreground">AuthTokenExpired - 47 occurrences</div><div className="text-muted-foreground">Affecting Acme Corp, Globex, Wayne Ent</div></div></div>
                    <div className="flex gap-2"><span className="text-xs font-bold text-orange-500 flex-shrink-0">P1</span><div className="text-xs"><div className="font-semibold text-foreground">APITimeout - 12 occurrences</div><div className="text-muted-foreground">Started after deploy #1847 - @marcus reviewing</div></div></div>
                    <div className="flex gap-2"><span className="text-xs font-bold text-yellow-500 flex-shrink-0">P2</span><div className="text-xs"><div className="font-semibold text-foreground">NullPointer in /dashboard - 3 occurrences</div><div className="text-muted-foreground">Linear ticket #1802 exists, assigned to Sarah</div></div></div>
                    <div className="flex gap-2 pt-2 border-t border-border">
                      <button className="text-xs px-3 py-1.5 rounded bg-background border border-border hover:bg-secondary transition-colors font-medium">View in Sentry</button>
                      <button className="text-xs px-3 py-1.5 rounded bg-background border border-border hover:bg-secondary transition-colors font-medium">Create tickets</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded bg-[#6B46C1] flex items-center justify-center flex-shrink-0"><span className="text-white text-sm font-bold">MJ</span></div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1"><span className="font-bold text-foreground text-sm">Marcus Johnson</span><span className="text-xs text-muted-foreground">9:06 AM</span></div>
                  <div className="text-sm text-foreground">I&apos;m on the APITimeout issue. Should have a fix in an hour.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded bg-foreground flex items-center justify-center flex-shrink-0"><span className="text-background text-sm font-bold">T</span></div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1"><span className="font-bold text-foreground text-sm">Tensol</span><span className="text-xs px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-medium">APP</span><span className="text-xs text-muted-foreground">9:06 AM</span></div>
                  <div className="text-sm text-foreground">Got it, @marcus. I&apos;ll hold off notifying affected customers until you confirm the fix. Want me to draft the &quot;resolved&quot; message now so it&apos;s ready to send?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mb-4">Chat with your AI employee via:</p>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2"><WhatsAppIcon size={20} /><span className="text-sm font-medium text-foreground">WhatsApp</span></div>
          <div className="flex items-center gap-2"><SlackIcon size={20} /><span className="text-sm font-medium text-foreground">Slack</span></div>
          <div className="flex items-center gap-2"><TelegramIcon size={20} /><span className="text-sm font-medium text-foreground">Telegram</span></div>
        </div>
      </div>
    </section>
  );
}
function ProblemSection() {
  const stats = [
    { value: "23 min", label: "Lost refocusing after every interruption" },
    { value: "67%", label: "Of company context lives undocumented" },
    { value: "6 hrs", label: "Average before critical bugs get noticed" },
  ];
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">THE PROBLEM</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Your team is drowning in busywork instead of building</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Context switching, scattered tools, and manual data entry are a second job. Tensol handles the busywork so your team can focus on what matters.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="p-8 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3">{s.value}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const items = [
    { label: "Engineering", before: "2 hours to understand a bug", after: "30 seconds - AI connects the dots" },
    { label: "Onboarding", before: "New hire takes 2 weeks to ramp", after: "Day 1 productivity with full context" },
    { label: "Sales", before: "Call notes never reach CRM", after: "Auto-logged before you hang up" },
    { label: "Support", before: "Issues slip through cracks", after: "Proactive alerts, every time" },
  ];
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">THE SOLUTION</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">An AI employee that never forgets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tensol watches your tools 24/7, connects the dots automatically, and keeps everyone in sync.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.label} className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4"><span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">{item.label}</span></div>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-sm flex-shrink-0 mt-0.5">-</span><p className="text-muted-foreground line-through decoration-red-300">{item.before}</p></div>
                <div className="flex items-start gap-3"><CircleCheck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" /><p className="font-medium text-foreground">{item.after}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section id="ai-employees" className="py-20 px-6 bg-[#f0eeea]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">WHAT IS AN AI EMPLOYEE?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">A teammate that<br />never sleeps</h2>
          <p className="text-lg text-muted-foreground">Not a chatbot. A proactive team member that lives in your tools.</p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Regular AI Chatbot */}
          <div className="p-8 rounded-2xl bg-white border border-border relative">
            <span className="absolute top-4 right-4 text-xs text-muted-foreground">Old way</span>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Regular AI Chatbot</h3>
                <p className="text-sm text-muted-foreground">Waits for you to ask</p>
              </div>
            </div>
            <div className="space-y-5">
              {["Only answers when prompted", "No business context", "Can't take action", "Forgets everything"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-accent text-lg">&#10005;</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tensol AI Employee */}
          <div className="p-8 rounded-2xl bg-white border-2 border-accent/30 relative">
            <span className="absolute top-4 right-4 text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded">Tensol</span>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <TensolIcon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Tensol AI Employee</h3>
                <p className="text-sm text-accent">Works proactively for you</p>
              </div>
            </div>
            <div className="space-y-3">
              {["Monitors 24/7, alerts you first", "Learns your customers & code", "Updates CRM, creates tickets", "Remembers everything forever"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: <Eye className="w-6 h-6" />, title: "Watches everything", desc: "Monitors Slack, GitHub, Sentry, CRM, email - connects the dots you'd miss" },
            { icon: <MessageCircle className="w-6 h-6" />, title: "Chat anytime", desc: "Ask questions via WhatsApp, Slack, or Telegram - like texting a colleague" },
            { icon: <Zap className="w-6 h-6" />, title: "Acts proactively", desc: "Alerts you to issues, updates your CRM, drafts responses - without being asked" },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-white border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 text-foreground">{c.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeeItInAction() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Proactive alert", "Instant answer", "Auto action"];
  return (
    <section className="py-12 px-6 bg-[#f0eeea]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-4">See it in action</p>
          <div className="inline-flex items-center bg-white rounded-full p-1 border border-border">
            {tabs.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeTab === i ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>{tab}</button>
            ))}
          </div>
        </div>

        {activeTab === 0 && (
          <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted-foreground">Tensol noticed an issue and alerted the team...</span>
            </div>
            <div className="bg-[#3d1f3f] rounded-xl p-5 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><TensolLogo size={16} /></div>
                <span className="font-semibold text-white">Tensol</span>
                <span className="text-white/50 text-sm">2:34 PM</span>
              </div>
              <p className="mb-4 text-sm leading-relaxed">3 customers reported checkout issues in the last hour. I found the root cause in Sentry:</p>
              <div className="bg-white/10 rounded-lg p-3 mb-4 space-y-1">
                <p className="font-mono text-xs text-pink-300">Sentry #4821: NullPointerException in PaymentProcessor.java:142</p>
                <p className="text-white/60 text-xs">First seen after deploy #892 (35 min ago)</p>
                <p className="text-white/60 text-xs">Affected customers: Acme Corp, TechStart, DataFlow</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-1.5 rounded-lg bg-white/15 text-white text-xs font-medium">View in Sentry</button>
                <button className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-medium">Create Linear ticket</button>
                <button className="px-3 py-1.5 rounded-lg bg-white/15 text-white text-xs font-medium">Notify on-call</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">You asked via WhatsApp...</span>
            </div>
            <div className="flex justify-end mb-4">
              <div className="bg-green-700 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-sm">
                <p className="text-sm">What happened with Acme&apos;s bug yesterday?</p>
              </div>
            </div>
            <div className="bg-[#f5f3f0] rounded-2xl p-5 max-w-lg">
              <p className="font-semibold text-foreground mb-3 text-sm">Here&apos;s what I found across 3 sources:</p>
              <div className="space-y-1.5 mb-3">
                <p className="text-sm"><span className="font-semibold text-pink-600">Slack:</span> <span className="text-muted-foreground">Customer reported payment failure at 2:15 PM</span></p>
                <p className="text-sm"><span className="font-semibold text-red-600">Sentry:</span> <span className="text-muted-foreground">PaymentProcessor.java null pointer, 47 events</span></p>
                <p className="text-sm"><span className="font-semibold text-green-600">Linear:</span> <span className="text-muted-foreground">Sarah has fix in PR #1432, merged 6:30 PM</span></p>
              </div>
              <p className="text-sm text-foreground font-medium">Issue resolved. Customer confirmed working at 7:15 PM.</p>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">After your sales call ended, Tensol automatically...</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="p-4 rounded-xl border border-border text-center">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <CircleCheck className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-0.5">Updated HubSpot</h4>
                <p className="text-xs text-muted-foreground">Added call notes, next steps</p>
              </div>
              <div className="p-4 rounded-xl border border-border text-center">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <CircleCheck className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-0.5">Scheduled follow-up</h4>
                <p className="text-xs text-muted-foreground">Thursday 2pm in calendar</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-secondary/30 text-center">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                  <AlertTriangle className="w-4 h-4 text-muted-foreground" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-0.5">Draft email ready</h4>
                <p className="text-xs text-muted-foreground">Awaiting your approval</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">Time saved: <span className="font-semibold text-foreground">~25 minutes</span> of manual data entry</p>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    { icon: <Eye className="w-5 h-5" />, title: "Always Watching", desc: "24/7 monitoring across all your tools" },
    { icon: <MessageCircle className="w-5 h-5" />, title: "Instant Context", desc: "Get the full picture in seconds" },
    { icon: <Zap className="w-5 h-5" />, title: "Proactive Alerts", desc: "Know about issues before they escalate" },
    { icon: <Bell className="w-5 h-5" />, title: "Smart Escalation", desc: "Only get pinged when it matters" },
    { icon: <Users className="w-5 h-5" />, title: "Instant Onboarding", desc: "New hires productive on day one" },
    { icon: <Lock className="w-5 h-5" />, title: "You're In Control", desc: "Trust gradually, verify always" },
  ];

  const panels = [
    {
      heading: "Never miss what matters",
      text: "Your AI employee watches Slack conversations, Sentry errors, GitHub activity, CRM updates, and more - all simultaneously. When something important happens, it knows immediately.",
      before: "Manually check 6 different tools every morning",
      after: "Get a morning briefing with everything important",
      extra: (
        <div className="mt-4">
          <p className="text-xs text-muted-foreground mb-3">Currently monitoring:</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: <SlackIcon className="w-4 h-4" />, name: "Slack", detail: "12 channels" },
              { icon: <SentryIcon className="w-4 h-4" />, name: "Sentry", detail: "3 projects" },
              { icon: <GitHubIcon className="w-4 h-4" />, name: "GitHub", detail: "5 repos" },
              { icon: <LinearIcon className="w-4 h-4" />, name: "Linear", detail: "2 teams" },
              { icon: <HubSpotIcon className="w-4 h-4" />, name: "HubSpot", detail: "142 deals" },
              { icon: <GmailIcon className="w-4 h-4" />, name: "Gmail", detail: "3 inboxes" },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-2 p-2 rounded-lg border border-border bg-white">
                <div className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">{s.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground">{s.name}</p>
                  <p className="text-[10px] text-muted-foreground">{s.detail}</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-3 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span> All connections live - 1,247 events processed today</p>
        </div>
      ),
    },
    {
      heading: "Full picture in seconds",
      text: "Ask a question and get an answer that pulls from every tool your team uses. No more switching tabs or searching through Slack history.",
      before: "Search 5 tools to piece together what happened",
      after: "Ask one question, get the complete story",
      extra: (
        <div className="mt-4 p-4 rounded-xl bg-background border border-border">
          <p className="text-xs font-medium text-foreground mb-2">&quot;What happened with the Acme deploy?&quot;</p>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <p><span className="font-medium text-pink-600">Slack:</span> Customer reported issue at 2:15 PM</p>
            <p><span className="font-medium text-red-600">Sentry:</span> 47 error events from PaymentProcessor</p>
            <p><span className="font-medium text-green-600">Linear:</span> Fix merged in PR #1432 at 6:30 PM</p>
          </div>
        </div>
      ),
    },
    {
      heading: "Problems found before you look",
      text: "Your AI employee correlates data across tools, spots patterns, and alerts you to issues before they become crises.",
      before: "Find out about issues when customers complain",
      after: "Get alerted the moment patterns emerge",
      extra: (
        <div className="mt-4 p-4 rounded-xl bg-background border border-border space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs font-semibold text-foreground">Pattern Detected</span>
            <span className="text-[10px] text-muted-foreground ml-auto">Just now</span>
          </div>
          <p className="text-xs text-foreground">3 customers reported checkout failures in 45 min</p>
          <p className="text-[10px] text-muted-foreground"><span className="font-medium text-foreground">Correlation:</span> Sentry #4821 after deploy #892</p>
        </div>
      ),
    },
    {
      heading: "Signal, not noise",
      text: "Smart filtering ensures you only get notified about things that actually need your attention. Everything else is handled quietly.",
      before: "100+ notifications per day, most irrelevant",
      after: "5-10 meaningful alerts that matter",
      extra: (
        <div className="mt-4 space-y-2">
          <div className="p-3 rounded-lg border border-accent/30 bg-accent/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs text-foreground font-medium">Critical: 3 enterprise customers affected</span>
          </div>
          <div className="p-3 rounded-lg border border-border flex items-center gap-2 opacity-50">
            <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
            <span className="text-xs text-muted-foreground">Low: Test environment timeout (auto-resolved)</span>
          </div>
        </div>
      ),
    },
    {
      heading: "Day one productivity",
      text: "New team members get instant access to your company's full context. No more weeks of ramping up or asking the same questions.",
      before: "New hire takes 2 weeks to understand the codebase",
      after: "Day 1: ask anything, get accurate answers",
      extra: (
        <div className="mt-4 p-4 rounded-xl bg-background border border-border">
          <p className="text-xs font-medium text-foreground mb-2">&quot;How does our payment flow work?&quot;</p>
          <p className="text-xs text-muted-foreground">Based on 23 Slack threads, 8 PRs, and 3 Notion docs, here&apos;s how it works...</p>
        </div>
      ),
    },
    {
      heading: "Trust gradually, verify always",
      text: "Start with read-only monitoring. Gradually give your AI employee more autonomy as you build trust. You approve every action.",
      before: "All-or-nothing AI access",
      after: "Granular permissions, full audit trail",
      extra: (
        <div className="mt-4 space-y-2">
          {["Read Slack messages", "Summarize threads", "Draft responses", "Send messages"].map((p, i) => (
            <div key={p} className="flex items-center gap-2 text-xs">
              <div className={`w-4 h-4 rounded border flex items-center justify-center ${i < 3 ? 'bg-accent border-accent text-white' : 'border-border'}`}>
                {i < 3 && <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
              </div>
              <span className={i < 3 ? 'text-foreground' : 'text-muted-foreground'}>{p}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const current = panels[activeFeature];

  return (
    <section id="features" className="py-20 px-6 bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">Everything you&apos;d expect<br />from a great employee</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Proactive. Thorough. Always available. Never needs to be asked twice.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            {features.map((f, i) => (
              <div key={f.title} onClick={() => setActiveFeature(i)} className={`flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer ${activeFeature === i ? 'bg-white border-2 border-accent shadow-sm' : 'bg-white/50 border border-border hover:bg-white hover:border-accent/30'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${activeFeature === i ? 'bg-accent text-white' : 'bg-secondary text-muted-foreground'}`}>{f.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-base">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">{features[activeFeature].icon && <span className="text-white">{features[activeFeature].icon}</span>}</div>
              <h3 className="text-xl font-semibold text-foreground pt-1.5">{current.heading}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{current.text}</p>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-[10px] font-medium text-muted-foreground mb-1">BEFORE</p>
                <p className="text-xs text-foreground">{current.before}</p>
              </div>
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-[10px] font-medium text-accent mb-1">AFTER</p>
                <p className="text-xs text-foreground">{current.after}</p>
              </div>
            </div>
            {current.extra}
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      tag: "The CTO's second brain",
      title: "For Engineering Teams",
      desc: "Monitor Sentry errors, correlate with Linear tickets, track git pushes, and surface relevant context. When a customer reports a bug, know instantly if it's a known issue and who's working on it.",
      steps: [
        "Customer reports login issue in Slack",
        "AI checks Sentry: auth token error spike",
        "Finds Linear ticket #1234 already exists",
        "Marcus deployed related fix yesterday",
        "Drafts response with full context",
      ],
      link: "See Engineering Use Cases", href: "/solutions/engineering",
    },
    {
      tag: "Never drop a lead again",
      title: "For Sales Teams",
      desc: "Your CRM updates itself. Every call gets logged, every email tracked, every deal stage updated. Follow up on leads automatically and always know the full context before a call.",
      steps: [
        "Call with prospect ends",
        "AI logs call notes to HubSpot",
        "Updates deal stage to 'Demo Scheduled'",
        "Schedules follow-up reminder",
        "Prepares context brief for next call",
      ],
      link: "See Sales Use Cases", href: "/solutions/sales",
    },
    {
      tag: "Content on autopilot",
      title: "For Marketing Teams",
      desc: "Manage your LinkedIn and X presence. Draft posts based on company updates, respond to comments, track engagement metrics, and maintain a consistent posting schedule.",
      steps: [
        "New blog post published",
        "AI drafts LinkedIn announcement",
        "Schedules X thread for peak hours",
        "Monitors comments and engagement",
        "Suggests replies to high-value interactions",
      ],
      link: "See Marketing Use Cases", href: "/solutions/marketing",
    },
  ];
  const t = tabs[activeTab];
  return (
    <section id="use-cases" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">SOLUTIONS</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Built for every team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Not just for technical teams. Anyone drowning in repetitive work can hire an AI employee to help.</p>
        </div>
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((tab, i) => (
            <button key={tab.title} onClick={() => setActiveTab(i)} className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === i ? 'bg-foreground text-background' : 'bg-white border border-border text-foreground hover:border-accent/30'}`}>
              {tab.title.replace("For ", "")}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <p className="text-sm font-medium text-accent mb-2">{t.tag}</p>
            <h3 className="text-2xl font-semibold text-foreground mb-4">{t.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">{t.desc}</p>
            <a href={t.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">{t.link}<ArrowRight size={16} /></a>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border">
            <p className="text-xs font-medium text-muted-foreground mb-5">Example workflow:</p>
            <div className="space-y-4">
              {t.steps.map((s, i) => (
                <div key={s} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-accent">{i + 1}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm text-foreground">{s}</p>
                    {i < t.steps.length - 1 && <div className="w-px h-4 bg-border ml-0 mt-2"></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function IntegrationsSection() {
  const integrations = [
    { name: "Slack", desc: "Monitor channels, draft responses", icon: <SlackIcon className="w-6 h-6" /> },
    { name: "GitHub", desc: "Track PRs, monitor deploys", icon: <GitHubIcon className="w-6 h-6" /> },
    { name: "Sentry", desc: "Error monitoring, root cause", icon: <SentryIcon className="w-6 h-6" /> },
    { name: "Linear", desc: "Create tickets, track issues", icon: <LinearIcon className="w-6 h-6" /> },
    { name: "HubSpot", desc: "CRM updates, lead tracking", icon: <HubSpotIcon className="w-6 h-6" /> },
    { name: "Gmail", desc: "Read, draft, and send emails", icon: <GmailIcon className="w-6 h-6" /> },
    { name: "Notion", desc: "Search docs, update pages", icon: <NotionIcon className="w-6 h-6" /> },
    { name: "Jira", desc: "Issue tracking, sprint updates", icon: <JiraIcon className="w-6 h-6" /> },
  ];
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">INTEGRATIONS</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Connects to everything you use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Your AI employee gets read and write access to the tools your team already uses. One-click OAuth setup, no coding required.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((ig) => (
            <div key={ig.name} className="group p-5 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2"><div className="text-foreground">{ig.icon}</div><span className="font-medium text-foreground">{ig.name}</span></div>
              <p className="text-xs text-muted-foreground">{ig.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">+ Salesforce, Datadog, PagerDuty, Mixpanel, and 40 more integrations.</p>
      </div>
    </section>
  );
}


function SetupSection() {
  const steps = [
    { num: "01", title: "Connect your tools", badge: "2 minutes", desc: "One-click OAuth to connect Slack, Gmail, GitHub, Sentry, Linear, HubSpot - whatever your team uses. Your AI employee gets the same access as a real team member." },
    { num: "02", title: "Set your preferences", badge: "5 minutes", desc: "Tell your AI employee what to watch for: customer issues in Slack, Sentry errors above a threshold, stale deals in your CRM. Define what gets escalated to you." },
    { num: "03", title: "Start supervised", badge: "Ongoing", desc: "Your AI employee drafts responses and actions, but you approve everything first. Review, edit, and send. Build trust over time before giving more autonomy." },
    { num: "04", title: "Go hands-off", badge: "When ready", desc: "Once you trust it, let your AI employee work independently. It handles routine tasks 24/7, learns from your feedback, and only pings you when it matters." },
  ];
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">GETTING STARTED</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Setup takes 5 minutes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">No terminal. No coding. No DevOps. Just connect your tools and describe what you need help with.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-5 p-8 rounded-2xl bg-card border border-border">
              <span className="text-5xl font-bold text-accent/15 leading-none select-none flex-shrink-0 font-[family-name:var(--font-playfair)]">{s.num}</span>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium">{s.badge}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function SecuritySection() {
  return (
    <section className="py-20 px-6 bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 mb-8">
            <OpenClawLogo size={20} className="text-white" />
            <span className="text-sm font-medium">Powered by OpenClaw</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">Enterprise-grade infrastructure, zero complexity</h2>
          <p className="text-base text-white/60 text-center max-w-2xl">Built on OpenClaw&apos;s battle-tested open-source platform (46k+ GitHub stars). We handle all the infrastructure so you can focus on what matters.</p>
        </div>

        {/* Gateway Diagram */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - Your Tools */}
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-4">YOUR TOOLS</p>
              <div className="space-y-3">
                {[
                  { icon: <SlackIcon size={18} />, name: "Slack" },
                  { icon: <GitHubIcon size={18} />, name: "GitHub" },
                  { icon: <SentryIcon size={18} />, name: "Sentry" },
                  { icon: <HubSpotIcon size={18} />, name: "HubSpot" },
                  { icon: <LinearIcon size={18} />, name: "Linear" },
                ].map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70">{tool.icon}</div>
                    <span className="text-sm text-white/80">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center - Tensol Gateway */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-[260px] p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="w-20 h-20 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <TensolIcon size={44} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Tensol Gateway</h3>
                <p className="text-xs text-white/50">Secure API routing</p>
              </div>
              <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Lock className="w-4 h-4 text-white/50" />
                <span className="text-xs text-white/60">OAuth 2.0 + API Keys</span>
              </div>
            </div>

            {/* Right - AI Employees */}
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-4">YOUR AI EMPLOYEES</p>
              <div className="space-y-3">
                {["Support Agent", "Sales Agent", "Dev Agent"].map((agent) => (
                  <div key={agent} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{agent}</span>
                      <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div><span className="text-xs text-green-400">Active</span></div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/40">
                      <div className="flex items-center gap-1"><Shield className="w-3 h-3" /><span>Isolated VM</span></div>
                      <div className="flex items-center gap-1"><Lock className="w-3 h-3" /><span>Sandboxed</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Shield className="w-6 h-6" />, title: "Isolated VMs", desc: "Each customer gets their own isolated virtual machine. Your data never touches other customers' environments." },
            { icon: <Lock className="w-6 h-6" />, title: "Secure Authentication", desc: "OAuth 2.0, API keys, and role-based access control. Connect your tools without exposing credentials." },
            { icon: <Zap className="w-6 h-6" />, title: "Zero-Config Deploy", desc: "No terminal, no Docker, no DevOps. Just describe what you need and we deploy it instantly." },
            { icon: <Eye className="w-6 h-6" />, title: "Full Audit Trail", desc: "Every action logged. See exactly what your AI employees did, when, and why." },
          ].map((card) => (
            <div key={card.title} className="p-6 rounded-xl bg-transparent">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-4">{card.icon}</div>
              <h3 className="font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Security First Section */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-accent"></div></div>
            <h3 className="text-xl font-semibold text-white">Security First</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">VM Isolation</h4>
              <ul className="space-y-3">
                {[
                  "Dedicated VM per customer with hardware-level isolation",
                  "No shared resources between customer environments",
                  "Automatic security patches and updates",
                  "Encrypted storage with customer-specific keys",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/60"><CircleCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Data Protection</h4>
              <ul className="space-y-3">
                {[
                  "End-to-end encryption for all data in transit",
                  "GDPR and CCPA compliant data handling",
                  "Optional data residency requirements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/60"><CircleCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-white/40"><Cloud className="w-4 h-4" /><span>Hosted on AWS</span></div>
            <div className="flex items-center gap-2 text-xs text-white/40"><Lock className="w-4 h-4" /><span>256-bit encryption</span></div>
            <div className="flex items-center gap-2 text-xs text-white/40"><Clock className="w-4 h-4" /><span>99.9% uptime SLA</span></div>
          </div>
        </div>

        {/* OpenClaw Note */}
        <div className="text-center">
          <p className="text-sm text-white/40 max-w-2xl mx-auto">Tensol is built on OpenClaw, an open-source AI agent platform with 46,000+ GitHub stars. We contribute back to the community while providing enterprise-grade managed infrastructure.</p>
        </div>
      </div>
    </section>
  );
}



function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">Your team&apos;s context, always on</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">Stop losing context. Stop repeating yourself. Stop drowning in busywork. Hire an AI employee that knows everything your team knows and works 24/7.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a href="/sign-up" className="inline-flex items-center px-8 py-3.5 bg-foreground text-background text-base font-medium rounded-md hover:bg-foreground/90 transition-colors">Start for Free</a>
          <a href="/sign-up" className="inline-flex items-center px-8 py-3.5 border border-border text-foreground text-base font-medium rounded-md hover:bg-secondary transition-colors">Get a Demo</a>
        </div>
        <p className="text-sm text-muted-foreground">Setup in 5 minutes. Talk to us via WhatsApp, Slack, or Telegram.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2">
            <TensolLogo size={28} className="text-foreground mb-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Product</h4>
            <ul className="space-y-2">
              <li><a href="/employees" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Employees</a></li>
              <li><a href="/use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Use Cases</a></li>
              <li><a href="/integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="/security-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Tensol. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/tensol_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><XIcon size={18} /></a>
            <a href="https://www.linkedin.com/company/tensolai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><LinkedInIcon size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}