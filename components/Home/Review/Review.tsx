"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1124, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Review = () => {
  return (
    <section
      aria-label="Testimonios de clientes"
      className="pt-16 pb-16 bg-white dark:bg-gray-900"
    >
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Section Heading */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
              Testimonios
            </h2>
            <h1 className="text-xl sm:text-3xl md:text-4xl mt-1 font-extrabold text-gray-900 dark:text-white">
              Testimonios de clientes líderes de la industria que confían en
              nosotros
            </h1>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#"
              className="inline-block w-full py-4 text-base sm:text-lg text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto"
              aria-label="Ver todas las reseñas de clientes"
            >
              Ver todas las reseñas
            </a>
          </div>
        </header>

        {/* Sliders */}
        <div className="mt-16" aria-live="polite" aria-atomic="true">
          <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            aria-label="Carrusel de testimonios de clientes"
          >
            <ReviewCard
              reviewTitle="¡Gran trabajo!"
              userName="Jassica Doe"
              userImage="/images/c1.png"
              role="Diseñadora UI/UX"
              reviewText="El equipo superó todas mis expectativas, entregando un diseño intuitivo y atractivo que ha mejorado significativamente la experiencia de nuestros usuarios."
            />
            <ReviewCard
              reviewTitle="¡Trabajo creativo!"
              userName="Jany Doe"
              userImage="/images/c2.png"
              role="Desarrolladora web"
              reviewText="Colaborar con ellos fue un placer. Su creatividad y profesionalismo se reflejan en cada detalle del proyecto. Sin duda volvería a trabajar juntos."
            />
            <ReviewCard
              reviewTitle="¡Trabajo impresionante!"
              userName="Jason Doe"
              userImage="/images/c3.png"
              role="Desarrollador de aplicaciones"
              reviewText="El desarrollo fue ágil y eficiente. Entregaron una aplicación robusta y con un rendimiento excelente. Muy satisfecho con los resultados."
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Review;
