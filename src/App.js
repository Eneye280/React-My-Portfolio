import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Code, Gamepad2, Layers, Award, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timelineRef = useRef(null);

  const projects = [
    {
      id: 0,
      title: "Pragma Engine- En Progreso",
      description: "Motor de videojuegos en desarrollo con enfoque en renderizado y herramientas del editor.",
      image: process.env.PUBLIC_URL + "/assets/pragmaEngine.png",
      technologies: ["Avalonia", ".NET 8 - C#", "C++", "Veldrid", "Directx12", "Vulkan", "Python", "Antigravity", "IA", "DeepSeek"],
      role: "Desarrollador | Diseñador",
      fullDescription: "Pragma Engine es un motor de videojuegos diseñado para ofrecer un entorno de desarrollo moderno, rápido y flexible. Combina Avalonia para la interfaz del editor con Veldrid como backend gráfico, permitiendo soporte para DirectX 12, Vulkan y OpenGL. Incluye sistemas personalizados para animaciones, física, scripting y una arquitectura modular orientada a herramientas de creación de contenido. El objetivo del proyecto es construir un editor robusto y una base técnica capaz de escalar desde prototipos hasta proyectos complejos en 3D, manteniendo un flujo de trabajo eficiente y extensible.",
      platform: "Plataforma: Avalonia - Veldrid"
    },
    {
      id: 1,
      title: "Pragma - En Progreso",
      description: "Editor avanzado para automatizar procesos y crear videojuegos desde un entorno centralizado.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/pragmaVideo.mp4",
      technologies: ["Unity", "C#", "Firebase", "Unity Game Services", "API Rest", "IA", "DeepSeek"],
      role: "Desarrollador | Diseñador",
      fullDescription: "Pragma es un editor diseñado para simplificar y automatizar el flujo de trabajo en la creación de videojuegos. Construido sobre Unity, integra sistemas personalizados para manejo de assets, automatización de tareas, backend con Firebase y servicios de Unity, junto con módulos conectados mediante API REST e inteligencia artificial. El objetivo es ofrecer una herramienta completa para edición, organización, pruebas y despliegue, centralizando funciones clave en un solo entorno para acelerar el desarrollo.",
      platform: "Plataforma: Unity Editor"
    },
    {
      id: 2,
      title: "Nexus Lab - En Progreso",
      description: "Plataforma empresarial de capacitación interactiva.",
      image: process.env.PUBLIC_URL + "/assets/nexusLabBanner.jpeg",
      technologies: ["Unity", "C#", "Firebase", "Unity Game Services", "API Rest", "IA"],
      role: "Desarrollador | UX/UI",
      fullDescription: "Nexus Lab es una plataforma de capacitación empresarial enfocada en experiencias interactivas y contenido formativo gamificado. Construida sobre la infraestructura del ecosistema Pragma, integra módulos de aprendizaje, evaluaciones, seguimiento de progreso y herramientas de administración para empresas. El sistema utiliza Unity, Firebase y servicios en la nube para ofrecer despliegue multiplataforma, soporte en tiempo real y una experiencia fluida en WebGL, móviles y escritorio.",
      platform: "Plataforma: Webgl - Android - iOS - Windows - Mac"
    },
    {
      id: 3,
      title: "Tower of Ashen Souls - En Progreso",
      description: "Tower defense oscuro donde defendés la última torre del mundo frente a hordas de esqueletos y criaturas malditas.",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop",
      technologies: ["Unity", "C#", "Unity Game Services", "Unity ADS"],
      role: "Desarrollador | Diseñador",
      fullDescription: "En Tower of Ashen Souls, el equilibrio entre la vida y la muerte está al borde del colapso. Las fuerzas de las cenizas <<esqueletos, espectros y bestias corruptas>> emergen sin descanso para reclamar la torre ancestral que contiene las almas de los caídos.Como guardián de este bastión, debés construir defensas, mejorar tus torres y dominar habilidades especiales para resistir oleada tras oleada de enemigos. Cada decisión estratégica define si la torre perdura… o si las almas que protege se desvanecen para siempre.Un mundo oscuro, criaturas implacables y una ambientación cargada de tensión hacen de este juego una experiencia intensa de estrategia y supervivencia.",
      platform: "Plataforma: Android - iOS"
    },
    {
      id: 4,
      title: "Numverse 2048 - Finalizado",
      description: "Juego de rompecabezas que combina disparar cubos y fusionar números al estilo 2048.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/numverse.mp4",
      technologies: ["Unity", "C#", "Playfab", "Unity ADS", "Unity In-App Purchase"],
      role: "Desarrollador | Diseñador",
      fullDescription: "Numverse 2048 es un juego de rompecabezas que mezcla mecánicas de disparo con la clásica fusión de números. Apuntá, dispará cubos y combiná valores para alcanzar puntuaciones más altas mientras administrás el espacio y la velocidad de aparición. Un enfoque rápido, dinámico y adictivo del concepto 2048.",
      platform: "Plataforma: Android"
    },
    {
      id: 5,
      title: "Juegate la vida - Finalizado",
      description: "Proyecto enfocado en promover la salud mental mediante la prevención de la ansiedad, depresión, adicciones y el suicidio.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/juegateLaVida.mp4",
      technologies: ["Unity", "C#"],
      role: "Desarrollador | Diseño de Nivel",
      fullDescription: "“Juegate la vida” es un proyecto interactivo orientado a la promoción de la salud mental y la prevención de la ansiedad, depresión, adicciones y el suicidio. A través de experiencias y dinámicas educativas, busca generar conciencia y brindar herramientas para el bienestar emocional.",
      platform: "Plataforma: Webgl - Windows"
    },
    {
      id: 6,
      title: "Boxed Monster - Finalizado",
      description: "Experiencia VR diseñada para promover la salud mental mediante dinámicas de prevención y concientización.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/boxedMonster.mp4",
      technologies: ["Unity", "C#"],
      role: "Desarrollador | Diseño de Nivel",
      fullDescription: "Boxed Monster es una experiencia en realidad virtual enfocada en la concientización sobre la salud mental. A través de situaciones interactivas y simbólicas, busca abordar temas como ansiedad, depresión, adicciones y riesgo suicida, invitando al usuario a reflexionar mientras participa en un entorno inmersivo desarrollado para Cardboard.",
      platform: "Plataforma: Cardboard"
    },
    {
      id: 7,
      title: "Empty - Finalizado",
      description: "Juego de rompecabezas donde debés evitar caer al vacío mientras la dificultad y el entorno cambian con cada checkpoint.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/empty.mp4",
      technologies: ["Unity", "C#", "PlayFab"],
      role: "Desarrollador | Diseñador",
      fullDescription: "Empty es un juego de rompecabezas centrado en el control del movimiento y el manejo del espacio. El objetivo es mantener al personaje a salvo del vacío mientras atravesás plataformas que cambian su diseño, dificultad y mecánicas al llegar a cada checkpoint. Con progresión dinámica y desafíos crecientes, el juego combina precisión, tensión y estrategia en un formato rápido y accesible para dispositivos Android.",
      platform: "Plataforma: Android"
    },
    {
      id: 8,
      title: "Pirate Combat - Finalizado",
      description: "Ocho islas han emergido revelando fragmentos de un mapa celestial. Como buenos piratas, tu misión es encontrarlos y reclamar el tesoro.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/piratCombat.mp4",
      technologies: ["Unity", "C#", "MongoDB", "VR"],
      role: "Desarrollador | Diseño de Nivel",
      fullDescription: "Hace años, fragmentos del legendario mapa del tesoro celestial quedaron ocultos en ocho islas misteriosas. Ahora que han vuelto a la superficie, comienza la carrera por encontrarlos. En Pirate Combat explorás islas, resolvés desafíos y luchás por completar el mapa antes que nadie. Diseñado para Meta Quest 2, combina acción, exploración y combate en una experiencia VR totalmente inmersiva.",
      platform: "Plataforma: Meta Quest 2"
    },
    {
      id: 9,
      title: "Terrace Park - Finalizado",
      description: "Visualización interactiva de las torres de Terrace Park, incluyendo sus áreas principales y cada apartamento.",
       mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/terracePark.mp4",
      technologies: ["Unity", "C#", "Unity Game Services", "PlayFab"],
      role: "Desarrollador",
      fullDescription: "Terrace Park es una visualización interactiva que permite recorrer las torres del complejo, explorar sus áreas clave y revisar en detalle cada apartamento. Desarrollado con Unity y orientado a WebGL, ofrece una experiencia fluida para presentación de espacios, venta y documentación arquitectónica.",
      platform: "Plataforma: Webgl"
    },
    {
      id: 10,
      title: "Hacienda Kachipay - Finalizado",
      description: "Visualizador interactivo de proyectos de apartamentos con información y galerías detalladas.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/kachipay.mkv",
      technologies: ["Unity", "C#", "PlayFab"],
      role: "Desarrollador",
      fullDescription: "Hacienda Kachipay es una aplicación interactiva para explorar distintos proyectos de apartamentos. Permite revisar información detallada, planos y galerías de imágenes, ofreciendo una presentación clara y atractiva para clientes y exhibiciones. Desarrollado con Unity para WebGL y Windows, brinda una experiencia fluida y accesible para mostrar propiedades en diferentes plataformas.",
      platform: "Plataforma: Webgl - Windows"
    },
    {
      id: 11,
      title: "Jayedo 360° - Finalizado",
      description: "Recorrido 360° del apartamento Jayedo con visualización interactiva.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/Jayedo 360°.mkv",
      technologies: ["Unity", "C#", "PlayFab"],
      role: "Desarrollador",
      fullDescription: "Experiencia interactiva en vista 360° del apartamento Jayedo, diseñada para explorar cada espacio con detalle desde WebGL o Windows. Permite visualizar el entorno de manera inmersiva para presentación y promoción inmobiliaria.",
      platform: "Plataforma: Webgl - Windows"
    },
    {
      id: 12,
      title: "Rosé Apto 1 - Finalizado",
      description: "Recorrido 360° del apartamento Rosé Apto 1 para visualización interactiva.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/Rosé Apto 1 - 360°.mp4",
      technologies: ["Unity", "C#", "PlayFab"],
      role: "Desarrollador",
      fullDescription: "Representación interactiva en 360° del apartamento Rosé Apto 1. Ofrece una vista inmersiva del espacio pensada para exhibiciones y presentaciones inmobiliarias en WebGL y Windows.",
      platform: "Plataforma: Webgl - Windows"
    },
    {
      id: 13,
      title: "Rosé Apto 3 - Finalizado",
      description: "Recorrido 360° del apartamento Rosé Apto 3 con vista inmersiva.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/Rosé Apto 3 - 360°.mkv",
      technologies: ["Unity", "C#", "PlayFab"],
      role: "Desarrollador",
      fullDescription: "Visualización completa en 360° del apartamento Rosé Apto 3. Permite recorrer virtualmente sus espacios con una experiencia clara y fluida para presentaciones en WebGL y Windows.",
      platform: "Plataforma: Webgl - Windows"
    },
    {
      id: 14,
      title: "Children's Park - Finalizado",
      description: "Visualización 360° de elementos de parque con opciones de rotación, color y personalización.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/childrenPark.mp4",
      technologies: ["Unity", "C#", "PlayFab"],
      role: "Desarrollador",
      fullDescription: "Children’s Park es una aplicación WebGL para explorar en 360° distintos elementos de parques. El usuario puede rotarlos, cambiar colores y personalizar detalles en tiempo real, ofreciendo una herramienta práctica para exhibición, diseño y selección de mobiliario urbano.",
      platform: "Plataforma: Webgl - Windows"
    },
    {
      id: 15,
      title: "VR Drummon - Finalizado",
      description: "Experiencia VR para entrenar posturas seguras al subir y bajar de camiones de minería.",
      image: "",
      technologies: ["Unity", "C#", "PlayFab", "VR"],
      role: "Desarrollador",
      fullDescription: "VR Drummon es una aplicación de realidad virtual diseñada para capacitar trabajadores en la correcta ergonomía al ascender y descender de camiones mineros. Mediante simulación inmersiva, guía al usuario en posturas seguras y prácticas que reducen el riesgo de desórdenes musculoesqueléticos. Desarrollada para Meta Quest 2 y Oculus Rift.",
      platform: "Plataforma: Meta Quest 2 - Oculus Rift"
    },
    {
      id: 16,
      title: "Furniture - Finalizado",
      description: "Visualización 360° de muebles con opciones de cambio de color y texturas.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/furniture.mp4",
      technologies: ["Unity", "C#", "PlayFab"],
      role: "Desarrollador",
      fullDescription: "Furniture es una aplicación WebGL para visualizar muebles en 360°, permitiendo rotar los objetos y modificar colores y texturas en tiempo real. Diseñada para mostrar productos de manera interactiva, es ideal para catálogos digitales y exhibiciones de mobiliario en WebGL y Windows.",
      platform: "Plataforma: Webgl - Windows"
    }
    ,
    {
      id: 17,
      title: "Garbage VR - Finalizado",
      description: "Experiencia VR educativa sobre separación de residuos para el municipio de Envigado.",
      mediaType: "video",
      image: process.env.PUBLIC_URL + "/assets/garbageVR.mp4",
      technologies: ["Unity", "C#", "VR"],
      role: "Desarrollador",
      fullDescription: "Proyecto de realidad virtual diseñado para enseñar y reforzar las prácticas correctas de separación de basuras en el municipio de Envigado. Mediante una experiencia interactiva y guiada, el usuario aprende a clasificar distintos tipos de residuos en un entorno inmersivo desarrollado para Meta Quest 2.",
      platform: "Plataforma: Meta Quest 2"
    }
  ];

  const experience = [
    {
      year: "Oct 2022 - Actualidad",
      company: "TGA Company",
      role: "Unity Developer",
      description: "Participé en proyectos multiplataforma, entregando productos pulidos y envolventes.",
      color: "#9b59b6"
    },
    {
      year: "Jul 2019 - Nov 2023",
      company: "Parceros Games",
      role: "Co-Founder - Unity Developer - Project Manager",
      description: "Lideré el desarrollo de videojuegos para dispositivos móviles y PC",
      color: "#e74c3c"
    },
    {
      year: "May 2019 - Abril 2021",
      company: "Quandty S.A.S",
      role: "Co-Founder - Unity Developer",
      description: "Dirigí el desarrollo de videojuegos de seguridad laboral en VR y AR.",
      color: "#f39c12"
    },
    {
      year: "Jul 2018 - Dic 2018",
      company: "Arquitectos de Negocios",
      role: "Analista Multimedia",
      description: "Diseñé y estructuré aplicaciones multimedia alineadas a objetivos empresariales.",
      color: "#3498db"
    }
  ];

