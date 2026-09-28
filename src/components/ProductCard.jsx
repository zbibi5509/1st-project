import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className="
        group
        bg-[#EFE1D2]
        border
        border-[#D8C5B3]
        rounded-[25px]
        overflow-hidden
        transition
        duration-500
        hover:-translate-y-2
        hover:shadow-xl
      "
    >

      {/* IMAGE */}

      <div className="h-75 bg-[#F8F3ED] flex items-center justify-center p-8 overflow-hidden">

        <img
          src={product.image}
          alt={product.title}
          className="
            max-h-full
            max-w-full
            object-contain
            transition
            duration-500
            group-hover:scale-105
          "
        />

      </div>


      {/* CONTENT */}

      <div className="p-5">

        <p className="text-xs uppercase tracking-[2px] text-[#A56F55]">
          {product.category}
        </p>

        <h2 className="mt-2 text-base font-semibold text-[#4A3830] line-clamp-2 min-h-12">
          {product.title}
        </h2>


        {/* PRICE + CART */}

        <div className="mt-5 flex items-center justify-between">

          <p className="text-lg font-semibold text-[#8F5D45]">
            ${product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2.5
              rounded-full
              bg-[#8F5D45]
              text-white
              text-sm
              transition
              duration-300
              hover:bg-[#754A37]
              hover:-translate-y-0.5
            "
          >
            <FaShoppingBag />
            Add
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;