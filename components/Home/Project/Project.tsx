import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <section
      className="pt-16 pb-16"
      role="region"
      aria-labelledby="projects-section-heading"
      tabIndex={-1} // Para que el foco pueda llegar por skip links
    >
      <div className="w-[80%] mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              id="projects-section-heading"
              className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase"
            >
              Últimos trabajos
            </h2>
            <h3 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
              Impulsando el cambio con proyectos innovadores y exitosos
            </h3>
          </div>
          <div className="lg:ml-auto">
            <a
              href="javascript:void(0)" // Cambiar por URL real cuando esté disponible
              role="button"
              aria-label="Ver todos los proyectos"
              className="w-full py-4 text-base sm:text-lg text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto focus:outline-none focus:ring-4 focus:ring-blue-500"
              tabIndex={0}
            >
              Todos los proyectos
            </a>
          </div>
        </div>

        {/* project images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div data-aos="zoom-in" data-aos-anchor-placement="top-center" tabIndex={0} role="group" aria-label="Proyecto innovador 1">
            <Image
              src="/images/p1.png"
              alt="Proyecto innovador 1 - descripción breve del proyecto"
              width={600}
              height={600}
              priority={false}
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            tabIndex={0}
            role="group"
            aria-label="Proyecto innovador 2"
          >
            <Image
              src="/images/p2.png"
              alt="Proyecto innovador 2 - descripción breve del proyecto"
              width={600}
              height={600}
              priority={false}
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            tabIndex={0}
            role="group"
            aria-label="Proyecto innovador 3"
          >
            <Image
              src="/images/p3.png"
              alt="Proyecto innovador 3 - descripción breve del proyecto"
              width={600}
              height={600}
              priority={false}
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            tabIndex={0}
            role="group"
            aria-label="Proyecto innovador 4"
          >
            <Image
              src="/images/p4.png"
              alt="Proyecto innovador 4 - descripción breve del proyecto"
              width={600}
              height={600}
              priority={false}
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            tabIndex={0}
            role="group"
            aria-label="Proyecto innovador 5"
          >
            <Image
              src="/images/p5.png"
              alt="Proyecto innovador 5 - descripción breve del proyecto"
              width={600}
              height={600}
              priority={false}
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
            tabIndex={0}
            role="group"
            aria-label="Proyecto innovador 6"
          >
            <Image
              src="/images/p6.png"
              alt="Proyecto innovador 6 - descripción breve del proyecto"
              width={600}
              height={600}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
