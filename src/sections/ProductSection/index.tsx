import { ProductCard } from "@/sections/ProductSection/components/ProductCard";

export const ProductSection = () => {
  return (
    <div className="relative text-[14.592px] box-border caret-transparent flex flex-col leading-[24.8064px] max-w-full outline-[3px] break-words w-full mx-auto px-[5px] md:text-[17px] md:leading-[28.9px]">
      <div className="text-[14.592px] box-border caret-transparent gap-x-2.5 flex flex-col grow flex-wrap h-full leading-[24.8064px] max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] outline-[3px] break-words gap-y-2.5 w-full mx-auto py-[5px] md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:max-w-[min(100%,1140px)]">
        <div className="relative text-[14.592px] box-border caret-transparent gap-x-2.5 leading-[24.8064px] max-w-full min-h-[auto] outline-[3px] break-words gap-y-2.5 md:text-[17px] md:leading-[28.9px]">
          <div className="text-[14.592px] box-border caret-transparent h-full leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
            <h2 className="text-zinc-900 text-3xl font-medium box-border caret-transparent clear-both tracking-[3px] leading-[39px] break-words uppercase font-jost md:text-4xl md:tracking-[normal] md:leading-[46.8px]">
              Shop Mystery Boxes
            </h2>
          </div>
        </div>
        <div className="relative text-[14.592px] box-border caret-transparent gap-x-2.5 leading-[24.8064px] max-w-full min-h-[auto] outline-[3px] break-words gap-y-2.5 md:text-[17px] md:leading-[28.9px]">
          <div className="text-[14.592px] box-border caret-transparent h-full leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
            <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
              <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] break-words md:text-[17px] md:leading-[28.9px]">
                <ul className="text-[14.592px] box-border caret-transparent clear-both gap-x-5 grid grid-cols-[repeat(2,minmax(0px,1fr))] leading-[24.8064px] list-none break-words mb-[14.592px] pl-0 md:text-[17px] md:grid-cols-[repeat(4,1fr)] md:leading-[28.9px] md:mb-[17px]">
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/real-unclaimed-mail/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/RM-2-300x300.png"
                    imageAlt="Real Unclaimed Mail"
                    title="Real Unclaimed Mail"
                    price="89.99"
                    originalPrice="109.99"
                    showSaleBadge
                    sizes="(max-width: 300px) 100vw, 300px"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=28786"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Real Unclaimed Mail”"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/amz-mystery-boxes/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/AMZ-Mystery-Box-300x300.png"
                    imageAlt="Amazon Mystery Box"
                    title="Amazon Mystery Box"
                    price="69.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=25855"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Amazon Mystery Box”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/returned-mail-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/grp-1-300x300.png"
                    imageAlt="Returned Mail Mystery Box - DHL"
                    title="Returned Mail Mystery Box – DHL"
                    price="44.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=30195"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Returned Mail Mystery Box - DHL”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/mixed-merchandise-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/GRP-MM-300x300.png"
                    imageAlt="GRP Mixed Merchandise Mystery Box"
                    title="GRP Mixed Merchandise Mystery Box"
                    price="47.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=30202"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “GRP Mixed Merchandise Mystery Box”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/unclaimed-mail-coffin-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/other-mystery-boxes-11-300x300.png"
                    imageAlt="Unclaimed & Return Mail Coffin Box"
                    title="Unclaimed & Return Mail Coffin Box"
                    price="199.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=40061"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Unclaimed & Return Mail Coffin Box”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/tiktok-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/TikTok-300x300.png"
                    imageAlt="TikTok Mystery Box"
                    title="TikTok Mystery Box"
                    price="79.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=50929"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “TikTok Mystery Box”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/amazon-mystery-coffin-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/other-mystery-boxes-30-300x300.png"
                    imageAlt="Amazon Mystery Coffin Box"
                    title="Amazon Mystery Coffin Box"
                    price="150.00"
                    originalPrice="199.00"
                    showSaleBadge={true}
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=44032"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Amazon Mystery Coffin Box”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/jewelry-mystery-box-25-pieces/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Jewelry-300x300.png"
                    imageAlt="jewelry mystery box"
                    title="20-25 Piece Jewelry & Accessories Mystery Box"
                    price="64.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=38975"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “20-25 Piece Jewelry & Accessories Mystery Box”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/grp-coffin-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/other-mystery-boxes-26-300x300.png"
                    imageAlt="GRP Coffin Mystery Box"
                    title="GRP Coffin Mystery Box"
                    price="199.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=43544"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “GRP Coffin Mystery Box”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/mystery-adult-toy/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Adult-Toy-1-300x300.png"
                    imageAlt="Mystery Adult Toy"
                    title="Mystery Adult Toy"
                    price="15.99"
                    originalPrice="69.99"
                    actionUrl="https://grpliquidations.com/product/mystery-adult-toy/"
                    actionText="Select options"
                    actionAriaLabel="Select options for “Mystery Adult Toy”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/assorted-clothing-from-nordstrom-shipping-included/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/NORDSTROM-300x300.png"
                    imageAlt="Assorted Clothing from Nordstrom Division Stores Mystery Box"
                    title="Assorted Clothing from Nordstrom Division Stores Mystery Box"
                    price="209.99"
                    showSaleBadge={false}
                    sizes="(max-width: 300px) 100vw, 300px"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=28836"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Assorted Clothing from Nordstrom Division Stores Mystery Box”"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/the-red-tag-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Red-Tag-300x300.png"
                    imageAlt="The Red Tag Mystery Box - Mystery Home Items, Decor, Clothing, and More"
                    title="The Red Tag Mystery Box – Mystery Home Items, Decor, Clothing, and More"
                    price="74.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=51631"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “The Red Tag Mystery Box - Mystery Home Items, Decor, Clothing, and More”"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/health-and-beauty-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/HAB-1-300x300.png"
                    imageAlt="Health and Beauty Mystery Box"
                    title="Health and Beauty Mystery Box"
                    price="69.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=30143"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Health and Beauty Mystery Box”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/mystery-funko-pops/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Funko-Pops-2-300x300.png"
                    imageAlt="Mystery Funko Pops"
                    title="Mystery Funko Pops"
                    price="12.00"
                    originalPrice="24.00"
                    actionUrl="https://grpliquidations.com/product/mystery-funko-pops/"
                    actionText="Select options"
                    actionAriaLabel="Select options for “Mystery Funko Pops”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/foot-locker-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Foot-Locker-300x300.png"
                    imageAlt="Foot Locker Mystery Box - Mystery Jerseys, Caps, Shoes and More"
                    title="Foot Locker Mystery Box – Mystery Jerseys, Caps, Shoes and More"
                    price="169.99"
                    showSaleBadge={false}
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=50928"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Foot Locker Mystery Box - Mystery Jerseys, Caps, Shoes and More”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/20-piece-baby-bundle/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/BabyToddler-Box-1-300x300.png"
                    imageAlt="Baby and Toddler Clothes Mystery Box - 20 Pieces TGT Brand Mixed Apparel"
                    title="Baby and Toddler Clothes Mystery Box – 20 Pieces TGT Brand Mixed Apparel"
                    price="59.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=28074"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Baby and Toddler Clothes Mystery Box - 20 Pieces TGT Brand Mixed Apparel”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/100-count-clothing-bundle/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/other-mystery-boxes-17-300x300.png"
                    imageAlt="100 Count Clothing Bundle"
                    title="100 Count Clothing Bundle"
                    price="199.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=39951"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “100 Count Clothing Bundle”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/shein-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Shein-300x300.png"
                    imageAlt="Shein Mystery Box"
                    title="Shein Mystery Box"
                    price="79.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=52942"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Shein Mystery Box”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/35-40-count-clothing-bundle/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/30-35ct-Clothing-1-300x300.png"
                    imageAlt="35-40 Count Clothing Bundle"
                    title="35-40 Count Clothing Bundle"
                    price="79.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=52558"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “35-40 Count Clothing Bundle”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/senix-tools-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Senix-300x300.png"
                    imageAlt="Senix Tools Mystery Box - 5-Year Manufacturer Warranty"
                    title="Senix Tools Mystery Box – 5-Year Manufacturer Warranty"
                    price="190.00"
                    originalPrice="225.00"
                    showSaleBadge
                    saleBadgeText="Sale!"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=52471"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Senix Tools Mystery Box - 5-Year Manufacturer Warranty”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/walmart-mystery-coffin-general-merchandise-and-more/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Walmart-Coffin-300x300.png"
                    imageAlt="Walmart Mystery Coffin - General Merchandise and More"
                    title="Walmart Mystery Coffin – General Merchandise and More"
                    price="189.99"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=55797"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “Walmart Mystery Coffin - General Merchandise and More”"
                    sizes="(max-width: 300px) 100vw, 300px"
                    showSaleBadge={false}
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/oqq-mystery-box/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/OQQ-300x300.png"
                    imageAlt="OQQ Mystery Box - Women's Activewear, Gymwear and Athleisure"
                    title="OQQ Mystery Box – Women’s Activewear, Gymwear and Athleisure"
                    price="174.99"
                    showSaleBadge={false}
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=56224"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “OQQ Mystery Box - Women's Activewear, Gymwear and Athleisure”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/mega-pokemon-bulbasaur-pixel-art-building-kit-case-pack-of-4/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Bulbasaur-300x300.png"
                    imageAlt="MEGA Pokémon Bulbasaur Pixel Art Building Kit - Case Pack of 4"
                    title="MEGA Pokémon Bulbasaur Pixel Art Building Kit – Case Pack of 4"
                    price="40.00"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=55721"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “MEGA Pokémon Bulbasaur Pixel Art Building Kit - Case Pack of 4”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/mega-pokemon-squirtle-pixel-art-building-kit-case-pack-of-4/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Squirtle-300x300.png"
                    imageAlt="MEGA Pokémon Squirtle Pixel Art Building Kit – Case Pack of 4"
                    title="MEGA Pokémon Squirtle Pixel Art Building Kit – Case Pack of 4"
                    price="40.00"
                    actionUrl="/?srsltid=AfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6https%3A%2F%2Fgrpliquidations.com%2F%3Fsrsltid%3DAfmBOophtW6e6ralR-AFBBgEpxMRsl3FOA0YQAlLNBDIrZ51usKprzJ6&add-to-cart=55729"
                    actionText="Add to cart"
                    actionAriaLabel="Add to cart: “MEGA Pokémon Squirtle Pixel Art Building Kit – Case Pack of 4”"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/foot-locker-mystery-box-pallet/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Foot-Locker-300x300-1.png"
                    imageAlt="Foot Locker Mystery Box Pallet"
                    title="Foot Locker Mystery Box Pallet"
                    price="2,070.00"
                    actionUrl="https://direct.lc.chat/19206035/"
                    actionText="Get a Freight Quote"
                    actionAriaLabel="Get a Freight Quote"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/tiktok-mystery-box-pallet/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/TikTok-300x300-1.png"
                    imageAlt="TikTok Mystery Box Pallet"
                    title="TikTok Mystery Box Pallet"
                    price="900.00"
                    actionUrl="https://direct.lc.chat/19206035/"
                    actionText="Get a Freight Quote"
                    actionAriaLabel="Get a Freight Quote"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/senix-tools-mystery-box-pallet/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Senix-300x300-1.png"
                    imageAlt="Senix Tools Mystery Box Pallet"
                    title="Senix Tools Mystery Box Pallet"
                    price="3,240.00"
                    actionUrl="https://direct.lc.chat/19206035/"
                    actionText="Get a Freight Quote"
                    actionAriaLabel="Get a Freight Quote"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/target-mystery-box-pallet/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Target-300x300.png"
                    imageAlt="Target Mystery Box Pallet"
                    title="Target Mystery Box Pallet"
                    price="720.00"
                    actionUrl="https://direct.lc.chat/19206035/"
                    actionText="Get a Freight Quote"
                    actionAriaLabel="Get a Freight Quote"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/shein-mystery-box-pallet/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/Shein-1-300x300.png"
                    imageAlt="Shein Mystery Box Pallet"
                    title="Shein Mystery Box Pallet"
                    price="1,080.00"
                    actionUrl="https://direct.lc.chat/19206035/"
                    actionText="Get a Freight Quote"
                    actionAriaLabel="Get a Freight Quote"
                  />
                  <ProductCard
                    productUrl="https://grpliquidations.com/product/dhl-returned-mail-pallet/"
                    imageUrl="https://c.animaapp.com/morn8ketfEglOp/assets/DHL-300x300.png"
                    imageAlt="DHL Returned Mail Pallet"
                    title="DHL Returned Mail Pallet"
                    price="650.00"
                    originalPrice="700.00"
                    showSaleBadge={true}
                    saleBadgeText="Sale!"
                    actionUrl="https://direct.lc.chat/19206035/"
                    actionText="Get a Freight Quote"
                    actionAriaLabel="Get a Freight Quote"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
