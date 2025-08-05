"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const texts = [
    "Inteligencia Artificial",
    "Desarrollo Web",
    "Apps Móviles",
    "Reportes Business Intelligence",
    "Automatización"
  ];

  // Efecto de typing
  useEffect(() => {
    const tick = () => {
      const fullText = texts[currentIndex];
      const updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts]);

  // Seguimiento del mouse para efectos parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el email
    console.log("Email:", email);
  };

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Grid de fondo animado */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 relative z-10">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2 space-y-8">
              {/* Badge animado */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-purple-500/30 backdrop-blur-sm animate-pulse">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  🚀 Innovación tecnológica
                </span>
              </div>

              {/* Título principal con efecto gradiente */}
              <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                  Transformación Digital
                </span>
                <br />
                <span className="text-gray-700 dark:text-gray-300">con </span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {currentText}
                    <span className="animate-blink">|</span>
                  </span>
                  <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-expand-width"></div>
                </span>
              </h1>

              {/* Subtítulo con animación */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-fade-in-up animation-delay-300">
                Decisiones inteligentes que elevan tu competitividad en el mercado digital
              </p>

              {/* Stats animados */}
              <div className="flex flex-wrap gap-6 py-6">
                {[
                  { number: "150+", label: "Proyectos" },
                  { number: "98%", label: "Satisfacción" },
                  { number: "24/7", label: "Soporte" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-110 transition-transform duration-300"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-3 pt-6">
                {["React", "Next.js", "AI/ML", "Cloud", "Mobile"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Sección de imagen mejorada */}
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div 
                className="relative 2xl:-mr-7.5 transform transition-transform duration-1000"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                }}
              >
                {/* Formas decorativas animadas */}
                <div className="absolute -inset-10">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce animation-delay-1000"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce animation-delay-2000"></div>
                  <div className="absolute top-1/3 right-0 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-bounce animation-delay-3000"></div>
                </div>

                {/* Círculos de código flotantes */}
                <div className="absolute inset-0 pointer-events-none">
                  {["</>" , "{}", "AI", "DB", "API"].map((code, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-12 bg-blue-500/10 dark:bg-blue-400/20 rounded-full flex items-center justify-center text-xs font-mono text-blue-600 dark:text-blue-400 animate-float"
                      style={{
                        left: `${20 + (index * 15)}%`,
                        top: `${10 + (index * 20)}%`,
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      {code}
                    </div>
                  ))}
                </div>

                {/* Imagen principal con efectos */}
                <div className="relative aspect-[700/444] w-full group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Image
                    className="shadow-solid-l dark:hidden rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                  
                  {/* Overlay con brillo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-2xl pointer-events-none"></div>
                </div>

                {/* Indicador de scroll */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes expand-width {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-expand-width {
          animation: expand-width 2s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
};

export default Hero;