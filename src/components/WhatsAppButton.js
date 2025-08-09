import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in your engineering services. Could you please provide more information?";
    const phoneNumber = "254723691123";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 lg:hidden"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton; 