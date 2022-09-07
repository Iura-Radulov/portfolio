import { gitHubIcon, linkIcon } from 'icons/svgIcon/svgIcons';

export default function Work({ id }) {
  return (
    <div className="lg:h-screen pl-[30px]" id={id}>
      <p className="font-bold text-[22px] mb-[25px] text-green-500">
        Some Things I’ve Built
      </p>
      <p className="font-bold text-[28px] mb-[25px]">Using technologies</p>
      <div>
        <ul>
          <li>
            <button type="button">HTML, CSS, JS</button>
          </li>
        </ul>
        <div>
          <ul>
            <li className="flex flex-col w-[300px] h-[300px] bg-zinc-600 p-5">
              <div className="flex justify-end">
                <a
                  className="mr-3"
                  href="https://iura-radulov.github.io/web-studio/"
                >
                  {gitHubIcon}
                </a>
                <a
                  className="mr-3"
                  href="https://serhiionyshchenko.github.io/team-project/"
                >
                  {linkIcon}
                </a>
              </div>
              <p className="text-[28px] flex-none">WebStudio</p>
              <p className="text-[20px] flex-1">
                Website of a WebStudio company with their services and
                portfolio.
              </p>
              <ul className="flex flex-none">
                <li className="mr-3">HTML</li>
                <li className="mr-3">SCSS</li>
                <li>JS</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
