export type NavMenuItemProps = {
  href: string;
  label: string;
  linkClassName: string;
  title?: string;
  iconAriaLabel?: string;
  iconClassName?: string;
  itemCountText?: string;
};

export const NavMenuItem = (props: NavMenuItemProps) => {
  return (
    <li className="relative text-zinc-600 text-[14.592px] box-border caret-transparent flex flex-col justify-center leading-[43.776px] min-h-0 min-w-0 w-full md:text-black md:text-[17px] md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:w-auto">
      <a
        href={props.href}
        title={props.title}
        className={`box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:leading-[30px] md:min-h-[auto] md:min-w-[auto] hover:outline-0 ${props.linkClassName}`}
      >
        {props.iconClassName ? (
          <i
            role="img"
            aria-label={props.iconAriaLabel}
            className={props.iconClassName}
          ></i>
        ) : null}
        {props.itemCountText ? (
          <span className="text-[14.592px] box-border caret-transparent inline-block leading-[43.776px] outline-[3px] md:text-[17px] md:leading-[30px]">
            {props.itemCountText}
          </span>
        ) : (
          props.label
        )}
      </a>
    </li>
  );
};
