import rightArrow from '../icons/right-arroy.png';

export default function Experience({ id }) {
  return (
    <div className="lg:h-screen pl-[50px]" id={id}>
      <p className="font-bold text-[28px] mb-[25px] text-green-500">
        Where I’ve Worked
      </p>

      <div>
        <p className="font-bold text-[22px] mb-[25px]">
          <span className="text-blue-400">Customagic</span> /
          <span>Full-Stack Developer</span>
        </p>
        <p className="font-bold text-[18px] mb-[25px] text-zinc-400">
          May 2023 - up to now
        </p>
        <p className="font-bold text-[22px] mb-[25px] ">My duties</p>
        <ul className="text-[22px] mb-[15px]">
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Making refactoring companies websites on the receiving tasks, using
            HTML CSS, JS, PHP.
          </li>
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Making Front-end, Back-end parts of the project and the admin panel
            using PHP, SQL, Laravel, React.
          </li>
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Making mobile applications using React Native.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-[22px] mb-[25px]">
          <span className="text-blue-400">Webmaster Studio</span> /
          <span>Full-Stack Developer</span>
        </p>
        <p className="font-bold text-[18px] mb-[25px] text-zinc-400">
          February 2023 - May 2023
        </p>
        <p className="font-bold text-[22px] mb-[25px] ">My duties</p>
        <ul className="text-[22px] mb-[15px]">
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Making a website on the received design, using HTML CSS, JS, PHP.
          </li>
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Making Front-end, Back-end parts of the project and the admin panel
            using PHP, SQL.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-[22px] mb-[25px]">
          <span className="text-blue-400">Amid-auto</span> /
          <span> Developer</span>
        </p>
        <p className="font-bold text-[18px] mb-[25px] text-zinc-400">
          November 2022 - February 2023
        </p>
        <p className="font-bold text-[22px] mb-[25px] ">My duties</p>
        <ul className="text-[22px] mb-[15px]">
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Controlling of company website working with good and comfortable
            interface for customers.
          </li>
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Adding and changing products on website.
          </li>
        </ul>
      </div>

      {/* <div>
        <p className="font-bold text-[22px] mb-[25px]">
          <span className="text-blue-400">Moonglow</span> /
          <span>Website administrator</span>
        </p>
        <p className="font-bold text-[18px] mb-[25px] text-zinc-400">
          September 2022 - November 2022
        </p>
        <p className="font-bold text-[22px] mb-[25px] ">My duties</p>
        <ul className="text-[22px] mb-[15px]">
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Controlling of company website working with good and comfortable
            interface for customers.
          </li>
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Adding and changing products on website.
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold text-[22px] mb-[25px]">
          <span className="text-blue-400">Evo Publishing</span> /
          <span>Marketing assistant</span>
        </p>
        <p className="font-bold text-[18px] mb-[25px] text-zinc-400">
          January 2021 - July 2021
        </p>
        <p className="font-bold text-[22px] mb-[25px] ">My duties</p>
        <ul className="text-[22px] mb-[15px]">
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Analysis of competitors and market
          </li>
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Definition of target audience
          </li>
          <li>
            <img src={rightArrow} className="w-4 inline mr-3" alt="" />
            Conversion accounting.
          </li>
        </ul>
      </div> */}
    </div>
  );
}
