import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '355674009956';
  const defaultMessage = encodeURIComponent('Përshëndetje, jam i interesuar për...');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
        zIndex: 1000,
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.69 4.68 1.885 6.598L3 29l7.104-2.354A12.44 12.44 0 0 0 16.001 28C22.906 28 28.5 22.404 28.5 15.5S22.906 3 16.001 3zm0 22.75c-2.02 0-3.984-.55-5.688-1.588l-.407-.243-4.31 1.428 1.44-4.2-.265-.43A10.2 10.2 0 0 1 5.25 15.5c0-5.936 4.815-10.75 10.751-10.75 5.935 0 10.749 4.814 10.749 10.75S21.936 25.75 16.001 25.75z"/>
        <path d="M21.62 18.2c-.303-.152-1.79-.882-2.067-.983-.278-.101-.48-.152-.682.152-.202.303-.784.983-.961 1.185-.177.202-.354.227-.657.076-.303-.152-1.278-.471-2.435-1.503-.9-.803-1.508-1.795-1.685-2.098-.177-.303-.019-.467.133-.618.136-.135.303-.354.454-.53.152-.177.202-.303.303-.505.101-.202.05-.379-.025-.53-.076-.152-.682-1.645-.935-2.254-.246-.591-.497-.511-.682-.52-.177-.008-.379-.01-.581-.01s-.53.076-.808.379c-.278.303-1.06 1.036-1.06 2.528 0 1.492 1.086 2.933 1.238 3.136.152.202 2.138 3.264 5.181 4.577.724.313 1.288.5 1.729.64.727.231 1.388.198 1.91.12.583-.087 1.79-.732 2.042-1.438.253-.707.253-1.313.177-1.438-.076-.126-.278-.202-.581-.354z"/>
      </svg>
    </a>
  );
}