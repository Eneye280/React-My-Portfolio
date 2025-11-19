import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Code, Gamepad2, Layers, Award, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timelineRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "RPG Fantasy Quest",
      description: "Juego de rol con mundo abierto",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop",
      technologies: ["Unity", "C#", "Blender"],
      role: "Lead Developer",
      fullDescription: "Desarrollo completo de mecánicas de combate, sistema de inventario, IA de enemigos y optimización de rendimiento.",
      achievements: ["100K+ descargas", "4.8★ rating"]
    },
    {
      id: 2,
      title: "Neon Racer VR",
      description: "Experiencia de carreras inmersiva",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&h=400&fit=crop",
      technologies: ["Unity", "C#", "VR", "Vuforia"],
      role: "Technical Lead",
      fullDescription: "Implementación de física vehicular realista y sistema multiplayer en VR con optimización para 90fps.",
      achievements: ["Nominado Best VR 2023"]
    },
    {
      id: 3,
      title: "Puzzle Dimension",
      description: "Puzzle con manipulación temporal",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      technologies: ["Unity", "C#", "AR"],
      role: "Game Designer",
      fullDescription: "Diseño y desarrollo de 120+ niveles con mecánicas únicas de manipulación del tiempo.",
      achievements: ["Indie Game Festival Winner"]
    },
    {
      id: 4,
      title: "Battle Arena Mobile",
      description: "MOBA competitivo móvil",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
      technologies: ["Unity", "C#", "Photon"],
      role: "Backend Engineer",
      fullDescription: "Arquitectura de red optimizada para baja latencia y sistema de matchmaking balanceado.",
      achievements: ["2M+ descargas"]
    },
    {
      id: 5,
      title: "Survival Horror",
      description: "Terror psicológico atmosférico",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      technologies: ["Unreal", "C#", "AR"],
      role: "Audio Programmer",
      fullDescription: "Sistema de audio dinámico 3D y mecánicas de sigilo innovadoras.",
      achievements: ["Featured Steam"]
    },
    {
      id: 6,
      title: "City Builder Pro",
      description: "Simulador de construcción urbana",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
      technologies: ["Unity", "C#", "VR"],
      role: "Systems Designer",
      fullDescription: "Economía compleja, simulación de tráfico y sistema de zonificación avanzado.",
      achievements: ["500K+ jugadores"]
    }
  ];

  const experience = [
    {
      year: "Jul 2018 - Dic 2019",
      title: "Comienzo",
      company: "GameStart Academy",
      role: "Junior Developer",
      description: "Primeros pasos en desarrollo de videojuegos y herramientas Unity",
      color: "#9b59b6"
    },
    {
      year: "Ene 2020 - Jun 2022",
      title: "Crecimiento",
      company: "Indie Collective",
      role: "Unity Developer",
      description: "Desarrollo de editores personalizados y automatizaciones en Unity",
      color: "#e74c3c"
    },
    {
      year: "Jul 2022 - Oct 2024",
      title: "Especialización",
      company: "Pixel Dreams",
      role: "Senior Unity Developer",
      description: "Liderazgo en creación de herramientas y sistemas de automatización",
      color: "#f39c12"
    },
    {
      year: "Nov 2024 - Presente",
      title: "Maestría",
      company: "Infinity Studios",
      role: "Lead Tool Developer",
      description: "Arquitectura de editores complejos y optimización de pipelines",
      color: "#3498db"
    }
  ];

  const courses = [
    { year: "2018", title: "Unity Fundamentals", institution: "Unity Learn", color: "#9b59b6" },
    { year: "2019", title: "C# Advanced Programming", institution: "Coursera", color: "#e91e63" },
    { year: "2019", title: "Game Design Principles", institution: "Udemy", color: "#9c27b0" },
    { year: "2020", title: "Unity Editor Scripting", institution: "Pluralsight", color: "#e74c3c" },
    { year: "2020", title: "VR Development with Unity", institution: "Unity Learn", color: "#f44336" },
    { year: "2021", title: "AR Foundation Masterclass", institution: "Udemy", color: "#ff5722" },
    { year: "2021", title: "Vuforia Expert Certification", institution: "PTC", color: "#ff9800" },
    { year: "2022", title: "Unity Performance Optimization", institution: "Unity Learn", color: "#f39c12" },
    { year: "2022", title: "Unreal Engine Fundamentals", institution: "Epic Games", color: "#ffc107" },
    { year: "2023", title: "UI/UX Design with Adobe XD", institution: "Adobe", color: "#4caf50" },
    { year: "2023", title: "Penpot Design System", institution: "Self-taught", color: "#8bc34a" },
    { year: "2024", title: "Advanced Tool Development", institution: "Unity", color: "#00bcd4" },
    { year: "2024", title: "Camtasia Video Production", institution: "TechSmith", color: "#03a9f4" },
    { year: "2025", title: "AI in Game Development", institution: "Coursera", color: "#3498db" }
  ];

  const scrollTimeline = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = 400;
      timelineRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const nextPage = () => {
    if (currentPage < 3 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-radial from-[#2F3845] to-[#1B1B1B]">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ecdc4] to-[#5ce1e6] flex items-center justify-center">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="flex gap-8">
          <button onClick={() => setCurrentPage(0)} className="text-gray-300 hover:text-[#5ce1e6] transition-colors">Home</button>
          <button onClick={() => setCurrentPage(1)} className="text-gray-300 hover:text-[#5ce1e6] transition-colors">Works</button>
          <button onClick={() => setCurrentPage(2)} className="text-gray-300 hover:text-[#5ce1e6] transition-colors">Journey</button>
          <button onClick={() => setCurrentPage(3)} className="text-gray-300 hover:text-[#5ce1e6] transition-colors">Courses</button>
        </div>
      </nav>

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#4ecdc4' : '#ee6c4d',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.4
            }}
          />
        ))}
      </div>

      {/* Contenedor de páginas */}
      <div className="relative h-full w-full">
        
        {/* PÁGINA 1: HERO */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          currentPage === 0 
            ? 'opacity-100 translate-x-0' 
            : currentPage > 0 
              ? 'opacity-0 -translate-x-full' 
              : 'opacity-0 translate-x-full'
        }`}>
          <div className="h-full flex items-center px-20">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.3em] text-[#5ce1e6] mb-6 font-light">
                Game Developer & Tool Specialist
              </div>
              
              <h1 className="text-9xl font-black mb-8 leading-none">
                <span className="block text-white">EUCLIDES</span>
                <span className="block text-white">MARTINEZ</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#4ecdc4] to-[#ee6c4d] mb-8" />
              
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl">
                Desarrollador especializado en <span className="text-[#5ce1e6] font-semibold">Unity</span> con enfoque en 
                <span className="text-[#5ce1e6] font-semibold"> creación de editores y automatizaciones</span>. 
                Transformo workflows complejos en herramientas intuitivas que potencian la productividad del equipo.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-white" />
                  <span className="text-gray-400">Unity & C#</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-white" />
                  <span className="text-gray-400">VR & AR</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="w-5 h-5 text-white" />
                  <span className="text-gray-400">40+ Proyectos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-white" />
                  <span className="text-gray-400">Editor Specialist</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Unity', 'Unreal', 'C#', 'VR', 'AR', 'Vuforia', 'Penpot', 'Adobe XD', 'Camtasia'].map((tech, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PÁGINA 2: PROYECTOS EN GRID */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          currentPage === 1 
            ? 'opacity-100 translate-x-0' 
            : currentPage > 1 
              ? 'opacity-0 -translate-x-full' 
              : 'opacity-0 translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto scrollbar-hide px-20 pt-32 pb-32">
            <h2 className="text-6xl font-bold mb-4 text-white">
              Featured <span className="text-[#5ce1e6]">Projects</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">Explora mi trabajo más reciente</p>
            
            <div className="grid grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer floating-card"
                  style={{
                    animation: `floatIdle ${3 + (index % 3)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-[#5ce1e6]/50 hover:shadow-2xl hover:shadow-[#4ecdc4]/20 hover:-translate-y-2">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/50 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-[#4ecdc4]/10 text-[#5ce1e6] border border-[#4ecdc4]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PÁGINA 3: EXPERIENCIA - TIMELINE ONDULADO */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          currentPage === 2 
            ? 'opacity-100 translate-x-0' 
            : currentPage > 2 
              ? 'opacity-0 -translate-x-full' 
              : 'opacity-0 translate-x-full'
        }`}>
          <div className="h-full flex flex-col items-center justify-center px-20">
            <h2 className="text-6xl font-bold mb-4 text-white">
              My <span className="text-[#5ce1e6]">Journey</span>
            </h2>
            <p className="text-gray-400 mb-16 text-lg">Julio 2018 - Noviembre 2025</p>
            
            <div className="relative w-full max-w-6xl">
              {/* SVG Ondulado */}
              <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                  d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#9b59b6', stopOpacity: 1 }} />
                    <stop offset="33%" style={{ stopColor: '#e74c3c', stopOpacity: 1 }} />
                    <stop offset="66%" style={{ stopColor: '#f39c12', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Puntos en la onda */}
                {experience.map((_, index) => (
                  <circle
                    key={index}
                    cx={150 + index * 300}
                    cy={index % 2 === 0 ? 40 : 80}
                    r="8"
                    fill={experience[index].color}
                    className="animate-pulse"
                  />
                ))}
              </svg>

              {/* Tarjetas de experiencia */}
              <div className="grid grid-cols-4 gap-6 mt-8">
                {experience.map((item, index) => (
                  <div 
                    key={index}
                    className="text-center"
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                    }}
                  >
                    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5ce1e6]/30 transition-all duration-300">
                      <div 
                        className="w-3 h-3 rounded-full mx-auto mb-4"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="text-[#5ce1e6] font-bold mb-2 text-xs uppercase tracking-wider">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="text-gray-400 font-medium mb-2 text-sm">
                        {item.company}
                      </div>
                      <div className="text-[#ee6c4d] font-medium mb-3 text-sm">
                        {item.role}
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PÁGINA 4: CURSOS - TIMELINE SCROLLEABLE */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          currentPage === 3 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full'
        }`}>
          <div className="h-full flex flex-col items-center justify-center px-20 py-32">
            <h2 className="text-6xl font-bold mb-4 text-white">
              Courses & <span className="text-[#5ce1e6]">Certifications</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">Formación continua 2018-2025</p>
            
            <div className="relative w-full max-w-6xl">
              {/* Botones de navegación del timeline */}
              <button
                onClick={() => scrollTimeline('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#5ce1e6]/20 hover:border-[#5ce1e6] transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => scrollTimeline('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#5ce1e6]/20 hover:border-[#5ce1e6] transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Timeline horizontal scrolleable */}
              <div 
                ref={timelineRef}
                className="overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none' }}
              >
                <div className="flex gap-6 pb-8 px-16" style={{ minWidth: 'max-content' }}>
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-72"
                      style={{
                        animation: `floatIdle ${3 + (index % 3)}s ease-in-out infinite`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {/* Línea conectora */}
                      {index < courses.length - 1 && (
                        <div className="absolute top-12 left-full w-6 h-0.5 bg-gradient-to-r from-white/30 to-transparent" />
                      )}
                      
                      <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5ce1e6]/30 transition-all duration-300 h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="w-3 h-3 rounded-full animate-pulse"
                            style={{ backgroundColor: course.color }}
                          />
                          <div className="text-[#5ce1e6] font-bold text-sm">
                            {course.year}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                          {course.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.institution}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-8 z-30">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
            currentPage === 0
              ? 'bg-white/5 border-white/10 text-gray-600 cursor-not-allowed'
              : 'bg-white/10 border-[#5ce1e6]/30 text-white hover:bg-[#5ce1e6]/20 hover:border-[#5ce1e6] hover:shadow-lg hover:shadow-[#5ce1e6]/30'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        <div className="flex gap-3">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === i
                  ? 'bg-[#5ce1e6] w-8 shadow-lg shadow-[#5ce1e6]/50'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === 3}
          className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
            currentPage === 3
              ? 'bg-white/5 border-white/10 text-gray-600 cursor-not-allowed'
              : 'bg-white/10 border-[#5ce1e6]/30 text-white hover:bg-[#5ce1e6]/20 hover:border-[#5ce1e6] hover:shadow-lg hover:shadow-[#5ce1e6]/30'
          }`}
        >
          <span className="font-medium">Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* POPUP DE PROYECTO */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/70 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto bg-[#1a2847]/90 backdrop-blur-2xl rounded-3xl border border-[#5ce1e6]/30 shadow-2xl shadow-[#4ecdc4]/20 animate-scaleIn scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-[#ee6c4d]/20 text-white hover:text-[#ee6c4d] transition-all duration-300 border border-white/10 hover:border-[#ee6c4d]/50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-10">
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover rounded-2xl mb-8"
              />

              <h2 className="text-5xl font-bold text-white mb-3">
                {selectedProject.title}
              </h2>
              
              <div className="text-[#5ce1e6] font-medium text-xl mb-6">
                {selectedProject.role}
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#4ecdc4] to-[#5ce1e6]" />
                  Tecnologías
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-5 py-2 rounded-full bg-[#4ecdc4]/20 text-[#5ce1e6] border border-[#4ecdc4]/40 font-medium text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#5ce1e6] to-[#ee6c4d]" />
                  Logros
                </h3>
                <ul className="space-y-3">
                  {selectedProject.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-lg">
                      <div className="w-2 h-2 rounded-full bg-[#ee6c4d]" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, #2F3845 0%, #1B1B1B 100%);
        }

        @keyframes floatIdle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .floating-card {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;