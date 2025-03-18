import React from "react";
import feature1 from '/feature1.webp';
import feature2 from '/feature2.webp';
import feature3 from '/feature3.webp';

const Carousel = () => {
  const features = [
    {
      title: "Immersive Learning",
      frontImage: `url(${feature1})`,
      backContent:
        "Our immersive learning experience will transport you to a world of wonder and discovery.",
    },
    {
      title: "Quick Mastery",
      frontImage: `url(${feature3})`,
      backContent:
        "Master new skills in a fraction of the time with our accelerated learning techniques.",
    },
    {
      title: "Global recognition",
      frontImage: `url(${feature2})`,
      backContent:
        "Our courses are recognized and respected by employers and industry leaders worldwide.",
    },
  ];

  return (
    <section
      role="carousel"
      className="h-screen sm:h-[90vh] flex flex-col justify-center items-center gap-10 p-8"
    >
      <h2 className="font-bold text-3xl">Features</h2>
      <div className="w-full h-full grid lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div
                className="flip-card-front bg-cover bg-center"
                style={{ backgroundImage: feature.frontImage }}
              >
                <h3 className="text-xl font-semibold text-white p-4 bg-black bg-opacity-50 rounded-tl-2xl rounded-tr-2xl">
                  {feature.title}
                </h3>
              </div>
              {/* Back Side */}
              <div className="flip-card-back bg-[#6c3baa] text-white flex items-center justify-center p-4">
                <p className="text-xl">{feature.backContent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
