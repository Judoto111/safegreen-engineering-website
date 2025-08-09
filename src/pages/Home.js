import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Users, Award, Clock, Shield } from 'lucide-react';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: '🌡️',
      title: 'HVAC Systems',
      description: 'Complete heating, ventilation, and air conditioning solutions for commercial and residential buildings.',
    },
    {
      icon: '🚰',
      title: 'Plumbing & Drainage',
      description: 'Professional plumbing installation, maintenance, and drainage systems for all types of buildings.',
    },
    {
      icon: '🔥',
      title: 'Fire Protection',
      description: 'Comprehensive fire detection and suppression systems to ensure building safety and compliance.',
    },
    {
      icon: '☀️',
      title: 'Solar Water Heating',
      description: 'Sustainable solar water heating solutions to reduce energy costs and environmental impact.',
    },
    {
      icon: '⛏️',
      title: 'Borehole Drilling',
      description: 'Expert borehole drilling and water supply solutions for commercial and residential properties.',
    },
    {
      icon: '🔧',
      title: 'Maintenance Services',
      description: 'Regular maintenance and repair services to keep your systems running efficiently.',
    },
  ];

  const featuredProjects = [
    {
      title: 'Nairobi Office Complex',
      category: 'HVAC & Plumbing',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      description: 'Complete HVAC and plumbing system installation for a 20-story office complex.',
    },
    {
      title: 'Mombasa Hotel Resort',
      category: 'Fire Protection',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      description: 'Advanced fire protection system for a luxury beachfront hotel resort.',
    },
    {
      title: 'Eldoret Industrial Plant',
      category: 'Solar & Maintenance',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      description: 'Solar water heating system and ongoing maintenance for industrial facility.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Award },
    { number: '25+', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '100%', label: 'Client Satisfaction', icon: Shield },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-primary-900/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-20 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Leading <span className="text-gradient">Mechanical Engineering</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-secondary-200 mb-8 max-w-3xl mx-auto">
              Safegreen Engineering Ltd delivers innovative, sustainable, and reliable mechanical engineering 
              solutions across Kenya. From HVAC systems to solar solutions, we build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link to="/projects" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary-900">
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon size={48} className="mx-auto mb-4 text-primary-200" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We provide comprehensive mechanical engineering solutions tailored to meet the unique needs 
              of our clients across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Discover some of our most successful projects that showcase our expertise and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {project.description}
                  </p>
                  <Link 
                    to="/projects" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    View Details <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="btn-primary text-lg px-8 py-4">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We are proud to have worked with amazing clients across Kenya and the region.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              quote: 'Safegreen Engineering delivered our project on time and exceeded our expectations. Their professionalism and attention to detail are unmatched.',
              name: 'Jane Mwangi',
              company: 'Garden Estate Developers'
            }, {
              quote: 'The team was knowledgeable, responsive, and provided innovative solutions for our complex requirements. Highly recommended!',
              name: 'Samuel Otieno',
              company: 'Nairobi Tech Park'
            }, {
              quote: 'We appreciate their commitment to quality and safety. Our building systems have never run better.',
              name: 'Grace Wambui',
              company: 'Victory House Holdings'
            }].map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <svg className="w-8 h-8 text-primary-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 0a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v6z" /></svg>
                <p className="text-secondary-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="font-bold text-primary-600">{testimonial.name}</div>
                <div className="text-secondary-500 text-sm">{testimonial.company}</div>
              </motion.div>
            ))}
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
              Let's discuss your mechanical engineering needs and create a solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-secondary-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200">
                Get Free Consultation
              </Link>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+254723691123" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  📞 Call: 0723 691 123
                </a>
                <a 
                  href="https://wa.me/254723691123?text=Hello! I'm interested in your engineering services." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 