import Image from "next/image";


export default async function Hero() {
  return ( 
          <section
            className="lg:w-[1440px] text-gray-400 bg-[#FFFFFF] body-font py-12 md:py-24"
          >
            <div className="container mx-auto flex flex-col md:flex-row items-center sm:px-2 lg:px-20">
              {/* Left Content */}
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-black">
                Elevate Your Style – Exclusive Fashion for Every Occasion
                </h1>
                <p className="mb-8 leading-relaxed text-[#191818] text-base sm:text-lg">
                Explore a world of style with timeless designs crafted for every occasion. Elevate your look effortlessly – because fashion is all about you!
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-[#EBD96B] duration-300 transition-all active:bg-[#867925] hover:text-black rounded text-sm sm:text-base">
                    Shop Now!
                  </button>
                </div>
              </div>
              {/* Right Image */}
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                <Image
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={"/hero.png"}
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </section>
  );
}

