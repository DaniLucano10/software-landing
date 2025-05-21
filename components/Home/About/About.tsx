import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      className="pt-16 pb-16"
      aria-labelledby="about-heading"
    >
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Imagen principal */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image
            src="/images/about.png"
            alt="Equipo de desarrollo colaborando"
            width={700}
            height={800}
            priority
          />
        </div>

        {/* Contenido textual */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase">
            Sobre nosotros
          </p>

          <h1
            id="about-heading"
            className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]"
          >
            Innovaciones y excelencia: construyendo juntos un futuro digital
          </h1>

          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Somos una empresa dedicada a impulsar la transformación digital a
            través de soluciones tecnológicas innovadoras. Nuestro equipo de
            expertos trabaja en conjunto con nuestros clientes para crear
            plataformas personalizadas, escalar infraestructuras y garantizar
            asistencia técnica en todo momento.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/images/a1.png"
                alt="Ícono de infraestructura TI"
                width={50}
                height={50}
              />
              <h2 className="text-lg sm:text-xl font-bold leading-5">
                Gestión de infraestructura de TI
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/a2.png"
                alt="Ícono de integración en la nube"
                width={50}
                height={50}
              />
              <h2 className="text-lg sm:text-xl font-bold leading-5">
                Integración en la nube <br /> y servicios digitales
              </h2>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/images/a3.png"
                alt="Ícono de desarrollo de software"
                width={50}
                height={50}
              />
              <h2 className="text-lg sm:text-xl font-bold leading-5">
                Desarrollo de software a medida
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/a4.png"
                alt="Ícono de soporte técnico"
                width={50}
                height={50}
              />
              <h2 className="text-lg sm:text-xl font-bold leading-5">
                Asistencia instantánea para cualquier consulta
              </h2>
            </div>
          </div>

          <div className="mt-32">
            <a
              href="/nosotros"
              className="w-full py-4 text-base text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto"
            >
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
