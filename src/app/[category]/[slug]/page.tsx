import SlugComponent from "@/components/SlugComponent";
import React from "react";
import { FaHeart, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

const Slug = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden lg:w-[1440px]">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">

          <SlugComponent />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font mt-10 text-gray-500 tracking-widest">
              Men&apos;s Must-Haves
            </h2>
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-black mb-1 mt-2">
              Black-upper
            </h1>
            <div className="rating rating-sm mb-4 mt-1">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>

            <p className="leading-relaxed scroll-m-20 text-base font-normal text-black">
              A high-quality hoodie jacket is warm, comfortable, and durable,
              made from premium fabrics like soft cotton or fleece. With sturdy
              stitching, reliable zippers, and a modern design, it offers both
              style and functionality. Perfect for casual wear or layering, it&apos;s
              a versatile wardrobe essential.
            </p>
            <div className="flex mt-6 items-center mb-8">
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-black">
                  Color
                </span>
                <button className="border-2 border-gray-300 mr-1 bg-white active:border-black focus:border-black rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 mr-1 bg-red-600 active:border-black focus:border-black rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 mr-1 bg-blue-600 active:border-black focus:border-black rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 mr-1 bg-black active:border-black focus:border-black rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-black">
                  Size
                </span>

                <label className="form-control w-full max-w-xs">
                  <select className="select select-bordered">
                    <option disabled selected>
                      {" "}
                      Select Size{" "}
                    </option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-black">
                  Quantity:
                </span>
            <button className="flex w-fit h-fit text-white bg-black border-0 py-2 px-6 focus:outline-none hover:text-orange-500 scroll-m-20 text-xs lg:text-sm font-semibold tracking-tight rounded-xl active:bg-gray-300 active:scale-95 transition-all">
                <FaMinus className="mr-2 h-4 w-4 duration-300 " />
                Less
              </button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight text-black"> 1 </div>
              <button className="flex w-fit h-fit text-white bg-black border-0 py-2 px-6 focus:outline-none hover:text-orange-500 scroll-m-20 text-xs lg:text-sm font-semibold tracking-tight rounded-xl active:bg-gray-300 active:scale-95 transition-all">
                <FaPlus className="mr-2 h-4 w-4 duration-300 " />
                Add
              </button>
            </div>

            {/* Divider */}

            <div className="divider"></div>


               {/* Price */}

            <div className="flex">
              <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-black">
                $58.00
              </span>

              {/* Add to Cart Button */}
              <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:text-orange-500 scroll-m-20 text-xs lg:text-sm font-semibold tracking-tight rounded-xl active:bg-gray-300 active:scale-95 transition-all">
                <FaShoppingCart className="mr-2 h-4 w-4 duration-300 " />
                Add to Cart
              </button>
            </div>

            {/* Buy Now Button */}

            <button className="flex w-full mt-5 justify-center items-center text-white bg-black border-0 py-2 px-6 focus:outline-none hover:text-orange-500 scroll-m-20 text-xs lg:text-sm font-semibold tracking-tight rounded-xl active:bg-gray-300 active:scale-95 transition-all">
              <FaHeart className="mr-2 h-4 w-4 duration-300  hover:text-orange-500 " />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slug;
