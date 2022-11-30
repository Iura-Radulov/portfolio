// import { imageListClasses } from '@mui/material';
import { gitHubIcon, linkIcon } from 'icons/svgIcon/svgIcons';
// import { useState } from 'react';
// import Backdrop from '@mui/material/Backdrop';

import portfolio from './portfolioItem';

export default function Work({ id }) {
  // const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = e => {
  //   setOpen(!open);

  // };
  return (
    <div className="lg:h-screen pl-[30px]" id={id}>
      <p className="font-bold text-[28px] mb-[25px] text-center text-green-500">
        Some Things I’ve Built
      </p>

      <div>
        <ul className="flex flex-wrap">
          {portfolio.map(item => (
            <li className="flex flex-col w-[300px] h-[300px] bg-zinc-600 m-5 p-5">
              <div className="flex justify-between">
                {/* <div>
                  <button type="button" onClick={handleToggle}>
                    {imgIcon}
                  </button>
                  <Backdrop
                    sx={{
                      color: '#fff',
                      zIndex: theme => theme.zIndex.drawer + 1,
                    }}
                    open={open}
                    onClick={handleClose}
                  >
                    <img
                      src={item.image}
                      alt="work example"
                      className="w-[50%]"
                    />
                  </Backdrop>
                </div> */}

                <div className="flex">
                  <a className="mr-3" href={item.gitLink} target="blank">
                    {gitHubIcon}
                  </a>
                  <a className="mr-3" href={item.link} target="blank">
                    {linkIcon}
                  </a>
                </div>
              </div>
              <p className="text-[28px] mb-3 mt-2 flex-none">{item.title}</p>
              <p className="text-[20px] flex-1">{item.description}</p>
              <ul className="flex text-[#F59256]">
                {item.technologies.map(tech => (
                  <li className="mr-3">{tech}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
