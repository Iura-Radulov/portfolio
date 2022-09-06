import rightArrow from '../icons/right-arroy.png';

export default function Experience({ id }) {
  return (
    <div className="lg:h-screen pl-[30px]" id={id}>
      <h2 className="font-bold text-[28px] mb-[25px]">Experience</h2>
      <p className="font-bold text-[22px] mb-[25px] text-green-500">
        Where I’ve Worked
      </p>
      <p className="font-bold text-[22px] mb-[25px]">
        <span className="text-blue-400">Freelance</span> /
        <span> Front-End Developer</span>
      </p>
      <p className="font-bold text-[18px] mb-[25px] text-zinc-400">
        April 2022 - Present
      </p>
      <p className="font-bold text-[22px] mb-[25px] ">My duties</p>
      <ul className="text-[22px] mb-[15px]">
        <li>
          <img src={rightArrow} className="w-4 inline mr-3" alt="" />
          Making a website on the received design, using HTML CSS, JS.
        </li>
        <li>
          <img src={rightArrow} className="w-4 inline mr-3" alt="" />
          Rendering pages on the website by the getting dates from API.
        </li>
        <li>
          <img src={rightArrow} className="w-4 inline mr-3" alt="" />
          Using different libraries and sometimes React for some projects.
        </li>
      </ul>
    </div>
  );
}
