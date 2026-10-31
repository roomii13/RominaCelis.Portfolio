import React, { useState, useEffect, useRef } from 'react';
import { Heart, Instagram, Facebook, MessageCircle, Mail, ExternalLink, Code, Database, Cpu, Calculator, ShoppingCart, Plane, Github, Linkedin, Download } from 'lucide-react';
import fotoPerfil from './assets/fotoPerfil1.jpg';

import cap from './assets/Captura de pantalla 2025-12-16 154156.png';
import cap1 from './assets/Captura de pantalla 2025-12-16 154428.png';
import cap2 from './assets/Captura de pantalla 2025-12-16 154608.png';

import captura from './assets/Captura de pantalla 2025-07-17 220850.jpg';
import captura1 from './assets/Captura de pantalla 2025-07-17 220822.jpg';
import chili1 from './assets/chili1.jpg';
import chili2 from './assets/chili2.jpg';
import vibras1 from './assets/vibras1.jpg';
import vibras2 from './assets/vibras2.jpg';
import vlsmCaptura from './assets/calculadora-vlsm.png';
import sinCity1 from './assets/1000003394.png';
import sinCity2 from './assets/1000003395 (1).png';
import aspredictiveDashboard from './assets/aspredictive-dashboard.png';
import aspredictiveAlerts from './assets/aspredictive-alerts.png';
import aspredictiveLogin from './assets/aspredictive-login.png';
import ofiaiDashboard from './assets/ofiai-dashboard.png';
import numiProfile from './assets/numi-profile.png';
import numiDashboard from './assets/numi-dashboard.png';
import numiSubjects from './assets/numi-subjects.png';
import comunidadAeroIcon from './assets/comunidad-aeronautica-icon.png';
import comunidadAeroScreen1 from './assets/comunidad-aeronautica-screen-1.png';
import comunidadAeroScreen2 from './assets/comunidad-aeronautica-screen-2.png';
import comunidadAeroScreen3 from './assets/comunidad-aeronautica-screen-3.png';
import CalculadoraVLSM from './components/CalculadoraVLSM';

