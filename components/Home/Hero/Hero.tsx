import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="md:pt-16 relative bg-blue-950 w-full h-screen flex justify-center flex-col"
      aria-label="Sección principal de bienvenida"
    >
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text content */}
        <div data-aos="fade-up">
          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl font-bold text-white">
            La empresa líder en desarrollo de software
          </p>
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-4xl lg:text-5xl mt-6 mb-4 font-bold text-white leading-[2.5rem] md:leading-[4rem]">
            Proporcionamos soluciones de software para cualquier
            <span className="ml-1 text-yellow-300">negocio</span>
          </h1>
          {/* Secondary Heading (SEO-friendly) */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4">
            Desarrollo de software personalizado, eficiente y escalable
          </h2>
          {/* SEO-optimized Description */}
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-300">
            En TechParaTi ayudamos a empresas a digitalizar sus procesos con
            soluciones de software a medida. Nuestro equipo experto en
            tecnología crea herramientas personalizadas para mejorar la
            eficiencia operativa, acelerar el crecimiento y garantizar una
            transformación digital exitosa.
          </p>
          {/* CTA Button */}
          <a
            href="#"
            className="relative inline-flex mt-8 items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Descubre más
            </span>
          </a>
        </div>

        {/* Image content */}
        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="mx-auto hidden xl:block"
        >
          <Image
            src="/images/hero.png"
            alt="Soluciones de software personalizadas para empresas"
            width={900}
            height={900}
            className="w-[900px] h-[900px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
