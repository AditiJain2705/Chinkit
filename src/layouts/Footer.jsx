"use client";
import {
  FacebookOutlined,
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import Link from "next/link";
export default function Footer() {
  const usefulLinks = [
    "About",
    "Careers",
    "Blog",
    "Press",
    "Lead",
    "Value",
    "Privacy",
    "Terms",
    "FAQs",
    "Security",
    "Mobile",
    "Contact",
    "Partner",
    "Franchise",
    "Seller",
    "Warehouse",
    "Deliver",
    "Resources",
  ];

  const categories = [
    "Vegetables & Fruits",
    "Cold Drinks & Juices",
    "Bakery & Biscuits",
    "Dry Fruits, Masala & Oil",
    "Paan Corner",
    "Pharma & Wellness",
    "Ice Creams & Frozen Desserts",
    "Beauty & Cosmetics",
    "Stationery Needs",
    "Navratri Specials",
    "Dairy & Breakfast",
    "Instant & Frozen Food",
    "Sweet Tooth",
    "Sauces & Spreads",
    "Organic & Premium",
    "Cleaning Essentials",
    "Personal Care",
    "Fashion & Accessories",
    "Toys & Games",
    "Munchies",
    "Tea, Coffee & Health Drinks",
    "Atta, Rice & Dal",
    "Chicken, Meat & Fish",
    "Baby Care",
    "Home & Office",
    "Pet Care",
    "Electronics & Electricals",
    "Print Store",
  ];

  return (
    <footer className="block  py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="w-full  flex flex-col lg:flex-row lg:px-24">
          {/* Useful Links Section */}
          <div className="w-full lg:w-1/4  mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Useful Links
            </h3>
            <ul className="grid grid-cols-3 md:grid-cols-3 gap-2">
              {usefulLinks.map((category, index) => (
                <li key={index}>
                  <Link
                    href={"/"}
                    className="text-gray-500 text-sm hover:text-gray-800"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Categories &nbsp;{" "}
              <Link href={"/"} className="font-light text-base text-green-600">
                see all
              </Link>
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={"/"}
                    className="text-gray-500 text-sm hover:text-gray-800"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className=" mt-8 flex flex-col lg:flex-row justify-around text-center items-center mx-5 lg:mx-24 py-6 bg-slate-50">
          <p className="text-sm text-gray-500 mb-4">
            &copy; Commerce Private Limited, 2016-2024
          </p>
          <div className="flex flex-col sm:flex-row w-full lg:w-3/5 justify-between text-center items-center">
            <p className="text-gray-500 text-sm hover:text-gray-800 mb-4">
              Download App
            </p>
            <Link href="#" className=" rounded-full hover:text-gray-800 mb-4">
              <img src="/app-store.png" alt="App Store" className="h-6" />
            </Link>
            <Link href="#" className="  rounded-full hover:text-gray-800 mb-4">
              <img src="/google-play.png" alt="Google Play" className="h-6" />
            </Link>
            <div className="w-4/5 sm:w-1/3 flex justify-between mb-4">
              <Link href="#" className=" rounded-full  hover:text-gray-800">
                <FacebookTwoTone className="text-black text-2xl sm:text-4xl rounded-full" />
              </Link>
              <Link href="#" className="rounded-full  hover:text-gray-800">
                <Twitter className="text-black text-2xl sm:text-4xl rounded-full" />
              </Link>
              <Link href="#" className=" rounded-full hover:text-gray-800">
                <Instagram className="text-black text-2xl sm:text-4xl rounded-full" />
              </Link>
              <Link href="#" className=" rounded-full hover:text-gray-800">
                <LinkedIn className="text-black text-2xl sm:text-4xl rounded-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
