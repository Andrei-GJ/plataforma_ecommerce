"use client";

import React from "react";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      title: "Laura Gómez",
      description:
        "Siempre encuentro lo que necesito para mi oficina y a muy buen precio. ¡Es mi miscelánea de confianza!",
      image: "/images/persona1.jpg",
    },
    {
      title: "Carlos Méndez",
      description:
        "Vine por un cuaderno y salí con todo lo que necesitaba para el colegio de mis hijos. ¡Súper completo el surtido!",
      image: "/images/persona3.jpg",
    },
    {
      title: "Ana Torres",
      description:
        "Los productos de aseo son de calidad y los precios están buenísimos. Además, atienden con una sonrisa.",
      image: "/images/persona2.jpg",
    },
    {
      title: "Julián Herrera",
      description:
        "Es el lugar perfecto para resolver cualquier apuro: papelería, detalles, dulces... ¡Tienen de todo!",
      image: "/images/persona4.jpg",
    },
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[400px] mx-3 bg-white rounded-[32px] p-8 shadow-sm">
      <div className="flex items-start gap-6">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.title}
            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className={`w-20 h-20 rounded-full ${testimonial.gradient} flex-shrink-0`}
          />
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-[20px] font-semibold text-gray-900 mb-3 leading-tight break-words">
            {testimonial.title}
          </h3>
          <p className="text-gray-600 text-[15px] leading-relaxed break-words">
            {testimonial.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-10 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-xl font-bold text-black mb-8">Clientes</h2>
      </div>

      <div className="relative">
        {/* Primera fila - se mueve a la derecha */}
        <div className="mb-6">
          <div className="flex animate-scroll-right">
            {/* Duplicamos para loop infinito */}
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                />
              )
            )}
          </div>
        </div>

        {/* Segunda fila - se mueve a la izquierda */}
        <div className="mb-6">
          <div className="flex animate-scroll-left">
            {/* Duplicamos para loop infinito */}
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <TestimonialCard
                  key={`row2-${index}`}
                  testimonial={testimonial}
                />
              )
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        /* Pausar animación al hacer hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSlider;
