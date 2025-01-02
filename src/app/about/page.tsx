import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-auto md:h-[540px] bg-[#EBD96B] px-6 md:px-12">
      {/* Left Section with Image */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 pt-10 md:pt-0">
        <Image
          src="/about.png"
          alt="Woman smiling"
          width={600}
          height={600}
          className="w-[80%] h-auto max-w-sm md:max-w-md lg:max-w-lg"
        />
        <Image
          src="/star.png"
          alt="star"
          width={100}
          height={100}
          className="absolute top-4 left-6 w-6 h-6 md:w-8 md:h-8"
        />
        <Image
          src="/star.png"
          alt="star"
          width={100}
          height={100}
          className="absolute top-12 right-6 w-5 h-5 md:w-6 md:h-6"
        />
        <Image
          src="/star.png"
          alt="star"
          width={100}
          height={100}
          className="absolute bottom-4 left-6 w-8 h-8 md:w-10 md:h-10"
        />
      </div>

      {/* Right Section with Text */}
      <div className="text-center md:text-left w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
          PAYDAY <span className="block">SALE NOW</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-800">
          Spend minimal $100 get 30% off <br />
          voucher code for your next purchase
        </p>
        <p className="mt-4 font-bold text-gray-800 text-sm sm:text-base md:text-lg">
          1 June - 10 June 2021
        </p>
        <p className="text-xs sm:text-sm text-gray-600">
          *Terms & Conditions apply
        </p>
        <button className="mt-6 px-6 py-2 text-sm sm:text-base text-white bg-black rounded hover:bg-gray-800">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default About;

