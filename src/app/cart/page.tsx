import CartCard from "@/components/CartCard";
import React from "react";

const Cart = () => {
  return (
    <div className=" mt-[50px] mb-[50px] px-6">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {/* Items */}
        <div className="col-span-2">
            <CartCard  src="/mens/5.jpg" title="black-hoodie" size="L" price={1500} />
        </div>
        {/* summary */}
        <div className="bg-black/5 p-5 rounded-xl">
          {/* heading */}
          <h2 className="scroll-m-20 text-lg font-semibold uppercase tracking-tight text-black">
            order summary
          </h2>
          {/* divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* product price */}
          <div className="text-sm font-medium text-black uppercase tracking-tight">
            <div className="flex items-center justify-between capitalize">
              <h2>sub total</h2>
              <h2>$1500</h2>
            </div>
            {/* delivery charges */}
            <div className="flex items-center justify-between capitalize">
              <h2>Dekivery Charges</h2>
              <h2>TBD</h2>
            </div>
            {/* service charges */}
            <div className="flex items-center justify-between capitalize">
              <h2>Sales Tax</h2>
              <h2>TBD</h2>
            </div>
          </div>

          {/* divider */}
          <div className="divider mt-0 mb-1"></div>

          {/* Estimated Total */}
          <div className="flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-black">
            <h2>Estimated total</h2>
            <h2>$1500</h2>
          </div>

          {/* divider */}
          <div className="divider mt-0 mb-1"></div>

          {/* checkout Button */}
          <div className="flex items-center justify-center w-full">
            <button className="bg-black hover:bg-transparent duration-300 text-white hover:text-orange-500 scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md rounded-lg py-3 px-4 active:bg-gray-300 active:scale-95 transition-all uppercase">
              proceed to checkout
            </button>
          </div>

          {/* divider */}
          <div className="divider mt-0 mb-1"></div>

          {/* note */}

          <p className="text-xs font-semibold tracking-tight text-black w-[97%] text-center italic">
            {`*Delivery Charges and the Sales Tax will be calculated in the Checkout Page.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
