import { animateScroll as scroll } from 'react-scroll';
import {
  gitHubIcon,
  linkedInIcon,
  telegramIcon,
  geoIcon,
  phoneIcon,
  mailIcon,
} from 'icons/svgIcon/svgIcons';

const socials = [
  { href: 'https://github.com/Iura-Radulov', icon: gitHubIcon, label: 'GitHub' },
  {
    href: 'https://linkedin.com/in/iuri-radulov',
    icon: linkedInIcon,
    label: 'LinkedIn',
  },
  { href: 'https://t.me/Iuri_Radu', icon: telegramIcon, label: 'Telegram' },
];

export default function Contact({ id }) {
  const scrollToTop = () => scroll.scrollToTop();

  return (
    <footer id={id} className="relative mt-10 border-t border-white/10 bg-surface/70 backdrop-blur-md">
      {/* thin brand gradient divider so the footer reads as part of the same system as the header */}
      <span className="absolute top-0 left-0 h-px w-full bg-brand-gradient" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gradient">
            Get in touch
          </p>
          <div className="mt-4 space-y-3 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-indigo-300">
                {geoIcon}
              </span>
              <p>Moldova, Chisinau</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-indigo-300">
                {phoneIcon}
              </span>
              <a
                className="transition-colors duration-200 hover:text-white"
                href="tel:+37360267934"
              >
                (+373) 60 267 934
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-indigo-300">
                {mailIcon}
              </span>
              <a
                className="transition-colors duration-200 hover:text-white"
                href="mailto:iura.radulov@gmail.com"
                target="blank"
              >
                iura.radulov@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <ul className="flex gap-3">
            {socials.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="blank"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-brand-gradient hover:text-white"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Back to top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 19V5M5 12l7-7 7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-slate-500 sm:px-8">
        © {new Date().getFullYear()} Iuri Radulov. Built with React &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
