import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type Props = {
  image: string;
  title: string;
  description: string;
};

const ServicesCard = ({ image, title, description }: Props) => {
  return (
    <article
      className="p-6 cursor-pointer hover:bg-blue-800 transition-all duration-500 group relative bg-gray-100 dark:bg-blue-950 shadow rounded-xl"
      role="article"
      aria-label={`Servicio: ${title}`}
    >
      <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className="object-contain"
      />

      <h3 className="text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500">
        {title}
      </h3>

      <p className="mt-4 font-medium text-gray-500 dark:text-gray-200 group-hover:text-gray-300 transition-all duration-500">
        {description}
      </p>

      <div
        className="mt-6 text-xl font-medium flex items-center gap-1 group-hover:text-white transition-all duration-500"
        aria-label={`Más información sobre ${title}`}
      >
        <span>Más información</span>
        <span>
          <GoArrowUpRight />
        </span>
      </div>
    </article>
  );
};

export default ServicesCard;
