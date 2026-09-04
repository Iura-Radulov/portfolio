import { useState } from 'react';

import { gitHubIcon, linkIcon, folderIcon } from 'icons/svgIcon/svgIcons';
import { getProjectImages } from 'utils/projectImages';

import ImageSlider from './ImageSlider';
import ImageSliderModal from './ImageSliderModal';
import { featuredProjects, otherProjects, stacks } from './portfolioItem';

export default function Work({ id }) {
  const [modalProject, setModalProject] = useState(null);
  const [activeStacks, setActiveStacks] = useState([]);

  const toggleStack = stack => {
    setActiveStacks(prev =>
      prev.includes(stack)
        ? prev.filter(item => item !== stack)
        : [...prev, stack]
    );
  };

  const filteredOtherProjects =
    activeStacks.length === 0
      ? otherProjects
      : otherProjects.filter(item =>
          item.technologies.some(tech => activeStacks.includes(tech))
        );

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
              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-400/10 ${
                  getProjectImages(item.imagesFolder).length > 0
                    ? 'cursor-pointer'
                    : ''
                }`}
                onClick={() => {
                  if (getProjectImages(item.imagesFolder).length > 0) {
                    setModalProject(item);
                  }
                }}
              >
                {getProjectImages(item.imagesFolder).length > 0 ? (
                  <ImageSlider
                    images={getProjectImages(item.imagesFolder)}
                    alt={item.title}
                    className="h-full w-full"
                  />
                ) : (
                  <span className="text-gradient text-[7rem] font-black leading-none opacity-30 sm:text-[9rem]">
                    {item.title.charAt(0)}
                  </span>
                )}
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

      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveStacks([])}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
            activeStacks.length === 0
              ? 'border-cyan-300 bg-cyan-300/10 text-cyan-300'
              : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
          }`}
        >
          All
        </button>
        {stacks.map(stack => (
          <button
            key={stack}
            type="button"
            onClick={() => toggleStack(stack)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
              activeStacks.includes(stack)
                ? 'border-cyan-300 bg-cyan-300/10 text-cyan-300'
                : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
            }`}
          >
            {stack}
          </button>
        ))}
      </div>

      {filteredOtherProjects.length === 0 && (
        <p className="mb-10 text-center text-sm text-slate-400">
          No projects match the selected technologies.
        </p>
      )}

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredOtherProjects.map(item => (
          <li
            key={item.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/20"
          >
            <div className="mb-5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setModalProject(item)}
                aria-label={`View ${item.title} screenshots`}
                className="text-indigo-300 transition-colors duration-200 hover:text-cyan-300"
              >
                {folderIcon}
              </button>
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

      {modalProject && (
        <ImageSliderModal
          images={getProjectImages(modalProject.imagesFolder)}
          title={modalProject.title}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
}
