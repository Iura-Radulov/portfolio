import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rightArrow from '../icons/right-arroy.png';
import { experience } from './experience';

export default function Experience({ id }) {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8" id={id}>
      <p className="mb-12 text-[28px] font-bold text-green-500">
        Where I’ve Worked
      </p>

      <div className="flex flex-col md:flex-row md:gap-10">
        {/* Tabs */}
        <div className="relative flex overflow-x-auto border-b border-white/10 md:w-56 md:flex-shrink-0 md:flex-col md:overflow-visible md:border-b-0 md:border-l">
          {experience.map((item, idx) => (
            <button
              key={item.company}
              type="button"
              onClick={() => setActive(idx)}
              className={`relative whitespace-nowrap px-4 py-3 text-left text-sm font-medium transition-colors duration-200 md:px-5 md:py-3 ${
                active === idx
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {active === idx && (
                <motion.span
                  layoutId="exp-indicator"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-gradient md:inset-x-auto md:inset-y-0 md:left-0 md:h-auto md:w-0.5"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[280px] flex-1 pt-6 md:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xl font-bold sm:text-2xl">
                {job.role}{' '}
                <span className="text-blue-400">@ {job.company}</span>
              </p>
              <p className="mb-6 mt-1 text-sm font-semibold text-zinc-400">
                {job.date}
              </p>
              <ul className="space-y-3">
                {job.duties.map(duty => (
                  <li key={duty} className="flex gap-3 text-lg text-slate-300">
                    <img
                      src={rightArrow}
                      className="mt-1.5 h-3 w-3 flex-none"
                      alt=""
                    />
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
