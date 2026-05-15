import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Technology", href: "#technology" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

function Header({ logo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        isScrolled || isOpen
          ? "border-aurora-line bg-aurora-navy/95 shadow-panel backdrop-blur"
          : "border-white/10 bg-aurora-navy/45 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Aurora Mining Services home">
          <img src={logo} alt="" className="h-12 w-12 shrink-0 object-contain" />
          <span className="min-w-0">
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-white sm:text-base">
              Aurora
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-aurora-paleGold">
              Mining Services
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-aurora-mist/78 transition hover:text-aurora-paleGold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="hidden border border-aurora-gold px-5 py-3 text-sm font-semibold text-aurora-paleGold transition hover:bg-aurora-gold hover:text-aurora-ink lg:inline-flex" href="#contact">
          Contact Us
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center border border-aurora-gold/40 text-aurora-paleGold lg:hidden"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-aurora-line bg-aurora-navy px-5 pb-5 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-4 text-sm font-semibold text-aurora-mist/85"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
