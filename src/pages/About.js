import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Users, Award, Clock, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We do what\'s right, not what\'s easy.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We show up, follow through, and deliver consistently.',
    },
    {
      icon: Heart,
      title: 'Honesty',
      description: 'We communicate transparently with clients and partners.',
    },
    {
      icon: Award,
      title: 'Quality Workmanship',
      description: 'We never compromise on standards.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace change and new technologies.',
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'We invest in our people through continuous training.',
    },
  ];

  const team = [
    {
      name: 'SIMON KIMUTAI',
      position: 'DIRECTOR',
      image: 'images/simon-kimutai.jpeg',
      experience: '25+ years',
    },
    {
  name: 'SAMORA MWIROTSI',
  position: 'ENGINEER MECHANICAL',
  image: 'images/samira-mwirotsi.jpeg',
  experience: '20+ years',
},

    {
      name: 'BENARD MWANGI',
      position: 'ENGINEER ELECTRICAL',
      image: 'images/benard-mwangi.jpeg',
      experience: '15+ years',
    },
    {
  name: 'MOSES SADERA',
  position: 'BIM MANAGER',
  image: 'images/moses-sadera.jpeg',
  experience: '12+ years',
},
    {
  name: 'JONAH LANGAT',
  position: 'NETWORK ENGINEER',
  image: 'images/jonah-langat.jpeg',
  experience: '10+ years',
},   
    {
      name: 'EVANS CHIRCHIR',
      position: 'LOGISTICS',
      image: 'images/evans-chirchir.jpeg',
      experience: '8+ years',
    },
  ];

  const achievements = [
    { number: '26+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Team Members' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '3+', label: 'Industry Awards' },
    { number: '24/7', label: 'Support Available' },
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
              About SAFEGREEN ENGINEERING Ltd
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto">
              A privately owned engineering and contracting company based in Nairobi, Kenya, 
              delivering world-class mechanical engineering solutions since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  SAFEGREEN ENGINEERING Ltd is a privately owned engineering and contracting company 
                  based in Nairobi, Kenya. Established in November 2018 and registered under the 
                  Companies Act CAP 486, we are proudly Kenyan and deeply committed to delivering 
                  world-class mechanical engineering solutions across the private, corporate, and 
                  public sectors.
                </p>
                <p>
                  From concept to completion, we specialize in the design and installation of 
                  mechanical systems with a keen focus on plumbing, drainage, and building services. 
                  We prioritize quality, innovation, and efficiency—ensuring every project is 
                  delivered on time, within budget, and beyond expectation.
                </p>
                <p>
                  Our integrated approach ensures that we deliver not only high-quality mechanical 
                  systems but also uphold our responsibility to people, planet, and performance 
                  through sustainable practices and continuous innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Safegreen Engineering Team"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Eye className="text-primary-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-secondary-900">Our Vision</h3>
              </div>
              <p className="text-secondary-600">
                To be the most trusted, reliable, and cost-effective provider of mechanical and electical
                engineering solutions in Kenya and the region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Target className="text-primary-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-secondary-900">Our Mission</h3>
              </div>
              <p className="text-secondary-600">
                At SAFEGREEN, we aim to redefine excellence in plumbing and mechanical services. 
                Through adaptive strategies, clear communication, and client-centered solutions, 
                we meet the unique needs of every project. Our flexibility across multiple 
                disciplines makes us both versatile and forward-thinking in a dynamic industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our relationships with clients, 
              partners, and the community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Quality, Environment, Health & Safety */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Our Commitment to Quality, Environment, Health & Safety
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              SAFEGREEN ENGINEERING Ltd operates under a strong framework of compliance, safety, and responsibility. 
              Our integrated approach ensures that we deliver not only high-quality mechanical systems but also 
              uphold our responsibility to people, planet, and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="text-primary-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-secondary-900">Client Satisfaction</h3>
              </div>
              <p className="text-secondary-600">
                Delivering outstanding products and services for superior client satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Shield className="text-primary-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-secondary-900">Sustainability</h3>
              </div>
              <p className="text-secondary-600">
                Promoting sustainability through reduction, reuse, and recycling of resources.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Users className="text-primary-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-secondary-900">Safe Environment</h3>
              </div>
              <p className="text-secondary-600">
                Maintaining a safe and healthy working environment for all stakeholders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Award className="text-primary-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-secondary-900">Continuous Training</h3>
              </div>
              <p className="text-secondary-600">
                Providing continuous training and support to our technical team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Target className="text-primary-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-secondary-900">Client Education</h3>
              </div>
              <p className="text-secondary-600">
                Educating clients on the operation and maintenance of mechanical systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Heart className="text-primary-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-secondary-900">Community Support</h3>
              </div>
              <p className="text-secondary-600">
                Supporting our communities through meaningful corporate social responsibility (CSR) initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-primary-100">
              Numbers that speak for our success and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-100 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Leadership Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our experienced team leads Safegreen Engineering with passion, expertise, and a commitment to excellence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: 'SIMON KIMUTAI',
              title: 'DIRECTOR',
              image: 'images/simon-kimutai.jpeg',
              bio: 'Simon brings over 25 years of experience in mechanical engineering and project management.'
            }, {
              name: 'SAMORA MWIROTSI',
              title: 'ENGINEER MECHANICAL',
              image: 'images/samira-mwirotsi.jpeg',
              bio: 'Samora is an expert in mechanical engineering systems and leads our technical team.'
            }, {
              name: 'BENARD MWANGI',
              title: 'ENGINEER ELECTRICAL',
              image: 'images/benard-mwangi.jpeg',
              bio: 'Benard specializes in electrical engineering and ensures all electrical systems are optimally designed.'
            }].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary-100" />
                <div className="font-bold text-primary-600 text-lg mb-1">{member.name}</div>
                <div className="text-secondary-500 text-sm mb-2">{member.title}</div>
                <p className="text-secondary-700 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead our company and drive our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-secondary-600 text-sm">
                    {member.experience} Experience
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 