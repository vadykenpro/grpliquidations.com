import { LogoItem } from "@/sections/LogoGrid/components/LogoItem";

export const LogoGrid = () => {
  return (
    <div className="relative text-[14.592px] box-border caret-transparent flex flex-col leading-[24.8064px] max-w-full outline-[3px] break-words w-full mx-auto px-[5px] md:text-[17px] md:leading-[28.9px]">
      <div className="text-[14.592px] box-border caret-transparent gap-x-0 flex grow flex-wrap h-full leading-[24.8064px] max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] outline-[3px] break-words gap-y-0 w-full mx-auto py-[5px] md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:max-w-[min(100%,1140px)]">
        <div className="relative text-[14.592px] box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap leading-[24.8064px] min-h-[auto] outline-[3px] break-words gap-y-2.5 w-full p-[5px] md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:w-3/12">
          <LogoItem
            href="https://grpliquidations.com/product-category/mystery-boxes/"
            imageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/LEGO-KITS-3-1024x1024.png"
            alt=""
            sizes="(max-width: 1024px) 100vw, 1024px"
            imageVariantClass="aspect-[auto_1024_/_1024] opacity-[0.68] w-[1024px]"
          />
        </div>
        <div className="relative text-[14.592px] box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap leading-[24.8064px] min-h-[auto] outline-[3px] break-words gap-y-2.5 w-full p-[5px] md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:w-3/12">
          <LogoItem
            href="https://grpliquidations.com/product-category/pallets/"
            imageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/GRP-Pallets.png"
            alt=""
            sizes="(max-width: 500px) 100vw, 500px"
            imageVariantClass="text-[14.592px] aspect-[auto_500_/_500] box-border caret-transparent inline-block leading-[24.8064px] max-w-full outline-[3px] break-words w-[500px] md:text-[17px] md:leading-[28.9px]"
          />
        </div>
        <div className="relative text-[14.592px] box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap leading-[24.8064px] min-h-[auto] outline-[3px] break-words gap-y-2.5 w-full p-[5px] md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:w-3/12">
          <LogoItem
            href="https://www.whatnot.com/user/grpliquidations/shows"
            imageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/GRP-AUCTION.png"
            alt=""
            sizes="(max-width: 500px) 100vw, 500px"
            imageVariantClass="aspect-[auto_500_/_500] w-[500px]"
          />
        </div>
        <div className="relative text-[14.592px] box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap leading-[24.8064px] min-h-[auto] outline-[3px] break-words gap-y-2.5 w-full p-[5px] md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:w-3/12">
          <LogoItem
            href="https://grpliquidations.com/product-category/liquidation-truckload/"
            imageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/GRP-Truckloads.png"
            alt=""
            sizes="(max-width: 500px) 100vw, 500px"
            imageVariantClass="text-[14.592px] aspect-[auto_500_/_500] box-border caret-transparent inline-block leading-[24.8064px] max-w-full outline-[3px] break-words w-[500px] md:text-[17px] md:leading-[28.9px]"
          />
        </div>
      </div>
    </div>
  );
};
