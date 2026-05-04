import { MobileNavMenuItem } from "@/components/navigation/MobileNavMenuItem";
import { MobileNavDropdownItem } from "@/components/navigation/MobileNavDropdownItem";

export const MobileMenu = () => {
  return (
    <div className="text-[14.592px] bg-white box-border caret-transparent hidden leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
      <div className="text-[14.592px] items-center box-border caret-transparent flex flex-wrap justify-start leading-[24.8064px] outline-[3px] uppercase w-full md:text-[17px] md:leading-[28.9px] md:w-auto">
        <div className="text-[14.592px] box-border caret-transparent grow leading-[24.8064px] order-4 outline-[3px] w-full ml-auto md:text-[17px] md:grow-0 md:leading-[28.9px] md:order-none md:w-auto">
          <div className="text-[14.592px] box-border caret-transparent grow leading-[43.776px] outline-[3px] w-full md:text-[17px] md:grow-0 md:leading-[28.9px] md:w-auto">
            <nav
              aria-label="Site Navigation: Main Menu"
              className="text-[14.592px] box-border caret-transparent grow h-full leading-[43.776px] outline-[3px] md:text-[17px] md:leading-[28.9px]"
            >
              <div className="text-[14.592px] content-center items-center box-border caret-transparent block flex-wrap h-full leading-[43.776px] outline-[3px] w-full md:text-[17px] md:inline-flex md:leading-[28.9px] md:w-auto">
                <ul className="relative text-zinc-600 text-[14.592px] self-center bg-stone-50 box-border caret-transparent flex flex-wrap leading-[43.776px] list-none text-left pl-0 md:text-black md:text-[17px] md:bg-transparent md:leading-[28.9px]">
                  <MobileNavMenuItem
                    href="https://grpliquidations.com/product-category/buy-it-now/"
                    label="Shop"
                    linkClassName="text-indigo-950 text-[12.768px] items-center bg-transparent box-border caret-transparent block h-full leading-[38.304px] outline-[3px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:leading-[28.9px] md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
                  />
                  <MobileNavMenuItem
                    href="https://grpliquidations.com/product-category/mystery-boxes/"
                    label="Mystery Boxes"
                    linkClassName="text-indigo-950 text-[12.768px] items-center bg-transparent box-border caret-transparent block h-full leading-[38.304px] outline-[3px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:leading-[28.9px] md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
                  />
                  <MobileNavDropdownItem
                    title="Pallets"
                    href="https://grpliquidations.com/product-category/pallets/"
                    toggleIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-1.svg"
                    buttonIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-2.svg"
                    submenuItems={[
                      {
                        label: "Liquidation Truckloads",
                        href: "https://grpliquidations.com/product-category/liquidation-truckload/",
                        iconUrl:
                          "https://c.animaapp.com/morn8ketfEglOp/assets/icon-3.svg",
                      },
                    ]}
                  />
                  <MobileNavMenuItem
                    href="https://grpliquidations.com/blog/"
                    label="Blog"
                    linkClassName="text-indigo-950 text-[12.768px] items-center bg-transparent box-border caret-transparent block h-full leading-[38.304px] outline-[3px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:leading-[28.9px] md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
                  />
                  <MobileNavDropdownItem
                    title="About"
                    href="https://grpliquidations.com/about/"
                    toggleIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-1.svg"
                    buttonIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-2.svg"
                    submenuItems={[
                      {
                        label: "FAQs",
                        href: "https://grpliquidations.com/frequently-asked-questions/",
                        iconUrl:
                          "https://c.animaapp.com/morn8ketfEglOp/assets/icon-3.svg",
                      },
                      {
                        label: "Services",
                        href: "https://grpliquidations.com/services/",
                        iconUrl:
                          "https://c.animaapp.com/morn8ketfEglOp/assets/icon-3.svg",
                      },
                    ]}
                  />
                  <MobileNavMenuItem
                    href="https://grpliquidations.com/my-account-2/"
                    label="Account"
                  />
                  <MobileNavMenuItem
                    href="https://grpliquidations.com/contact-3/"
                    label="Contact"
                  />
                  <MobileNavMenuItem
                    href="https://grpliquidations.com/shop-2/"
                    title="Start shopping"
                    linkClassName="text-[14.592px] box-border caret-transparent block leading-[43.776px] outline-[3px] md:text-[17px] md:leading-[28.9px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
                    iconClassName="text-[14.592px] italic box-border caret-transparent leading-[43.776px] outline-[3px] md:text-[17px] md:leading-[28.9px] before:accent-auto before:bg-[position:0px_0px] before:box-border before:caret-transparent before:text-zinc-600 before:text-[14.592px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:uppercase before:visible before:mr-[3.648px] before:border-separate before:font-wpmenucart before:md:text-[17px] before:md:mr-[4.25px]"
                    itemCountText="0 items"
                  />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="text-[14.592px] items-center box-border caret-transparent flex flex-wrap justify-start leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
        <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
          <a
            href=""
            className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
          >
            <div className="text-gray-100 text-[13.68px] bg-purple-600 box-border caret-transparent tracking-[3px] leading-[13.68px] outline-[3px] m-5 px-7 py-[15px] md:text-[15px] md:leading-[15px] md:m-0 md:px-10 hover:text-white hover:bg-violet-700 hover:border-white"></div>
          </a>
          <a
            href=""
            className="text-[14.592px] box-border caret-transparent hidden leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
          ></a>
        </div>
      </div>
    </div>
  );
};
