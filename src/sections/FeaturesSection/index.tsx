import { FeatureCard } from "@/sections/FeaturesSection/components/FeatureCard";

export const FeaturesSection = () => {
  return (
    <section className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words my-10 md:text-[17px] md:leading-[28.9px] md:my-20">
      <div className="relative text-[14.592px] box-border caret-transparent flex flex-wrap leading-[24.8064px] max-w-[767px] outline-[3px] break-words mx-auto md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:max-w-[1140px]">
        <FeatureCard
          imageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/Untitled-design-37.png"
          imageAlt=""
          imageSizes="(max-width: 734px) 100vw, 734px"
          title="Incredible Deals & Steals"
          titleClassName="text-[21.888px] leading-[26.2656px] md:text-2xl md:leading-[28.8px]"
          description={
            <>
              You won’t believe the products you can pick up from GRP
              Liquidation… and you{"\u00A0"}
              <strong className="text-[14.592px] font-bold box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                definitely
              </strong>
              won’t believe the prices we offer!{"\u00A0"}
            </>
          }
        />
        <FeatureCard
          imageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/Untitled-design-8.png"
          imageAlt=""
          imageSizes="(max-width: 734px) 100vw, 734px"
          title="Reselling &amp; Whatnot Consulting"
          titleClassName="text-[23px] leading-[27.6px]"
          description={
            <>
              Do you want to learn how to make $50,000 a week reselling using
              the blueprints of our business? Email{" "}
              <strong className="text-[14.592px] font-bold box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                <a
                  href="mailto://jess@grpliquidations.com"
                  className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
                >
                  jess@grpliquidations.com
                </a>
              </strong>
            </>
          }
        />
        <FeatureCard
          imageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/Untitled-design-9.png"
          imageAlt=""
          imageSizes="(max-width: 734px) 100vw, 734px"
          title="Business Education Courses"
          titleClassName="text-[21.888px] leading-[26.2656px] md:text-2xl md:leading-[28.8px]"
          description="Want to start a side-hustle or learn how to do EXACTLY what we did and use liquidated products to replace a full-time income? We have your back."
        />
      </div>
    </section>
  );
};
