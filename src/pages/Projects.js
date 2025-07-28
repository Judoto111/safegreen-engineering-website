import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, ChevronDown, Building, Home, GraduationCap, Hotel, Warehouse, Palette, Briefcase, Users, CheckCircle, Clock, Calendar } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainCategories = [
    { 
      name: 'All Projects', 
      icon: Building,
      count: 26 
    },
    { 
      name: 'Completed Projects', 
      icon: CheckCircle,
      count: 23 
    },
    { 
      name: 'Ongoing Projects', 
      icon: Clock,
      count: 3 
    }
  ];

  const projectCategories = [
    { 
      name: 'Apartments & Residential Blocks', 
      icon: Home,
      count: 15 
    },
    { 
      name: 'Data Center & ICT Hubs', 
      icon: Building,
      count: 3 
    },
    { 
      name: 'Education', 
      icon: GraduationCap,
      count: 3 
    },
    { 
      name: 'Hospitality', 
      icon: Hotel,
      count: 4 
    },
    { 
      name: 'Industrial & Warehouses', 
      icon: Warehouse,
      count: 3 
    },
    { 
      name: 'Interior Fitouts', 
      icon: Palette,
      count: 1 
    },
    { 
      name: 'Office & Commercial Buildings', 
      icon: Briefcase,
      count: 4 
    },
    { 
      name: 'Town Houses', 
      icon: Users,
      count: 3 
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Proposed Alterations for Ghana High Commission Residency',
      category: 'Office & Commercial Buildings',
      location: 'Muthaiga',
      year: '2023',
      description: 'Comprehensive mechanical engineering alterations for the Ghana High Commission building.',
      image: '/images/ghana-high-commission..png',
      gallery: [],
      client: 'Ghana High Commission',
      architect: 'Otto Mruttu & Partners Architects',
      structuralEngineer: 'Abba & Wandu Consulting Engineers',
      quantitySurveyor: 'Nyange Intergrated Consultants Ltd',
      value: 'KES 93 Million',
      contract: 'Main Contract',
      progress: 85,
      expectedCompletion: 'March 2024',
      label: 'GHANA HIGH COMMISSION'
    },
    {
      id: 2,
      title: 'Proposed Amani Beachfront Apartments',
      category: 'Apartments & Residential Blocks',
      location: 'Nyali, Mombasa',
      year: '2023',
      description: 'Luxury beachfront apartments with comprehensive mechanical engineering systems.',
      image: '/images/amani-beachfront.png',
      gallery: [],
      client: 'Amani Beachfront Apartments',
      architect: 'Symbion (MSA) Ltd',
      structuralEngineer: 'Metrix Intergrated',
      quantitySurveyor: 'Mwashinga & Associates',
      value: 'KES 663 Million',
      contract: 'Main Contract',
      progress: 70,
      expectedCompletion: 'June 2024',
      label: 'AMANI BEACHFRONT'
    },
    {
      id: 3,
      title: 'Proposed Nauras Towers',
      category: 'Apartments & Residential Blocks',
      location: 'Mombasa, Kenya',
      year: '2023',
      description: 'Luxury residential towers with comprehensive mechanical engineering systems.',
      image: '/images/nauras-towers.png',
      gallery: [],
      architect: 'Symbion (MSA) Ltd',
      structuralEngineer: 'Metrix Intergrated',
      quantitySurveyor: 'Mwashinga & Associates',
      value: 'KES 722 Million',
      contract: 'Main Contract',
      label: 'NAURAS'
    },
    {
      id: 4,
      title: 'Safaricom Data Center Expansion',
      category: 'Data Center & ICT Hubs',
      location: 'Nairobi',
      year: '2023',
      description: 'Fire suppression system installation and data center expansion with advanced cooling systems.',
      image: '/images/safaricom-data-center.png',
      gallery: [],
      client: 'Safaricom Ltd',
      architect: 'Symbion Kenya',
      structuralEngineer: 'Metrix Integrated',
      quantitySurveyor: 'Costwise Consultants',
      value: 'KES 85 Million',
      contract: 'Specialized Contract',
      progress: 80,
      expectedCompletion: 'April 2024',
      label: 'SAFARICOM'
    },
    {
      id: 5,
      title: 'University of Nairobi Science Complex',
      category: 'Education',
      location: 'Nairobi, Kenya',
      year: '2023',
      description: 'HVAC system installation and mechanical engineering services for the University of Nairobi Science Complex.',
      image: '/images/uon-science-complex.png',
      gallery: [],
      architect: 'Lexicon Architects',
      structuralEngineer: 'Abba & Wandu Engineers',
      quantitySurveyor: 'Zimaki Consultants',
      value: 'KES 120 Million',
      contract: 'Main Contract',
      label: 'UON SCIENCE'
    },
    {
      id: 6,
      title: 'Borehole Drilling and Equipping',
      category: 'Town Houses',
      location: 'Nairobi, Kenya',
      year: '2024',
      description: 'Borehole drilling and equipping project with comprehensive water supply system installation.',
      image: '/images/borehole-drilling.png',
      gallery: [],
      value: 'KES 3,500,000',
      progress: 60,
      expectedCompletion: 'May 2024',
      contract: 'Specialized Contract',
      label: 'BOREHOLE'
    },
    {
      id: 7,
      title: 'HVAC Installations',
      category: 'Office & Commercial Buildings',
      location: 'Nairobi, Kenya',
      year: '2024',
      description: 'HVAC system installation and maintenance for commercial buildings.',
      image: '/images/hvac-installations.png',
      gallery: [],
      value: 'KES 1,600,000',
      progress: 40,
      expectedCompletion: 'July 2024',
      contract: 'Specialized Contract',
      label: 'HVAC'
    },
    {
      id: 8,
      title: 'Plumbing And Drainage Works for Safaricom Retail',
      category: 'Interior Fitouts',
      location: 'Nairobi, Kenya',
      year: '2024',
      description: 'Plumbing and drainage system installation for Safaricom retail outlets.',
      image: '/images/safaricom-plumbing.png',
      gallery: [],
      value: 'KES 1,250,000',
      progress: 75,
      expectedCompletion: 'June 2024',
      contract: 'Specialized Contract',
      label: 'SAFARICOM'
    },
    {
      id: 9,
      title: 'Tatu City Industrial Park',
      category: 'Industrial & Warehouses',
      location: 'Nairobi, Kenya',
      year: '2023',
      description: 'Comprehensive mechanical engineering systems for Tatu City Industrial Park.',
      image: '/images/tatu-city.png',
      gallery: [],
      architect: 'Boogertman + Partners',
      structuralEngineer: 'ARUP',
      quantitySurveyor: 'Costwise Consultants',
      value: 'KES 180 Million',
      contract: 'Main Contract',
      label: 'TATU CITY'
    },
    {
      id: 10,
      title: 'Sarova Hotel Expansion',
      category: 'Hospitality',
      location: 'Nairobi, Kenya',
      year: '2023',
      description: 'Hotel expansion project with advanced mechanical engineering systems.',
      image: '/images/sarova-hotel.png',
      gallery: [],
      architect: 'Planning Systems',
      structuralEngineer: 'Metrix Integrated',
      quantitySurveyor: 'Costwise Consultants',
      value: 'KES 210 Million',
      contract: 'Main Contract',
      label: 'SAROVA'
    },
    {
      id: 11,
      title: 'Proposed Ridgeview Villas',
      category: 'Apartments & Residential Blocks',
      location: 'Nairobi, Kenya',
      year: '2023',
      description: 'Luxury villa development with comprehensive mechanical engineering systems.',
      image: '/images/ridgeview-villas.png',
      gallery: [],
      client: 'Ridgeview Villas Ltd',
      value: 'KES 95 Million',
      contract: 'Main Contract',
      label: 'RIDGEVIEW'
    },
    {
      id: 12,
      title: 'Proposed Second Avenue Apartments',
      category: 'Apartments & Residential Blocks',
      location: 'Mombasa, Kenya',
      year: '2023',
      description: 'Luxury apartment complex with advanced mechanical engineering systems.',
      image: '/images/second-avenue-apartments.png',
      gallery: [],
      client: 'Milas Prima',
      value: 'KES 180 Million',
      contract: 'Main Contract',
      label: 'SECOND AVENUE'
    },
    {
      id: 13,
      title: 'Westlands Apartments',
      category: 'Apartments & Residential Blocks',
      location: 'Rhapta Road, Westlands',
      year: '2023',
      description: 'Modern apartment complex with comprehensive mechanical engineering systems.',
      image: '/images/westlands-apartments.png',
      gallery: [],
      client: 'Magnate Ventures',
      architect: 'Octa Architects',
      quantitySurveyor: 'Northwind Consultants',
      value: 'KES 150 Million',
      contract: 'Main Contract',
      label: 'WESTLANDS APARTMENTS'
    },
    {
      id: 14,
      title: 'Proposed Mowlem Heights Apartments',
      category: 'Apartments & Residential Blocks',
      location: 'Komarock',
      year: '2016',
      description: 'Luxury apartment development with advanced mechanical systems.',
      image: '/images/mowlem-heights.png',
      gallery: [],
      client: 'Ridgeview Villas Ltd',
      architect: 'Spectrum Architects',
      quantitySurveyor: 'Munderu & Associates',
      value: 'KES 560 Million',
      contract: 'Sub Contract - 70 Million',
      label: 'MOWLEM HEIGHTS'
    },
    {
      id: 15,
      title: 'Proposed Residential Apartments',
      category: 'Apartments & Residential Blocks',
      location: 'Nyeri Road Kileleshwa',
      year: '2022',
      description: 'Residential apartment complex with modern mechanical engineering.',
      image: '/images/vernonia-apartments.png',
      gallery: [],
      client: 'Vernonia Apartments Ltd',
      architect: 'Huduma Consulting Ltd',
      quantitySurveyor: 'Quantilab Consulting',
      value: 'KES 390 Million',
      contract: 'Main Contract',
      label: 'VERNONIA APARTMENTS'
    },
    {
      id: 16,
      title: 'Proposed Rumaisa Duplex Apartments',
      category: 'Apartments & Residential Blocks',
      location: 'Riverside',
      year: '2023',
      description: 'Luxury duplex apartments with premium mechanical engineering systems.',
      image: '/images/rumaisa-duplex.png',
      gallery: [],
      client: 'Globe Developers Ltd',
      quantitySurveyor: 'Tower Cost Consultants Ltd',
      value: 'KES 584 Million',
      contract: 'Main Contract',
      label: 'RUMAISA'
    },
    {
      id: 17,
      title: 'Proposed Jumerirah Beach Apartments',
      category: 'Apartments & Residential Blocks',
      location: 'Nyali',
      year: '2024',
      description: 'Beachfront luxury apartments with comprehensive mechanical systems.',
      image: '/images/jumerirah-beach.png',
      gallery: [],
      client: 'Jumeirah Beach',
      architect: 'Sitescope Studio Ltd',
      value: 'KES 415 Million',
      contract: 'Main Contract',
      label: 'JUMERIRAH'
    },
    {
      id: 18,
      title: 'Proposed Fairfield Gardens Residential Development',
      category: 'Apartments & Residential Blocks',
      location: 'Syokimau',
      year: '2022',
      description: 'Residential development with modern amenities and mechanical systems.',
      image: '/images/fairfield-gardens.png',
      gallery: [],
      client: 'Fairfield Gardens Ltd',
      architect: 'Kujenga Group',
      quantitySurveyor: 'Built Sync Consult',
      value: 'KES 448 Million',
      contract: 'Main Contract',
      label: 'FAIRFIELD'
    },
    {
      id: 19,
      title: 'iHub Tech Center',
      category: 'Data Center & ICT Hubs',
      location: 'Nairobi',
      year: '2023',
      description: 'Technology center with advanced data center and mechanical systems.',
      image: '/images/ihub-tech-center.png',
      gallery: [],
      client: 'iHub Kenya',
      architect: 'Planning Systems',
      quantitySurveyor: 'Costwise Consultants',
      value: 'KES 45 Million',
      contract: 'Specialized Contract',
      label: 'IHUB'
    },
    {
      id: 20,
      title: 'Proposed Additional Classrooms',
      category: 'Education',
      location: 'Nairobi',
      year: '2016',
      description: 'Educational facility expansion with modern mechanical systems.',
      image: '/images/additional-classrooms.png',
      gallery: [],
      client: 'Moi Educational Trust',
      architect: 'Tej Architects',
      quantitySurveyor: 'Zimaki Consult',
      value: 'KES 75 Million',
      contract: 'Main Contract',
      label: 'CLASSROOMS'
    },
    {
      id: 21,
      title: 'Proposed New Wing-Gertrude Hospital',
      category: 'Hospitality',
      location: 'Muthaiga',
      year: '2012',
      description: 'Hospital wing expansion with advanced medical mechanical systems.',
      image: '/images/gertrude-hospital.png',
      gallery: [],
      client: 'Gertrude Children Hospital',
      architect: 'Peter Thomas',
      value: 'KES 120 Million',
      contract: 'Labor Contract - 11 Million',
      label: 'HOSPITAL'
    },
    {
      id: 22,
      title: 'Proposed Aga Khan Hospital',
      category: 'Hospitality',
      location: 'Kisii',
      year: '2023',
      description: 'Modern hospital facility with comprehensive medical mechanical systems.',
      image: '/images/aga-khan-hospital.png',
      gallery: [
        '/images/aga-khan-hospital-1.jpg',
        '/images/aga-khan-hospital-2.jpg'
      ],
      client: 'Aga Khan Hospital',
      architect: 'FHG Architecture Kenya Ltd',
      quantitySurveyor: 'Afri Cost Kenya Ltd',
      value: 'KES 140 Million',
      contract: 'Main Contract',
      label: 'AGA KHAN'
    },
    {
      id: 23,
      title: 'Industrial Complex',
      category: 'Industrial & Warehouses',
      location: 'Athi River',
      year: '2023',
      description: 'Large-scale industrial complex with comprehensive mechanical systems.',
      image: '/images/industrial-complex.png',
      gallery: [],
      client: 'Industrial Development Corporation',
      architect: 'Shelter Systems Ltd',
      quantitySurveyor: 'Costwise Consultants',
      value: 'KES 220 Million',
      contract: 'Main Contract',
      label: 'INDUSTRIAL'
    },
    {
      id: 24,
      title: 'Proposed Dahlia Gardens',
      category: 'Apartments & Residential Blocks',
      location: 'Ruiru',
      year: '2022',
      description: 'Residential garden complex with modern mechanical engineering.',
      image: '/images/dahlia-gardens.png',
      gallery: [],
      client: 'KAM Homes Ltd',
      architect: 'Advents Inhouse Africa Ltd',
      quantitySurveyor: 'Zimaki Consultants',
      value: 'KES 78 Million',
      contract: 'Main Contract',
      label: 'DAHLIA'
    },
    {
      id: 25,
      title: 'Residential House',
      category: 'Town Houses',
      location: 'Kyuna Road',
      year: '2012',
      description: 'Modern residential house with comprehensive mechanical systems.',
      image: '/images/residential-house.png',
      gallery: [],
      client: 'Ramesh Patel',
      architect: 'Micasa Design',
      quantitySurveyor: 'Zimaki',
      value: 'KES 50 Million',
      contract: 'Main Contract',
      label: 'RESIDENTIAL HOUSE'
    },
    {
      id: 26,
      title: 'Sunset Villa',
      category: 'Town Houses',
      location: 'Mua Hills Machakos',
      year: '2017',
      description: 'Luxury villa with premium mechanical engineering systems.',
      image: '/images/sunset-villa.png',
      gallery: [],
      client: 'Peter Kivolonzi',
      architect: 'Arch Link International',
      quantitySurveyor: 'Quantline System',
      value: 'KES 35 Million',
      contract: 'Main Contract',
      label: 'SUNSET VILLA'
    }
  ];

  const filteredProjects = () => {
    if (selectedCategory === 'All Projects') {
      return selectedSubCategory 
        ? projects.filter(project => project.category === selectedSubCategory)
        : projects;
    } else if (selectedCategory === 'Completed Projects') {
      return selectedSubCategory 
        ? projects.filter(project => project.category === selectedSubCategory && !project.progress)
        : projects.filter(project => !project.progress);
    } else if (selectedCategory === 'Ongoing Projects') {
      return selectedSubCategory 
        ? projects.filter(project => project.category === selectedSubCategory && project.progress)
        : projects.filter(project => project.progress);
    }
    return projects;
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubCategory(null);
    setIsDropdownOpen(false);
  };

  const selectSubCategory = (subCategoryName) => {
    setSelectedSubCategory(subCategoryName);
    setIsDropdownOpen(false);
  };

  const openLightbox = (project) => {
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
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
              Our Projects
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto">
              Explore our portfolio of successful mechanical engineering projects across Kenya. 
              Each project showcases our expertise and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">
              Browse Our Projects
            </h2>
            
            {/* Category Filter Dropdown */}
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                className="inline-flex items-center justify-between w-64 px-6 py-3 text-left bg-white border border-secondary-300 rounded-lg shadow-sm hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <span className="flex items-center">
                  <Building className="w-5 h-5 mr-3 text-primary-600" />
                  {selectedSubCategory || selectedCategory}
                </span>
                <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 z-10 w-64 mt-2 bg-white border border-secondary-300 rounded-lg shadow-lg max-h-96 overflow-y-auto"
                >
                  <div className="py-2">
                    {/* Main Categories */}
                    {(mainCategories || []).map((category) => (
                      <div key={category.name}>
                        <button
                          onClick={() => selectCategory(category.name)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-secondary-50 transition-colors duration-150 ${
                            selectedCategory === category.name && !selectedSubCategory ? 'bg-primary-50 text-primary-600' : 'text-secondary-700'
                          }`}
                        >
                          <div className="flex items-center">
                            <category.icon className="w-4 h-4 mr-3" />
                            <span className="text-sm font-medium">{category.name}</span>
                          </div>
                          <span className="text-xs text-secondary-500 bg-secondary-100 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </button>
                        
                        {/* Show subcategories when main category is selected */}
                        {selectedCategory === category.name && (projectCategories || []).length > 0 && (
                          <div className="ml-4 border-l-2 border-secondary-200">
                            {(projectCategories || []).map((subCategory) => (
                              <button
                                key={subCategory.name}
                                onClick={() => selectSubCategory(subCategory.name)}
                                className={`w-full flex items-center justify-between px-4 py-2 text-left hover:bg-secondary-50 transition-colors duration-150 ${
                                  selectedSubCategory === subCategory.name ? 'bg-primary-50 text-primary-600' : 'text-secondary-600'
                                }`}
                              >
                                <div className="flex items-center">
                                  <subCategory.icon className="w-3 h-3 mr-2" />
                                  <span className="text-xs font-medium">{subCategory.name}</span>
                                </div>
                                <span className="text-xs text-secondary-500 bg-secondary-100 px-1 py-0.5 rounded-full">
                                  {subCategory.count}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(filteredProjects() || []).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openLightbox(project)}
                        className="bg-white text-secondary-900 px-4 py-2 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        View Gallery
                      </button>
                    </div>
                  </div>
                  
                  {/* Grey Label Below Image */}
                  {project.label && (
                    <div className="bg-gray-200 px-3 py-2">
                      <span className="text-gray-700 text-sm font-medium">
                        {project.label}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-secondary-600 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center text-secondary-600 text-sm">
                      <MapPin size={16} className="mr-1" />
                      {project.location}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-secondary-600">
                    {project.architect && <div><strong>Architect:</strong> {project.architect}</div>}
                    {project.structuralEngineer && <div><strong>Structural Engineer:</strong> {project.structuralEngineer}</div>}
                    {project.quantitySurveyor && <div><strong>Quantity Surveyor:</strong> {project.quantitySurveyor}</div>}
                    {project.client && <div><strong>Client:</strong> {project.client}</div>}
                    <div><strong>Value:</strong> {project.value}</div>
                    <div><strong>Contract:</strong> {project.contract}</div>
                    
                    {/* Progress Section for Ongoing Projects */}
                    {project.progress && (
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Progress:</span>
                          <span className="text-primary-600 font-semibold">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        {project.expectedCompletion && (
                          <div className="text-xs text-secondary-500 mt-1">
                            Expected completion: {project.expectedCompletion}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {(filteredProjects() || []).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-secondary-600 text-lg">
                No projects found in this category. Please try another filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-secondary-900">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeLightbox}
                  className="text-secondary-600 hover:text-secondary-900 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Project Details:</h3>
                  <p className="text-secondary-600">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Services Provided:</h3>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProject.services || []).map((service, index) => (
                      <span 
                        key={index}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <strong>Client:</strong> {selectedProject.client}
                  </div>
                  <div>
                    <strong>Location:</strong> {selectedProject.location}
                  </div>
                  <div>
                    <strong>Year:</strong> {selectedProject.year}
                  </div>
                  <div>
                    <strong>Category:</strong> {selectedProject.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 