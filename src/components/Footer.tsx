import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="PrimePath Talent Group" className="h-14 w-auto" />
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              An international recruitment and talent acquisition firm dedicated to sourcing, screening, and positioning qualified professionals worldwide.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Mail className="w-4 h-4" />
              <a href="mailto:careers@primepathtalentgroup.com" className="hover:text-primary transition-colors">
                careers@primepathtalentgroup.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {["Healthcare", "Finance", "Administration", "Corporate", "Hospitality"].map((industry) => (
                <li key={industry}>
                  <span className="text-primary-foreground/70 text-sm">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <p className="text-xs text-primary-foreground/50 leading-relaxed">
            <strong>Legal Disclaimer:</strong> PrimePath Talent Group operates as a recruitment and talent-sourcing firm. We do not guarantee employment, salaries, visa approvals, or placement outcomes. All hiring decisions are made solely by employers. Candidate information is shared strictly with consent and for recruitment purposes only.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} PrimePath Talent Group. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4" />
              <span>Global Service Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
