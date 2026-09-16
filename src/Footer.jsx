import React from 'react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#FF0000] text-white py-4 md:py-6 font-sans transition-all">
      <div className="mx-auto w-full max-w-[987px] px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        
        {/* Left Navigation Links */}
        <div className="w-full md:flex-1 flex items-center justify-center md:justify-start gap-6 lg:gap-8 text-sm font-sans tracking-wide">
          <a href="#1" className="hover:text-black transition-colors">
            {t?.nav?.whoWeAre || 'WHO WE ARE'}
          </a>
          <a href="#2" className="hover:text-black transition-colors">
            {t?.nav?.whatWeDo || 'WHAT WE DO'}
          </a>
          <a href="#3" className="hover:text-black transition-colors">
            {t?.nav?.contactUs || 'CONTACT US'}
          </a>
        </div>

        {/* Center Logo Box Badge (Wider text & increased spacing) */}
        <a 
          href="#top" 
          className="flex-shrink-0 flex justify-center group focus:outline-none" 
          aria-label="Unitex Home"
        >
          <div className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] bg-white text-[#FF0000] flex flex-col justify-center items-center font-bold shadow-md transition-transform duration-200 group-hover:scale-105 cursor-pointer overflow-hidden p-1 select-none">
            <span className="text-[16px] sm:text-[20px] font-black leading-none tracking-wider uppercase transform scale-y-125 scale-x-105 origin-center">
              UNI
            </span>
            <span className="text-[16px] sm:text-[20px] font-black leading-none tracking-wider uppercase transform scale-y-125 scale-x-105 origin-center mt-[7px]">
              TEX
            </span>
          </div>
        </a>

        {/* Right Section */}
        <div className="w-full md:flex-1 flex flex-wrap items-center justify-center md:justify-end gap-6 lg:gap-8 text-sm font-sans tracking-wide">
          {/* Follow Us */}
          <div className="flex items-center gap-2">
            <span>{t?.footer?.followUs || 'Follow Us:'}</span>
            <a
              href="https://instagram.com/unitex_al"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors p-0.5"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Contact Icons */}
          <div className="flex items-center gap-3">
            <span>{t?.footer?.contact || 'Contact:'}</span>
            <a
              href="mailto:unitex@gmail.com"
              className="hover:text-black transition-colors p-0.5"
              aria-label="Email"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2-2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href="tel:067 400 9956"
              className="hover:text-black transition-colors p-0.5"
              aria-label="Phone"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}