import { AnnouncementBar } from "@/sections/AnnouncementBar";
import { Header } from "@/sections/Header";
import { FloatingWidget } from "@/components/FloatingWidget";
import { SignupModal } from "@/components/SignupModal";

export const App = () => {
  return (
    <body className="relative text-zinc-600 text-[14.592px] not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[24.8064px] list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible mt-[79px] border-separate font-roboto md:text-[17px] md:leading-[28.9px] md:mt-[63px]">
      <AnnouncementBar />
      <Header />
      <img
        src="https://c.animaapp.com/morn8ketfEglOp/assets/75.gif"
        alt=""
        className="text-[14.592px] aspect-[auto_6_/_5] box-border caret-transparent hidden leading-[24.8064px] max-w-full outline-[3px] w-1.5 md:text-[17px] md:leading-[28.9px]"
      />
      <FloatingWidget showRecaptcha showRecaptchaSpacer showMainIframe />
      <SignupModal />
      <FloatingWidget
        containerClassName="fixed h-[84px] max-h-full max-w-full w-[84px] z-[2147483639] overflow-hidden right-0 bottom-0"
        showMainIframe={true}
        mainIframeName="chat-widget-minimized"
        mainIframeTitle="LiveChat chat widget"
        showPlaceholderDivs={true}
      />
    </body>
  );
};
