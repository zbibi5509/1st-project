
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ cart }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#E8D8C8] border-b border-[#D8C5B3]">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 sm:py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-semibold italic tracking-wide text-[#4A3830]"
        >
          MyStore
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] text-[#806B5D]">

          <Link
            to="/"
            className="transition duration-300 hover:text-[#8F5D45]"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="transition duration-300 hover:text-[#8F5D45]"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="relative transition duration-300 hover:text-[#8F5D45]"
          >
            <FaShoppingCart size={20} />

            {cart.length > 0 && (
              <span className="absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#8F5D45] text-xs text-white">
                {cart.length}
              </span>
            )}
          </Link>

        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-5">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-[#806B5D] hover:text-[#8F5D45] transition duration-300"
          >
            <FaShoppingCart size={19} />

            {cart.length > 0 && (
              <span className="absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#8F5D45] text-xs text-white">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#4A3830] text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#D8C5B3] px-5 py-5 bg-[#E8D8C8]">

          <div className="flex flex-col gap-5 text-[15px] text-[#806B5D]">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="transition duration-300 hover:text-[#8F5D45]"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="transition duration-300 hover:text-[#8F5D45]"
            >
              Products
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

