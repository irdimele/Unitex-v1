import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

export default function ContactUs() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '552c8695-5253-467b-9ce9-a07651f75cec', // Your Access Key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' }); // Reset fields
      } else {
        setStatus({ loading: false, success: false, message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ loading: false, success: false, message: 'Could not connect to submission service.' });
    }
  };

  return (
    <section id="3" className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FF0000] uppercase tracking-wide mb-3">
          {t?.contactUs?.title}
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {t?.contactUs?.subtitle}
        </p>
      </div>

      {/* Gray Container aligned to max-w-5xl (What We Do section width) */}
      <div className="max-w-5xl mx-auto bg-[#f4f4f4] rounded-xl p-6 sm:p-10 md:p-14 shadow-sm">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF0000] uppercase text-center mb-6 sm:mb-8 tracking-wide">
          {t?.contactUs?.formTitle}
        </h3>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="max-w-md sm:max-w-lg mx-auto space-y-4 sm:space-y-5">
          <div>
            <label className="block text-xs sm:text-sm text-gray-500 mb-1 font-medium">
              {t?.contactUs?.nameLabel}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-md px-3.5 py-2.5 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-500 mb-1 font-medium">
              {t?.contactUs?.emailLabel}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-md px-3.5 py-2.5 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-500 mb-1 font-medium">
              {t?.contactUs?.messageLabel}
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-md px-3.5 py-2.5 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Feedback Status Alert */}
          {status.message && (
            <div className={`p-3 rounded text-xs sm:text-sm text-center ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-[#FF0000] hover:bg-red-700 disabled:bg-gray-400 text-white font-medium text-sm sm:text-base py-3 rounded-md transition-colors duration-200 cursor-pointer shadow-sm active:scale-[0.99]"
          >
            {status.loading ? 'Sending...' : t?.contactUs?.submitBtn}
          </button>

          {/* Smooth Expanding Contact Buttons */}
          <div className="flex justify-center items-center gap-3 pt-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/unitex_al"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center h-10 sm:h-11 bg-[#FF0000] hover:bg-red-700 text-white rounded-md px-3 cursor-pointer"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] group-focus:grid-cols-[1fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="overflow-hidden">
                  <span className="block pl-2 text-xs sm:text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 delay-100">
                    unitex_al
                  </span>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:0674009956"
              className="group flex items-center h-10 sm:h-11 bg-[#FF0000] hover:bg-red-700 text-white rounded-md px-3 cursor-pointer"
              aria-label="Phone"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] group-focus:grid-cols-[1fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="overflow-hidden">
                  <span className="block pl-2 text-xs sm:text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 delay-100">
                    067 400 9956
                  </span>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:unitex@gmail.com"
              className="group flex items-center h-10 sm:h-11 bg-[#FF0000] hover:bg-red-700 text-white rounded-md px-3 cursor-pointer"
              aria-label="Email"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] group-focus:grid-cols-[1fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="overflow-hidden">
                  <span className="block pl-2 text-xs sm:text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 delay-100">
                    unitex@gmail.com
                  </span>
                </div>
              </div>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}