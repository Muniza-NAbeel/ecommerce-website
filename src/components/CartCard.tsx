import Image from "next/image";
import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";


const CartCard = ({
  src,
  title,
  size,
  price,
}: {
  src: string;
  title: string;
  size: string;
  price: number;
}) => {
  return (
    <div className="flex p-10">
      {/* Image */}
      <Image
        src={src}
        alt={title}
        width={80}
        height={80}
        className="w-[100px] h-[100px]"
      />
      {/* Some info */}
      <div className="flex px-5 justify-between items-center w-full">
        <div>
          {/* title */}
        <h2 className="text-sm font-semibold leading-none line-clamp-1 text-black/80"> {title} </h2>
        {/* size */}
        <p className="mt-2 text-sm text-black/80 leading-none font-semibold line-clamp-1">
        size:&nbsp; <span>{size}</span>
        </p>
        {/* quantity */}
      
          <div className="mt-2 flex items-center ">
            <button className="w-fit h-fit bg-black hover:bg-transparent duration-300 text-white hover:text-orange-500 scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md py-3 px-4 active:bg-gray-300 active:scale-95 transition-all">
              <FaMinus className="h-2 w-2 "/>
            </button>
            <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-black/80"> 1 </div>
            <button className="w-fit h-fit bg-black hover:bg-transparent duration-300 text-white hover:text-orange-500 scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md py-3 px-4 active:bg-gray-300 active:scale-95 transition-all">
              <FaPlus className="h-2 w-2 "/>
            </button>
          </div>
       {/* price and delete for mob screen */}
      <div className="lg:hidden mt-2 flex flex-col items-end gap-2">
        <h3 className="text-sm font-semibold leading-none line-clamp-1 text-black/80 "><span>Price:&nbsp;</span>&#36;{price}</h3>
      
      <FaTrash className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"/>

      </div>
        </div>
      </div>
      {/* price and delete */}
      <div className="hidden lg:flex flex-col items-end gap-5">
        <h3 className="text-sm font-semibold leading-none line-clamp-1 text-black/80 "><span>Price:&nbsp;</span>&#36;{price}</h3>
      
      <FaTrash className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"/>

      </div>
    </div>
  );
};

export default CartCard;
