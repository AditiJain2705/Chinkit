"use client";

import Header from "@/layouts/Header";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import {
  addItem,
  calculateTotals,
  decrementItem,
} from "../../store/slices/cartSlice";
import { CardMedia } from "@mui/material";
const DetailPage = ({ userLocation }) => {
  const [productDetail, setProductDetail] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const path = usePathname();
  const { products } = useSelector((state) => state.products);
  const getQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);

    return product ? product.quantity : 0;
  };
  useEffect(() => {
    if (!path || !products?.length) return;

    const Idpart = path.split("/");
    const route = Idpart[2];
    const id = Number(Idpart[3]);

    const matchedCategory = products.find((item) => item.route === route);
    if (matchedCategory) {
      const product = matchedCategory.productData.find(
        (item) => item.id === id
      );
      setProductDetail(product || null);
    }
  }, [path, products]);

  if (!productDetail) return <p>Loading product details...</p>;
  const benefits = [
    {
      id: 1,
      title: "Superfast Delivery",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you.",
      icon: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png", // Replace with your actual icon path
    },
    {
      id: 2,
      title: "Best Prices & Offers",
      description:
        "Best price destination with offers directly from the manufacturers.",
      icon: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png", // Replace with your actual icon path
    },
    {
      id: 3,
      title: "Wide Assortment",
      description:
        "Choose from 5000+ products across food, personal care, household & other categories.",
      icon: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png", // Replace with your actual icon path
    },
  ];
  
  return (
    <>
      <Header userLocation={userLocation} />
      <div className="w-full flex justify-center lg:h-screen p-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-8 mt-40 md:mt-20 lg:mt-0  lg:p-36">
          {/* Product Image */}
          <div className="border flex justify-center items-center rounded-lg overflow-hidden">
            {productDetail.image && (
              <CardMedia
  component="img"
  image={productDetail.image} // Use 'image' instead of 'src'
  alt={productDetail.name}
  className="object-contain h-[30vh] lg:h-[40vh]"

/>

            )}
          </div>

          {/* Product Info */}
          <div className=" border rounded-lg p-8">
            <h1 className="text-2xl font-semibold mb-2">
              {productDetail.name ?? "--"}
            </h1>

            {/* Delivery Time */}
            <p className="text-sm flex items-center gap-1 bg-slate-50 p-1 rounded w-fit">
              <TimerOutlinedIcon className="h-4 w-4" />
              {productDetail.time ?? "N/A"}
            </p>
<hr className="mt-4"/>
            {/* Product Size & Price */}
            <p className="mt-4">
              <span className="font-medium">Size:</span> {productDetail.size}
            </p>
             <div className="flex justify-between items-center gap-2">
                     <p className="text-sm font-bold">₹{productDetail.price}</p>
                     <div className="flex items-center">
                       {getQuantity(productDetail.id) > 0 ? (
                         <div className="font-bold border rounded-md bg-green-700 text-white flex justify-around items-center text-xs">
                           <button
                             onClick={() => dispatch(decrementItem(productDetail.id))}
                             className="px-2 py-1 rounded-l"
                           >
                             -
                           </button>
                           <span className="px-4">{getQuantity(productDetail.id)}</span>
                           <button
                             onClick={() =>
                               dispatch(
                                 addItem({
                                   id: productDetail.id,
                                   name: productDetail.name,
                                   price: productDetail.price,
                                   image:productDetail.image
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
                                 id: productDetail.id,
                                 name: productDetail.name,
                                 price: productDetail.price,
                                 image:productDetail.image
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
                   <section className="hidden md:block py-8 ">
      <h2 className=" text-xl font-semibold mb-6">Why shop from blinkit?</h2>
      <div className="space-y-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex items-start gap-4">
            <Image
              src={benefit.icon}
              alt={benefit.title}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h3 className="text-lg font-medium">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
