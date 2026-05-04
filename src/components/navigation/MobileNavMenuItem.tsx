export type MobileNavMenuItemProps = {
  href: string;
  label?: string;
  title?: string;
  linkClassName?: string;
  iconClassName?: string;
  itemCountText?: string;
};

export const MobileNavMenuItem = (props: MobileNavMenuItemProps) => {
  const hasCartContent = !!props.iconClassName || !!props.itemCountText;

  return (
    <li className="relative text-zinc-600 text-[14.592px] box-border caret-transparent flex flex-col justify-center leading-[43.776px] w-full md:text-black md:text-[17px] md:leading-[28.9px] md:w-auto">
      <a
        href={props.href}
        title={props.title}
        className={
          props.linkClassName ||
          "box-border caret-transparent block outline-[3px] md:leading-[28.9px] hover:outline-0 text-indigo-950 text-[12.768px] items-center bg-transparent h-full leading-[38.304px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black"
        }
      >
        {hasCartContent ? (
          <>
            {props.iconClassName ? (
              <i
                role="img"
                aria-label="Cart"
                className={props.iconClassName}
              ></i>
            ) : null}
            {props.itemCountText ? (
              <span className="text-[14.592px] box-border caret-transparent inline-block leading-[43.776px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
                {props.itemCountText}
              </span>
            ) : null}
          </>
        ) : (
          props.label
        )}
      </a>
    </li>
  );
};
