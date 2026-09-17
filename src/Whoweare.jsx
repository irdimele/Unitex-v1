import React, { useState } from 'react';
import img4 from './Hero1/4.png'; 
import { useLanguage } from './LanguageContext';

export default function WhoWeAre() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="1" className="w-full bg-white py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-4 ">
      
      {/* Container limits max width on huge screens but takes full width on small screens */}
      <div className="mx-auto w-full max-w-[987px] flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="mb-6 sm:mb-8 md:mb-12 text-xl sm:text-2xl md:text-[28px] font-sans font-bold text-[#FF0000] dark:text-[#FF0000] tracking-wide text-center uppercase">
          {t.whoWeAre.title}
        </h2>

        {/* Feature Image */}
        <div className="relative w-full mb-6 sm:mb-8 md:mb-10 min-h-[200px] bg-gray-100 rounded-md">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
            </div>
          )}
          <img 
            src={img4} 
            alt="Textile accessories and tools" 
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-auto object-cover rounded-md shadow-sm transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Text Content */}
        <div className="w-full text-center font-sans text-[13px] sm:text-sm max-w-[850px] flex flex-col gap-2 sm:gap-5 text-gray-700 leading-relaxed text-base md:text-lg">
          <p>{t.whoWeAre.p1}</p>
          <p>{t.whoWeAre.p2}</p>
          <p>{t.whoWeAre.p3}</p>
        </div>
        
      </div>
    </section>
  );
}