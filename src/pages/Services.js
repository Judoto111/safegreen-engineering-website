import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Thermometer, 
  Droplets, 
  Flame, 
  Sun, 
  Hammer,  // ✅ Replaced Drill with Hammer
  Wrench, 
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Thermometer,
      title: 'Geothermal Heating',
      description:
        'Harness the earth\'s natural heat to efficiently warm your home or business.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      icon: Droplets,
      title: 'Water Filtration',
      description:
        'Ensure clean and safe water with our advanced filtration systems tailored to your needs.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
    },
    {
      icon: Flame,
      title: 'Natural Gas Services',
      description:
        'Expert installation and maintenance of natural gas lines for reliable energy.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      icon: Sun,
      title: 'Solar Panel Installation',
      description:
        'Reduce your carbon footprint with custom solar solutions designed for efficiency.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop'
    },
    {
      icon: Hammer,
      title: 'Borehole Drilling',
      description:
        'Professional borehole drilling for sustainable and independent water supply.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      icon: Wrench,
      title: 'System Maintenance',
      description:
        'Keep your systems running smoothly with our comprehensive maintenance services.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto">
              Comprehensive mechanical engineering solutions for sustainable and efficient systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              From geothermal heating to solar installations, we provide cutting-edge 
              mechanical engineering solutions that prioritize sustainability and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {service.description}
                  </p>
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                    Learn More <ArrowRight className="inline ml-2" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors duration-200">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
