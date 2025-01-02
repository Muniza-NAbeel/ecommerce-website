import React from "react";
import Image from "next/image";

const YoungsFavorite = () => {
  return (
    <div className=" bg-white py-8 px-4 sm:py-12 sm:px-8 lg:px-20">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 text-center sm:text-left">
        Young’s <span className="text-yellow-500">Favourite</span>
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {/* First Card */}
        <div className="relative group rounded-xl duration-100 hover:scale-95">
          <Image
            src="/trending.png" // Add your image to the public folder
            alt="Trending on Instagram"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4 flex items-center justify-between pr-6 sm:pr-12 lg:pr-24 pl-4 sm:pl-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-black">
                Trending on Instagram
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">Explore Now!</p>
            </div>
            <span className="text-lg sm:text-xl font-bold text-black group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative group rounded-xl duration-100 hover:scale-95">
          <Image
            src="/trending1.png" // Add your image to the public folder
            alt="All Under $40"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4 flex items-center justify-between pr-6 sm:pr-14 lg:pr-14 pl-4 sm:pl-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-black">
                All Under $40
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">Explore Now!</p>
            </div>
            <span className="text-lg sm:text-xl font-bold text-black group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungsFavorite;
