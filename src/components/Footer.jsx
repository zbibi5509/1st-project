import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#E8D8C8] border-t border-[#D8C5B3] px-6 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= BRAND ================= */}
          <div>
            <h2 className="text-3xl font-semibold  italic tracking-wide text-[#4A3830]">
              MyStore
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#806B5D]">
              Everyday style, thoughtfully selected. Discover simple,
              timeless pieces made for your everyday moments.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-7">

              <Link
                to="/"
                className="w-10 h-10 rounded-full border border-[#C9B3A1] flex items-center justify-center text-[#806B5D] transition duration-300 hover:bg-[#8F5D45] hover:text-white hover:border-[#8F5D45]"
              >
                <FaInstagram />
              </Link>

              <Link
                to="/"
                className="w-10 h-10 rounded-full border border-[#C9B3A1] flex items-center justify-center text-[#806B5D] transition duration-300 hover:bg-[#8F5D45] hover:text-white hover:border-[#8F5D45]"
              >
                <FaFacebookF />
              </Link>

              <Link
                to="/"
                className="w-10 h-10 rounded-full border border-[#C9B3A1] flex items-center justify-center text-[#806B5D] transition duration-300 hover:bg-[#8F5D45] hover:text-white hover:border-[#8F5D45]"
              >
                <FaPinterestP />
              </Link>

            </div>
          </div>


          {/* ================= SHOP ================= */}
          <div>
            <h3 className="text-sm uppercase tracking-[3px] text-[#A56F55]">
              Shop
            </h3>

            <ul className="mt-6 flex flex-col gap-4 text-sm text-[#806B5D]">

              <li>
                <Link
                  to="/products"
                  className="transition duration-300 hover:text-[#8F5D45]"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition duration-300 hover:text-[#8F5D45]"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="transition duration-300 hover:text-[#8F5D45]"
                >
                  Shopping Cart
                </Link>
              </li>

            </ul>
          </div>


          {/* ================= ABOUT ================= */}
          <div>
            <h3 className="text-sm uppercase tracking-[3px] text-[#A56F55]">
              About
            </h3>

            <ul className="mt-6 flex flex-col gap-4 text-sm text-[#806B5D]">

              <li>
                <Link
                  to="/"
                  className="transition duration-300 hover:text-[#8F5D45]"
                >
                  Our Story
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition duration-300 hover:text-[#8F5D45]"
                >
                  Our Mission
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition duration-300 hover:text-[#8F5D45]"
                >
                  Why MyStore
                </Link>
              </li>

            </ul>
          </div>


          {/* ================= HELP ================= */}
          <div>
            <h3 className="text-sm uppercase tracking-[3px] text-[#A56F55]">
              Help
            </h3>

            <ul className="mt-6 flex flex-col gap-4 text-sm text-[#806B5D]">

              <li>
                <Link
                  to="/"
                  className="transition duration-300 hover:text-[#8F5D45]"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition duration-300 hover:text-[#8F5D45]"
                >
                  Shipping & Delivery
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition duration-300 hover:text-[#8F5D45]"
                >
                  Returns & Exchanges
                </Link>
              </li>

            </ul>
          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="mt-14 border-t border-[#D8C5B3]" />


        {/* ================= BOTTOM FOOTER ================= */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-xs text-[#806B5D]">
            © 2026 MyStore. All rights reserved.
          </p>

          <p className="text-xs text-[#806B5D]">
            Made with care for everyday style.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;