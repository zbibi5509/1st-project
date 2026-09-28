import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  // ================= REMOVE PRODUCT =================

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  // ================= TOTAL PRICE =================

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  // ================= EMPTY CART =================

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#F6EFE7] flex items-center justify-center px-5">
        <div className="text-center">

          <p className="text-sm tracking-[4px] uppercase text-[#A56F55]">
            Your Shopping Bag
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-[#4A3830]">
            Your Cart is Empty
          </h1>

          <p className="mt-4 text-[#806B5D]">
            Looks like you haven't added anything yet.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-7 bg-[#8F5D45] text-white px-7 py-3 rounded-full hover:bg-[#754A37] transition"
          >
            Continue Shopping
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6EFE7] px-5 sm:px-8 md:px-12 lg:px-20 py-16">

      {/* ================= HEADING ================= */}

      <div className="mb-12">

        <p className="text-sm tracking-[4px] uppercase text-[#A56F55]">
          Shopping Bag
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#4A3830]">
          Your Cart
        </h1>

        <p className="mt-3 text-[#806B5D]">
          {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
        </p>

      </div>


      {/* ================= CART CONTENT ================= */}

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">

        {/* ================= PRODUCTS ================= */}

        <div className="space-y-5">

          {cart.map((product) => (

            <div
              key={product.id}
              className="bg-[#EFE1D2] border border-[#D8C5B3] rounded-[25px] p-5 flex flex-col sm:flex-row gap-5"
            >

              {/* IMAGE */}

              <div className="w-full sm:w-32 h-32 bg-[#F6EFE7] rounded-[18px] flex items-center justify-center p-4">

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />

              </div>


              {/* DETAILS */}

              <div className="flex-1 flex flex-col justify-between">

                <div>

                  <p className="text-sm capitalize text-[#A56F55]">
                    {product.category}
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-[#4A3830]">
                    {product.title}
                  </h2>

                  <p className="mt-3 text-xl font-semibold text-[#8F5D45]">
                    ${product.price}
                  </p>

                </div>


                {/* REMOVE */}

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-4 w-fit text-sm text-[#806B5D] hover:text-[#754A37] underline"
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* ================= ORDER SUMMARY ================= */}

        <div className="h-fit bg-[#EFE1D2] border border-[#D8C5B3] rounded-[25px] p-7">

          <p className="text-sm tracking-[3px] uppercase text-[#A56F55]">
            Summary
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#4A3830]">
            Order Summary
          </h2>


          {/* SUBTOTAL */}

          <div className="mt-7 flex justify-between text-[#806B5D]">

            <span>
              Subtotal
            </span>

            <span>
              ${totalPrice.toFixed(2)}
            </span>

          </div>


          {/* SHIPPING */}

          <div className="mt-4 flex justify-between text-[#806B5D]">

            <span>
              Shipping
            </span>

            <span>
              Free
            </span>

          </div>


          {/* TOTAL */}

          <div className="border-t border-[#D8C5B3] mt-6 pt-6 flex justify-between">

            <span className="font-semibold text-[#4A3830]">
              Total
            </span>

            <span className="text-xl font-semibold text-[#8F5D45]">
              ${totalPrice.toFixed(2)}
            </span>

          </div>


          {/* CHECKOUT */}

          <button
            onClick={() => navigate("/checkout")}
            className="mt-7 w-full bg-[#8F5D45] text-white py-3 rounded-full hover:bg-[#754A37] transition"
          >
            Checkout
          </button>


          {/* CONTINUE SHOPPING */}

          <button
            onClick={() => navigate("/products")}
            className="mt-3 w-full border border-[#8F5D45] text-[#8F5D45] py-3 rounded-full hover:bg-[#8F5D45] hover:text-white transition"
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;