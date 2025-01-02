'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '../store/hooks';

const Category = () => {
  const product = useAppSelector((state)=>state.product);
  console.log(product);
  const categories = [
    {
      title: "Mens Must-Haves",
      description: "Best Quality product",
      image: "/mens/5.jpg",
      price: "$16.00",
      slug: "black-hoodie",
      category: "Mens",
    },
    {
      title:"Mens Must-Haves",
      description: "Best Quality product",
      image: "/mens/4.jpg",
      price: "$21.15",
      slug: "black-jacket",
      category: "Mens",
    },
    {
      title: "Toddler Baby Boy Outfit",
      description: "Best Quality product",
      image: "/kids/kid5.jpg",
      price: "$12.00",
      slug: "brown-suit",
      category: "Kids",
    },
    {
      title: "Toddler Baby Boy Outfit",
      description: "Top Selling Product",
      image: "/kids/kid4.jpg",
      price: "$18.40",
      slug: "blue-suit",
      category: "Best Sellers",
    },
    {
      title: "CATEGORY",
      description: "Top Selling Product",
      image: "/kids/kid5.jpg",
      price: "$16.00",
      slug: "light-brown-suit",
      category: "Best Sellers",
    },
    {
      title: "CATEGORY",
      description: "Top Selling Product",
      image: "/mens/1.jpg",
      price: "$21.15",
      slug: "black&white-hoodie",
      category: "Men",
    },
    {
      title: "CATEGORY",
      description: "Top Selling Product",
      image: "/mens/2.jpg",
      price: "$12.00",
      slug: "brown-hoodie",
      category: "Men",
    },
    {
      title: "Mens Must-Haves",
      description: "Top Selling Product",
      image: "/mens/3.jpg",
      price: "$18.40",
      slug: "white&blue-hoodie",
      category: "Men",
    },
  ];

  return (
    <div className="lg:w-[1440px] pt-8 px-4 sm:pt-12 sm:px-8 lg:px-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-black scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
          Categories
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl duration-100 hover:scale-95"
              >
                <Link
                  href={`/${category.category.toLowerCase().replace(" ", "-")}/${category.slug}`}
                  className="block relative h-65 rounded overflow-hidden"
                >
                  <Image
                    alt={category.title}
                    className="object-cover object-center w-full h-full block"
                    src={category.image}
                    width={500}
                    height={500}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {category.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                  <p className="mt-1 text-yellow-500 font-bold">{category.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;

