import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart }) => {
  const navigate = useNavigate();

  // ================= TOTAL PRICE =================

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  // ================= PLACE ORDER =================

  const placeOrder = (e) => {
    e.preventDefault();

    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-[#F6EFE7] px-5 sm:px-8 md:px-12 lg:px-20 py-16">

      {/* ================= HEADING ================= */}

      <div className="text-center mb-12">

        <p className="text-sm tracking-[4px] uppercase text-[#A56F55]">
          Complete Your Order
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#4A3830]">
          Checkout
        </h1>

        <p className="mt-4 text-[#806B5D]">
          Enter your information to complete your order.
        </p>

      </div>


      {/* ================= CHECKOUT CONTENT ================= */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">

        {/* ================= SHIPPING FORM ================= */}

        <div className="bg-[#EFE1D2] border border-[#D8C5B3] rounded-[25px] p-7 sm:p-9">

          <p className="text-sm tracking-[3px] uppercase text-[#A56F55]">
            Delivery Details
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#4A3830]">
            Shipping Information
          </h2>


          <form onSubmit={placeOrder}>

            {/* ================= NAME ================= */}

            <div className="mt-7">

              <label className="block text-sm text-[#4A3830] mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#D8C5B3] bg-[#F6EFE7] text-[#4A3830] outline-none focus:border-[#8F5D45]"
              />

            </div>


            {/* ================= EMAIL ================= */}

            <div className="mt-5">

              <label className="block text-sm text-[#4A3830] mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#D8C5B3] bg-[#F6EFE7] text-[#4A3830] outline-none focus:border-[#8F5D45]"
              />

            </div>


            {/* ================= PHONE ================= */}

            <div className="mt-5">

              <label className="block text-sm text-[#4A3830] mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#D8C5B3] bg-[#F6EFE7] text-[#4A3830] outline-none focus:border-[#8F5D45]"
              />

            </div>


            {/* ================= ADDRESS ================= */}

            <div className="mt-5">

              <label className="block text-sm text-[#4A3830] mb-2">
                Address
              </label>

              <textarea
                rows="4"
                placeholder="Enter your complete address"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#D8C5B3] bg-[#F6EFE7] text-[#4A3830] outline-none focus:border-[#8F5D45] resize-none"
              ></textarea>

            </div>


            {/* ================= PAYMENT ================= */}

            <div className="mt-7">

              <p className="text-sm text-[#4A3830] mb-3">
                Payment Method
              </p>

              <div className="border border-[#D8C5B3] rounded-xl bg-[#F6EFE7] p-4">

                <label className="flex items-center gap-3 text-[#4A3830]">

                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    required
                  />

                  <span>
                    Cash on Delivery
                  </span>

                </label>

              </div>

            </div>


            {/* ================= PLACE ORDER ================= */}

            <button
              type="submit"
              className="mt-8 w-full py-3 rounded-full bg-[#8F5D45] text-white transition duration-300 hover:bg-[#754A37] hover:-translate-y-1"
            >
              Place Order
            </button>

          </form>

        </div>


        {/* ================= ORDER SUMMARY ================= */}

        <div className="h-fit bg-[#EFE1D2] border border-[#D8C5B3] rounded-[25px] p-7">

          <p className="text-sm tracking-[3px] uppercase text-[#A56F55]">
            Summary
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#4A3830]">
            Your Order
          </h2>


          {/* ================= PRODUCTS ================= */}

          <div className="mt-6 space-y-4">

            {cart.map((product, index) => (

              <div
                key={index}
                className="flex items-center gap-3"
              >

                <div className="w-14 h-14 bg-[#F6EFE7] rounded-xl p-2 flex items-center justify-center">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />

                </div>


                <div className="flex-1 min-w-0">

                  <p className="text-sm font-medium text-[#4A3830] line-clamp-1">
                    {product.title}
                  </p>

                  <p className="text-sm text-[#806B5D]">
                    ${product.price}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* ================= TOTAL ================= */}

          <div className="border-t border-[#D8C5B3] mt-6 pt-6 flex justify-between">

            <span className="font-semibold text-[#4A3830]">
              Total
            </span>

            <span className="text-xl font-semibold text-[#8F5D45]">
              ${totalPrice.toFixed(2)}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;