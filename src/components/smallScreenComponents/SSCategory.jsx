import Image from "next/image";
import Link from "next/link";

export default function ShopByCategory({ categories, title }) {
  return (
    <div className="px-7">
      <div className="">
        <h2 className="text-lg font-bold py-6 text-black">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              <Link href={`${category.link}`}>
                <div className="w-20 h-20 relative mb-3 bg-[#E5F3F3]">
                  <Image
                    src={category.image}
                    alt={""}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">
                  {category.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
