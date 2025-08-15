import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'HVAC Systems',
    'Plumbing & Drainage',
    'Fire Protection',
    'Solar Water Heating',
    'Borehole Drilling',
    'Maintenance Services',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SE</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Safegreen Engineering</h3>
                  <p className="text-sm text-secondary-400">Ltd</p>
                </div>
              </div>
              <p className="text-secondary-300 mb-6">
                Leading mechanical and electrical engineering solutions in Kenya. We specialize in HVAC, plumbing, 
                fire protection, and sustainable engineering systems.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-secondary-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-secondary-300">
                      Westlands, Nairobi<br />
                      Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-primary-400 flex-shrink-0" />
                  <div className="flex items-center space-x-3">
                    <a
                      href="tel:+254723691123"
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      0723 691 123
                    </a>
                    <a
                      href="https://wa.me/254723691123?text=Hello! I'm interested in your engineering services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm transition-colors duration-200"
                      title="WhatsApp"
                    >
                      💬
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:info@safegreen.co.ke"
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    info@safegreen.co.ke
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-secondary-300">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Safegreen Engineering Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 