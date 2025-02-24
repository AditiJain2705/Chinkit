'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LoginCard from "../components/LoginCard";
import CartSidebar from "../components/SideBar";
import logo from "../../assets/home/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = ({ userLocation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const placeholders = ["Search vegetable", "Search oil", "Search soap"];
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  return (
    <nav className="w-full lg:h-20 flex flex-col lg:flex-row items-center overflow-hidden lg:border-b fixed top-0 bg-white">
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
  )
}

export default Header
