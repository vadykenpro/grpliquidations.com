export type LogoItemProps = {
  href: string;
  imageSrc: string;
  alt: string;
  sizes: string;
  imageVariantClass: string;
};

export const LogoItem = (props: LogoItemProps) => {
  return (
    <div className="relative text-[14.592px] box-border caret-transparent gap-x-2.5 leading-[24.8064px] max-w-full min-h-[auto] outline-[3px] break-words gap-y-2.5 text-center md:text-[17px] md:leading-[28.9px]">
      <div className="text-[14.592px] box-border caret-transparent h-full leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
        <a
          href={props.href}
          className="text-[14.592px] box-border caret-transparent inline-block leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
        >
          <img
            src={props.imageSrc}
            alt={props.alt}
            sizes={props.sizes}
            className={`text-[14.592px] box-border caret-transparent inline-block leading-[24.8064px] max-w-full outline-[3px] break-words md:text-[17px] md:leading-[28.9px] ${props.imageVariantClass}`}
          />
        </a>
      </div>
    </div>
  );
};
