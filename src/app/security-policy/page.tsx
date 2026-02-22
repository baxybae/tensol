"use client";

import { useState } from "react";
import { TensolLogo, XIcon, LinkedInIcon } from "@/components/icons";

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

export default function SecurityPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">Security</h1>
            <p className="text-muted-foreground leading-relaxed">Protecting your data is fundamental to everything we build. Here is how we keep your information safe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            <div className="border border-border rounded-xl p-6">
              <svg className="w-7 h-7 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
              <h3 className="text-base font-semibold text-foreground mb-2">Encryption</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption. Your credentials and API keys are stored using industry-standard secret management.</p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <svg className="w-7 h-7 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              <h3 className="text-base font-semibold text-foreground mb-2">Access Controls</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Role-based access controls ensure that only authorized users can access your data. We enforce the principle of least privilege across all systems.</p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <svg className="w-7 h-7 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h3 className="text-base font-semibold text-foreground mb-2">Minimal Data Access</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">When connecting third-party services, we only request the minimum scopes required to perform your requested automations. We never access more data than necessary.</p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <svg className="w-7 h-7 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>
              <h3 className="text-base font-semibold text-foreground mb-2">Infrastructure Security</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Our infrastructure is hosted on SOC 2-compliant cloud providers with network isolation, automated security patching, and continuous monitoring.</p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <svg className="w-7 h-7 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              <h3 className="text-base font-semibold text-foreground mb-2">Data Handling</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Data obtained from third-party APIs is never used to train AI models. We strictly adhere to all API provider data usage policies, including Limited Use requirements.</p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <svg className="w-7 h-7 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
              <h3 className="text-base font-semibold text-foreground mb-2">Team Security</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">All team members undergo security training. Access to production systems is restricted, audited, and requires multi-factor authentication.</p>
            </div>
          </div>

          <div className="border-t border-border pt-12 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-3">Reporting Vulnerabilities</h2>
            <p className="text-muted-foreground leading-relaxed">If you discover a security vulnerability, please report it responsibly by emailing <a href="mailto:security@tensolai.com" className="text-accent hover:underline">security@tensolai.com</a>. We take all reports seriously and will respond promptly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">For any questions about our security practices, please contact us at <a href="mailto:founders@tensolai.com" className="text-accent hover:underline">founders@tensolai.com</a> or review our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.</p>
          </div>
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
            <div className="flex items-center gap-4"><a href="https://x.com/tensol_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><XIcon size={18} /></a><a href="https://www.linkedin.com/company/tensolai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><LinkedInIcon size={18} /></a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
