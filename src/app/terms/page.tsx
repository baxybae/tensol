"use client";

import { useState } from "react";
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

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-foreground mb-2">General Terms and Conditions</h1>
            <p className="text-muted-foreground">Last updated: January 5, 2025</p>
          </div>
          <p className="text-muted-foreground leading-relaxed">General Terms and Conditions for the Tensol Service. Please read these terms and conditions carefully before using Our Service.</p>

          <h2 className="text-xl font-semibold text-foreground">1. Interpretation and Definitions</h2>
          <h3 className="text-base font-semibold text-foreground">Interpretation</h3>
          <p className="text-muted-foreground leading-relaxed">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          <h3 className="text-base font-semibold text-foreground">Definitions</h3>
          <p className="text-muted-foreground leading-relaxed">For the purposes of these Terms and Conditions:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm leading-relaxed">
            <li><span className="font-medium text-foreground">Affiliate</span> means an entity that controls, is controlled by or is under common control with a party.</li>
            <li><span className="font-medium text-foreground">Country</span> refers to: Delaware, United States of America (USA).</li>
            <li><span className="font-medium text-foreground">Company</span> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;) refers to Solstis Inc.</li>
            <li><span className="font-medium text-foreground">Device</span> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><span className="font-medium text-foreground">Service</span> refers to the Tensol platform, including the web application, APIs, AI employee automation, workflow management tools, and integrations with third-party services.</li>
            <li><span className="font-medium text-foreground">Terms and Conditions</span> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
            <li><span className="font-medium text-foreground">Third-party Social Media Service</span> means any services or content provided by a third-party that may be displayed, included or made available by the Service.</li>
            <li><span className="font-medium text-foreground">Website</span> refers to Tensol, accessible from <a href="https://tensolai.com" className="text-accent hover:underline">https://tensolai.com</a>.</li>
            <li><span className="font-medium text-foreground">You</span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.</li>
            <li><span className="font-medium text-foreground">Customer Data</span> means any data, information, or content that Customer uploads, submits, or otherwise provides to the Service.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">2. Acknowledgment</h2>
          <p className="text-muted-foreground leading-relaxed">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions.</p>
          <p className="text-muted-foreground leading-relaxed">You represent that you are over the age of 18. Tensol does not permit those under 18 to use the Service.</p>

          <h2 className="text-xl font-semibold text-foreground">3. The Service</h2>
          <h3 className="text-base font-semibold text-foreground">Service Description</h3>
          <p className="text-muted-foreground leading-relaxed">Tensol is a SaaS platform that provides AI employees for small businesses. The Service includes AI-powered workflow automation, integrations with third-party tools such as Slack, HubSpot, Gmail, and CRM systems, and operational dashboards for monitoring AI employee activity.</p>
          <h3 className="text-base font-semibold text-foreground">Service Availability</h3>
          <p className="text-muted-foreground leading-relaxed">The Company will use commercially reasonable efforts to make the Service available 24/7, except for planned downtime and circumstances beyond reasonable control.</p>

          <h2 className="text-xl font-semibold text-foreground">4. Account and Access</h2>
          <h3 className="text-base font-semibold text-foreground">Account Registration</h3>
          <p className="text-muted-foreground leading-relaxed">You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your account. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.</p>
          <h3 className="text-base font-semibold text-foreground">Team Accounts</h3>
          <p className="text-muted-foreground leading-relaxed">If you create an account on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms. The entity will be responsible for all activity under the account.</p>
          <h3 className="text-base font-semibold text-foreground">API/Integration Access</h3>
          <p className="text-muted-foreground leading-relaxed">Access to third-party integrations through the Service is subject to the terms and conditions of those third-party services. You are responsible for complying with all applicable third-party terms when using integrations.</p>

          <h2 className="text-xl font-semibold text-foreground">5. Acceptable Use</h2>
          <h3 className="text-base font-semibold text-foreground">Terms of Use</h3>
          <p className="text-muted-foreground leading-relaxed">You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
            <li>Use the Service in any way that violates any applicable law or regulation</li>
            <li>Transmit any material that is defamatory, obscene, or otherwise objectionable</li>
            <li>Attempt to gain unauthorized access to any parts of the Service</li>
            <li>Reverse engineer, decompile, or disassemble the Service</li>
            <li>Use the Service to transmit malicious code, viruses, or harmful data</li>
          </ul>
          <h3 className="text-base font-semibold text-foreground">Professional Use</h3>
          <p className="text-muted-foreground leading-relaxed">The Service is intended for professional and business use. You agree to use the Service in a manner consistent with professional standards and applicable industry regulations.</p>

          <h2 className="text-xl font-semibold text-foreground">6. Fees and Payment</h2>
          <h3 className="text-base font-semibold text-foreground">Payment Terms</h3>
          <p className="text-muted-foreground leading-relaxed">Customer shall pay the fees as set forth in the applicable Order. All fees are non-refundable except as expressly set forth herein. If Customer fails to pay any fees when due, the Company may suspend access to the Service.</p>
          <h3 className="text-base font-semibold text-foreground">Taxes</h3>
          <p className="text-muted-foreground leading-relaxed">All fees are exclusive of taxes, and Customer shall be responsible for payment of all applicable taxes, excluding taxes based on the Company&apos;s net income.</p>

          <h2 className="text-xl font-semibold text-foreground">7. Termination</h2>
          <h3 className="text-base font-semibold text-foreground">Termination for Convenience</h3>
          <p className="text-muted-foreground leading-relaxed">Either party may terminate these Terms at any time with thirty (30) days&apos; prior written notice to the other party.</p>
          <h3 className="text-base font-semibold text-foreground">Effect of Termination</h3>
          <p className="text-muted-foreground leading-relaxed">Upon termination, Your right to use the Service will cease immediately. We may terminate or suspend Your access immediately, without prior notice or liability, if You breach these Terms. Upon request, we will delete your Customer Data within 30 days of termination.</p>

          <h2 className="text-xl font-semibold text-foreground">8. Intellectual Property</h2>
          <h3 className="text-base font-semibold text-foreground">Company Intellectual Property</h3>
          <p className="text-muted-foreground leading-relaxed">The Company owns all right, title and interest in and to the Service, including all related intellectual property rights. The Service is protected by copyright, trademark, and other laws.</p>
          <h3 className="text-base font-semibold text-foreground">Customer Data Rights</h3>
          <p className="text-muted-foreground leading-relaxed">Customer retains all rights to Customer Data. We do not use your data to train AI models. You grant us a limited license to use Customer Data solely to provide and improve the Service.</p>
          <h3 className="text-base font-semibold text-foreground">Feedback</h3>
          <p className="text-muted-foreground leading-relaxed">If you provide any feedback, suggestions, or recommendations regarding the Service, you grant the Company a perpetual, irrevocable, royalty-free license to use such feedback for any purpose.</p>

          <h2 className="text-xl font-semibold text-foreground">9. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">To the maximum extent permitted by applicable law, the Company shall not be liable for any special, incidental, indirect, or consequential damages whatsoever.</p>

          <h2 className="text-xl font-semibold text-foreground">10. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">The laws of the State of Delaware, United States, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.</p>

          <h2 className="text-xl font-semibold text-foreground">11. Changes to These Terms</h2>
          <p className="text-muted-foreground leading-relaxed">We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>

          <h2 className="text-xl font-semibold text-foreground">12. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">If you have any questions about these Terms and Conditions, you can contact us:</p>
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
