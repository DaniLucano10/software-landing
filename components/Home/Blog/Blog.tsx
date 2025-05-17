import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Heading section */}
      <div className="text-center">
        {/* subheading */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500">
          Blog más reciente
        </h1>
        {/* Heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
          Listo Nuestros últimos hallazgos de nuestras publicaciones de blog
        </h1>
      </div>
      <div className="w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          data-aos="fade-right"
        >
          <BlogCard
            image="/images/b1.png"
            title="Consejos de expertos para aumentar su presencia digital"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <BlogCard
            image="/images/b2.png"
            title="Estrategias basadas en datos y casos de estudio de éxito"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <BlogCard
            image="/images/b3.png"
            title="El blog completo de SEO para el éxito digital"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
