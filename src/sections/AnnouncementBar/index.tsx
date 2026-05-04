export const AnnouncementBar = () => {
  return (
    <p
      role="complementary"
      aria-label="Store notice"
      className="fixed text-white text-[14.592px] bg-purple-950 shadow-[rgba(0,0,0,0.2)_0px_1px_14.592px_0px] box-border caret-transparent leading-[24.8064px] text-center w-full z-[99998] py-[14.592px] top-0 inset-x-0 md:text-[17px] md:shadow-[rgba(0,0,0,0.2)_0px_1px_17px_0px] md:leading-[28.9px] md:py-[17px]"
    >
      We&#39;ve moved! Visit us at 903 Chicago Dr. SW, Grand Rapids, MI 49509.{" "}
      <a
        role="button"
        href="#"
        className="text-[14.592px] bg-purple-950 box-border caret-transparent leading-[24.8064px] outline-[3px] underline md:text-[17px] md:leading-[28.9px] hover:outline-0"
      >
        Dismiss
      </a>
    </p>
  );
};
