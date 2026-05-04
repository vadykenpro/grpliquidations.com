import { NavbarLogo } from "@/components/navigation/NavbarLogo";
import { MenuToggle } from "@/components/navigation/MenuToggle";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";

export const MobileNavbar = () => {
  return (
    <div className="text-[14.592px] box-border caret-transparent block leading-[24.8064px] outline-[3px] md:text-[17px] md:hidden md:leading-[28.9px]">
      <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
        <div className="relative text-[14.592px] bg-white box-border caret-transparent grid leading-[43.776px] min-h-[30px] outline-[3px] z-[4] m-0 md:text-[17px] md:bg-transparent md:block md:leading-[28.9px] md:mx-auto md:my-2.5">
          <div className="text-[14.592px] items-center box-border caret-transparent gap-x-5 grid grid-cols-[auto_auto] leading-[43.776px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0">
            <div className="text-[14.592px] items-center box-border caret-transparent flex h-full leading-[43.776px] min-w-[auto] outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-w-0">
              <div className="text-[14.592px] items-center box-border caret-transparent flex flex-wrap leading-[43.776px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0">
                <div className="text-[14.592px] self-center box-border caret-transparent basis-[0%] grow leading-[14.592px] min-h-[auto] min-w-[auto] outline-[3px] w-full ml-2.5 py-[14.592px] md:text-[17px] md:basis-auto md:grow-0 md:leading-[17px] md:min-h-0 md:min-w-0 md:w-auto md:ml-0 md:py-[17px]">
                  <NavbarLogo
                    wrapperClassName="text-[14.592px] box-border caret-transparent leading-[14.592px] outline-[3px] md:text-[17px] md:leading-[17px]"
                    primaryLinkHref="https://grpliquidations.com/"
                    primaryLinkAriaLabel="GRP Liquidations -  America's #1 Mystery Box"
                    primaryLinkClassName="text-[14.592px] box-border caret-transparent hidden leading-[14.592px] outline-[3px] md:text-[17px] md:inline md:leading-[17px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
                    primaryImageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/Web_GRLiquidations_HorzLogo-1-290x66.webp"
                    primaryImageAlt=""
                    primaryImageSizes="(max-width: 290px) 100vw, 290px"
                    primaryImageClassName="text-[14.592px] aspect-[auto_290_/_66] box-border caret-transparent inline leading-[14.592px] max-w-[50px] outline-[3px] w-[50px] md:text-[17px] md:leading-[17px] md:max-w-[290px] md:w-[290px]"
                    secondaryLinkHref="https://grpliquidations.com/"
                    secondaryLinkClassName="text-[14.592px] box-border caret-transparent block leading-[14.592px] outline-[3px] md:text-[17px] md:hidden md:leading-[17px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
                    secondaryImageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/cropped-Web_GRLiquidations_HorzLogo-1-1-273x62.webp"
                    secondaryImageAlt=""
                    secondaryImageSizes="(max-width: 2048px) 100vw, 2048px"
                    secondaryImageClassName="text-[14.592px] aspect-[auto_2048_/_462] box-border caret-transparent inline leading-[14.592px] max-w-[174px] outline-[3px] w-[174px] md:text-[17px] md:leading-[17px] md:max-w-52 md:w-52"
                  />
                </div>
              </div>
            </div>
            <div className="text-[14.592px] items-center box-border caret-transparent flex h-full justify-end leading-[43.776px] min-w-[auto] outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-w-0">
              <div className="text-[14.592px] items-center box-border caret-transparent flex flex-wrap leading-[43.776px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0">
                <div className="text-[14.592px] box-border caret-transparent leading-[43.776px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0">
                  <MenuToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};
