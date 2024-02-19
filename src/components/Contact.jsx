import {
  gitHubIcon,
  linkedInIcon,
  telegramIcon,
  geoIcon,
  phoneIcon,
  mailIcon,
} from 'icons/svgIcon/svgIcons';

export default function Contact({ id }) {
  return (
    <div
      id={id}
      className="md:flex items-center justify-around md:h-[130px] bg-indigo-400 text-stone-700 py-5 pl-4"
    >
      <div className="mb-4 md:mb-0">
        <div className="flex">
          {geoIcon}
          <p className="mb-3 ml-3">Moldova, Chisinau</p>
        </div>
        <div className="flex">
          {phoneIcon}
          <a className="ml-3" href="tel:+37360267934">
            (+373)60267934
          </a>
        </div>
        <div className="flex mt-3">
          {mailIcon}
          <a
            href="mailto:iura.radulov@gmail.com"
            target="blank"
            className="ml-3"
          >
            iura.radulov@gmail.com
          </a>
        </div>
      </div>
      <ul className="flex ml-[50px]">
        <li className="w-8 mr-5">
          <a href="https://github.com/Iura-Radulov" target="blank">
            {gitHubIcon}
          </a>
        </li>
        <li className="w-8 mr-5">
          <a href="https://linkedin.com/in/iuri-radulov" target="blank">
            {linkedInIcon}
          </a>
        </li>
        <li className="w-8 mr-5">
          <a href="https://t.me/Iuri_Radu" target="blank">
            {' '}
            {telegramIcon}
          </a>
        </li>
      </ul>
    </div>
  );
}
