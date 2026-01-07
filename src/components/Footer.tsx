import { Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-navy-dark font-serif font-bold text-xl">P</span>
              </div>
              <div>
                <span className="font-serif font-semibold text-lg">PrimePath</span>
                <span className="text-gold font-serif text-lg ml-1">Talent Group</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              An international recruitment and talent acquisition firm dedicated to sourcing, screening, and positioning qualified professionals worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:careers@primepathtalentgroup.com"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">careers@primepathtalentgroup.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "Industries", "Process", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Industries</h4>
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
      <div className="border-t border-gold/10">
        <div className="section-container py-6">
          <p className="text-xs text-primary-foreground/50 leading-relaxed">
            <strong>Legal Disclaimer:</strong> PrimePath Talent Group operates as a recruitment and talent-sourcing firm. We do not guarantee employment, salaries, visa approvals, or placement outcomes. All hiring decisions are made solely by employers. Candidate information is shared strictly with consent and for recruitment purposes only.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gold/10">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} PrimePath Talent Group. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Globe className="w-4 h-4" />
              <span>Global Service Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
