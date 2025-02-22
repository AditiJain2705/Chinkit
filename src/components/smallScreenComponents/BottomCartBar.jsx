'use client'
import { Card } from '@mui/material'
import React, { useState } from 'react'
import LoginCard from '../LoginCard'
import { useSelector } from 'react-redux';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import CartSidebar from '../SideBar';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const BottomCartBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const {
    totalQuantity,

    totalPrice,
  
  } = useSelector((state) => state.cart);
  return (
   <>
   {totalQuantity>0?
     <div className='w-full fixed bottom-6 px-4'>
     <div className=" bg-green-700 rounded-xl flex justify-between items-center p-2">
      <div className='flex justify-center items-center'>
        <div className='bg-white/10  p-2 rounded-xl'>
    <ShoppingCartOutlinedIcon className='text-white'/>
        </div>
      <div className='px-2 items-center'>
          <p className="text-xs text-white ">{totalQuantity}{' '}{totalQuantity>1?'items':'item'}</p>
    
            <p className="text-sm text-white ">₹{totalPrice}</p>
          </div>
      </div>
        
          <button
            variant="contained"
            size="large"
            onClick={() => setSidebarOpen(true)}
            className="text-white text-base mr-3"
          >
            View Cart
            <ArrowRightOutlinedIcon className="text-3xl" />
          </button>
          <CartSidebar open={isSidebarOpen} setOpen={setSidebarOpen} />
    
        </div>
        </div>
   :<></>
   }
   </>
 
   
  )
}

export default BottomCartBar
