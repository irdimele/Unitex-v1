import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

import img5 from './Hero1/5.png';
import img6 from './Hero1/6.png';
import img7 from './Hero1/7.png';
import img9 from './Hero1/9.png';
import img10 from './Hero1/10.png';

const Whatwedo = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  const serviceImages = [img5, img6, img7, img9, img10];

  if (!t || !t.whatWeDo) return null;

  const servicesList = t.whatWeDo.items || [];

  return (
    <section
      id="2"
      className="max-w-5xl mx-auto px-4 py-12 font-sans"
    >
      {/* Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#FF0000] mb-6 uppercase tracking-wide">
          {t.whatWeDo.title}
        </h2>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {t.whatWeDo.subtitle}
        </p>
      </div>

      {/* Accordion / Carousel-style sections */}
      <div className="space-y-4">
        {servicesList.map((service, index) => {
          const isOpen = activeIndex === index;
          const imageSrc = serviceImages[index] || img5;

          return (
            <div
              key={index}
              className="border border-gray-200 overflow-hidden bg-white shadow-sm"
            >
              {/* Button */}
              <button
                type="button"
                onClick={() => toggleSection(index)}
                aria-expanded={isOpen}
                className={`
                  w-full px-6 py-5 text-center
                  bg-gray-100 hover:bg-gray-200
                  transition-colors duration-200
                  focus:outline-none
                `}
              >
                <h3 className="text-xl font-bold text-[#FF0000] uppercase tracking-wide">
                  {service.title}
                </h3>
              </button>

              {/* Content */}
              <div
                className={`
                  grid transition-[grid-template-rows,opacity]
                  duration-500 ease-in-out
                  ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }
                `}
              >
                <div className="overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={imageSrc}
                        alt={service.title}
                        className="w-full max-w-4xl h-auto object-cover mb-6 border border-gray-100"
                      />

                      <p className="text-gray-700 leading-relaxed max-w-3xl text-sm md:text-base">
                        {service.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Whatwedo;
