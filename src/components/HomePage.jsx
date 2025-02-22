"use client";
import { useEffect, useState } from "react";
import logo from "../../assets/home/logo.png";
import panCorner from "../../assets/home/pancorner.webp";
import babyCare from "../../assets/home/babycare.png";
import pharmacy from "../../assets/home/pharmacy.png";
import petCare from "../../assets/home/petcare.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Image from "next/image";
import CategoryGrid from "./CategoryItem";
import ProductCarousel from "./ProductCarousel";
import SmallScreenProductCarousel from "./smallScreenComponents/SmallScreenProductCard";
import ShopByCategory from "./smallScreenComponents/SSCategory";
import TwoColumnCategory from "./smallScreenComponents/TwoColumnCategoryCards";
import SSFooter from "./smallScreenComponents/SSFooter";
import LoginCard from "./LoginCard";
import CartSidebar from "./SideBar";
import { useSelector, useDispatch } from "react-redux";

const Home = ({ userLocation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const placeholders = ["Search vegetable", "Search oil", "Search soap"];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  // For search bar text top to down animation
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
  //   }, 2000); // Change placeholder every 2 seconds
  //   return () => clearInterval(interval);
  // }, []);
  const handleCategoryClick = (id) => {
    console.log(`Category clicked with ID: ${id}`);
    // You can navigate to the category's link or perform another action here
  };
  const {
    products,
    categories,
    shopByStore,
    hotDeal,
    cookingIdeas,
    haveYouTriedData,
  } = useSelector((state) => state.products);

  return (
    <>
      {/* header */}
      <nav className="w-full h-40 lg:h-20 flex flex-col lg:flex-row items-center overflow-hidden lg:border-b absolute top-0 bg-white">
        <div className=" hidden  w-[12%] h-full p-4 border-r hover:bg-gray-50 lg:flex justify-center items-center">
          <Image className="object-contain h-16" src={logo} alt="logo" />
        </div>
        <div className="w-full lg:w-8/12 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-full px-8 lg:px-12 lg:py-4  items-center hover:bg-gray-50 overflow-hidden">
            <p className="font-semibold text-lg text-gray-800">Deliver in:</p>
            <p className="text-gray-800 text-xs">{userLocation}</p>
          </div>
          <div className="w-3/4 p-6 flex justify-center">
            <div className="w-full border rounded-xl pl-2 flex justify-center items-center flex-grow bg-[#F8F8F8]">
              <SearchOutlinedIcon />
              <input
                className="w-full px-4 py-3  focus:outline-none bg-[#F8F8F8]"
                placeholder={placeholders[currentPlaceholderIndex]}
                name=""
              />
            </div>
          </div>
        </div>

        <div className="  hidden  w-[10%]  lg:flex items-center justify-end px-4 space-x-4">
          <button
            className="text-green-700 text-lg"
            onClick={() => setIsOpen(true)}
          >
            Login
          </button>

          {/* LoginCard Modal */}
          <LoginCard open={isOpen} setOpen={setIsOpen} />
        </div>
        <div className=" hidden w-[15%] lg:flex items-center justify-end px-4 space-x-4">
          <button
            className="bg-green-700 text-white px-4 py-3 rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <ShoppingCartOutlinedIcon />
            My Cart
          </button>
          <CartSidebar open={isSidebarOpen} setOpen={setSidebarOpen} />
        </div>
      </nav>
      {/* Product for big screen */}
      <div className="hidden lg:min-h-screen lg:block px-28 mt-20 ">
        {/* Advertisement */}
        <div className="hidden lg:block ">
          <Image src={panCorner} alt="Pan Shop" className="object-cover" />
        </div>
        <div className="mt-4 hidden  px-4 lg:w-3/4 lg:grid lg:grid-cols-3 grid-cols-2 gap-4">
          <Image
            src={pharmacy}
            alt="pharmacy"
            className=" lg:w-[335px] object-cover"
          />
          <Image
            src={petCare}
            alt="petCare"
            className="lg:w-[335px] object-cover"
          />
          <Image
            src={babyCare}
            alt="babyCare"
            className="lg:w-[335px] object-cover"
          />
        </div>
        {/* Categories */}
        <CategoryGrid
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
        {/* Product cards */}
        {products.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Pass title and product data to ProductCarousel */}
            <ProductCarousel
              title={section.title}
              products={section.productData}
            />
          </div>
        ))}
      </div>
      {/* Product for small screen*/}
      <div className="min-h-screen mt-36 overflow-x-hidden block lg:hidden">
        <ShopByCategory categories={categories} title={"Shop by Category"} />
        <ShopByCategory categories={shopByStore} title={"Shop by store"} />
        <SmallScreenProductCarousel
          title={"Hot deals"}
          products={hotDeal}
          color={"bg-yellow-700"}
        />
        <SmallScreenProductCarousel
          title={"Your daily fresh needs"}
          products={hotDeal}
          color={"bg-yellow-700"}
        />
        <ShopByCategory categories={cookingIdeas} title={"Cooking ideas"} />
        <TwoColumnCategory
          categories={haveYouTriedData}
          title={"Have you tried these yet?"}
        />
        <SSFooter />
      </div>
    </>
  );
};
export default Home;
