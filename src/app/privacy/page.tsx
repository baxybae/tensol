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

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 5, 2025</p>
          </div>
          <p className="text-muted-foreground leading-relaxed">Solstis Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and security of your information. This Privacy Policy outlines how we collect, use, and disclose information when you use our web application (https://app.tensolai.com) and integrations with third-party services.</p>
          <p className="text-muted-foreground leading-relaxed">By using Tensol, you agree to the collection and use of information in accordance with this policy.</p>

          <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-foreground">a. Information You Provide</h3>
            <p className="text-muted-foreground leading-relaxed">We collect personal information that you provide directly to us when you:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Sign up for an account</li>
              <li>Connect third-party services (e.g., Slack, HubSpot, Gmail, CRM platforms)</li>
              <li>Interact with our website or support team</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">This may include your name, email address, company details, and any other information you voluntarily submit. This data is used for security, analytics, and service improvements.</p>
            <h3 className="text-base font-semibold text-foreground">b. Information from Third-Party Services</h3>
            <p className="text-muted-foreground leading-relaxed">When you connect third-party services (e.g., Slack, HubSpot, Gmail, Salesforce), we only access the minimum scope of data required to perform the requested automation tasks.</p>
            <p className="text-muted-foreground leading-relaxed">We strictly adhere to applicable API Services User Data Policies, including Limited Use requirements. Data obtained from third-party APIs is not used to develop, improve, or train generalized AI or ML models.</p>
          </div>

          <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Provide, operate, and improve our services</li>
            <li>Authenticate users and manage access</li>
            <li>Perform requested automations on connected platforms</li>
            <li>Communicate with you about updates, features, or support</li>
            <li>Ensure compliance with legal obligations and platform policies</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">3. Sharing of Information</h2>
          <p className="text-muted-foreground leading-relaxed">We do not sell your personal information. We may share your data with:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Third-party service providers under strict confidentiality</li>
            <li>APIs and integrations only when requested by you</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">4. Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">We retain your information as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us at <a href="mailto:security@tensolai.com" className="text-accent hover:underline">security@tensolai.com</a>.</p>

          <h2 className="text-xl font-semibold text-foreground">5. Security</h2>
          <p className="text-muted-foreground leading-relaxed">We use industry-standard measures to protect your data, including encryption in transit and at rest. However, no system is completely secure, and we cannot guarantee absolute protection.</p>

          <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Access, update, or delete your personal information</li>
            <li>Withdraw access to connected third-party accounts</li>
            <li>Contact us regarding any concerns about your privacy</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">To exercise your rights, email us at <a href="mailto:security@tensolai.com" className="text-accent hover:underline">security@tensolai.com</a>.</p>

          <h2 className="text-xl font-semibold text-foreground">7. Children&apos;s Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">Tensol is not intended for use by children under the age of 13. We do not knowingly collect personal data from children.</p>

          <h2 className="text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">We may update this Privacy Policy from time to time. We will notify you of significant changes via email or within the product. Your continued use of Tensol after changes are published constitutes your acceptance.</p>

          <h2 className="text-xl font-semibold text-foreground">9. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <div className="space-y-1 text-muted-foreground">
            <p className="font-semibold text-foreground">Solstis Inc.</p>
            <p>Email: <a href="mailto:security@tensolai.com" className="text-accent hover:underline">security@tensolai.com</a></p>
            <p>Website: <a href="https://tensolai.com" className="text-accent hover:underline">https://tensolai.com</a></p>
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
            <div className="flex items-center gap-4"><a href="https://x.com/tensolai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><XIcon size={18} /></a><a href="https://linkedin.com/company/tensol" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><LinkedInIcon size={18} /></a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
