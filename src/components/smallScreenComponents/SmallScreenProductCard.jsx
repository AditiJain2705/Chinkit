import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Link from "next/link";
import Image from "next/image";
import {
  addItem,
  calculateTotals,
  decrementItem,
} from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const SmallScreenProductCarousel = ({ products, color, title }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const getQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);

    return product ? product.quantity : 0;
  };
    React.useEffect(() => {
      dispatch(calculateTotals()); // Ensure totals are up-to-date
    }, [cartItems, dispatch]);
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    responsive: [
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
    <div className="py-8 px-7 text-black items-center">
      <div className="w-[95%] flex justify-between text-center items-center">
        <h2 className="text-lg font-bold text-black">{title}</h2>
        <Link className="text-sm text-green-700" href={"/"}>
          see all
        </Link>
      </div>
      <Slider {...settings} className="w-[90%] ml-5">
        {products.map((product, index) => (
          <div key={index} className="p-1">
            <div className=" flex flex-col justify-between p-4 bg-white ">
              {product.discount ? (
                <div className="relative top-10 left-2 w-10 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded z-20">
                  {product.discount}
                </div>
              ) : (
                <></>
              )}
              <Image
                src={product.image.trimEnd()}
                alt={product.name}
                height={140}
                width={140}
                className="w-full  object-contain mb-4  border rounded-lg"
              />
              <p
                className={`text-[10px] flex ${
                  color ? "bg-yellow-600/25" : "bg-gray-50"
                } ${
                  color ? "text-yellow-950" : "text-black"
                } p-1 w-16 items-center`}
              >
                <TimerOutlinedIcon className="h-3 w-3" />
                {product.time}
              </p>
              <h3 className="font-medium text-sm pb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 pb-2">{product.size}</p>
                <div className="flex justify-between items-center mt-auto">
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SmallScreenProductCarousel;
