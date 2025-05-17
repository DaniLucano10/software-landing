import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
              Lo que ofrecemos
            </h1>
            <h2 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
              Brindamos un servicio de software de alta calidad para todas las industrias
            </h2>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#"
              className="w-full py-4  text-base sm:text-lg text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto"
            >
              Todos los servicios
            </a>
          </div>
        </div>
        {/* Services card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16">
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServicesCard
              image="/images/s1.png"
              title="Desarrollo de software personalizado"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ServicesCard
              image="/images/s2.png"
              title="Diseño y desarrollo de sitios web"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServicesCard
              image="/images/s3.png"
              title="Servicios de alojamiento y computación en la nube"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ServicesCard
              image="/images/s4.png"
              title="Integración de IA y aprendizaje automático"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
          >
            <ServicesCard
              image="/images/s5.png"
              title="Desarrollo de aplicaciones para Android e iOS"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
          >
            <ServicesCard
              image="/images/s6.png"
              title="Diseño gráfico 3D y vectorial"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
