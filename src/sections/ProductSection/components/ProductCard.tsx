export type ProductCardProps = {
  productUrl: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  price: string;
  originalPrice?: string;
  showSaleBadge?: boolean;
  saleBadgeText?: string;
  actionUrl: string;
  actionText: string;
  actionAriaLabel: string;
  sizes?: string;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <li className="relative text-[14.592px] box-border caret-transparent flex flex-col leading-[24.8064px] min-h-[auto] min-w-[auto] break-words text-left w-full mb-[36.48px] md:text-[17px] md:leading-[28.9px] md:mb-[42.5px]">
      <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
        {props.showSaleBadge ? (
          <span className="absolute text-white text-[11.6736px] bg-purple-600 box-border caret-transparent block leading-[35.0208px] mr-[-5.8368px] mt-[-5.8368px] min-h-[35.0208px] min-w-[35.0208px] outline-[3px] break-words text-center z-[9] rounded-[100%] right-0 top-0 md:text-[13.6px] md:leading-[40.8px] md:mr-[-6.8px] md:mt-[-6.8px] md:min-h-[40.8px] md:min-w-[40.8px]">
            {props.saleBadgeText || "Sale!"}
          </span>
        ) : null}
        <a
          href={props.productUrl}
          className="relative text-[14.592px] box-border caret-transparent block leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
        >
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            sizes={props.sizes || "(max-width: 300px) 100vw, 300px"}
            className="text-[14.592px] aspect-[auto_300_/_300] box-border caret-transparent leading-[24.8064px] max-w-full outline-[3px] break-words w-full mb-[11.6736px] md:text-[17px] md:leading-[28.9px] md:mb-[13.6px]"
          />
        </a>
      </div>

      <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
        <a
          href={props.productUrl}
          className="text-[14.592px] box-border caret-transparent inline-block leading-[24.8064px] outline-[3px] break-words w-full md:text-[17px] md:leading-[28.9px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
        >
          <h2 className="text-zinc-900 text-[16.0512px] font-medium box-border caret-transparent clear-both leading-[20.8666px] break-words mb-[8.0256px] font-jost md:text-[18.7px] md:leading-[24.31px] md:mb-[9.35px]">
            {props.title}
          </h2>
        </a>

        <span className="text-[13.1328px] font-bold box-border caret-transparent block leading-[17.0726px] outline-[3px] break-words mb-[6.5664px] md:text-[15.3px] md:leading-[19.89px] md:mb-[7.65px]">
          {props.originalPrice ? (
            <>
              <del className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] opacity-50 outline-[3px] break-words line-through md:text-[15.3px] md:leading-[19.89px]">
                <span className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] outline-[3px] break-words md:text-[15.3px] md:leading-[19.89px]">
                  <bdi className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] outline-[3px] break-words md:text-[15.3px] md:leading-[19.89px]">
                    <span className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] outline-[3px] break-words md:text-[15.3px] md:leading-[19.89px]">
                      $
                    </span>
                    {props.originalPrice}
                  </bdi>
                </span>
              </del>
              <ins className="text-[13.1328px] box-border caret-transparent inline-block leading-[17.0726px] outline-[3px] break-words bg-[position:0px_0px] md:text-[15.3px] md:leading-[19.89px]">
                <span className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] outline-[3px] break-words md:text-[15.3px] md:leading-[19.89px]">
                  <bdi className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] outline-[3px] break-words md:text-[15.3px] md:leading-[19.89px]">
                    <span className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] outline-[3px] break-words md:text-[15.3px] md:leading-[19.89px]">
                      $
                    </span>
                    {props.price}
                  </bdi>
                </span>
              </ins>
            </>
          ) : (
            <span className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] outline-[3px] break-words md:text-[15.3px] md:leading-[19.89px]">
              <bdi className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] outline-[3px] break-words md:text-[15.3px] md:leading-[19.89px]">
                <span className="text-[13.1328px] box-border caret-transparent leading-[17.0726px] outline-[3px] break-words md:text-[15.3px] md:leading-[19.89px]">
                  $
                </span>
                {props.price}
              </bdi>
            </span>
          )}
        </span>

        <a
          href={props.actionUrl}
          aria-label={props.actionAriaLabel}
          className="relative text-white text-[14.592px] font-bold bg-purple-600 box-border caret-transparent inline-block tracking-[3px] leading-[18.9696px] outline-[3px] break-words my-[7.296px] px-[10.944px] py-[7.296px] md:text-[17px] md:leading-[22.1px] md:my-[8.5px] md:px-10 md:py-[15px] hover:bg-violet-700 hover:outline-0 hover:border-violet-700"
        >
          {props.actionText}
        </a>
      </div>
    </li>
  );
};
