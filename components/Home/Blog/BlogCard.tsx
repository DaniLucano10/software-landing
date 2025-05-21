import Image from "next/image";
import React from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
      {/* Blog image */}
      <Image
        src={image}
        alt={title} // Mejor descripción para SEO
        width={400}
        height={400}
        className="rounded-lg w-full h-full"
        loading="lazy"
        decoding="async"
      />

      {/* Blog content box */}
      <div
        className="w-[90%] mx-auto bg-gray-200 dark:bg-blue-900 rounded-lg mt-[-3rem] relative z-10 p-6"
        role="group"
        aria-label={`Artículo del blog: ${title}`}
      >
        <div className="flex items-center space-x-2">
          <BiUser className="w-5 h-5" aria-hidden="true" />
          <span className="md:text-lg text-base font-bold">
            Por administrador
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold mt-4">
          {title}
        </h3>

        <span className="w-full h-[2px] mt-6 mb-6 bg-gray-300 block" aria-hidden="true"></span>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SlCalender className="w-4 h-4" aria-hidden="true" />
            <time className="md:text-lg text-base font-semibold" dateTime="2025-05-11">
              11 May 2025
            </time>
          </div>
          <a
            href="#"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-blue-800 cursor-pointer hover:bg-blue-900 transition-all duration-200"
            aria-label={`Leer más sobre: ${title}`}
          >
            <MdOutlineArrowOutward className="w-5 h-5 text-white" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
