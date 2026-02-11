import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Features", href: "/#features" },
  { name: "Solutions", href: "/solutions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#006e62]/95 backdrop-blur-xl border-b border-[#ffffff1a] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-14 lg:h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 z-10"
              aria-label="PharmaZen home"
            >
              <img
                src={`${import.meta.env.BASE_URL}pharmazen-logo.svg`}
                alt="PharmaZen logo"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Nav - Centered */}
            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="p-2 text-white"
                onClick={() => setIsMenuOpen((v) => !v)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#006e62]/95 border-t border-[#ffffff12]"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white/95 py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-14 lg:h-20" aria-hidden="true" />
    </>
  );
};
