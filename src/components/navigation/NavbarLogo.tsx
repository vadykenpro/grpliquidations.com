export type NavbarLogoProps = {
  wrapperClassName?: string;
  primaryLinkHref?: string;
  primaryLinkAriaLabel?: string;
  primaryLinkClassName?: string;
  primaryImageSrc?: string;
  primaryImageAlt?: string;
  primaryImageSizes?: string;
  primaryImageClassName?: string;
  secondaryLinkHref?: string;
  secondaryLinkClassName?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  secondaryImageSizes?: string;
  secondaryImageClassName?: string;
};

export const NavbarLogo = (props: NavbarLogoProps) => {
  return (
    <span
      className={
        props.wrapperClassName ??
        "text-[14.592px] box-border caret-transparent leading-[14.592px] outline-[3px] md:text-[17px] md:leading-[17px]"
      }
    >
      <a
        href={props.primaryLinkHref ?? "https://grpliquidations.com/"}
        aria-label={
          props.primaryLinkAriaLabel ??
          "GRP Liquidations -  America's #1 Mystery Box"
        }
        className={
          props.primaryLinkClassName ??
          "text-[14.592px] box-border caret-transparent hidden leading-[14.592px] outline-[3px] md:text-[17px] md:inline md:leading-[17px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
        }
      >
        <img
          src={
            props.primaryImageSrc ??
            "https://c.animaapp.com/morn8ketfEglOp/assets/Web_GRLiquidations_HorzLogo-1-290x66.webp"
          }
          alt={props.primaryImageAlt ?? ""}
          sizes={props.primaryImageSizes ?? "(max-width: 290px) 100vw, 290px"}
          className={
            props.primaryImageClassName ??
            "text-[14.592px] aspect-[auto_290_/_66] box-border caret-transparent inline leading-[14.592px] max-w-[50px] outline-[3px] w-[50px] md:text-[17px] md:leading-[17px] md:max-w-[290px] md:w-[290px]"
          }
        />
      </a>
      <a
        href={props.secondaryLinkHref ?? "https://grpliquidations.com/"}
        className={
          props.secondaryLinkClassName ??
          "text-[14.592px] box-border caret-transparent block leading-[14.592px] outline-[3px] md:text-[17px] md:hidden md:leading-[17px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
        }
      >
        <img
          src={
            props.secondaryImageSrc ??
            "https://c.animaapp.com/morn8ketfEglOp/assets/cropped-Web_GRLiquidations_HorzLogo-1-1-273x62.webp"
          }
          alt={props.secondaryImageAlt ?? ""}
          sizes={
            props.secondaryImageSizes ?? "(max-width: 2048px) 100vw, 2048px"
          }
          className={
            props.secondaryImageClassName ??
            "text-[14.592px] aspect-[auto_2048_/_462] box-border caret-transparent inline leading-[14.592px] max-w-[174px] outline-[3px] w-[174px] md:text-[17px] md:leading-[17px] md:max-w-52 md:w-52"
          }
        />
      </a>
    </span>
  );
};
