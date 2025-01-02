import React from "react";
import Image from "next/image";

const HeroFooter = () => {
  return (
    <div className="hidden md:flex bg-[#EBD96B] py-6">
      <div className="container mx-auto flex justify-center gap-20 items-center">
        {/* Brand Logos */}
        <Image
          src="/hm.png" 
          alt="H&M Logo"
          width={100}
          height={40}
          className="object-contain"
        />
        <Image
          src="/obey.png"
          alt="Obey Logo"
          width={100}
          height={40}
          className="object-contain"
        />
        <Image
          src="/shopify.png"
          alt="Shopify Logo"
          width={140}
          height={60}
          className="object-contain"
        />
        <Image
          src="/lacoste.png"
          alt="Lacoste Logo"
          width={160}
          height={60}
          className="object-contain"
        />
        <Image
          src="/levis.png"
          alt="Levi's Logo"
          width={100}
          height={40}
          className="object-contain"
        />
        <Image
          src="/amazon.png"
          alt="Amazon Logo"
          width={100}
          height={40}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroFooter;
