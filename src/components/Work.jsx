import { gitHubIcon, linkIcon, folderIcon } from 'icons/svgIcon/svgIcons';

import { featuredProjects, otherProjects } from './portfolioItem';

export default function Work({ id }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8" id={id}>
      <p className="mb-16 text-center text-[28px] font-bold text-green-500">
        Some Things I’ve Built
      </p>

      {/* Featured projects — the ones highlighted in my resume */}
      <div className="space-y-20 md:space-y-28">
        {featuredProjects.map((item, idx) => (
          <div
            key={item.title}
            className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-400/10">
                <span className="text-gradient text-[7rem] font-black leading-none opacity-30 sm:text-[9rem]">
                  {item.title.charAt(0)}
                </span>
              </div>
            </div>

            <div className="flex-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gradient">
                Featured Project
              </p>
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                <a
                  href={item.link}
                  target="blank"
                  className="transition-colors duration-200 hover:text-cyan-300"
                >
                  {item.title}
                </a>
              </h3>
              <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <p className="text-lg text-slate-300">{item.description}</p>
              </div>
              <ul className="mb-6 flex flex-wrap gap-2">
                {item.technologies.map(tech => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 text-slate-300">
                {item.gitLink && (
                  <a href={item.gitLink} target="blank" aria-label="Source code">
                    {gitHubIcon}
                  </a>
                )}
                <a href={item.link} target="blank" aria-label="Live site">
                  {linkIcon}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other noteworthy projects */}
      <p className="mb-10 mt-28 text-center text-2xl font-bold">
        Other Noteworthy Projects
      </p>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map(item => (
          <li
            key={item.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/20"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-indigo-300">{folderIcon}</span>
              <div className="flex gap-3 text-slate-300">
                {item.gitLink && (
                  <a href={item.gitLink} target="blank" aria-label="Source code">
                    {gitHubIcon}
                  </a>
                )}
                <a href={item.link} target="blank" aria-label="Live site">
                  {linkIcon}
                </a>
              </div>
            </div>
            <p className="mb-2 text-lg font-bold">
              <a
                href={item.link}
                target="blank"
                className="transition-colors duration-200 hover:text-cyan-300"
              >
                {item.title}
              </a>
            </p>
            <p className="mb-6 flex-1 text-sm text-slate-400">
              {item.description}
            </p>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate-500">
              {item.technologies.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
