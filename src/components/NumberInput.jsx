"use client";

import React, { useState } from "react";

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const NumberInput = ({defaultQuantity}) => {
    const [quantity, setQuantity] = useState(1)


  const handleIncrement=()=>{
    setQuantity(quantity+1)
  }
  const handleDecrement=()=>{
    setQuantity(quantity-1)
  }

  

  return (
   <div className="h-8 w-16 font-bold border rounded-md bg-green-700 text-white flex justify-around text-center items-center text-xs">
<button onClick={handleDecrement}><RemoveOutlinedIcon className="text-xs font-bold"/></button>
<p className="text-center">{quantity}</p>
<button onClick={handleIncrement}><AddOutlinedIcon className="text-xs font-bold"/></button>

   </div>
  );
};

export default NumberInput;
