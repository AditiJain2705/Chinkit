"use client";
import { useEffect, useState } from "react";
import panCorner from "../../assets/home/pancorner.webp";
import babyCare from "../../assets/home/babycare.png";
import pharmacy from "../../assets/home/pharmacy.png";
import petCare from "../../assets/home/petcare.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
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
import BottomCartBar from "./smallScreenComponents/BottomCartBar";
import Header from "@/components/Header";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Home = ({ userLocation }) => {
 const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const placeholders = ["Search vegetable", "Search oil", "Search soap"];
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
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
<Header userLocation={userLocation}/>
      {/* Product for big screen */}
      <div className="hidden lg:min-h-screen lg:block px-28 mt-20 ">
        {/* Advertisement */}
        <div className="hidden lg:block">
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
              route={section.route}
            />
          </div>
        ))}
      </div>
      {/* Product for small screen*/}
      <div className="min-h-screen mt-36 overflow-x-hidden block lg:hidden">
        <ShopByCategory categories={categories} title={"Shop by Category"} source={'shopByCategory'}/>
        <ShopByCategory categories={shopByStore} title={"Shop by store"} />
        <SmallScreenProductCarousel
          title={"Hot deals"}
          products={hotDeal}
          color={"bg-yellow-700"}
          route='hotDeal'
        />
        <SmallScreenProductCarousel
          title={"Your daily fresh needs"}
          products={hotDeal}
          color={"bg-yellow-700"}
           route='hotDeal'
        />
        <ShopByCategory categories={cookingIdeas} title={"Cooking ideas"} />
        <TwoColumnCategory
          categories={haveYouTriedData}
          title={"Have you tried these yet?"}
        />
        <BottomCartBar/>
        <SSFooter />
      </div>
    </>
  );
};
export default Home;
