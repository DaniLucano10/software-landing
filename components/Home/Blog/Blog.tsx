import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="pt-16 pb-16" aria-labelledby="blog-heading">
      {/* Heading section */}
      <header className="text-center max-w-4xl mx-auto px-4">
        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500">
          Blog más reciente
        </p>
        {/* Heading */}
        <h2
          id="blog-heading"
          className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold"
        >
          Nuestros últimos hallazgos en publicaciones de blog
        </h2>
      </header>

      {/* Blog cards grid */}
      <div
        className="w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        role="list"
      >
        <article data-aos="fade-right">
          <BlogCard
            image="/images/b1.png"
            title="Consejos de expertos para aumentar su presencia digital"
          />
        </article>
        <article data-aos="fade-right" data-aos-delay="100">
          <BlogCard
            image="/images/b2.png"
            title="Estrategias basadas en datos y casos de estudio de éxito"
          />
        </article>
        <article data-aos="fade-right" data-aos-delay="200">
          <BlogCard
            image="/images/b3.png"
            title="El blog completo de SEO para el éxito digital"
          />
        </article>
      </div>
    </section>
  );
};

export default Blog;