const courses = [
  { year: "Agosto 2022", title: "Curso profesional de Git y GitHub", institution: "Platzi", color: "#FF8A65" },
  { year: "Agosto 2022", title: "Curso de testing de videojuegos", institution: "Platzi", color: "#4FC3F7" },

  { year: "Octubre 2021", title: "Scrum Master", institution: "Udemy", color: "#9575CD" }, 
  { year: "Abril 2021", title: "C# Avanzado", institution: "LinkedIn", color: "#FFB74D" }, 
  { year: "Febrero 2021", title: "Tester de videojuegos", institution: "Fundación Carlos Slim", color: "#64B5F6" }, 
  { year: "Febrero 2021", title: "RPG Core Combat Creator With Unity", institution: "Udemy", color: "#E57373" }, 

  { year: "Agosto 2018", title: "Desarrollo de videojuegos", institution: "Fundación Carlos Slim", color: "#4DD0E1" }, 

  { year: "Noviembre 2017", title: "The Ultimate Guide To Real World App With Unity", institution: "Udemy", color: "#BA68C8" }, 
  { year: "Noviembre 2017 - Marzo 2018", title: "Introducción a las Herramientas y Competencias para la Generación de Innovación", institution: "UPV", color: "#FFD54F" }, 

  { year: "Enero 2017 - Noviembre 2017", title: "Tecnólogo en Desarrollo de videojuegos", institution: "SENA", color: "#4DB6AC" },

  { year: "Enero 2020", title: "Scrum Avanzado", institution: "LinkedIn", color: "#FFAB91" },
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
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#228BE6] to-[#5ce1e6] flex items-center justify-center">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="flex gap-8">
          <button onClick={() => setCurrentPage(0)} className="text-gray-300 hover:text-[#228BE6] transition-colors">Inicio</button>
          <button onClick={() => setCurrentPage(1)} className="text-gray-300 hover:text-[#228BE6] transition-colors">Trabajos</button>
          <button onClick={() => setCurrentPage(2)} className="text-gray-300 hover:text-[#228BE6] transition-colors">Experiencia</button>
          <button onClick={() => setCurrentPage(3)} className="text-gray-300 hover:text-[#228BE6] transition-colors">Cursos</button>
        </div>
      </nav>

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#228BE6' : '#ee6c4d',
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
              <div className="text-sm uppercase tracking-[0.3em] text-[#228BE6] font-semibold mb-6 font-light">
                Desarrollador de juegos y especialista en herramientas de Unity
              </div>
              
              <h1 className="text-9xl font-black mb-8 leading-none">
                <span className="block text-white">EUCLIDES</span>
                <span className="block text-white">MARTINEZ</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#228BE6] to-[#ee6c4d] mb-8" />
              
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl">
                Desarrollador especializado en <span className="text-[#228BE6] font-semibold">Unity</span> con enfoque en 
                <span className="text-[#228BE6] font-semibold"> creación de editores y automatizaciones</span>. 
                Transformo workflows complejos en herramientas intuitivas que potencian la productividad del equipo.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-white" />
                  <span className="text-gray-400">Unity & C#</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-white" />
                  <span className="text-gray-400">Unity Editor</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-white" />
                  <span className="text-gray-400">VR & AR</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="w-5 h-5 text-white" />
                  <span className="text-gray-400">40+ Proyectos (Públicos - Privados)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Unity', 'C#', 'VR', 'AR', 'Vuforia', 'Unity Game Services', 'Firebase', 'PlayFab', 'Penpot', 'Adobe XD', 'Camtasia'].map((tech, i) => (
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
              Proyectos <span className="text-[#228BE6]">Destacados</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">Una muestra representativa de mi trabajo, centrada en la creación, programación y diseño de experiencias interactivas.</p>
            
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
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-[#228BE6]/50 hover:shadow-2xl hover:shadow-[#228BE6]/20 hover:-translate-y-2">
                    <div className="relative h-56 overflow-hidden">
                        {/* CONDICIONAL PARA VIDEO O IMAGEN */}
                        {project.mediaType === "video" ? (
                          <div className="relative w-full h-full">
                            <video 
                              src={project.image}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              muted
                              loop
                              autoPlay
                              playsInline
                              onContextMenu={(e) => e.preventDefault()}
                              controlsList="nodownload"
                              disablePictureInPicture
                              controls={false}
                            />
                            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                          </div>
                        ) : (
                          <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/70 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-100 mb-3">
                          {project.description}
                        </p>
                        <h1 className="text-sm text-gray-400">
                          {project.platform}
                        </h1>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-[#228BE6]/0 text-[#ffffff] border border-[#228BE6]/100"
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
              Mi <span className="text-[#228BE6]">Experiencia</span>
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
                      <div className="text-[#ffffff] font-bold mb-2 text-xs uppercase tracking-wider">
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
              Cursos & <span className="text-[#228BE6]">Certificaciones</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">Formación continua 2018-2025</p>
            
            <div className="relative w-full max-w-6xl">
              {/* Botones de navegación del timeline */}
              <button
                onClick={() => scrollTimeline('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#228BE6]/20 hover:border-[#228BE6] transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => scrollTimeline('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#228BE6]/20 hover:border-[#228BE6] transition-all"
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
                      
                      <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#228BE6]/30 transition-all duration-300 h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="w-3 h-3 rounded-full animate-pulse"
                            style={{ backgroundColor: course.color }}
                          />
                          <div className="text-[#ffffff] font-bold text-sm">
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
              : 'bg-white/10 border-[#228BE6]/30 text-white hover:bg-[#228BE6]/20 hover:border-[#228BE6] hover:shadow-lg hover:shadow-[#228BE6]/30'
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
                  ? 'bg-[#228BE6] w-8 shadow-lg shadow-[#228BE6]/50'
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
              : 'bg-white/10 border-[#228BE6]/30 text-white hover:bg-[#228BE6]/20 hover:border-[#228BE6] hover:shadow-lg hover:shadow-[#228BE6]/30'
          }`}
        >
          <span className="font-medium">Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* POPUP DE PROYECTO */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/60 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto bg-[#2F3845]/50 backdrop-blur-2xl rounded-3xl border border-[#228BE6]/30 shadow-2xl shadow-[#228BE6]/20 animate-scaleIn scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-[#228BE6]/20 text-white hover:text-[#228BE6] transition-all duration-300 border border-white/10 hover:border-[#228BE6]/50 z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-10">
          {/* CONDICIONAL PARA VIDEO O IMAGEN EN EL POPUP */}
            {selectedProject.mediaType === "video" ? (
              <div className="relative">
                <video 
                  src={selectedProject.image}
                  className="w-full h-96 object-cover rounded-2xl mb-8"
                  controls
                  controlsList="nodownload nofullscreen noremoteplayback"
                  onContextMenu={(e) => e.preventDefault()}
                  disablePictureInPicture
                  playsInline
                />
                <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-lg text-white text-sm">
                  
                </div>
              </div>
              ) : (
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-2xl mb-8"
                />
              )}

              <h2 className="text-5xl font-bold text-white mb-3">
                {selectedProject.title}
              </h2>
              
              <div className="text-[#228BE6] font-medium text-xl mb-6">
                {selectedProject.role}
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#228BE6] to-[#5ce1e6]" />
                  Tecnologías
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-5 py-2 rounded-full bg-[#228BE6]/0 text-[#ffffff] border border-[#228BE6]/100 font-medium text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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