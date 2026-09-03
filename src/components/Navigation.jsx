import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'work', label: 'Work' },
  { to: 'contact', label: 'Contact' },
];

const linkProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
  activeClass: 'active',
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Brand / logo */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-3"
          aria-label="Scroll to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-sm font-bold text-white shadow-glow transition-transform duration-200 group-hover:scale-105">
            IR
          </span>
          <span className="hidden text-lg font-semibold tracking-tight sm:block">
            Iuri <span className="text-gradient">Radulov</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              {...linkProps}
              className="link-underline cursor-pointer text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://iura-radulov.github.io/resume/"
            target="blank"
            className="rounded-full border border-indigo-400/40 px-4 py-1.5 text-sm font-medium text-indigo-300 transition-all duration-200 hover:border-transparent hover:bg-brand-gradient hover:text-white"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-slate-200 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {isOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-surface/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {navItems.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  {...linkProps}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-md px-2 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://iura-radulov.github.io/resume/"
                target="blank"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-md bg-brand-gradient px-2 py-2 text-center text-sm font-medium text-white"
              >
                Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
