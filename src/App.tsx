import React, { useState, useEffect, useRef } from 'react';
import { Heart, Instagram, Facebook, MessageCircle, Mail, ExternalLink, Code, Database, Smartphone, Monitor, Star, Moon, Cloud } from 'lucide-react';
import fotoPerfil from './assets/fotoPerfil1.jpg';
import captura from './assets/Captura de pantalla 2025-07-17 220850.jpg';
import captura1 from './assets/Captura de pantalla 2025-07-17 220822.jpg';
import chili1 from './assets/chili1.jpg';
import chili2 from './assets/chili2.jpg';
import vibras1 from './assets/vibras1.jpg';
import vibras2 from './assets/vibras2.jpg';
import vlsmCaptura from './assets/calculadora-vlsm.png';
import CalculadoraVLSM from './components/CalculadoraVLSM';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
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

  const skills = [
    { name: 'React', icon: '⚛️', level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'Angular', icon: '🅰️', level: 85, color: 'from-red-400 to-pink-500' },
    { name: 'JavaScript', icon: '🟨', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', icon: '🔷', level: 90, color: 'from-blue-500 to-indigo-600' },
    { name: 'HTML', icon: '🌐', level: 95, color: 'from-orange-400 to-red-500' },
    { name: 'CSS', icon: '🎨', level: 90, color: 'from-pink-400 to-purple-500' },
    { name: 'C', icon: '⚙️', level: 80, color: 'from-gray-400 to-gray-600' },
    { name: 'C++', icon: '⚡', level: 85, color: 'from-blue-400 to-purple-500' },
    { name: 'C#', icon: '💜', level: 80, color: 'from-purple-400 to-indigo-500' },
    { name: 'Java', icon: '☕', level: 85, color: 'from-orange-400 to-red-600' },
    { name: 'SQL', icon: '🗄️', level: 88, color: 'from-green-400 to-blue-500' },
     { name: 'Phyton', icon: '🐍', level: 40, color: 'from-red-500 to-pink-600' },
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
                href="https://wa.me/5492954446198" 
                target="_blank" 
                rel="noopener noreferrer"
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
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-4">
                PORTFOLIO
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 blur-xl rounded-full" />
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
              Desarrolladora Full Stack / Creativa Digital
            </p>
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
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="mailto:rom-cel@live.com.ar"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Contáctame
                    </a>
                  </div>
                </div>
              </div>
              
              <div 
                className={`flex justify-center transition-all duration-1000 delay-500 ${
                  visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-600 p-2 animate-pulse">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                      <img 
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
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group transform ${
                    visibleSections.has('skills') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    transform: visibleSections.has('skills') 
                      ? `translateY(${Math.sin(scrollY * 0.01 + index) * 5}px)` 
                      : 'translateY(40px)'
                  }}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-white font-semibold text-base mb-4">{skill.name}</h3>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-2000 ease-out`}
                        style={{ 
                          width: visibleSections.has('skills') ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-300">{skill.level}%</span>
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
            
            <div 
              className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] ${
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
                    La plataforma permite llevar un control detallado de los casos en proceso, pendientes y completos, mejorando la eficiencia y organización del flujo de trabajo.
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
                      <img 
                     src={captura1} alt="Captura de pantalla"                        
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img src={captura} alt="Captura de pantalla" 
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <br></br>
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
                      <img 
                     src={chili1} alt="Captura de pantalla"                        
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img src={chili2} alt="Captura" 
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
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
                      <img 
                     src={vibras1} alt="Captura de pantalla"                        
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gray-900 rounded-2xl p-1 transform group-hover:scale-105 transition-transform duration-500">
                      <img src={vibras2} alt="Captura" 
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
               
              <br></br>
              {/* Proyecto 4: Calculadora VLSM */}
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
                      <img 
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
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y crear algo increíble juntos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:rom-cel@live.com.ar"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25 text-lg"
              >
                <Mail className="w-6 h-6 mr-3" />
                Envíame un Email
              </a>
              
              <a 
                href="https://wa.me/5492954446198" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            © 2025 Romina Celis. Hecho con 
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
