"use client";

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Button,
  Card,
  CardHeader,
} from "@mui/material";
import { InputNumber } from "antd";
import { Cancel, CloseOutlined } from "@mui/icons-material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Image from "next/image";
import QuantityInput from "./NumberInput";
import NumberInput from "./NumberInput";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrementItem } from "@/store/slices/cartSlice";
import LoginCard from "./LoginCard";

const CartSidebar = ({ open, setOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    items,
    totalQuantity,
    totalPrice,
    deliveryCharge = "0",
    handlingCharge = "0",
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const handleCancel = () => {
    setOpen(false);
  };
  const getQuantity = (productId) => {
    const product = items.find((item) => item.id === productId);

    return product ? product.quantity : 0;
  };
  const isSmallScreen = useMediaQuery("(max-width:1024px)");

  return (
    <Drawer
      anchor={isSmallScreen ? "bottom" : "right"}
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          width: isSmallScreen ? "100%" : 400, // Full-width for small screens
          height: "100vh", // Full-height for small screens
          maxHeight: isSmallScreen ? "100vh" : "auto", // Prevent overflow
          overflow: "auto", // Handle scroll for large content
        },
      }}
    >
      {totalQuantity > 0 ? (
        <div className="bg-blue-50/55">
          {/* Header */}
          <div className="w-full flex justify-between bg-white py-4 px-4">
            <Typography
              className="text-base"
              textAlign="center"
              fontWeight="bold"
            >
              My Cart
            </Typography>
            <CloseOutlined onClick={handleCancel} className="cursor-pointer" />
          </div>

          {/* Cart Items */}
          <Card className="mx-3 shadow-none mt-4">
            <div className="w-full flex p-4">
              <div className="bg-gray-100  text-black p-2 rounded-xl">
                <TimerOutlinedIcon />
              </div>
              <p className="text-black pl-4 pt-2  text-sm font-semibold">
                Delivery in 10 minutes
              </p>
            </div>
            {items.map((item) => (
              <div key={item.id} className="flex justify-around">
                <div className="h-full">
                  <img
                    src={item.src}
                    alt={`${item.name}`}
                    className="object-contain"
                  />
                </div>
                <div>
                  <Typography className="text-xs ">
                    {item.name ? item.name : ""}
                  </Typography>
                  <Typography className="text-xs ">
                    {item.size ? item.size : ""}
                  </Typography>

                  <Typography className="text-xs ">
                    ₹{item.price ? item.price : "-"}
                  </Typography>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    {getQuantity(item.id) > 0 ? (
                      <div className="font-bold border rounded-md bg-green-700 text-white flex justify-around text-center items-center text-xs">
                        <button
                          onClick={() => dispatch(decrementItem(item.id))}
                          className=" px-2 py-1 rounded-l"
                        >
                          -
                        </button>
                        <span className="px-4">{getQuantity(item.id)}</span>
                        <button
                          onClick={() =>
                            dispatch(
                              addItem({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                              })
                            )
                          }
                          className=" px-2 py-1 rounded-r"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() =>
                          dispatch(
                            addItem({
                              id: item.id,
                              name: item.name,
                              price: item.price,
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
            ))}
          </Card>

          {/* Bill Details */}
          <Card className="mx-3 mt-6 shadow-none">
            <Typography className="text-sm font-bold pl-2 pt-2">
              Bill details
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="Items total" />
                <Typography>₹{totalPrice}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Delivery charge" />
                <Typography>₹{deliveryCharge}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Handling charge" />
                <Typography>₹{handlingCharge}</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Grand total" />
                <Typography className="font-bold text-base">
                  ₹{totalPrice}
                </Typography>
              </ListItem>
            </List>
          </Card>

          {/* Footer */}
          <Card className="mx-3 mt-6 shadow-none">
            <p className="text-black pl-4 pt-2  text-sm font-semibold">
              Cancellation Policy
            </p>
            <Typography className="text-xs px-4  text-gray-600">
              Orders cannot be cancelled once packed for delivery. Refunds will
              be provided for delays, if applicable.
            </Typography>
          </Card>
          <Card className="bg-white mx-3 mt-6 shadow-none flex justify-between p-4">
            <div className="w-full bg-green-700 rounded-xl flex justify-between py-2">
              <div>
                <p className="text-sm text-white ml-4">₹{totalPrice}</p>
                <p className="text-xs text-white/70 ml-4">TOTAL</p>
              </div>
              <button
                variant="contained"
                size="large"
                onClick={() => setIsOpen(true)}
                className="text-white text-base mr-4"
              >
                Login to Proceed
                <ArrowForwardIosOutlinedIcon className="text-base" />
              </button>
              <LoginCard open={isOpen} setOpen={setIsOpen} />

            </div>
          </Card>
        </div>
      ) : (
        <div className="h-full">
          <div className="flex justify-between bg-gray-100 p-4">
          <h2 className="text-base text-center font-bold ">
            My Cart
          </h2>
          <CloseOutlined onClick={handleCancel} className="cursor-pointer" />

          </div>
         
          <div className="h-full flex justify-center text-center items-center">
            <p className=" text-lg">Please Add Products!!!!!</p>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default CartSidebar;
