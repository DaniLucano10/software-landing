import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  alt: string;
  title: string;
  description: string;
};

const SoftwareCard = ({ icon, alt, title, description }: Props) => {
  return (
    <article
      className="bg-green-100 dark:bg-gray-800 p-6 rounded-lg"
      tabIndex={0} // para accesibilidad: que pueda recibir foco
      aria-label={`Detalles del software: ${title}`}
    >
      <Image src={icon} alt={alt} width={50} height={50} priority={false} />
      <h3 className="text-xl mt-6 font-bold">{title}</h3>
      <p className="text-gray-800 dark:text-gray-300 mt-3 font-medium">{description}</p>
      <button
        aria-label={`Más información sobre ${title}`}
        className="px-6 py-1.5 rounded-full bg-blue-800 mt-4 font-bold hover:bg-blue-950 transition-all duration-200 cursor-pointer text-white"
        type="button"
      >
        Más información
      </button>
    </article>
  );
};

export default SoftwareCard;
