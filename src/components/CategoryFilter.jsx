import React from "react";

const CategoryFilter = ({ category, setCategory }) => {
  const categories = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">

      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`
            px-5
            py-2.5
            rounded-full
            border
            border-[#D8C5B3]
            text-sm
            capitalize
            transition
            duration-300
            ${
              category === item
                ? "bg-[#8F5D45] text-white"
                : "bg-[#EFE1D2] text-[#806B5D] hover:bg-[#8F5D45] hover:text-white"
            }
          `}
        >
          {item}
        </button>
      ))}

    </div>
  );
};

export default CategoryFilter;