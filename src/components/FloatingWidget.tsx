export type FloatingWidgetProps = {
  containerClassName?: string;
  showRecaptcha?: boolean;
  recaptchaWrapperClassName?: string;
  recaptchaInnerClassName?: string;
  recaptchaIframeTitle?: string;
  recaptchaIframeRole?: string;
  recaptchaIframeName?: string;
  recaptchaIframeSrc?: string;
  recaptchaIframeClassName?: string;
  showRecaptchaSpacer?: boolean;
  recaptchaTextareaName?: string;
  recaptchaTextareaClassName?: string;
  showMainIframe?: boolean;
  mainIframeName?: string;
  mainIframeTitle?: string;
  mainIframeClassName?: string;
  showPlaceholderDivs?: boolean;
  placeholderClassName?: string;
};

export const FloatingWidget = (props: FloatingWidgetProps) => {
  return (
    <div
      className={`text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]${props.containerClassName ? ` ${props.containerClassName}` : ""}`}
    >
      {props.showRecaptcha ? (
        <div
          className={
            props.recaptchaWrapperClassName ||
            "text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] overflow-hidden md:text-[17px] md:leading-[28.9px] fixed shadow-[rgb(128,128,128)_0px_0px_5px_0px] h-[60px] right-[-186px] w-64 rounded-sm bottom-3.5"
          }
        >
          <div
            className={
              props.recaptchaInnerClassName ||
              "text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]"
            }
          >
            <iframe
              title={props.recaptchaIframeTitle || "reCAPTCHA"}
              role={props.recaptchaIframeRole || "presentation"}
              name={props.recaptchaIframeName || "a-sti1qchbuw5u"}
              src={
                props.recaptchaIframeSrc ||
                "https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeIE40rAAAAAEyB3blFyV3tQyiKCLGt7NYBzrdX&co=aHR0cHM6Ly9ncnBsaXF1aWRhdGlvbnMuY29tOjQ0Mw..&hl=en&v=dNfi_jsbkQb4Hbw7F1b82Uia&size=invisible&anchor-ms=20000&execute-ms=30000&cb=1ljpf66rthjb"
              }
              className={
                props.recaptchaIframeClassName ||
                "text-[14.592px] box-border caret-transparent inline h-[60px] leading-[24.8064px] max-w-full align-baseline w-64 md:text-[17px] md:leading-[28.9px]"
              }
            />
          </div>
          {props.showRecaptchaSpacer ? (
            <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]"></div>
          ) : null}
          <textarea
            name={props.recaptchaTextareaName || "g-recaptcha-response"}
            className={
              props.recaptchaTextareaClassName ||
              "appearance-none text-stone-500 text-[14.592px] box-border caret-transparent hidden h-10 leading-[24.8064px] resize-none w-[250px] border-stone-300 mx-[25px] my-2.5 p-0 md:text-[17px] md:leading-[28.9px]"
            }
          ></textarea>
        </div>
      ) : null}

      {props.showMainIframe ? (
        <iframe
          name={props.mainIframeName}
          title={props.mainIframeTitle}
          className={
            props.mainIframeClassName ||
            (props.showRecaptcha
              ? "text-[14.592px] box-border caret-transparent leading-[24.8064px] max-w-full align-baseline md:text-[17px] md:leading-[28.9px] hidden"
              : "text-[14.592px] box-border caret-transparent leading-[24.8064px] max-w-full align-baseline md:text-[17px] md:leading-[28.9px] h-full w-full")
          }
        ></iframe>
      ) : null}

      {props.showPlaceholderDivs ? (
        <>
          <div
            className={
              props.placeholderClassName ||
              "absolute text-[14.592px] box-border caret-transparent h-px leading-[24.8064px] outline-[3px] text-nowrap w-px overflow-hidden -m-px md:text-[17px] md:leading-[28.9px]"
            }
          ></div>
          <div
            className={
              props.placeholderClassName ||
              "absolute text-[14.592px] box-border caret-transparent h-px leading-[24.8064px] outline-[3px] text-nowrap w-px overflow-hidden -m-px md:text-[17px] md:leading-[28.9px]"
            }
          ></div>
        </>
      ) : null}
    </div>
  );
};