const CONTACT_EMAIL = 'romina.celis33@gmail.com';
const WHATSAPP_DISPLAY = '+54 9 2954 744019';
const WHATSAPP_LINK = 'https://wa.me/5492954744019';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mostrarCalculadora, setMostrarCalculadora] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const newVisibleSections = new Set<string>();
      Object.entries(sectionsRef.current).forEach(([key, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            newVisibleSections.add(key);
          }
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Comprobacion inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillGroups = [
    { title: 'Frontend', icon: Code, color: 'text-cyan-300', skills: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
    { title: 'Backend', icon: Cpu, color: 'text-purple-300', skills: ['Java', 'Node.js', 'Express', 'C#', 'C++', 'C', 'Python'] },
    { title: 'Bases de datos', icon: Database, color: 'text-emerald-300', skills: ['SQL', 'PostgreSQL'] },
    { title: 'Herramientas y redes', icon: Calculator, color: 'text-pink-300', skills: ['Git', 'Cloudflare Pages', 'Expo', 'Tailwind CSS', 'Networking'] },
  ];

  const setSectionRef = (key: string) => (el: HTMLElement | null) => {
    sectionsRef.current[key] = el;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Elementos animados de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* estrellasflotantes*/}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* nubes movedizas */}
        <div className="absolute top-20 left-0 w-full h-32 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-white/10 to-white/5 rounded-full"
              style={{
                width: `${60 + Math.random() * 100}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${Math.random() * 120}%`,
                top: `${Math.random() * 100}px`,
                transform: `translateX(-${scrollY * (0.1 + Math.random() * 0.2)}px)`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* luna */}
        <div 
          className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full opacity-80 shadow-2xl"
          style={{
            transform: `translateY(-${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
            boxShadow: '0 0 60px rgba(255, 255, 0, 0.3)'
          }}
        >
          <div className="absolute inset-2 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full opacity-60" />
          <div className="absolute top-4 left-6 w-3 h-3 bg-yellow-600 rounded-full opacity-40" />
          <div className="absolute bottom-6 right-4 w-2 h-2 bg-yellow-600 rounded-full opacity-40" />
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Romina Celis
              </h1>
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 animate-pulse" />
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`WhatsApp: ${WHATSAPP_DISPLAY}`}
                className="p-2 rounded-full bg-green-500/20 hover:bg-green-500/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              </a>
              <a 
                href="https://www.instagram.com/roomii13" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pink-500/20 hover:bg-pink-500/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
              </a>
              <a 
                href="https://www.facebook.com/roomii.celis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* contenido */}
      <main className="pt-20 relative z-10">
        {/* Seccion Hero */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div 
            className={`text-center transition-all duration-2000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="relative mb-8">
              <h1 className="max-w-5xl px-4 text-5xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-4">
                Transformo ideas en aplicaciones web reales.
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 blur-xl rounded-full" />
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
              Soy Romina Celis, desarrolladora Full Stack. Creo soluciones con React, Angular, Java y tecnologías modernas, con foco en productos útiles, escalables y fáciles de usar.
            </p>
            <p className="text-sm sm:text-base text-cyan-200 mb-8 px-4 tracking-wide">Frontend <span className="text-purple-300">·</span> Backend <span className="text-purple-300">·</span> Bases de datos</p>
            <div className="flex justify-center space-x-4">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        </section>

        {/* seccion acerca de mi */}
        <section 
          ref={setSectionRef('about')}
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Acerca de Mí
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div 
                className={`text-center lg:text-left transition-all duration-1000 delay-300 ${
                  visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
                    Soy creativa y super curiosa, me gusta saber como funciona todo, es emocionante ver evolucionar una idea pero puede ser aún más emocionante estar involucrada en ver cómo se diseña y desarrolla un concepto a través de la codificación y poder ver el ciclo de vida completo.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                    Me gusta entender el problema antes de elegir la solución, aprender durante el proceso y cuidar los detalles que hacen que un producto sea claro y agradable de usar. Disfruto colaborar, compartir avances y acompañar cada idea desde el diseño hasta una aplicación funcional.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                    {['Curiosidad', 'Aprendizaje continuo', 'Experiencia de usuario'].map((value) => (
                      <span key={value} className="px-3 py-2 rounded-full text-sm text-purple-100 bg-purple-500/15 border border-purple-300/20">{value}</span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25"
                    >
                      <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="text-left"><span className="block">Contáctame</span><span className="block text-xs opacity-90">{CONTACT_EMAIL}</span></span>
                    </a>
                    <a
                      href="/CV_Romina_Celis2026-rc.pdf"
                      download
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-full border border-white/15 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Descargar CV
                    </a>
                  </div>
                  <div className="flex justify-center lg:justify-start gap-3 mt-5">
                    <a href="https://github.com/roomii13" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Romina Celis" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-200 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"><Github className="w-4 h-4" /> GitHub</a>
                    <a href="https://www.linkedin.com/in/romi-celis/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Romina Celis" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-200 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"><Linkedin className="w-4 h-4" /> LinkedIn</a>
                  </div>
                </div>
              </div>
              
              <div 
                className={`flex justify-center transition-all duration-1000 delay-500 ${
                  visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-600 p-2 animate-pulse">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                      <img loading="lazy"
                        src={fotoPerfil} 
                        alt="Romina Celis" 
                        className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  {/* elementos flotantes alrededor de la foto */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce delay-300 flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" />
                  <div className="absolute top-1/4 -right-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section 
          ref={setSectionRef('skills')}
          className={`py-20 bg-black/20 backdrop-blur-sm transition-all duration-1000 ${
            visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Habilidades
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {skillGroups.map(({ title, icon: Icon, color, skills }, index) => (
                <div
                  key={title}
                  className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Icon className={`w-6 h-6 ${color}`} />
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => <span key={skill} className="px-3 py-2 rounded-full text-sm text-gray-200 bg-white/5 border border-white/10">{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* seccion proyectos */}
        <section 
          ref={setSectionRef('projects')}
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Proyectos
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full" />
            </div>

            <div className="mb-16">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200 mb-6">Casos de estudio destacados</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { id: 'aspredictive', title: 'AsPREDICTIVE', image: aspredictiveDashboard, alt: 'Panel de análisis de riesgos de AsPREDICTIVE', text: 'Una plataforma para entender riesgos aeronáuticos y seguir alertas operacionales.' },
                  { id: 'comunidad-aeronautica-en-red', title: 'Comunidad Aeronáutica en Red', image: comunidadAeroScreen1, alt: 'Aplicación Comunidad Aeronáutica en Red', text: 'Una app móvil y su backend que acercan herramientas aeronáuticas a la comunidad.' },
                  { id: 'ofiai', title: 'OfiAI', image: ofiaiDashboard, alt: 'Panel de demo de OfiAI con datos ficticios', text: 'Un marketplace que conecta organizaciones y profesionales con herramientas de IA.' },
                ].map((project, index) => (
                  <a key={project.id} href={`#${project.id}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img loading="lazy" src={project.image} alt={project.alt} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                      <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-100 border border-white/15">{`0${index + 1} · DESTACADO`}</span>
                      {project.id === 'ofiai' && <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/85 px-3 py-1 text-xs text-amber-100 border border-amber-300/20">Demo · datos ficticios</span>}
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-300">{project.text}</p>
                      <span className="inline-flex items-center gap-2 mt-4 text-sm text-cyan-200">Ver caso de estudio <ExternalLink className="w-4 h-4" /></span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Proyecto 1: DentalSystem */}
            <div 
              className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] mb-12 ${
                visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center">
                    <Code className="w-10 h-10 mr-4 text-blue-400" />
                    DentalSystem
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    DentalSystem es una aplicación web diseñada específicamente para mecánicos dentales y laboratorios de prótesis, con el objetivo de optimizar la gestión de trabajos, 
                    facturación y comunicación con dentistas.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {['React', 'TypeScript', 'JavaScript', 'PostgreSQL'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-sm border border-blue-400/30 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="https://dentalsistem.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Proyecto
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={captura1} 
                        alt="Captura de pantalla DentalSystem"                        
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={captura} 
                        alt="Captura de pantalla DentalSystem" 
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 2: ChilliTattoo */}
            <div 
              className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] mb-12 ${
                visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center">
                    <Code className="w-10 h-10 mr-4 text-blue-400" />
                    ChilliTattoo
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    ChilliTattoo es una aplicación web diseñada para un negocio online, con el objetivo de optimizar la venta de insumos y maquinas para tatuadores.  
                    La plataforma permite llevar un control del stock, ingresando al sistema se permite subir fotos, descripcion y precios.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {['Html','Css', 'TypeScript', 'JavaScript'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-sm border border-blue-400/30 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="https://chillitattoo.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Proyecto
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={chili1} 
                        alt="Captura de pantalla ChilliTattoo"                        
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={chili2} 
                        alt="Captura ChilliTattoo" 
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 3: Vibras */}
            <div 
              className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] mb-12 ${
                visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center">
                    <Code className="w-10 h-10 mr-4 text-blue-400" />
                    Vibras
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    vibrasimp es una aplicación web diseñada para un negocio online, con el objetivo de optimizar la venta de calzado de una pequeña empresa.  
                    La plataforma permite llevar un control del stock, ingresando al sistema se permite subir fotos, descripcion y precios.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {['Html','Css', 'TypeScript', 'JavaScript'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-sm border border-blue-400/30 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="https://vibrasimp.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Proyecto
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={vibras1} 
                        alt="Captura de pantalla Vibras"                        
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={vibras2} 
                        alt="Captura Vibras" 
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 4: Concesionaria */}
            <div 
              className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] mb-12 ${
                visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center">
                    <Code className="w-10 h-10 mr-4 text-blue-400" />
                    Concesionaria
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Concesionaria es una aplicación web diseñada específicamente para concesionarias, con el objetivo de optimizar las ventas, tiene
                    base de datos lo que hace que el cliente no dependa de terceros, puede subir fotos de nuevos autos, motos, etc, eliminar y editar las descripciones
                    también posee una búsqueda por filtro optimizada.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {['Html', 'Tailwind CSS', 'TypeScript', 'SQLite'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-sm border border-blue-400/30 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="https://consecionaria.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Proyecto
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={cap} 
                        alt="Captura de pantalla Concesionaria"                        
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={cap1} 
                        alt="Captura de pantalla Concesionaria"                        
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="relative group col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={cap2} 
                        alt="Captura de pantalla Concesionaria" 
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

{/* Proyecto 5: Sin City Burgers - E-commerce */}
<div 
  className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] mb-12 ${
    visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  }`}
>
  <div className="grid lg:grid-cols-2 gap-8 items-center">
    <div className="space-y-6">
      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center">
        <ShoppingCart className="w-10 h-10 mr-4 text-yellow-400" />
        Sin City Burgers
      </h3>
      <p className="text-gray-200 text-lg leading-relaxed">
        Sin City Burgers es un e-commerce completo desarrollado con TypeScript y React, diseñado específicamente para un negocio de hamburguesas. 
        La plataforma cuenta con un sistema de carrito de compras funcional que permite a los clientes agregar productos, modificar cantidades, 
        calcular totales y gestionar su pedido de manera intuitiva antes de finalizar la compra.
      </p>
      
      <div className="space-y-4">
        <h4 className="text-white font-semibold text-lg">Características del e-commerce:</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <li className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-yellow-400">✓</span> Carrito de compras funcional
          </li>
          <li className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-yellow-400">✓</span> Catálogo de productos
          </li>
          <li className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-yellow-400">✓</span> Gestión de cantidades
          </li>
          <li className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-yellow-400">✓</span> Cálculo automático de totales
          </li>
          <li className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-yellow-400">✓</span> Integración con WhatsApp para pedidos
          </li>
          <li className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-yellow-400">✓</span> Diseño responsive y moderno
          </li>
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-4">
        {['TypeScript', 'React', 'Tailwind CSS', 'Context API', 'Lucide Icons', 'Carrito de Compras'].map((tech) => (
          <span 
            key={tech}
            className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-200 rounded-full text-sm border border-yellow-400/30 hover:scale-105 transition-transform duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <a 
        href="https://sincitysantarosa.netlify.app" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25 mt-4"
      >
        <ExternalLink className="w-5 h-5 mr-2" />
        Ver E-commerce
      </a>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
        <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
          <img loading="lazy"
            src={sinCity1} 
            alt="Captura de pantalla Sin City Burgers - E-commerce"                        
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
        <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
          <img loading="lazy"
            src={sinCity2} 
            alt="Captura de pantalla Sin City Burgers - Carrito" 
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
</div>

            {/* Proyecto 6: AsPredictive */}
            <div
              id="aspredictive"
              className={`scroll-mt-24 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] mb-12 ${
                visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 leading-tight">
                    <Cpu className="w-10 h-10 text-cyan-300 flex-shrink-0 sm:mt-1" />
                    <span className="min-w-0 break-words">AsPREDICTIVE</span>
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    AsPredictive es una plataforma web de seguridad operacional y analítica predictiva para monitorear incidentes, alertas activas y trazabilidad institucional desde un tablero centralizado.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Integra indicadores de riesgo 24h, seguimiento de aeropuertos, amenazas operacionales y acciones sugeridas para que los equipos puedan resolver eventos con contexto y continuidad.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Mi foco fue convertir información dispersa en una vista de trabajo clara: un tablero central, alertas visibles y contexto para dar seguimiento a cada riesgo.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {['Aplicación web', 'Cloudflare Pages', 'Analítica predictiva', 'Alertas operacionales'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-100 rounded-full text-sm border border-cyan-400/30 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://aspredictive.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver AsPredictive
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img loading="lazy"
                        src={aspredictiveDashboard}
                        alt="Tablero principal de AsPredictive"
                        className="w-full h-64 object-cover object-left rounded-xl"
                      />
                      <div className="absolute left-5 bottom-5 rounded-2xl bg-slate-950/80 p-4 border border-white/15 backdrop-blur-md">
                        <p className="text-white font-semibold leading-tight">Vigilancia predictiva</p>
                        <p className="text-cyan-200 text-sm">Riesgo operacional y alertas</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500" />
                      <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                        <img loading="lazy"
                          src={aspredictiveAlerts}
                          alt="Vista de alertas de AsPredictive"
                          className="w-full h-40 object-cover object-left-top rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500" />
                      <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                        <img loading="lazy"
                          src={aspredictiveLogin}
                          alt="Pantalla de acceso de AsPredictive"
                          className="w-full h-40 object-cover object-top rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 7: NumiApp */}
            <div
              id="numiapp"
              className={`scroll-mt-24 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] mb-12 ${
                visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 leading-tight">
                    <Code className="w-10 h-10 text-yellow-300 flex-shrink-0 sm:mt-1" />
                    <span className="min-w-0 break-words">NumiApp</span>
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    NumiApp es una aplicación educativa móvil para aprender jugando, con perfiles guardados en el dispositivo y una experiencia visual pensada para chicos de primer ciclo.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    La app organiza actividades por áreas como Matemáticas, Lengua, Ciencias Naturales y Ciencias Sociales, con progreso, premios, ranking y accesos para padres.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {['React Native', 'Expo', 'TypeScript', 'Educación', 'Mobile'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 text-yellow-100 rounded-full text-sm border border-yellow-400/30 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <a href="https://play.google.com/store/apps/details?id=com.numiapp.kids" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-4 bg-gradient-to-r from-yellow-500 to-pink-500 text-white rounded-full shadow-lg shadow-yellow-500/20 hover:scale-105 transition-transform">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Descargar en Play Store
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img loading="lazy"
                        src={numiDashboard}
                        alt="Dashboard de NumiApp"
                        className="w-full h-72 object-cover object-top rounded-xl"
                      />
                      <div className="absolute left-5 bottom-5 rounded-2xl bg-slate-950/80 p-4 border border-white/15 backdrop-blur-md">
                        <p className="text-white font-semibold leading-tight">Aprende jugando</p>
                        <p className="text-yellow-200 text-sm">Actividades, logros y progreso</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500" />
                      <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                        <img loading="lazy"
                          src={numiProfile}
                          alt="Selección de perfil de NumiApp"
                          className="w-full h-48 object-cover object-top rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-lime-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500" />
                      <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                        <img loading="lazy"
                          src={numiSubjects}
                          alt="Materias educativas de NumiApp"
                          className="w-full h-48 object-cover object-top rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 8: Comunidad Aeronautica En Red */}
            <div
              id="comunidad-aeronautica-en-red"
              className={`scroll-mt-24 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] mb-12 ${
                visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 leading-tight">
                    <Plane className="w-10 h-10 text-sky-400 flex-shrink-0 sm:mt-1" />
                    <span className="min-w-0 break-words">Comunidad Aeronáutica En Red</span>
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Comunidad Aeronáutica En Red es una aplicación móvil para iOS y Android, pensada para consultar aeródromos, frecuencias, servicios, combustibles, enlaces oficiales y documentación operativa desde una experiencia clara y rápida.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Centraliza herramientas como METAR en vivo, plan de vuelo, tráfico, NOTAM, biblioteca y accesos de comunidad para pilotos, estudiantes y entusiastas de la aviación.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Diseñé y desarrollé la aplicación móvil junto con su backend para reunir información y herramientas de uso aeronáutico en una experiencia accesible desde el celular.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {['React Native', 'Expo', 'TypeScript', 'API REST', 'iOS', 'Android'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 text-sky-100 rounded-full text-sm border border-sky-400/30 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.comunidadaeronauticaenred.aero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-emerald-600 text-white rounded-full hover:from-sky-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-sky-500/25"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver en Play Store
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img loading="lazy"
                        src={comunidadAeroScreen1}
                        alt="Captura de pantalla Comunidad Aeronáutica En Red"
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <div className="absolute left-5 bottom-5 flex items-center gap-3 rounded-2xl bg-slate-950/80 p-3 border border-white/15 backdrop-blur-md">
                        <img loading="lazy"
                          src={comunidadAeroIcon}
                          alt="Icono Comunidad Aeronáutica En Red"
                          className="w-14 h-14 rounded-2xl object-cover"
                        />
                        <div>
                          <p className="text-white font-semibold leading-tight">Comunidad Aeronáutica</p>
                          <p className="text-sky-200 text-sm">Disponible en iOS y Android</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500" />
                      <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                        <img loading="lazy"
                          src={comunidadAeroScreen2}
                          alt="Vista de herramientas de Comunidad Aeronáutica En Red"
                          className="w-full h-40 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-lime-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500" />
                      <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                        <img loading="lazy"
                          src={comunidadAeroScreen3}
                          alt="Vista de comunidad de Comunidad Aeronáutica En Red"
                          className="w-full h-40 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso de estudio destacado: OfiAI */}
            <div
              id="ofiai"
              className={`scroll-mt-24 bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] mb-12 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-5">
                  <span className="inline-flex items-center rounded-full bg-purple-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-200 border border-purple-300/20">Caso destacado · Marketplace con IA</span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">OfiAI</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">OfiAI conecta organizaciones y profesionales en un marketplace digital, con herramientas de inteligencia artificial para acompañar la búsqueda y gestión de oportunidades.</p>
                  <p className="text-gray-300 text-base leading-relaxed">Desarrollé una experiencia con flujos diferenciados por perfil, tableros de gestión y funciones asistidas por IA, integrando la interfaz, los servicios y la persistencia de datos.</p>
                  <div className="flex flex-wrap gap-3">
                    {['TypeScript', 'Node.js', 'Express', 'Firebase', 'Firestore', 'Groq'].map((tech) => <span key={tech} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-100 rounded-full text-sm border border-purple-400/30">{tech}</span>)}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href="https://ofiai.pages.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"><ExternalLink className="w-5 h-5 mr-2" />Ver demo</a>
                    <a href="https://github.com/roomii13/OfiAI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-4 bg-white/10 text-white rounded-full border border-white/15 hover:bg-white/15 transition-colors"><Github className="w-5 h-5 mr-2" />Ver código</a>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-gray-900 p-1">
                  <img loading="lazy" src={ofiaiDashboard} alt="Captura de la demo profesional de OfiAI con datos ficticios" className="w-full h-64 sm:h-80 object-cover object-top rounded-xl" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/85 px-3 py-2 text-xs text-amber-100 border border-amber-300/20">Demo visual · datos ficticios · solo lectura</span>
                </div>
              </div>
            </div>

            {/* Proyecto 9: Calculadora VLSM */}
            <div 
              className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] ${
                visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center">
                    <Cpu className="w-10 h-10 mr-4 text-green-400" />
                    Calculadora VLSM
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Herramienta profesional para cálculos de subnetting y VLSM (Variable Length Subnet Mask). 
                    Permite optimizar el uso de direcciones IP en redes, calcular subredes, máscaras, 
                    broadcast y rangos utilizables. Esencial para administradores de redes y estudiantes 
                    de certificaciones como CCNA.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {['HTML5', 'CSS3', 'JavaScript', 'Networking', 'IPv4', 'Subnetting'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-200 rounded-full text-sm border border-green-400/30 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      onClick={() => setMostrarCalculadora(true)}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Abrir Calculadora
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img loading="lazy"
                        src={vlsmCaptura} 
                        alt="Captura Calculadora VLSM" 
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-400/20">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <h4 className="text-lg font-bold text-green-300">Características:</h4>
                      </div>
                      <ul className="space-y-2">
                        {[
                          '✅ Cálculo preciso de subredes VLSM',
                          '✅ Soporte para redes /31 y /32',
                          '✅ Validación de direcciones IP',
                          '✅ Optimización de espacio de red',
                          '✅ Resultados en tabla detallada',
                          '✅ Interface responsive y moderna'
                        ].map((feature, index) => (
                          <li 
                            key={index}
                            className="text-gray-200 text-sm flex items-center space-x-2 hover:text-green-300 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* seccion contacto*/}
        <section 
          ref={setSectionRef('contact')}
          className={`py-20 bg-black/20 backdrop-blur-sm transition-all duration-1000 ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              ¡Trabajemos Juntos!
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Estoy abierta a oportunidades laborales, colaboraciones y nuevos proyectos. Si buscas a alguien que pueda llevar una idea desde el concepto hasta una solución digital, escribime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex max-w-full items-center px-6 sm:px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25 text-lg text-left"
              >
                <Mail className="w-6 h-6 mr-3 flex-shrink-0" />
                <span className="min-w-0"><span className="block">Envíame un Email</span><span className="block break-all text-sm font-normal">{CONTACT_EMAIL}</span></span>
              </a>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Contactar por WhatsApp al ${WHATSAPP_DISPLAY}`}
                className="inline-flex max-w-full items-center px-6 sm:px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 text-lg text-left"
              >
                <MessageCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                <span><span className="block">WhatsApp</span><span className="block text-sm font-normal">{WHATSAPP_DISPLAY}</span></span>
              </a>
            </div>    
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            © 2026 Romina Celis. Hecho con 
            <Heart className="w-4 h-4 inline mx-2 text-pink-400 animate-pulse" />
            y mucho código.
          </p>
        </div>
      </footer>

      {/* Scroll progresivo */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 transition-all duration-300"
          style={{ 
            width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        />
      </div>

      {/* Calculadora VLSM Modal */}
      {mostrarCalculadora && (
        <CalculadoraVLSM onClose={() => setMostrarCalculadora(false)} />
      )}
    </div>
  );
}

export default App;
