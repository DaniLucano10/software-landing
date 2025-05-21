import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  reviewTitle: string;
  userName: string;
  userImage: string;
  role: string;
  reviewText: string;
};

const ReviewCard = ({
  reviewTitle,
  role,
  userImage,
  userName,
  reviewText,
}: Props) => {
  return (
    <article
      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mr-4 shadow-md"
      role="group"
      aria-labelledby={`${userName.replace(/\s/g, "")}-review-title`}
    >
      <h3
        id={`${userName.replace(/\s/g, "")}-review-title`}
        className="text-2xl text-black dark:text-white font-bold"
      >
        {reviewTitle}
      </h3>

      <div
        className="mt-2 flex items-center"
      >
        <span className="sr-only">Calificación de 5 estrellas</span>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className="text-yellow-500 w-5 h-5"
            aria-hidden="true"
            focusable="false"
          />
        ))}
      </div>

      <p className="mt-4 text-base md:text-lg font-medium text-gray-800 dark:text-gray-200">
        {reviewText}
      </p>

      <hr className="border-gray-300 dark:border-gray-600 mt-6 mb-6" />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={userImage}
            alt={`Foto de ${userName}`}
            width={60}
            height={60}
            className="rounded-full"
            priority
          />
          <div>
            <h4 className="text-base sm:text-lg text-black dark:text-white md:text-xl font-bold">
              {userName}
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-black dark:text-gray-300">
              {role}
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/images/c4.png"
            alt="Logo de Google - reseñas verificadas"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
