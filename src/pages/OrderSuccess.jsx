import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F6EFE7] flex items-center justify-center px-5 py-16">

      <div className="w-full max-w-xl bg-[#EFE1D2] border border-[#D8C5B3] rounded-[30px] p-8 sm:p-12 text-center">

        {/* ================= SUCCESS ICON ================= */}

        <div className="w-20 h-20 mx-auto rounded-full bg-[#8F5D45] text-white flex items-center justify-center text-3xl">
          <FaCheck />
        </div>


        {/* ================= TEXT ================= */}

        <p className="mt-8 text-sm tracking-[4px] uppercase text-[#A56F55]">
          Order Confirmed
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold text-[#4A3830]">
          Thank You!
        </h1>

        <p className="mt-4 leading-7 text-[#806B5D]">
          Your order has been placed successfully.
          We appreciate your shopping with us.
        </p>


        {/* ================= ORDER MESSAGE ================= */}

        <div className="mt-7 bg-[#F6EFE7] border border-[#D8C5B3] rounded-2xl p-5">

          <p className="text-sm text-[#806B5D]">
            Your order is now being prepared.
          </p>

          <p className="mt-2 text-sm font-medium text-[#4A3830]">
            Thank you for choosing MyStore.
          </p>

        </div>


        {/* ================= CONTINUE SHOPPING ================= */}

        <button
          onClick={() => navigate("/products")}
          className="mt-8 px-8 py-3 rounded-full bg-[#8F5D45] text-white transition duration-300 hover:bg-[#754A37] hover:-translate-y-1"
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
};

export default OrderSuccess;