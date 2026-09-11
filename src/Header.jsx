import React, { useState } from 'react';
import logo from './Logo/Vector.png';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const NAV_LINKS = [
    { name: t.nav.whoWeAre, href: '#1' },
    { name: t.nav.whatWeDo, href: '#2' },
    { name: t.nav.contactUs, href: '#3' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 font-sans transition-all">
      <div className="mx-auto w-full max-w-[987px] px-4 sm:px-6 py-4 md:py-6 flex items-center justify-between md:justify-center md:gap-8 lg:gap-12">
        
        {/* Logo (Shifted slightly further left) */}
        <a href="#" className="flex-shrink-0 focus:outline-none md:mr-6 lg:mr-10">
          <img
            src={logo}
            alt="UNITEX Logo"
            className="w-[50px] sm:w-[60px] object-contain"
          />
        </a>

        {/* Desktop Navigation & Language Toggle */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <nav className="w-full max-w-[527px]">
            <ul className="flex items-center gap-8 lg:gap-12 list-none m-0 p-0 text-[#000000]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-sans tracking-wide hover:text-[#FF0000] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="inline-flex border border-[#FF0000] text-[12px] font-bold leading-none">
            <button
              type="button"
              onClick={() => setLanguage('EN')}
              className={`px-2.5 py-1 transition-colors ${
                language === 'EN'
                  ? 'bg-[#FF0000] text-white'
                  : 'bg-white text-[#FF0000]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('AL')}
              className={`px-2.5 py-1 transition-colors ${
                language === 'AL'
                  ? 'bg-[#FF0000] text-white'
                  : 'bg-white text-[#FF0000]'
              }`}
            >
              AL
            </button>
          </div>
        </div>

        {/* Mobile Header Actions (Language Toggle + Hamburger) */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="inline-flex border border-[#FF0000] text-[11px] font-bold leading-none">
            <button
              type="button"
              onClick={() => setLanguage('EN')}
              className={`px-2 py-1 transition-colors ${
                language === 'EN'
                  ? 'bg-[#FF0000] text-white'
                  : 'bg-white text-[#FF0000]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('AL')}
              className={`px-2 py-1 transition-colors ${
                language === 'AL'
                  ? 'bg-[#FF0000] text-white'
                  : 'bg-white text-[#FF0000]'
              }`}
            >
              AL
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 text-[#000000] hover:text-[#FF0000] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu Dropdown */}
      <nav
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-60 opacity-100 py-4 shadow-lg' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 list-none m-0 text-[#000000]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-sans tracking-wide hover:text-[#FF0000] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}