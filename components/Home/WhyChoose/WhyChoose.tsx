import Image from "next/image";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaRegFileCode } from "react-icons/fa";
import { GrResources } from "react-icons/gr";

const WhyChoose = () => {
  return (
    <section
      className="pt-16 pb-16"
      aria-labelledby="why-choose-heading"
    >
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase">
            ¿Por qué elegirnos?
          </p>

          <h2
            id="why-choose-heading"
            className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]"
          >
            Innovación y excelencia para construir un futuro digital contigo
          </h2>

          <div className="mt-8 mb-8 w-full h-[1px] bg-gray-200 dark:bg-gray-700"></div>

          {/* Beneficio 1 */}
          <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8">
            <div
              className="flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 rounded-full flex-col justify-center"
              aria-hidden="true"
            >
              <FaRegFileCode className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Integración gratuita</h3>
              <p className="mt-2 text-gray-800 dark:text-gray-300 w-[70%]">
                Ofrecemos procesos de integración sin costo adicional para facilitar tu adopción tecnológica sin barreras económicas.
              </p>
            </div>
          </div>

          {/* Beneficio 2 */}
          <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8">
            <div
              className="flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 rounded-full flex-col justify-center"
              aria-hidden="true"
            >
              <GrResources className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Recursos premium</h3>
              <p className="mt-2 text-gray-800 dark:text-gray-300 w-[70%]">
                Accede a herramientas y funcionalidades avanzadas diseñadas para escalar tu negocio y potenciar tus resultados.
              </p>
            </div>
          </div>

          {/* Beneficio 3 */}
          <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8">
            <div
              className="flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 rounded-full flex-col justify-center"
              aria-hidden="true"
            >
              <BiSupport className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Soporte ilimitado</h3>
              <p className="mt-2 text-gray-800 dark:text-gray-300 w-[70%]">
                Nuestro equipo está disponible siempre que lo necesites, garantizando asistencia técnica continua y eficaz.
              </p>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div data-aos="zoom-out" data-aos-anchor-placement="top-center">
          <Image
            src="/images/wc.png"
            alt="Ilustración de razones para elegir nuestros servicios"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
