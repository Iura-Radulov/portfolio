import Contact from './Contact';
import Experience from './Experience';
import Work from './Work';
import { skillGroups } from './skills';
import utmLogo from '../icons/utm-logo.svg';
import goitIcon from '../icons/goitIcon.png';
// import evoLogo from '../images/evo-publishing.png';
import {
  gitHubIcon,
  linkedInIcon,
  telegramIcon,
  geoIcon,
  mailIcon,
} from 'icons/svgIcon/svgIcons';

export default function About() {
  return (
    <section id="about" className="">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 lg:pt-24">
        <div className="space-y-8">
          {/* About me — styled intro card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-glow backdrop-blur-sm md:p-12">
            <span className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" />
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gradient">
              About me
            </p>
            <div className="max-w-2xl">
              <h3 className="font-bold text-[22px] mb-[25px] text-green-500">
                My name is
              </h3>
              <p className="font-bold text-[38px] mb-[25px] text-blue-400">
                Iuri Radulov{' '}
              </p>
              <p className="text-[22px] mb-5">
                I am a Full stack developer with specialization in JavaScript and PHP. I worked with JS frameworks: React, Vue and PHP framework Laravel.
                I worked as front-end as back-end developer. In back-end I used Nodejs for JS and Laravel, Backpack for PHP.
                I have been interested in programming since a long time and wanted to make something important and useful.
                A lot of practice and work for the result are important for me. Also I am focused on the company development
                and on the team communication.
              </p>
              <div>
                <div className="flex">
                  {geoIcon}
                  <p className="mb-3 ml-3 text-lg">Moldova, Chisinau</p>
                </div>
                <div className="flex mb-5 items-center">
                  {mailIcon}
                  <a
                    href="mailto:iura.radulov@gmail.com"
                    target="blank"
                    className="ml-3 text-lg"
                  >
                    iura.radulov@gmail.com
                  </a>
                </div>
                <div className="flex mb-5">
                  <ul className="flex ml-[50px]">
                    <li className="w-10 mr-5">
                      <a href="https://github.com/Iura-Radulov" target="blank">
                        {gitHubIcon}
                      </a>
                    </li>
                    <li className="w-10 mr-5">
                      <a href="https://linkedin.com/in/iuri-radulov" target="blank">
                        {linkedInIcon}
                      </a>
                    </li>
                    <li className="w-10 mr-5">
                      <a href="https://t.me/Iuri_Radu" target="blank">
                        {telegramIcon}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Skills + Education — one combined block below About me */}
          <div className="grid gap-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:grid-cols-2 md:p-12">
            <div>
              <p className="font-bold text-[28px] mb-[25px] text-center">
                Tech Skills
              </p>
              <div className="space-y-6">
                {skillGroups.map(group => (
                  <div key={group.title}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                      {group.title}
                    </p>
                    <ul className="flex flex-wrap gap-2.5">
                      {group.skills.map(({ label, icon: Icon, color }) => (
                        <li
                          key={label}
                          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                        >
                          <Icon size={16} style={{ color }} />
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-[28px] mb-[25px] text-center">
                Education
              </p>
              <img src={utmLogo} className="w-[60px] inline" alt="" />
              <span className="text-[22px] ml-2 text-orange-500">
                Technical University of Moldova
              </span>
              <p className="text-[22px] pl-[65px]">Electric power Engineering</p>
              <p className="font-bold text-[18px] mb-[25px] pl-[65px] text-zinc-400">
                September 2003 - June 2007
              </p>
              <p className="font-bold text-[24px] mb-[20px] text-center">
                IT corse
              </p>
              <img src={goitIcon} className="w-[60px] inline" alt="" />
              <span className="text-[22px] ml-2 text-orange-500">
                IT School GoIT
              </span>
              <p className="text-[22px] pl-[65px]">Full stack developer</p>
              <p className="font-bold text-[18px] mb-[25px] pl-[65px] text-zinc-400">
                September 2021 - September 2022
              </p>
              {/* <p className="font-bold text-[24px] mb-[20px] text-center">
                Marketing corse
              </p>
              <img src={evoLogo} className="w-[60px] inline" alt="" />
              <span className="text-[22px] ml-2 text-orange-500">
                Evo publishing
              </span>
              <p className="text-[22px] pl-[65px]">Internet marketing</p>
              <p className="font-bold text-[18px] mb-[25px] pl-[65px] text-zinc-400">
                July 2020 - October 2020
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <Experience title="Experience" dark={true} id="experience" />
      <Work title="Work" dark={true} id="work" />
      <Contact title="Contact" dark={true} id="contact" />
    </section>
  );
}
