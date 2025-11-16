import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Clock, CheckCircle2, User, Heart, Zap, Wind, ExternalLink, ChevronDown } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';

/*
  TYPE SCALE
  - H1 (textual): text-[clamp(40px,8vw,76px)] font-semibold leading-[1.15] tracking-[-0.02em]
  - H2: text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em]
  - H3: text-2xl font-semibold tracking-tight
  - Body: text-[17px] leading-7
  - Nav links: text-[15px] font-medium
  - Chips: text-[12px] font-medium tracking-wide uppercase
*/

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    { src: '/image1.jpg', alt: 'Clase de Pilates con reformer' },
    { src: '/image2.jpg', alt: 'Ejercicio de Pilates en reformer' },
    { src: '/image3.jpg', alt: 'Clase grupal de Pilates' },
    { src: '/image4.jpg', alt: 'Entrenamiento de Pilates' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['inicio', 'servicios', 'fisioterapia', 'beneficios', 'instructor', 'galeria', 'planes', 'horario', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'fisioterapia', label: 'Fisioterapia' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'galeria', label: 'Galería' },
    { id: 'planes', label: 'Planes' },
    { id: 'horario', label: 'Horario' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const services = [
    {
      title: 'Pilates Mat',
      description: 'Clases de colchoneta con niveles básico, intermedio y avanzado',
      level: 'Todos los niveles',
      icon: '🧘‍♀️'
    },
    {
      title: 'Pilates para Deportistas',
      description: 'Fortalecimiento del core y control corporal para rendimiento deportivo',
      level: 'Intermedio/Avanzado',
      icon: '⚡'
    },
    {
      title: 'Pilates Terapéutico',
      description: 'Enfoque postural y corrección de desequilibrios musculares',
      level: 'Todos los niveles',
      icon: '💚'
    },
    {
      title: 'Movilidad y Liberación',
      description: 'Técnicas de liberación miofascial y mejora de movilidad articular',
      level: 'Todos los niveles',
      icon: '🌊'
    },
    {
      title: 'Pre y Postparto',
      description: 'Respiración, fortalecimiento de suelo pélvico y recuperación',
      level: 'Especializado',
      icon: '🤰'
    },
    {
      title: 'Sesiones Personalizadas',
      description: 'Privadas, dúo y grupos reducidos con atención individualizada',
      level: 'Todos los niveles',
      icon: '👥'
    }
  ];

  const benefits = [
    'Mejora postura',
    'Activa core',
    'Aumenta flexibilidad',
    'Reduce dolor lumbar',
    'Control y respiración',
    'Bienestar integral'
  ];

  const schedule = [
    {
      days: 'Lunes, Miércoles y Viernes',
      morning: ['7:00', '8:00', '9:00', '10:00'],
      evening: ['5:00', '6:00', '7:00', '8:00', '9:00'],
      open: true
    },
    {
      days: 'Martes y Jueves',
      morning: ['7:00', '8:00', '9:00', '10:00'],
      evening: ['5:00', '6:00', '7:00', '8:00'],
      open: true
    },
    { days: 'Sábado y Domingo', morning: [], evening: [], open: false }
  ];

  const plans = [
    {
      name: 'Clase Suelta',
      price: '$150',
      description: 'Por sesión',
      features: ['1 hora de duración', 'Atención personalizada', 'Flexibilidad de horario']
    },
    {
      name: 'Mensualidad',
      price: '$1,400',
      description: '12 sesiones',
      features: ['12 clases de 1 hora', 'Válido por 30 días', 'Seguimiento continuo'],
      featured: true
    },
    {
      name: 'Paquete Intensivo',
      price: '$2,000',
      description: '20 clases al mes',
      features: ['20 clases de 1 hora', 'Lunes a Viernes', 'Aprox. $100 por sesión', 'Resultados acelerados']
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      text: 'Excelente atención y técnica. He mejorado mi postura y reducido mi dolor de espalda significativamente.'
    },
    {
      name: 'Carlos Ramírez',
      text: 'Las clases son retadoras pero adaptadas a mi nivel. He ganado fuerza y flexibilidad que no tenía.'
    },
    {
      name: 'Laura Fernández',
      text: 'El ambiente es tranquilo y profesional. Las sesiones de postparto me ayudaron muchísimo en mi recuperación.'
    },
    {
      name: 'Jorge Medina',
      text: 'Llegué con dolor de rodilla por correr; en cuatro semanas volví a entrenar. El pilates me dio estabilidad que nunca tenía.'
    },
    {
      name: 'Ana Sofía Torres',
      text: 'Después de mi cesárea, la fisioterapia de suelo pélvico me cambió la vida. Recuperé control, fuerza y confianza para moverme sin dolor.'
    },
    {
      name: 'Rodrigo Salinas',
      text: 'Tenía rigidez cervical y migrañas frecuentes. Con las sesiones y los ejercicios en casa, el dolor bajó y rindo mejor en el trabajo.'
    },
    {
      name: 'Teresa López',
      text: 'Mi mamá (68 años) mejoró su equilibrio y fuerza. Las clases son seguras, progresivas y con una paciencia infinita.'
    },
    {
      name: 'Valeria Núñez',
      text: 'Atención honesta y resultados claros: menos dolor lumbar y mejor postura. Las sesiones de pilates complementan perfecto mi rehabilitación.'
    },
    {
      name: 'Daniela Castañeda',
      text: 'Tenía dolor de hombro al entrenar; con fisioterapia y pilates de estabilidad recuperé movilidad y volví al gym sin dolor.'
    }
  ];


  const galleryImages = [
    {
      url: '/image1.jpg',
      alt: 'Clase de Pilates con reformer en nuestro estudio'
    },
    {
      url: '/image2.jpg',
      alt: 'Ejercicios de Pilates en reformer con instructor'
    },
    {
      url: '/image10.jpg',
      alt: 'Alumno realizando pilates en reformer'
    },
    {
      url: '/image6.jpg',
      alt: 'Sesión de Pilates nocturna en nuestro estudio'
    },
    {
      url: '/image11.jpg',
      alt: 'Entrenamiento de fuerza y estabilización en pilates'
    },
    {
      url: '/image8.jpg',
      alt: 'Reformers equipados en Pilates Elorreaga'
    }
  ];

  return (
    <div className="bg-[var(--paper)] text-[var(--charcoal)]">
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 bg-white/60 backdrop-blur-md ${
        isScrolled ? 'border-b border-black/5' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/PE ICON.svg"
                alt="Pilates Elorreaga"
                className="h-12 w-auto"
              />
            </button>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[15px] font-medium transition-colors relative ${
                    activeSection === item.id
                      ? 'text-[var(--lavender)]'
                      : 'text-[var(--charcoal)] hover:text-[var(--lavender)]'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)]" />
                  )}
                </button>
              ))}
              <a
                href="https://wa.me/526181581302"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Reservar clase
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--charcoal)]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-xl transition-colors ${
                    activeSection === item.id
                      ? 'bg-[var(--lavender)]/10 text-[var(--lavender)] font-medium'
                      : 'text-[var(--charcoal)] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/526181581302"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] text-white text-center rounded-full font-medium shadow-lg"
              >
                Reservar clase
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--lavender)]/20 via-[var(--mint)]/10 to-[var(--paper)]" />
        <div className="absolute inset-0 bg-[url('/pilates_background01.png')] bg-cover bg-center blur-sm opacity-20" />

        <div className="relative container mx-auto max-w-screen-xl px-6 md:px-8 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-slide-up space-y-8">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-neutral-600 border-black/10 bg-white/60 backdrop-blur">
                Centro, Durango
              </div>
              <div className="w-full max-w-2xl">
                <img
                  src="/Pilates Elorreaga.svg"
                  alt="Pilates Elorreaga"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-[17px] leading-7 text-[var(--charcoal)]/80">
                Clases de Pilates para postura, fuerza profunda y movilidad sin dolor.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/526181581302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  style={{ boxShadow: '0 10px 40px rgba(169, 124, 243, 0.3)' }}
                >
                  <Phone size={20} />
                  Reservar clase
                </a>
                <a
                  href="tel:+526181581302"
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[var(--lavender)] text-[var(--lavender)] rounded-full font-medium hover:bg-[var(--lavender)] hover:text-white transition-all duration-300"
                >
                  Llamar
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in hidden lg:block">
              <div className="rounded-2xl border border-black/10 shadow-xl overflow-hidden">
                <div className="relative h-[600px]">
                  {carouselImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/50 to-transparent" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--lavender)] to-[var(--mint)] rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--charcoal)]/60">Clientes satisfechos</p>
                    <p className="text-2xl font-bold text-[var(--charcoal)]">1000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mb-4">
              Nuestros <span className="bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent">Servicios</span>
            </h2>
            <p className="text-[17px] leading-7 text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              Programas adaptados a tus necesidades y objetivos personales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-[var(--lavender)] hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold tracking-tight mb-2 text-[var(--charcoal)]">{service.title}</h3>
                <p className="text-[17px] leading-7 text-[var(--charcoal)]/70 mb-4">{service.description}</p>
                <span className="inline-block px-3 py-1 bg-[var(--mint)]/20 text-[var(--mint)] text-[12px] font-medium tracking-wide uppercase rounded-full">
                  {service.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fisioterapia" className="py-24 bg-gradient-to-br from-[var(--lavender)]/5 to-[var(--mint)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mb-4">
              <span className="bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent">Fisioterapia</span>
            </h2>
            <p className="text-[17px] leading-7 text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              Valoración profesional y tratamiento basado en evidencia para volver a moverte sin dolor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Fisioterapia Neurológica', icon: '🧠' },
              { name: 'Ortopédica', icon: '🦴' },
              { name: 'Para Deportistas', icon: '⚡' },
              { name: 'Descontracturas', icon: '💪' },
              { name: 'Masajes Terapéuticos', icon: '🙌' },
              { name: 'Punción Seca', icon: '📍' },
              { name: 'Electro-punción', icon: '⚡' },
              { name: 'Cintas Kinesio', icon: '🎗️' }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[var(--mint)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--charcoal)]">{service.name}</h3>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--charcoal)] mb-2">Precio</h3>
                <p className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent mb-2">$500</p>
                <p className="text-[17px] leading-7 text-[var(--charcoal)]/70">Sesión y valoración inicial</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--charcoal)] mb-2">Horario</h3>
                <p className="text-2xl font-semibold tracking-tight text-[var(--mint)] mb-2">Abierto</p>
                <p className="text-[17px] leading-7 text-[var(--charcoal)]/70">Agendar por WhatsApp</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/526181581302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Phone size={20} />
                Agendar Fisioterapia
              </a>
              <a
                href="tel:+526181581302"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[var(--lavender)] text-[var(--lavender)] rounded-full font-semibold hover:bg-[var(--lavender)] hover:text-white transition-all duration-300"
              >
                <Phone size={20} />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mb-4">
              Beneficios del <span className="bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent">Pilates</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border-2 border-[var(--lavender)]/20 hover:border-[var(--lavender)] hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <CheckCircle2 className="text-[var(--mint)]" size={20} />
                <span className="font-medium text-[var(--charcoal)]">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--lavender)] to-[var(--mint)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Fuerza Profunda</h3>
              <p className="text-[17px] leading-7 text-[var(--charcoal)]/70">Fortalece desde el core hasta los estabilizadores</p>
            </div>
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--lavender)] to-[var(--mint)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Respiración Consciente</h3>
              <p className="text-[17px] leading-7 text-[var(--charcoal)]/70">Conexión mente-cuerpo a través de la respiración</p>
            </div>
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--lavender)] to-[var(--mint)] rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Atención Personalizada</h3>
              <p className="text-[17px] leading-7 text-[var(--charcoal)]/70">Cada alumno recibe correcciones individuales</p>
            </div>
          </div>
        </div>
      </section>

      <section id="instructor" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/foto_perfil.jpg"
                  alt="Javier Márquez Pérez - Instructor certificado de Pilates"
                  className="w-full h-[600px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/40 to-transparent" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em]">
                Maestro <span className="bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent">Certificado</span>
              </h2>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--charcoal)]">
                  Cipriano Javier Márquez Pérez
                </h3>
                <p className="text-2xl font-semibold tracking-tight text-[var(--lavender)]">
                  Licenciado en Fisioterapia y Educación Física
                </p>
                <div className="space-y-1 text-[17px] leading-7 text-[var(--charcoal)]/70">
                  <p>Por Pilates Center of Las Vegas — Elena Bartley</p>
                  <p>Docente de Fisioterapia en la Universidad Autónoma de Durango</p>
                </div>

                <p className="text-[17px] leading-7 text-[var(--charcoal)]/80">
                  Soy especialista en fisioterapia y Pilates con más de 20 años de experiencia, dedicado apasionadamente a la rehabilitación integral, el movimiento y el bienestar físico.
                </p>

                <Dialog open={isBioModalOpen} onOpenChange={setIsBioModalOpen}>
                  <DialogTrigger asChild>
                    <button
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[15px] font-medium bg-gradient-to-tr from-[var(--lavender)] to-[var(--mint)] text-white shadow-lg hover:brightness-110 transition group"
                      data-state={isBioModalOpen ? 'open' : 'closed'}
                    >
                      {isBioModalOpen ? 'Ver menos' : 'Ver trayectoria completa'}
                      <ChevronDown
                        className="transition-transform duration-300 group-data-[state=open]:rotate-180"
                        size={20}
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Trayectoria <span className="bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent">Profesional</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-[17px] leading-7 text-[var(--charcoal)]/80 prose prose-sm max-w-none">
                      <p>
                        Desde hace dos décadas, dirijo <strong>Pilates Elorreaga</strong>, un centro que fundé con la misión de ofrecer un espacio especializado en rehabilitación bajo el concepto de <strong>Fisiopilates Elorreaga</strong>. Mi labor diaria consiste en crear y dirigir programas personalizados para clientes con una amplia gama de necesidades físicas y terapéuticas, aplicando técnicas avanzadas de fisioterapia para la recuperación de lesiones.
                      </p>

                      <div>
                        <h4 className="text-2xl font-semibold tracking-tight text-[var(--charcoal)] mb-2">Formación Académica</h4>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="flex-shrink-0 mt-1 text-[var(--mint)]" size={18} />
                            <span>Licenciatura en Fisioterapia - Universidad Autónoma de Durango</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="flex-shrink-0 mt-1 text-[var(--mint)]" size={18} />
                            <span>Licenciatura en Educación Física - Universidad Juárez del Estado de Durango</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-2xl font-semibold tracking-tight text-[var(--charcoal)] mb-2">Certificaciones y Especialidades</h4>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="flex-shrink-0 mt-1 text-[var(--mint)]" size={18} />
                            <span>Medicina Física y Rehabilitación</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="flex-shrink-0 mt-1 text-[var(--mint)]" size={18} />
                            <span>Neurodinamia y Terapia Manual</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="flex-shrink-0 mt-1 text-[var(--mint)]" size={18} />
                            <span>Punción Seca y Electropunción</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="flex-shrink-0 mt-1 text-[var(--mint)]" size={18} />
                            <span>Fisioterapia Neurológica y Postura</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="flex-shrink-0 mt-1 text-[var(--mint)]" size={18} />
                            <span>Imagenología Aplicada a la Rehabilitación</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="flex-shrink-0 mt-1 text-[var(--mint)]" size={18} />
                            <span>Pilates Terapéutico</span>
                          </li>
                        </ul>
                      </div>

                      <p>
                        Además de mi práctica clínica en el tratamiento de lesiones musculoesqueléticas y neurológicas, también me dedico a la capacitación de nuevos instructores, combinando mi profundo conocimiento técnico con la gestión y el crecimiento exitoso de mi centro.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="py-24 bg-gradient-to-br from-[var(--paper)] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mb-4">
              Nuestro <span className="bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent">Estudio</span>
            </h2>
            <p className="text-[17px] leading-7 text-[var(--charcoal)]/70">Un espacio diseñado para tu bienestar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/70 via-[var(--charcoal)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mb-4">Lo que dicen nuestros alumnos</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20" aria-label={`Testimonio de ${testimonial.name}`}>
                  <p className="text-white/90 italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="planes" className="py-24 bg-gradient-to-br from-[var(--lavender)]/5 to-[var(--mint)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mb-4">
              Planes y <span className="bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent">Precios</span>
            </h2>
            <p className="text-[17px] leading-7 text-[var(--charcoal)]/70">Elige el plan que mejor se adapte a ti</p>
          </div>

          <div className="flex justify-center items-stretch gap-6 flex-wrap max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl flex-1 min-w-[280px] max-w-[340px] ${
                  plan.featured
                    ? 'bg-gradient-to-br from-[var(--lavender)] to-[var(--mint)] text-white border-transparent scale-105'
                    : 'bg-white border-gray-200 hover:border-[var(--lavender)]'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white text-[var(--lavender)] text-sm font-semibold rounded-full">
                    Más popular
                  </div>
                )}
                <h3 className={`text-2xl font-semibold tracking-tight mb-2 ${plan.featured ? 'text-white' : 'text-[var(--charcoal)]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mb-2 ${plan.featured ? 'text-white' : 'text-[var(--charcoal)]'}`}>
                  {plan.price}
                </p>
                <p className={`text-[17px] leading-7 mb-6 ${plan.featured ? 'text-white/90' : 'text-[var(--charcoal)]/70'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`flex-shrink-0 mt-0.5 ${plan.featured ? 'text-white' : 'text-[var(--mint)]'}`} size={20} />
                      <span className={`text-[17px] leading-7 ${plan.featured ? 'text-white/90' : 'text-[var(--charcoal)]/80'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/526181581302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-full font-medium text-center transition-all duration-300 ${
                    plan.featured
                      ? 'bg-white text-[var(--lavender)] hover:bg-opacity-90'
                      : 'bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] text-white hover:shadow-lg'
                  }`}
                >
                  Contactar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="horario" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mb-4">
              Nuestro <span className="bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent">Horario</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[var(--lavender)]/5 to-[var(--mint)]/5 rounded-3xl p-8 shadow-xl">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl transition-all ${
                    item.open
                      ? 'bg-white shadow-md'
                      : 'bg-gray-100 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className={item.open ? 'text-[var(--mint)]' : 'text-gray-400'} size={24} />
                    <span className="font-bold text-xl">{item.days}</span>
                  </div>
                  {item.open ? (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[12px] font-medium tracking-wide uppercase text-[var(--lavender)] mb-2">Mañana</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.morning.map((time, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-[var(--lavender)]/10 text-[var(--charcoal)] rounded-full text-[17px] leading-7 font-medium">
                              {time} AM
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[12px] font-medium tracking-wide uppercase text-[var(--mint)] mb-2">Tarde</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.evening.map((time, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-[var(--mint)]/10 text-[var(--charcoal)] rounded-full text-[17px] leading-7 font-medium">
                              {time} PM
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-500 font-medium">CERRADO</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 bg-gradient-to-br from-[var(--lavender)] to-[var(--mint)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mb-4">Contáctanos</h2>
            <p className="text-[17px] leading-7 text-white/90">Estamos aquí para ayudarte a comenzar tu viaje en Pilates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="tel:+526181581302"
              className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
            >
              <Phone className="mb-4" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Teléfono</h3>
              <p className="text-[17px] leading-7 text-center text-white/90">+52 618 158 1302</p>
            </a>

            <a
              href="mailto:pilateselorreaga248@gmail.com"
              className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
            >
              <Mail className="mb-4" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Email</h3>
              <p className="text-[17px] leading-7 text-center text-white/90 break-all">pilateselorreaga248@gmail.com</p>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Elorreaga+248+Pte+Centro+Durango"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
            >
              <MapPin className="mb-4" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Ubicación</h3>
              <p className="text-[17px] leading-7 text-center text-white/90 mb-2">Elorreaga 248 Pte., Centro</p>
              <p className="text-[17px] leading-7 text-center text-white/80">C.P. 34000, Durango, Dgo.</p>
              <div className="flex items-center gap-1 mt-2 text-white/70 text-[17px] leading-7">
                <ExternalLink size={14} />
                <span>Cómo llegar</span>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://www.instagram.com/fisiopilates_elorreaga/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all border-2 border-white/20"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://web.facebook.com/elorreaga248javier"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all border-2 border-white/20"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@javiermarper4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all border-2 border-white/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--charcoal)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-[var(--lavender)] to-[var(--mint)] bg-clip-text text-transparent">
                Pilates Elorreaga
              </h3>
              <p className="text-[17px] leading-7 text-white/70">
                Tu espacio de bienestar, fuerza y movilidad en Durango.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold tracking-tight mb-4">Contacto</h4>
              <div className="space-y-2 text-[17px] leading-7 text-white/70">
                <p>+52 618 158 1302</p>
                <p className="break-all">pilateselorreaga248@gmail.com</p>
                <p>Elorreaga 248 Pte., Centro</p>
                <p>Durango, Dgo., México</p>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold tracking-tight mb-4">Síguenos</h4>
              <div className="space-y-2 text-[17px] leading-7 text-white/70">
                <a href="https://www.instagram.com/fisiopilates_elorreaga/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                  Instagram: @fisiopilates_elorreaga
                </a>
                <a href="https://web.facebook.com/elorreaga248javier" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                  Facebook: elorreaga248javier
                </a>
                <a href="https://www.tiktok.com/@javiermarper4" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                  TikTok: @javiermarper4
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; 2025 Pilates Elorreaga. Todos los derechos reservados.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white transition-colors">Aviso de privacidad</a>
            </p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/526181581302"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-[var(--lavender)] to-[var(--mint)] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-40 animate-pulse"
        style={{ boxShadow: '0 10px 40px rgba(169, 124, 243, 0.5)' }}
      >
        <Phone className="text-white" size={28} />
      </a>
    </div>
  );
}

export default App;
