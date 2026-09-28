import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          px-5
          py-3
          rounded-full
          border
          border-[#D8C5B3]
          bg-[#EFE1D2]
          text-[#4A3830]
          outline-none
          focus:border-[#8F5D45]
        "
      />
    </div>
  );
};

export default SearchBar;