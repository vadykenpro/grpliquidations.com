export type NavDropdownItemProps = {
  title: string;
  href: string;
  submenuIconUrl: string;
  toggleIconUrl: string;
  itemIconUrl: string;
  items: {
    label: string;
    href: string;
  }[];
};

export const NavDropdownItem = (props: NavDropdownItemProps) => {
  return (
    <li className="relative text-zinc-600 text-[14.592px] box-border caret-transparent flex flex-col justify-center leading-[43.776px] min-h-0 min-w-0 w-full md:text-black md:text-[17px] md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:w-auto">
      <a
        href={props.href}
        className="text-indigo-950 text-[12.768px] items-center bg-transparent box-border caret-transparent block h-full leading-[38.304px] min-h-0 min-w-0 outline-[3px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
      >
        {props.title}
        <span
          role="application"
          aria-label="Menu Toggle"
          className="text-indigo-950 text-[12.768px] box-border caret-transparent hidden leading-[38.304px] min-h-0 min-w-0 outline-[3px] md:text-black md:text-sm md:block md:leading-[30px] md:min-h-[auto] md:min-w-[auto]"
        >
          <span className="text-indigo-950 text-[12.768px] box-border caret-transparent leading-[38.304px] outline-[3px] mr-[5px] md:text-black md:text-sm md:leading-[30px] md:mr-0">
            <img
              src={props.submenuIconUrl}
              alt="Icon"
              className="relative text-indigo-950 text-[12.768px] box-border caret-transparent inline h-[10.8528px] leading-[38.304px] outline-[3px] align-baseline w-[8.2992px] ml-0 top-[2.5536px] md:text-black md:text-sm md:h-[8.4px] md:leading-[30px] md:w-[8.4px] md:ml-2.5 md:top-auto"
            />
          </span>
        </span>
      </a>
      <button className="absolute text-zinc-600 text-[14.592px] bg-transparent caret-transparent block tracking-[3px] leading-[43.776px] outline-[3px] text-center normal-case px-[13.2349px] py-0 right-5 top-0 md:static md:text-black md:text-base md:hidden md:leading-4 md:right-[-5.512px] md:px-10 md:py-[15px] md:top-[9px] hover:border-black">
        <span className="text-zinc-600 text-[14.592px] box-border caret-transparent leading-[43.776px] outline-[3px] pointer-events-none md:text-black md:text-base md:leading-4 md:pointer-events-auto">
          <img
            src={props.toggleIconUrl}
            alt="Icon"
            className="relative text-zinc-600 text-[14.592px] box-border caret-transparent inline h-[12.4032px] leading-[43.776px] outline-[3px] pointer-events-none align-baseline w-[13.8624px] ml-2.5 md:text-black md:text-base md:h-[9.6px] md:leading-4 md:pointer-events-auto md:w-[9.6px]"
          />
        </span>
      </button>
      <ul className="static text-zinc-600 text-[14.592px] bg-stone-50 shadow-none box-border caret-transparent hidden leading-[43.776px] visible w-auto z-[99999] mt-0 pl-0 left-auto top-full md:absolute md:text-black md:text-[17px] md:bg-white md:shadow-[rgba(0,0,0,0.1)_0px_4px_10px_-2px] md:block md:left-[-16983px] md:leading-[24.65px] md:invisible md:w-[1200px] md:mt-[87px] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-black before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[92px] before:md:tracking-[normal] before:md:leading-[24.65px] before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:absolute before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-start before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:uppercase before:md:underline-offset-auto before:md:translate-y-[-92px] before:md:invisible before:md:w-full before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:left-0 before:md:top-0 before:md:font-roboto">
        {props.items.map((item, index) => (
          <li
            className="relative text-zinc-600 text-[14.592px] box-border caret-transparent flex flex-col justify-center leading-[43.776px] visible w-full md:text-black md:text-[17px] md:leading-[24.65px] md:invisible md:w-auto"
            key={index}
          >
            <a
              href={item.href}
              className="text-indigo-950 text-[12.768px] box-border caret-transparent block leading-[38.304px] min-h-0 min-w-0 outline-[3px] break-words visible w-full border-neutral-400 pl-[30px] pr-5 py-0 border-b border-solid md:text-black md:text-sm md:leading-[20.3px] md:min-h-[auto] md:min-w-[auto] md:invisible md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
            >
              <span className="text-indigo-950 text-[12.768px] box-border caret-transparent inline leading-[38.304px] outline-[3px] break-words visible mr-[5px] md:text-black md:text-sm md:hidden md:leading-[20.3px] md:invisible md:mr-0">
                <img
                  src={props.itemIconUrl}
                  alt="Icon"
                  className="relative text-indigo-950 text-[12.768px] box-border caret-transparent inline h-[10.8528px] leading-[38.304px] outline-[3px] align-baseline visible w-[8.2992px] ml-0 top-[2.5536px] md:text-black md:text-sm md:h-[8.4px] md:leading-[20.3px] md:invisible md:w-[8.4px] md:ml-2.5 md:top-auto"
                />
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
