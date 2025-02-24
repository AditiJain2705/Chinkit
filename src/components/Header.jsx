'use client'
import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from 'next/image';
import LoginCard from './LoginCard';
import CartSidebar from './SideBar';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../../assets/home/logo.png";

const Header = ({userLocation}) => {
   const [isOpen, setIsOpen] = useState(false);
      const [isSidebarOpen, setSidebarOpen] = useState(false);
    
      const placeholders = ["Search vegetable", "Search oil", "Search soap"];
      const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
      const MobileNavbar = () => {
        return (
          <nav className="lg:hidden w-full absolute top-0 bg-white flex flex-col items-center border-b">
            <div className="w-full p-4 flex items-center justify-between">
              <p className="text-gray-800 text-xs">Deliver in: {userLocation}</p>
            </div>
            <div className="w-full p-4">
              <div className="w-full border rounded-xl pl-2 flex items-center bg-[#F8F8F8]">
                <SearchOutlinedIcon />
                <input
                  className="w-full px-4 py-3 focus:outline-none bg-[#F8F8F8]"
                  placeholder={placeholders[currentPlaceholderIndex]}
                />
              </div>
            </div>
          </nav>
        );
      };
      const DesktopNavbar = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [isSidebarOpen, setSidebarOpen] = useState(false);
      
        return (
          <nav className="hidden lg:flex w-full absolute top-0 bg-white items-center border-b">
            <div className="w-[12%] h-20 p-4 border-r hover:bg-gray-50 flex justify-center items-center">
              <Image className="object-contain h-16" src={logo} alt="logo" />
            </div>
      
            <div className="w-8/12 flex">
              <div className="w-1/3 h-20 px-12 py-4 flex flex-col justify-center hover:bg-gray-50">
                <p className="font-semibold text-lg text-gray-800">Deliver in:</p>
                <p className="text-gray-800 text-xs">{userLocation}</p>
              </div>
      
              <div className="w-3/4 p-6 flex justify-center">
                <div className="w-full border rounded-xl pl-2 flex items-center bg-[#F8F8F8]">
                  <SearchOutlinedIcon />
                  <input
                    className="w-full px-4 py-3 focus:outline-none bg-[#F8F8F8]"
                    placeholder={placeholders[currentPlaceholderIndex]}
                  />
                </div>
              </div>
            </div>
      
            <div className="w-[10%] flex items-center justify-end px-4 space-x-4">
              <button className="text-green-700 text-lg" onClick={() => setIsOpen(true)}>
                Login
              </button>
              <LoginCard open={isOpen} setOpen={setIsOpen} />
            </div>
      
            <div className="w-[15%] flex items-center justify-end px-4 space-x-4">
              <button className="bg-green-700 text-white px-4 py-3 rounded-lg" onClick={() => setSidebarOpen(true)}>
                <ShoppingCartOutlinedIcon /> My Cart
              </button>
              <CartSidebar open={isSidebarOpen} setOpen={setSidebarOpen} />
            </div>
          </nav>
        );
      };
            
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  )
}

export default Header
