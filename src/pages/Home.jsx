import React from 'react'
import { Link } from 'react-router-dom'

import img from '../assets/eb7e03bd-ddc9-4f58-8e67-b390c60ce5dd.png'
import womens from '../assets/women.jpg'
import Men from '../assets/men.jpg'
import accessories from '../assets/accessories.jpg'
import shoes from '../assets/shoes.jpg'

import shirt from '../assets/linen shirt.jpg'
import handbag from '../assets/handbag.jpg'
import sneaker from '../assets/sneaker.jpg'
import watch from '../assets/watch.jpg'

import { FaTruck } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

import fashion from '../assets/625413c6-0d9c-47a4-87f9-824179155b57.png'


const Home = ({ cart, setCart }) => {
  return (
    <>

      {/* ================= HERO ================= */}

      <section className="relative w-full h-[75vh] overflow-hidden">

        <img
          src={img}
          alt="Fashion"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center">

          <div className="text-white">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide">
              YOUR STYLE STARTS HERE
            </h1>

            <p className="mt-5 text-base sm:text-lg">
              Explore our latest collection
            </p>

            <Link
              to="/products"
              className="inline-block mt-7 bg-[#8F5D45] px-8 py-3 rounded-full text-white transition duration-300 hover:bg-[#754A37] hover:-translate-y-1 hover:shadow-lg"
            >
              Shop Now
            </Link>

          </div>

        </div>

      </section>


      {/* ================= SHOP BY CATEGORY ================= */}

      <section className="bg-[#F6EFE7] py-20 px-6">

        <div className="text-center mb-12">

          <p className="text-sm tracking-[4px] uppercase text-[#A56F55]">
            Explore
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[#4A3830]">
            Shop By Category
          </h2>

        </div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* WOMEN */}

          <Link
            to="/products"
            className="group relative h-88 overflow-hidden rounded-[30px]"
          >

            <img
              src={womens}
              alt="Women"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

            <div className="absolute bottom-7 left-7">

              <h3 className="text-2xl font-semibold text-white">
                Women
              </h3>

              <p className="mt-1 text-sm text-white/80">
                Discover Collection
              </p>

            </div>

          </Link>


          {/* MEN */}

          <Link
            to="/products"
            className="group relative h-88 overflow-hidden rounded-[30px]"
          >

            <img
              src={Men}
              alt="Men"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

            <div className="absolute bottom-7 left-7">

              <h3 className="text-2xl font-semibold text-white">
                Men
              </h3>

              <p className="mt-1 text-sm text-white/80">
                Discover Collection
              </p>

            </div>

          </Link>


          {/* ACCESSORIES */}

          <Link
            to="/products"
            className="group relative h-88 overflow-hidden rounded-[30px]"
          >

            <img
              src={accessories}
              alt="Accessories"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

            <div className="absolute bottom-7 left-7">

              <h3 className="text-2xl font-semibold text-white">
                Accessories
              </h3>

              <p className="mt-1 text-sm text-white/80">
                Discover Collection
              </p>

            </div>

          </Link>


          {/* SHOES */}

          <Link
            to="/products"
            className="group relative h-88 overflow-hidden rounded-[30px]"
          >

            <img
              src={shoes}
              alt="Shoes"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

            <div className="absolute bottom-7 left-7">

              <h3 className="text-2xl font-semibold text-white">
                Shoes
              </h3>

              <p className="mt-1 text-sm text-white/80">
                Discover Collection
              </p>

            </div>

          </Link>

        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="bg-[#E8D8C8] py-20 px-6">

        <div className="text-center mb-12">

          <p className="text-sm tracking-[4px] uppercase text-[#A56F55]">
            Our Picks
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[#4A3830]">
            Featured Products
          </h2>

        </div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">


          {/* LINEN SHIRT */}

          <div className="bg-[#EFE1D2] border border-[#D8C5B3] rounded-[25px] overflow-hidden">

<div className="h-72 bg-[#F8F3ED] overflow-hidden">              
  <img src={shirt}
                alt="Linen Shirt"
               className="w-full h-full"
              />

            </div>

            <div className="p-5">

              <p className="text-xs uppercase tracking-[2px] text-[#A56F55]">
                Clothing
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#4A3830]">
                Linen Shirt
              </h3>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-lg font-semibold text-[#8F5D45]">
                  Rs. 2,499
                </p>

                <button
                  onClick={() =>
                    setCart([
                      ...cart,
                      {
                        id: 1,
                        title: "Linen Shirt",
                        price: 2499,
                        image: shirt
                      }
                    ])
                  }
                  className="px-4 py-2 rounded-full bg-[#8F5D45] text-white text-sm hover:bg-[#754A37] transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>


          {/* CLASSIC HANDBAG */}

          <div className="bg-[#EFE1D2] border border-[#D8C5B3] rounded-[25px] overflow-hidden">

<div className="h-72 bg-[#F8F3ED] overflow-hidden">              
  <img
                src={handbag}
                alt="Classic Handbag"
                className="w-full h-full"
              />

            </div>

            <div className="p-5">

              <p className="text-xs uppercase tracking-[2px] text-[#A56F55]">
                Accessories
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#4A3830]">
                Classic Handbag
              </h3>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-lg font-semibold text-[#8F5D45]">
                  Rs. 3,499
                </p>

                <button
                  onClick={() =>
                    setCart([
                      ...cart,
                      {
                        id: 2,
                        title: "Classic Handbag",
                        price: 3499,
                        image: handbag
                      }
                    ])
                  }
                  className="px-4 py-2 rounded-full bg-[#8F5D45] text-white text-sm hover:bg-[#754A37] transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>


          {/* MINIMAL SNEAKERS */}

          <div className="bg-[#EFE1D2] border border-[#D8C5B3] rounded-[25px] overflow-hidden">

<div className="h-72 bg-[#F8F3ED] overflow-hidden">              
  <img
                src={sneaker}
                alt="Minimal Sneakers"
className="w-full h-full"/>

            </div>

            <div className="p-5">

              <p className="text-xs uppercase tracking-[2px] text-[#A56F55]">
                Shoes
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#4A3830]">
                Minimal Sneakers
              </h3>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-lg font-semibold text-[#8F5D45]">
                  Rs. 4,299
                </p>

                <button
                  onClick={() =>
                    setCart([
                      ...cart,
                      {
                        id: 3,
                        title: "Minimal Sneakers",
                        price: 4299,
                        image: sneaker
                      }
                    ])
                  }
                  className="px-4 py-2 rounded-full bg-[#8F5D45] text-white text-sm hover:bg-[#754A37] transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>


          {/* CLASSIC WATCH */}

          <div className="bg-[#EFE1D2] border border-[#D8C5B3] rounded-[25px] overflow-hidden">

<div className="h-72 bg-[#F8F3ED] overflow-hidden">              
  <img
                src={watch}
                alt="Classic Watch"
                className="w-full h-full"
              />

            </div>

            <div className="p-5">

              <p className="text-xs uppercase tracking-[2px] text-[#A56F55]">
                Accessories
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#4A3830]">
                Classic Watch
              </h3>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-lg font-semibold text-[#8F5D45]">
                  Rs. 2,199
                </p>

                <button
                  onClick={() =>
                    setCart([
                      ...cart,
                      {
                        id: 4,
                        title: "Classic Watch",
                        price: 2199,
                        image: watch
                      }
                    ])
                  }
                  className="px-4 py-2 rounded-full bg-[#8F5D45] text-white text-sm hover:bg-[#754A37] transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


               
      

      


      



              

      {/* ================= OUR STORY ================= */}

      <section className="bg-[#F6EFE7] py-20 px-6 pl-17">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-23">

          {/* IMAGE */}

          <div className="h-[80vh] w-full md:w-[40%] overflow-hidden rounded-[40px]">

            <img
              src={fashion}
              alt="Our Story"
              className="w-full h-full object-cover"
            />

          </div>


          {/* TEXT */}

          <div className="w-full md:w-[50%]">

            <p className="text-sm tracking-[4px] uppercase text-[#A56F55]">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#4A3830]">
              Style Made Simple
            </h2>

            <p className="mt-6 leading-8 text-[#806B5D]">
              We believe shopping should feel simple, inspiring and
              enjoyable. Our collection brings together timeless
              pieces that fit naturally into everyday life.
            </p>

            <p className="mt-4 leading-8 text-[#806B5D]">
              From everyday essentials to thoughtful accessories,
              every product is selected with style, comfort and
              quality in mind.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[#8F5D45]">

              <FaHeart />

              <span className="text-sm font-medium">
                Made with care
              </span>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Home