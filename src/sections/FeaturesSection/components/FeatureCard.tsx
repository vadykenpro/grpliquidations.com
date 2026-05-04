export type FeatureCardProps = {
  imageSrc: string;
  imageAlt: string;
  imageSizes: string;
  title: string;
  titleClassName: string;
  description: React.ReactNode;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="relative text-[14.592px] box-border caret-transparent flex leading-[24.8064px] min-h-px min-w-[auto] outline-[3px] break-words w-full md:text-[17px] md:leading-[28.9px] md:w-[33.333%]">
      <div className="relative text-[14.592px] content-start box-border caret-transparent flex flex-wrap leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full p-5 md:text-[17px] md:leading-[28.9px]">
        <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full mb-2.5 md:text-[17px] md:leading-[28.9px]">
          <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              sizes={props.imageSizes}
              className="text-[14.592px] aspect-[auto_734_/_898] box-border caret-transparent inline-block leading-[24.8064px] max-w-full outline-[3px] break-words w-full rounded-sm md:text-[17px] md:leading-[28.9px]"
            />
          </div>
        </div>
        <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full mb-2.5 md:text-[17px] md:leading-[28.9px]">
          <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words mt-5 md:text-[17px] md:leading-[28.9px]">
            <h4
              className={`text-zinc-900 font-semibold box-border caret-transparent clear-both break-words font-jost ${props.titleClassName}`}
            >
              {props.title}
            </h4>
          </div>
        </div>
        <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:text-[17px] md:leading-[28.9px]">
          <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words mr-0 md:text-[17px] md:leading-[28.9px] md:mr-5">
            <p className="text-[14.592px] box-border caret-transparent leading-[24.8064px] break-words md:text-[17px] md:leading-[28.9px]">
              <span className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                {props.description}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
