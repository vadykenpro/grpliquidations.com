import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";
import { FooterLogos } from "@/sections/Footer/components/FooterLogos";
import { FooterCredit } from "@/sections/Footer/components/FooterCredit";

export const Footer = () => {
  return (
    <footer className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
      <div className="text-[14.592px] content-center bg-white box-border caret-transparent grid leading-[24.8064px] outline-[3px] w-full py-[35px] md:text-[17px] md:leading-[28.9px]">
        <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[17px] md:leading-[28.9px]">
          <div className="text-[14.592px] items-center box-border caret-transparent gap-x-[50px] grid grid-cols-[1fr] leading-[24.8064px] max-w-[1200px] outline-[3px] mx-auto md:text-[17px] md:grid-cols-[repeat(3,1fr)] md:leading-[28.9px]">
            <FooterCopyright />
            <FooterLogos />
            <FooterCredit />
          </div>
        </div>
      </div>
    </footer>
  );
};
