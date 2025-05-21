import React from "react";
import ServicesCard from "./ServicesCard";

const servicesList = [
  {
    image: "/images/s1.png",
    title: "Desarrollo de software personalizado",
    description: "Creamos soluciones adaptadas a las necesidades de tu negocio.",
  },
  {
    image: "/images/s2.png",
    title: "Diseño y desarrollo de sitios web",
    description: "Diseños responsivos, modernos y funcionales.",
  },
  {
    image: "/images/s3.png",
    title: "Servicios de alojamiento y computación en la nube",
    description: "Infraestructura segura y escalable en la nube.",
  },
  {
    image: "/images/s4.png",
    title: "Integración de IA y aprendizaje automático",
    description: "Automatizamos procesos con inteligencia artificial.",
  },
  {
    image: "/images/s5.png",
    title: "Desarrollo de aplicaciones para Android e iOS",
    description: "Apps móviles potentes para todos los dispositivos.",
  },
  {
    image: "/images/s6.png",
    title: "Diseño gráfico 3D y vectorial",
    description: "Creatividad visual para fortalecer tu marca.",
  },
];

const Services = () => {
  return (
    <section
      className="pt-16 pb-16"
      aria-labelledby="services-heading"
      id="servicios"
    >
      <div className="w-[80%] mx-auto">
        {/* Encabezado */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
          <div>
            <h2
              id="services-heading"
              className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase"
            >
              Lo que ofrecemos
            </h2>
            <h3 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
              Brindamos un servicio de software de alta calidad para todas las industrias
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Con un enfoque en innovación y tecnología, transformamos ideas en soluciones digitales efectivas.
            </p>
          </div>
          <div className="lg:ml-auto">
            <a
              href="/servicios"
              className="w-full py-4 text-base sm:text-lg text-center text-white font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto"
              aria-label="Ver todos los servicios de DevTech"
            >
              Todos los servicios
            </a>
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {servicesList.map((service, index) => (
            <article
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              itemScope
              itemType="https://schema.org/Service"
            >
              <ServicesCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
              {/* Schema.org (oculto para SEO) */}
              <meta itemProp="name" content={service.title} />
              <meta itemProp="description" content={service.description} />
              <meta itemProp="provider" content="TechParaTi" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
