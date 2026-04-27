import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Work', href: '/#projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'About', href: '/#about' },
  { label: 'Education', href: '/education' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    setMounted(true);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const toggleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-lg font-bold gradient-text">
          AR
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            )
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary"
            aria-label="Toggle dark mode"
          >
            {mounted ? (
              currentTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <Link
            to="/#contact"
            className="text-sm px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setMobileOpen(false);
                }}
                className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary"
                aria-label="Toggle dark mode"
              >
                {mounted ? (
                  currentTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
