import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";

const Products = ({ cart, setCart }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");


  // ================= GET PRODUCTS =================

  const getProducts = async () => {

    const res = await axios.get(
      "https://fakestoreapi.com/products"
    );

    setProducts(res.data);

    setLoading(false);
  };


  // ================= CALL API =================

  useEffect(() => {

    getProducts();

  }, []);


  // ================= ADD TO CART =================

  const addToCart = (product) => {

    setCart([...cart, product]);

  };


  // ================= FILTER PRODUCTS =================

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;

  });


  // ================= LOADING =================

  if (loading) {

    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F6EFE7]">

        <p className="text-[#806B5D] text-lg">
          Loading products...
        </p>

      </div>
    );

  }


  return (

    <div className="bg-[#F6EFE7] min-h-screen px-5 sm:px-8 md:px-10 lg:px-16 py-16">

      {/* ================= HEADING ================= */}

      <div className="text-center mb-10">

        <p className="text-sm tracking-[4px] uppercase text-[#A56F55]">
          Our Collection
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4A3830]">
          Explore Our Products
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-[#806B5D]">
          Discover thoughtfully selected pieces made to bring
          comfort, style and simplicity to your everyday life.
        </p>

      </div>


      {/* ================= SEARCH ================= */}

      <SearchBar
        search={search}
        setSearch={setSearch}
      />


      {/* ================= CATEGORY ================= */}

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />


      {/* ================= PRODUCTS ================= */}

      {filteredProducts.length > 0 ? (

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />

          ))}

        </div>

      ) : (

        /* ================= NO RESULTS ================= */

        <div className="text-center py-20">

          <p className="text-sm tracking-[3px] uppercase text-[#A56F55]">
            No Results
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[#4A3830]">
            No products found
          </h2>

          <p className="mt-3 text-[#806B5D]">
            Try another search or category.
          </p>

        </div>

      )}

    </div>

  );

};

export default Products;