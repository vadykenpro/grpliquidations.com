import { HeroSection } from "@/sections/HeroSection";
import { ProductSection } from "@/sections/ProductSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { LogoGrid } from "@/sections/LogoGrid";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";

export const MainContent = () => {
  return (
    <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
      <div className="text-[14.592px] box-border caret-transparent block flex-col leading-[24.8064px] max-w-full outline-[3px] mx-auto md:text-[17px] md:flex md:flex-row md:leading-[28.9px]">
        <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-0 min-w-0 outline-[3px] w-full md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto]">
          <main className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
            <article className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
              <header className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words mx-auto px-5 md:text-[17px] md:leading-[28.9px]"></header>
              <div className="text-[14.592px] box-border caret-transparent clear-both leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-zinc-600 after:table after:text-[14.592px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[24.8064px] after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto after:md:text-[17px] after:md:leading-[28.9px]">
                <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                  <HeroSection />
                  <ProductSection />
                  <FeaturesSection />
                  <LogoGrid />
                  <AboutSection />
                  <ContactSection />
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};
