import { SectionButton } from "@/components/Button";

export const ContactSection = () => {
  return (
    <section className="relative text-[14.592px] bg-[url('https://grpliquidations.com/wp-content/uploads/2023/11/Untitled-design-1.png')] bg-no-repeat bg-cover box-border caret-transparent leading-[24.8064px] outline-[3px] break-words bg-center pt-[50px] pb-[120px] px-5 md:text-[17px] md:leading-[28.9px] md:pt-[100px] md:pb-[200px] md:px-0">
      <div className="absolute text-[14.592px] bg-[linear-gradient(rgb(255,255,255)_0%,rgb(41,242,61)_100%)] box-border caret-transparent leading-[24.8064px] opacity-[0.66] outline-[3px] break-words inset-0 md:text-[17px] md:leading-[28.9px]"></div>
      <div className="relative text-[14.592px] box-border caret-transparent flex flex-wrap leading-[24.8064px] max-w-[575px] outline-[3px] break-words mx-auto md:text-[17px] md:flex-nowrap md:leading-[28.9px]">
        <div className="relative text-[14.592px] box-border caret-transparent flex leading-[24.8064px] min-h-px min-w-[auto] outline-[3px] break-words w-full md:text-[17px] md:leading-[28.9px]">
          <div className="relative text-[14.592px] content-center items-center box-border caret-transparent flex flex-wrap leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full p-2.5 md:text-[17px] md:leading-[28.9px]">
            <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full mb-[15px] md:text-[17px] md:leading-[28.9px]">
              <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                <h2 className="text-fuchsia-950 text-[35px] font-medium box-border caret-transparent clear-both tracking-[3px] leading-[45.5px] break-words uppercase font-jost md:text-[41px] md:tracking-[4.92px] md:leading-[53.3px]">
                  Talk to us
                </h2>
              </div>
            </div>
            <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full mb-[15px] md:text-[17px] md:leading-[28.9px]">
              <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                <p className="text-[14.592px] box-border caret-transparent leading-[24.8064px] break-words md:text-[17px] md:leading-[28.9px]">
                  Have any questions? We are always open to talk about your
                  business, new projects, creative opportunities and how we can
                  help you.
                </p>
              </div>
            </div>
            <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full md:text-[17px] md:leading-[28.9px]">
              <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words mt-[25px] md:text-[17px] md:leading-[28.9px]">
                <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                  <SectionButton
                    href="https://direct.lc.chat/19206035"
                    text="Get In Touch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
