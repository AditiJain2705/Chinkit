import Image from "next/image";
import Link from "next/link";

export default function TwoColumnCategory({ categories, title }) {
  return (
    <div className="px-7">
      <div className="">
        <h2 className="text-lg font-bold py-6 text-black">{title}</h2>
        <div className="grid grid-cols-2  gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#DAF2FF] p-4 rounded-lg shadow hover:shadow-lg transition duration-200 mb-4"
            >
              <Link href={`${category.link}`}>
                <div className="relative mb-3">
                  <Image
                    src={category.image.trimEnd()}
                    alt={category.name}
                    width={250}
                    height={160}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm  text-gray-700 text-center font-bold">
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
