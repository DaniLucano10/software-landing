import React from "react";
import SoftwareCard from "./SoftwareCard";

const Software = () => {
  return (
    <section
      className="pt-16 pb-16"
      aria-labelledby="software-section-heading"
      role="region"
      tabIndex={-1} // Para que el foco pueda llegar a esta sección desde skip links
    >
      <div className="text-center w-[90%] mx-auto">
        {/* Subheading */}
        <p className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500">
          Softwares
        </p>

        {/* Heading principal */}
        <h2
          id="software-section-heading"
          className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold"
        >
          Impulsamos el cambio con innovación: <br /> descubre nuestros
          softwares más exitosos
        </h2>
      </div>

      {/* Tarjetas */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <SoftwareCard
            icon="/images/i1.png"
            alt="Icono Plataforma de marketing digital con IA"
            title="Plataforma de marketing digital con IA"
            description="Optimiza tus campañas usando inteligencia artificial para llegar a tu público ideal con mayor precisión y eficacia."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <SoftwareCard
            icon="/images/i2.png"
            alt="Icono Sistema para gestión y venta de productos"
            title="Sistema para gestión y venta de productos"
            description="Gestiona tu inventario, pedidos y ventas en una plataforma intuitiva y eficiente, mejorando tu productividad."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <SoftwareCard
            icon="/images/i3.png"
            alt="Icono Herramienta avanzada para automatización de marketing"
            title="Herramienta avanzada para automatización de marketing"
            description="Automatiza procesos de marketing para aumentar conversiones y fidelizar clientes con campañas inteligentes."
          />
        </div>
      </div>
    </section>
  );
};

export default Software;
