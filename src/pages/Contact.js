import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    'HVAC Systems',
    'Plumbing & Drainage',
    'Fire Protection Systems',
    'Solar Water Heating',
    'Borehole Drilling',
    'Maintenance Services',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['0723 691 123'],
      action: 'tel:+254723691123'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['0723 691 123'],
      action: 'https://wa.me/254723691123?text=Hello! I\'m interested in your engineering services.'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@SGE.CO.KE', 'SAFEGREENENGINEERING@gmail.com'],
      action: 'mailto:info@SGE.CO.KE'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Victory House 2nd Floor, Suite No.6', 'Garden Estate Road Nairobi', 'Next to Roasters Hotel'],
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      action: null
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-900 to-primary-900 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with our team for a free consultation 
              and quote. We're here to help with all your mechanical and electrical engineering needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send size={20} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        {info.title}
                      </h3>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-secondary-600 hover:text-primary-600 transition-colors"
                        >
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>{detail}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-secondary-600">
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>{detail}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a
                    href="tel:+254723691123"
                    className="flex items-center justify-center flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
                  >
                    <Phone size={20} className="mr-2" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/254723691123?text=Hello! I'm interested in your engineering services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    WhatsApp
                  </a>
                </div>
                
                <a
                  href="https://wa.me/254723691123?text=Hello! I'm interested in your engineering services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-secondary-600">
              Located in the heart of Westlands, Nairobi. Come visit us for a face-to-face consultation.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819876!2d36.8176!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OScwMy40IkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Safegreen Engineering Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Don't wait! Contact us today and let's discuss how we can help bring your 
              mechanical engineering vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+254723691123"
                  className="bg-white text-primary-600 hover:bg-secondary-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  📞 Call: 0723 691 123
                </a>
                <a
                  href="https://wa.me/254723691123?text=Hello! I'm interested in your engineering services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  💬 WhatsApp
                </a>
              </div>
              <a
                href="mailto:info@safegreen.co.ke"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 