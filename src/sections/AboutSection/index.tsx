import { SectionButton } from "@/components/Button";

export const AboutSection = () => {
  return (
    <section className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words my-[50px] px-2.5 md:text-[17px] md:leading-[28.9px] md:mt-20 md:mb-[100px] md:px-0">
      <div className="relative text-[14.592px] box-border caret-transparent flex flex-wrap leading-[24.8064px] max-w-[767px] outline-[3px] break-words mx-auto md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:max-w-[1140px]">
        <div className="relative text-[14.592px] box-border caret-transparent flex leading-[24.8064px] min-h-px min-w-[auto] outline-[3px] break-words w-full md:text-[17px] md:leading-[28.9px] md:w-6/12">
          <div className="relative text-[14.592px] content-center items-center box-border caret-transparent flex flex-wrap leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full mr-0 pt-5 pb-2.5 px-2.5 md:text-[17px] md:leading-[28.9px] md:mr-[60px] md:pb-5 md:px-5">
            <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full mb-2.5 md:text-[17px] md:leading-[28.9px]">
              <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                <h2 className="text-zinc-900 text-3xl font-medium box-border caret-transparent clear-both tracking-[3px] leading-[39px] break-words uppercase font-jost md:text-4xl md:tracking-[normal] md:leading-[46.8px]">
                  About us
                </h2>
              </div>
            </div>
            <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full mb-2.5 md:text-[17px] md:leading-[28.9px]">
              <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                <p className="text-[14.592px] box-border caret-transparent leading-[24.8064px] break-words md:text-[17px] md:leading-[28.9px]">
                  We don’t want to just gain customers. We want to create
                  lasting relationships and love seeing the transformations of
                  rooms and homes with items purchased from us!
                </p>
              </div>
            </div>
            <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full md:text-[17px] md:leading-[28.9px]">
              <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words mt-[25px] md:text-[17px] md:leading-[28.9px]">
                <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                  <SectionButton
                    href="https://lp.constantcontactpages.com/sl/r6BMS3l/grpliquidations"
                    text="Join Mailing List"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[14.592px] box-border caret-transparent flex leading-[24.8064px] min-h-px min-w-[auto] outline-[3px] break-words w-full md:text-[17px] md:leading-[28.9px] md:w-6/12">
          <div className="relative text-[14.592px] content-start box-border caret-transparent flex flex-wrap leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full p-2.5 md:text-[17px] md:leading-[28.9px] md:p-5">
            <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full md:text-[17px] md:leading-[28.9px]">
              <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                <img
                  src="https://c.animaapp.com/morn8ketfEglOp/assets/Untitled-design-5-1024x762.png"
                  alt=""
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="text-[14.592px] aspect-[auto_1024_/_762] box-border caret-transparent inline-block leading-[24.8064px] max-w-full outline-[3px] break-words w-[1024px] md:text-[17px] md:leading-[28.9px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
