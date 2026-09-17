import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

import img1 from './Hero1/1.png';
import img2 from './Hero1/2.png';
import img3 from './Hero1/3.png';
import img8 from './Hero1/8.png';
import img11 from './Hero1/11.png';

export default function Hero() {
  const { t } = useLanguage();
  const slides = [img1, img2, img3, img8, img11];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f8f8] select-none">
      {/* Slides Background */}
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`
            absolute inset-0
            h-full w-full
            bg-cover bg-center bg-no-repeat
            transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ backgroundImage: `url(${slide})` }}
        >
          {/* Hidden image element to detect load completion */}
          <img
            src={slide}
            alt=""
            className="hidden"
            onLoad={() => setLoadedImages((prev) => ({ ...prev, [slide]: true }))}
          />

          {/* Loading spinner overlay */}
          {!loadedImages[slide] && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#f8f8f8]">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
            </div>
          )}
        </div>
      ))}

      {/* Dark Overlay (Shadow Background) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Keeps natural image aspect ratio */}
      <img
        src={img1}
        alt=""
        aria-hidden="true"
        className="block h-auto w-full opacity-0 pointer-events-none"
      />

      {/* Hero Overlay Content - Centered */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Main Title */}
          <h1 className="mb-3 sm:mb-4 text-2xl sm:text-4xl md:text-5xl font-sans font-bold uppercase tracking-wider text-white drop-shadow-md">
            {t?.hero?.welcome}
          </h1>

          {/* Subtitle */}
          <p className="mb-6 sm:mb-8 text-xs sm:text-sm md:text-base font-sans font-medium leading-relaxed text-white/90 max-w-xl mx-auto drop-shadow-sm">
            {t?.hero?.subtitle}
          </p>

          {/* Centered White Slider Indicators */}
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
                onClick={() => setCurrentSlide(index)}
                className={`
                  h-1 transition-all duration-300 rounded-full cursor-pointer
                  ${
                    index === currentSlide
                      ? 'w-6 bg-white'
                      : 'w-3 bg-white/50 hover:bg-white/80'
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}