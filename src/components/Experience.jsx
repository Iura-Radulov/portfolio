import rightArrow from '../icons/right-arroy.png';

export default function Experience({ id }) {
  return (
    <div className="lg:h-screen pl-[50px]" id={id}>
      <p className="font-bold text-[28px] mb-[25px] text-green-500">
        Where I’ve Worked
      </p>
      <div>
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
      <div>
        <p className="font-bold text-[22px] mb-[25px]">
          <span className="text-blue-400">Moldavian GRES</span> /
          <span>Electrical engineer</span>
        </p>
        <p className="font-bold text-[18px] mb-[25px] text-zinc-400">
          March 2013 - October 2020
        </p>
        <p className="font-bold text-[22px] mb-[25px] ">My duties</p>
        <ul className="text-[22px] mb-[15px]">
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Control of the working of transformer substations.
          </li>
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Decreasing of losses in electrical networks of 110, 330 kV.
          </li>
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Ensuring reliable operation of power plant equipments.
          </li>
        </ul>
      </div>
    </div>
  );
}
