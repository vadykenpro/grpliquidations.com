import { NavbarLogo } from "@/components/navigation/NavbarLogo";
import { NavMenuItem } from "@/components/navigation/NavMenuItem";
import { NavDropdownItem } from "@/components/navigation/NavDropdownItem";

export const DesktopNavbar = () => {
  return (
    <div className="text-[14.592px] box-border caret-transparent hidden leading-[24.8064px] outline-[3px] md:text-[17px] md:block md:leading-[28.9px]">
      <div className="relative text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
        <div className="relative text-[14.592px] bg-white box-border caret-transparent grid leading-[43.776px] outline-[3px] z-[4] m-0 md:text-[17px] md:bg-transparent md:block md:leading-[28.9px] md:mx-auto md:my-2.5">
          <div className="text-[14.592px] content-center box-border caret-transparent grid leading-[43.776px] max-w-full min-h-[30px] outline-[3px] mx-auto px-5 md:text-[17px] md:leading-[28.9px] md:max-w-[1240px]">
            <div className="text-[14.592px] items-center box-border caret-transparent gap-x-5 grid grid-cols-[auto_auto] leading-[43.776px] min-h-0 min-w-0 outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto]">
              <div className="text-[14.592px] items-center box-border caret-transparent flex h-full leading-[43.776px] min-w-0 outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-w-[auto]">
                <div className="text-[14.592px] items-center box-border caret-transparent flex flex-wrap leading-[43.776px] min-h-0 min-w-0 outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto]">
                  <div className="text-[14.592px] self-center box-border caret-transparent basis-[0%] grow leading-[14.592px] min-h-0 min-w-0 outline-[3px] w-full ml-2.5 py-[14.592px] md:text-[17px] md:basis-auto md:grow-0 md:leading-[17px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:ml-0 md:py-[17px]">
                    <NavbarLogo
                      wrapperClassName="text-[14.592px] box-border caret-transparent leading-[14.592px] outline-[3px] md:text-[17px] md:leading-[17px]"
                      primaryLinkHref="https://grpliquidations.com/"
                      primaryLinkAriaLabel="GRP Liquidations -  America's #1 Mystery Box"
                      primaryLinkClassName="text-[14.592px] box-border caret-transparent hidden leading-[14.592px] outline-[3px] md:text-[17px] md:inline md:leading-[17px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
                      primaryImageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/Web_GRLiquidations_HorzLogo-1-290x66.webp"
                      primaryImageAlt=""
                      primaryImageSizes="(max-width: 290px) 100vw, 290px"
                      primaryImageClassName="text-[14.592px] aspect-[auto_290_/_66] box-border caret-transparent inline leading-[14.592px] max-w-[50px] outline-[3px] w-[50px] md:text-[17px] md:leading-[17px] md:max-w-[290px] md:w-[290px]"
                      secondaryLinkHref="https://grpliquidations.com/"
                      secondaryLinkClassName="text-[14.592px] box-border caret-transparent block leading-[14.592px] outline-[3px] md:text-[17px] md:hidden md:leading-[17px] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
                      secondaryImageSrc="https://c.animaapp.com/morn8ketfEglOp/assets/cropped-Web_GRLiquidations_HorzLogo-1-1-273x62.webp"
                      secondaryImageAlt=""
                      secondaryImageSizes="(max-width: 2048px) 100vw, 2048px"
                      secondaryImageClassName="text-[14.592px] aspect-[auto_2048_/_462] box-border caret-transparent inline leading-[14.592px] max-w-[174px] outline-[3px] w-[174px] md:text-[17px] md:leading-[17px] md:max-w-52 md:w-52"
                    />
                  </div>
                </div>
              </div>
              <div className="text-[14.592px] items-center box-border caret-transparent flex h-full justify-end leading-[43.776px] min-w-0 outline-[3px] md:text-[17px] md:leading-[28.9px] md:min-w-[auto]">
                <div className="text-[14.592px] items-center box-border caret-transparent flex flex-wrap leading-[43.776px] min-h-0 min-w-0 outline-[3px] uppercase w-full md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] md:w-auto">
                  <div className="text-[14.592px] box-border caret-transparent grow leading-[43.776px] min-h-0 min-w-0 order-4 outline-[3px] w-full ml-auto md:text-[17px] md:grow-0 md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] md:order-none md:w-auto">
                    <div className="text-[14.592px] box-border caret-transparent grow h-full leading-[43.776px] outline-[3px] w-full md:text-[17px] md:grow-0 md:leading-[28.9px] md:w-auto">
                      <nav
                        aria-label="Site Navigation: Main Menu"
                        className="text-[14.592px] box-border caret-transparent grow h-full leading-[43.776px] outline-[3px] md:text-[17px] md:leading-[28.9px]"
                      >
                        <div className="text-[14.592px] content-center items-center box-border caret-transparent block flex-wrap h-full leading-[43.776px] outline-[3px] w-full md:text-[17px] md:inline-flex md:leading-[28.9px] md:w-auto">
                          <ul className="relative text-zinc-600 text-[14.592px] self-center bg-stone-50 box-border caret-transparent flex flex-wrap leading-[43.776px] list-none min-h-0 min-w-0 pl-0 md:text-black md:text-[17px] md:bg-transparent md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto]">
                            <NavMenuItem
                              href="https://grpliquidations.com/product-category/buy-it-now/"
                              label="Shop"
                              linkClassName="text-indigo-950 text-[12.768px] items-center bg-transparent box-border caret-transparent block h-full leading-[38.304px] min-h-0 min-w-0 outline-[3px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
                            />
                            <NavMenuItem
                              href="https://grpliquidations.com/product-category/mystery-boxes/"
                              label="Mystery Boxes"
                              linkClassName="text-indigo-950 text-[12.768px] items-center bg-transparent box-border caret-transparent block h-full leading-[38.304px] min-h-0 min-w-0 outline-[3px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
                            />
                            <NavDropdownItem
                              title="Pallets"
                              href="https://grpliquidations.com/product-category/pallets/"
                              submenuIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-1.svg"
                              toggleIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-2.svg"
                              itemIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-3.svg"
                              items={[
                                {
                                  label: "Liquidation Truckloads",
                                  href: "https://grpliquidations.com/product-category/liquidation-truckload/",
                                },
                              ]}
                            />
                            <NavMenuItem
                              href="https://grpliquidations.com/blog/"
                              label="Blog"
                              linkClassName="text-indigo-950 text-[12.768px] items-center bg-transparent box-border caret-transparent block h-full leading-[38.304px] min-h-0 min-w-0 outline-[3px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
                            />
                            <NavDropdownItem
                              title="About"
                              href="https://grpliquidations.com/about/"
                              submenuIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-1.svg"
                              toggleIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-2.svg"
                              itemIconUrl="https://c.animaapp.com/morn8ketfEglOp/assets/icon-3.svg"
                              items={[
                                {
                                  label: "FAQs",
                                  href: "https://grpliquidations.com/frequently-asked-questions/",
                                },
                                {
                                  label: "Services",
                                  href: "https://grpliquidations.com/services/",
                                },
                              ]}
                            />
                            <NavMenuItem
                              href="https://grpliquidations.com/my-account-2/"
                              label="Account"
                              linkClassName="text-indigo-950 text-[12.768px] items-center bg-transparent box-border caret-transparent block h-full leading-[38.304px] min-h-0 min-w-0 outline-[3px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
                            />
                            <NavMenuItem
                              href="https://grpliquidations.com/contact-3/"
                              label="Contact"
                              linkClassName="text-indigo-950 text-[12.768px] items-center bg-transparent box-border caret-transparent block h-full leading-[38.304px] min-h-0 min-w-0 outline-[3px] w-full border-neutral-400 px-5 py-0 border-b border-solid md:text-black md:text-sm md:bg-transparent md:flex md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:w-auto md:pt-[9px] md:pb-[30px] md:px-[9px] md:border-b-0 md:border-none md:border-black hover:outline-0"
                            />
                            <NavMenuItem
                              href="https://grpliquidations.com/shop-2/"
                              label="Start shopping"
                              linkClassName="text-[14.592px] box-border caret-transparent block leading-[43.776px] min-h-0 min-w-0 outline-[3px] md:text-[17px] md:leading-[30px] md:min-h-[auto] md:min-w-[auto] hover:text-purple-600 hover:outline-0 hover:border-purple-600"
                              title="Start shopping"
                              iconAriaLabel="Cart"
                              iconClassName="text-[14.592px] italic box-border caret-transparent leading-[43.776px] outline-[3px] md:text-[17px] md:leading-[30px] before:accent-auto before:bg-[position:0px_0px] before:box-border before:caret-transparent before:text-zinc-600 before:text-[14.592px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:mr-[3.648px] before:border-separate before:font-wpmenucart before:md:text-[17px] before:md:mr-[4.25px]"
                              itemCountText="0 items"
                            />
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
