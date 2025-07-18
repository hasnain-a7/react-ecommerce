import { useState, useEffect } from "react";
import Card from "./Card";
const productData = [
  {
    image: "https://m.media-amazon.com/images/I/61NwnzYyGGL._AC_SL1500_.jpg",
    title: "Wireless Headphones",
    price: 2000,
    category: "Electronics",
    link: "/product/wireless-headphones",
  },
  {
    image: "https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg",
    title: "Smart Watch",
    price: 2400,
    category: "Electronics",
    link: "/product/smart-watch",
  },
  {
    image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1500_.jpg",
    title: "Gaming Mouse",
    price: 3500,
    category: "Accessories",
    link: "/product/gaming-mouse",
  },
  {
    image: "https://m.media-amazon.com/images/I/71+V5l9vYwL._AC_SL1500_.jpg",
    title: "Bluetooth Speaker",
    price: 5000,
    category: "Electronics",
    link: "/product/bluetooth-speaker",
  },
  {
    image: "https://m.media-amazon.com/images/I/71c5U6Z5H2L._AC_UL1500_.jpg",
    title: "T-Shirt - Black",
    price: 700,
    category: "Clothing",
    link: "/product/t-shirt-black",
  },
  {
    image: "https://m.media-amazon.com/images/I/81fV5r+7w+L._AC_SL1500_.jpg",
    title: "Yoga Mat",
    price: 900,
    category: "Fitness",
    link: "/product/yoga-mat",
  },
  {
    image: "https://m.media-amazon.com/images/I/61eL3Yw0aNL._AC_SL1500_.jpg",
    title: "Laptop Stand",
    price: 2300,
    category: "Accessories",
    link: "/product/laptop-stand",
  },
  {
    image: "https://m.media-amazon.com/images/I/61+V5l9vYwL._AC_SL1500_.jpg",
    title: "LED Desk Lamp",
    price: 4300,
    category: "Home Decor",
    link: "/product/led-desk-lamp",
  },
  {
    image: "https://m.media-amazon.com/images/I/71s8U9VzLGL._AC_SL1500_.jpg",
    title: "Blender Pro",
    price: 3200,
    category: "Appliances",
    link: "/product/blender-pro",
  },
  {
    image: "https://m.media-amazon.com/images/I/71v5N3X5VBL._AC_SL1500_.jpg",
    title: "Gaming Keyboard",
    price: 2800,
    category: "Accessories",
    link: "/product/gaming-keyboard",
  },
  {
    image: "https://m.media-amazon.com/images/I/61NwnzYyGGL._AC_SL1500_.jpg",
    title: "Fitness Tracker",
    price: 4100,
    category: "Fitness",
    link: "/product/fitness-tracker",
  },
  {
    image: "https://m.media-amazon.com/images/I/71c5U6Z5H2L._AC_UL1500_.jpg",
    title: "HD Webcam",
    price: 3600,
    category: "Electronics",
    link: "/product/hd-webcam",
  },
  {
    image: "https://m.media-amazon.com/images/I/81fV5r+7w+L._AC_SL1500_.jpg",
    title: "Coffee Maker",
    price: 7500,
    category: "Appliances",
    link: "/product/coffee-maker",
  },
  {
    image: "https://m.media-amazon.com/images/I/71+V5l9vYwL._AC_SL1500_.jpg",
    title: "Running Shoes",
    price: 5800,
    category: "Clothing",
    link: "/product/running-shoes",
  },
  {
    image: "https://m.media-amazon.com/images/I/61eL3Yw0aNL._AC_SL1500_.jpg",
    title: "Electric Kettle",
    price: 2100,
    category: "Appliances",
    link: "/product/electric-kettle",
  },
  {
    image: "https://m.media-amazon.com/images/I/71v5N3X5VBL._AC_SL1500_.jpg",
    title: "Power Bank 10000mAh",
    price: 1200,
    category: "Electronics",
    link: "/product/power-bank-10000mah",
  },
  {
    image: "https://m.media-amazon.com/images/I/61NwnzYyGGL._AC_SL1500_.jpg",
    title: "Backpack",
    price: 3100,
    category: "Accessories",
    link: "/product/backpack",
  },
  {
    image: "https://m.media-amazon.com/images/I/71c5U6Z5H2L._AC_UL1500_.jpg",
    title: "Bluetooth Earbuds",
    price: 2700,
    category: "Electronics",
    link: "/product/bluetooth-earbuds",
  },
  {
    image: "https://m.media-amazon.com/images/I/81fV5r+7w+L._AC_SL1500_.jpg",
    title: "Air Fryer",
    price: 5600,
    category: "Appliances",
    link: "/product/air-fryer",
  },
  {
    image: "https://m.media-amazon.com/images/I/61eL3Yw0aNL._AC_SL1500_.jpg",
    title: "Desk Organizer",
    price: 1800,
    category: "Home Decor",
    link: "/product/desk-organizer",
  },
];

const ProductSection = () => {
  const [filter, setfilter] = useState("");
  const [filteredProduct, setfilteredProduct] = useState(productData);

  useEffect(() => {
    if (filter === "") {
      setfilteredProduct(productData);
    } else {
      setfilteredProduct(
        productData.filter((product) => product.category === filter)
      );
    }
  }, [filter]);

  return (
    <section className="container mx-auto w-full items-center bg-slate-100  p-3">
      <div className="flex justify-center flex-wrap gap-3 p-1 bg-gray-100 rounded-lg ">
        {[
          "All",
          "Electronics",
          "Clothing",
          "Fitness",
          "Accessories",
          "Appliances",
          "Home Decor",
        ].map((item) => (
          <button
            key={item}
            className="text-base sm:text-lg md:text-xl font-medium px-4 py-2 bg-slate-400 hover:bg-slate-500 text-white rounded-xl transition-all duration-300"
            onClick={() => setfilter(item === "All" ? "" : item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="g-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-full p-1 gap-2">
        {filteredProduct.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            link={product.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
