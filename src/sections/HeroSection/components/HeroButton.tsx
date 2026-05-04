export type HeroButtonProps = {
  href: string;
  text: string;
};

export const HeroButton = (props: HeroButtonProps) => {
  return (
    <a
      href={props.href}
      className="text-white text-sm bg-fuchsia-950 box-border caret-transparent inline-block fill-white tracking-[3px] leading-[14px] outline-[3px] break-words uppercase px-7 py-[15px] md:text-base md:leading-4 md:px-10 hover:outline-0 hover:border-violet-700"
    >
      <span className="text-sm box-border caret-transparent gap-x-[5px] flex fill-white justify-center leading-[14px] outline-[3px] break-words gap-y-[5px] md:text-base md:leading-4">
        <span className="text-sm box-border caret-transparent block fill-white leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] break-words md:text-base md:leading-4">
          {props.text}
        </span>
      </span>
    </a>
  );
};
