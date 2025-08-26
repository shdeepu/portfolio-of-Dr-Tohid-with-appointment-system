import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  Award,
  Heart,
  Shield,
  Stethoscope,
  Clock,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Menu,
  X,
  Syringe,
  Pill,
  Microscope
} from 'lucide-react'
import doctorImage from './assets/doctor_hero_image.png'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      name: "Sarah Ahmed",
      text: "Dr. Tohid's compassionate care and expertise helped me through a difficult diagnosis. His thorough approach and clear communication made all the difference.",
      rating: 5,
      image: "https://via.placeholder.com/50/0000FF/FFFFFF?text=SA" // Placeholder image
    },
    {
      name: "Mohammad Rahman",
      text: "Excellent doctor with great bedside manner. He takes time to listen and explains everything clearly. Highly recommend!",
      rating: 5,
      image: "https://via.placeholder.com/50/FF0000/FFFFFF?text=MR" // Placeholder image
    },
    {
      name: "Fatima Khan",
      text: "Professional, knowledgeable, and caring. Dr. Tohid provided exceptional treatment for my chronic condition.",
      rating: 5,
      image: "https://via.placeholder.com/50/00FF00/FFFFFF?text=FK" // Placeholder image
    }
  ]

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Internal Medicine",
      description: "Comprehensive diagnosis and treatment of adult diseases and conditions"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Preventive Healthcare",
      description: "Regular check-ups and preventive care to maintain optimal health"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Chronic Disease Management",
      description: "Specialized care for diabetes, hypertension, and other chronic conditions"
    }
  ]

  const qualifications = [
    {
      year: "2018-2023",
      title: "FCPS (Fellow of College of Physicians and Surgeons)",
      institution: "College of Physicians and Surgeons Pakistan",
      description: "Specialized training in Internal Medicine"
    },
    {
      year: "2012-2017",
      title: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
      institution: "Dhaka Medical College",
      description: "Medical degree with distinction"
    },
    {
      year: "2023-Present",
      title: "Medicine Specialist",
      institution: "City General Hospital",
      description: "Senior consultant in Internal Medicine department"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h2 className="text-xl font-bold text-primary">Dr. A. A. N. Tohid</h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Services</button>
                <button onClick={() => scrollToSection('qualifications')} className="text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Qualifications</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Contact</button>
                <Button onClick={() => scrollToSection('appointment')} className="ml-4">Book Appointment</Button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary w-full text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary w-full text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary w-full text-left">Services</button>
              <button onClick={() => scrollToSection('qualifications')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary w-full text-left">Qualifications</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary w-full text-left">Contact</button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection('appointment')} className="w-full">Book Appointment</Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-bg min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Animated Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-primary opacity-20"
          animate={{ y: [0, 20, 0], x: [0, 10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Stethoscope size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-secondary opacity-20"
          animate={{ y: [0, -20, 0], x: [0, -10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Pill size={80} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 text-accent opacity-20"
          animate={{ y: [0, 15, 0], x: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Syringe size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-primary opacity-20"
          animate={{ y: [0, -10, 0], x: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <Microscope size={80} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="hero-image w-48 h-48 mx-auto mb-8 overflow-hidden">
                <img 
                  src={doctorImage} 
                  alt="Dr. Abdullah Al Noman Tohid" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Dr. Abdullah Al Noman Tohid
              </h1>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary" className="text-lg px-4 py-2">Medicine Specialist</Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">MBBS</Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">FCPS</Badge>
              </div>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Dedicated to compassionate care and advanced medical expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('appointment')}
                  className="text-lg px-8 py-4"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('about')}
                  className="text-lg px-8 py-4"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Dr. Tohid</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Dr. Abdullah Al Noman Tohid is a highly qualified Medicine Specialist with extensive experience in internal medicine and patient care. With his MBBS and FCPS qualifications, he brings a wealth of knowledge and expertise to his practice.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Dr. Tohid is committed to providing comprehensive, compassionate healthcare services. His approach combines evidence-based medicine with personalized patient care, ensuring that each patient receives the attention and treatment they deserve.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Specializing in internal medicine, preventive healthcare, and chronic disease management, Dr. Tohid has helped countless patients achieve better health outcomes through his dedicated and thorough approach to medical care.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">500+ Patients</h3>
              <p className="text-gray-600 dark:text-gray-300">Successfully treated and cared for</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">5+ Years</h3>
              <p className="text-gray-600 dark:text-gray-300">Of medical practice experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">In patient care and medical expertise</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Medical Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare services tailored to meet your individual needs with the highest standards of medical care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardHeader className="text-center">
                    <div className="service-icon mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Experience & Qualifications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of educational background, professional training, and career achievements.
            </p>
          </motion.div>

          <div className="space-y-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-32 flex-shrink-0">
                        <Badge variant="outline" className="text-sm px-3 py-1">
                          {qual.year}
                        </Badge>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {qual.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">{qual.institution}</p>
                        <p className="text-gray-600 dark:text-gray-300">{qual.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Patient Testimonials</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear what our patients have to say about their experience with Dr. Tohid.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="testimonial-card">
                  <CardContent className="p-8 text-center">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name} 
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-primary"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      - {testimonials[currentTestimonial].name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Book an Appointment</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Schedule your consultation with Dr. Tohid. Fill out the form below and we'll get back to you promptly.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                {/* Google Form Integration */}
                <div className="text-center mb-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      📋 Google Form Integration Ready
                    </h3>
                    <p className="text-blue-600 dark:text-blue-300 text-sm">
                      The Google Form below is embedded for your convenience.
                    </p>
                  </div>
                </div>

                {/* Google Form Embed */}
                <div className="relative w-full overflow-hidden rounded-lg" style={{ minHeight: '1353px' }}>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScESG7lwKMfiKjFeZYuy81RR-f1zlNATPQzz3iWyyuMiu04aw/viewform?embedded=true"
                    width="100%"
                    height="1353"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    className="rounded-lg border border-gray-200 dark:border-gray-700"
                    title="Dr. Tohid Appointment Booking Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get in touch with Dr. Tohid's clinic for appointments, inquiries, or emergency consultations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover text-center h-full">
                <CardContent className="p-8">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+880 1234-567890</p>
                  <p className="text-gray-600 dark:text-gray-300">+880 9876-543210</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover text-center h-full">
                <CardContent className="p-8">
                  <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">dr.tohid@clinic.com</p>
                  <p className="text-gray-600 dark:text-gray-300">appointments@clinic.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover text-center h-full">
                <CardContent className="p-8">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">City General Hospital</p>
                  <p className="text-gray-600 dark:text-gray-300">123 Medical Street, Dhaka 1000</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-16">
            <Card>
              <CardContent className="p-0">
                <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9000000000004!2d91.368463!3d23.0094185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375369001d3c363b%3A0x15539f5a286f5568!2sDD%20Lab!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Map of DD Lab"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dr. Abdullah Al Noman Tohid</h3>
              <p className="text-gray-300 mb-4">
                Medicine Specialist (MBBS, FCPS) dedicated to providing exceptional healthcare services with compassion and expertise.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('qualifications')} className="text-gray-300 hover:text-white transition-colors">Qualifications</button></li>
                <li><button onClick={() => scrollToSection('appointment')} className="text-gray-300 hover:text-white transition-colors">Book Appointment</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +880 1234-567890</p>
                <p>✉️ dr.tohid@clinic.com</p>
                <p>📍 City General Hospital, Dhaka</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Dr. Abdullah Al Noman Tohid. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Appointment Button */}
      <Button 
        onClick={() => scrollToSection('appointment')}
        className="sticky-appointment"
        size="lg"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Book Now
      </Button>
    </div>
  )
}

export default App


