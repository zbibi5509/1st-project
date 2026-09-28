
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart }) => {
  return (
<nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-[#E8D8C8] border-b border-[#D8C5B3]">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-semibold italic tracking-wide text-[#4A3830]"
      >
        MyStore
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-8 text-[15px] text-[#806B5D]">

        {/* Home */}
        <Link
          to="/"
          className="transition duration-300 hover:text-[#8F5D45]"
        >
          Home
        </Link>

        {/* Products */}
        <Link
          to="/products"
          className="transition duration-300 hover:text-[#8F5D45]"
        >
          Products
        </Link>

        {/* Cart */}
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
    </nav>
  );
};

export default Navbar;
