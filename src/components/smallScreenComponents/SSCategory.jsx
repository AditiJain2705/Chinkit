import Image from "next/image";
import Link from "next/link";

export default function ShopByCategory({ categories, title,source }) {
  return (
    <div className="px-7">
      <div className="">
        <h2 className="text-lg font-bold py-6 text-black">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center   p-4 rounded-lg shadow hover:shadow-lg transition duration-200`}
            >
              <Link href={`${category.link}`}>
                <div className="relative mb-3 ">
                  <Image
                    src={category.image.trimEnd()}
                    alt={category.name}
                    height={140}
                    width={140}
                 
                    className="rounded-lg"
                  />
                </div>
                {
                  source!=='shopByCategory'&&
                  <p className="text-sm font-bold text-gray-700 text-center">
                  {category.name}
                </p>
                }
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
