"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import NumberInput from "./NumberInput";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  calculateTotals,
  decrementItem,
} from "../store/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";

const ProductCarousel = ({ title, products ,route}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);

    return product ? product.quantity : 0;
  };
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", background: "green", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  React.useEffect(() => {
    dispatch(calculateTotals()); // Ensure totals are up-to-date
  }, [cartItems, dispatch]);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "green",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-8 px-4 text-black ">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <Slider {...settings}>
  {products.map((product, index) => (
    <div key={index} className="p-4">
      <Link href={`/details/${route}/${product.id}`}>
      <div className="grid items-stretch w-full border rounded-lg p-4 shadow-sm h-[350px]" >
       <div className="w-full items-center flex justify-center  ">
       <Image
          src={product.image.trimEnd()}
          alt={product.name}
          width={140}
          height={140}
          className="object-contain mb-4"
        />
       </div>
       
        <p className="text-[10px] flex bg-slate-50 p-1 w-16 items-center">
          <TimerOutlinedIcon className="h-3 w-3" />
          {product.time}
        </p>

        <h3 className="font-medium text-sm pb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 pb-2">{product.size}</p>

        <div className="flex justify-between items-center gap-2">
          <p className="text-sm font-bold">₹{product.price}</p>
          <div className="flex items-center">
            {getQuantity(product.id) > 0 ? (
              <div className="font-bold border rounded-md bg-green-700 text-white flex justify-around items-center text-xs">
                <button
                  onClick={() => dispatch(decrementItem(product.id))}
                  className="px-2 py-1 rounded-l"
                >
                  -
                </button>
                <span className="px-4">{getQuantity(product.id)}</span>
                <button
                  onClick={() =>
                    dispatch(
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image:product.image
                      })
                    )
                  }
                  className="px-2 py-1 rounded-r"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() =>
                  dispatch(
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image:product.image
                    })
                  )
                }
                className="bg-green-50 text-xs font-semibold border border-green-700 text-green-700 px-6 py-2 rounded-lg"
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
      </Link>
     
    </div>
  ))}
</Slider>

    </div>
  );
};

export default ProductCarousel;
