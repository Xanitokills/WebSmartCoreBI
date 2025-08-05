"use client";
import React, { useEffect, useRef, useState } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const currentHeader = headerRef.current;
    const currentItems = itemsRef.current;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === currentHeader) {
            setHeaderVisible(true);
          } else {
            // Para los items de features
            const index = currentItems.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleItems(prev => new Set(Array.from(prev).concat(index)));
            }
          }
        }
      });
    }, observerOptions);

    // Observar el header
    if (currentHeader) {
      observer.observe(currentHeader);
    }

    // Observar cada item de feature con delay progresivo
    currentItems.forEach((item, index) => {
      if (item) {
        setTimeout(() => {
          observer.observe(item);
        }, index * 100); // Delay progresivo para efecto cascada
      }
    });

    return () => {
      if (currentHeader) observer.unobserve(currentHeader);
      currentItems.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  // Smooth scroll para navegación interna
  useEffect(() => {
    const handleSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    handleSmoothScroll();
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <section 
        id="features" 
        ref={sectionRef}
        className="py-20 lg:py-25 xl:py-30 relative overflow-hidden"
      >
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 relative z-10">
          {/* Section Title con animación */}
          <div 
            ref={headerRef}
            className={`transition-all duration-1000 transform ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <SectionHeader
              headerInfo={{
                title: "CARACTERISTICAS SOLIDAS",
                subtitle: "Clave de Nuestro Servicio", 
                description: `En Smart Core BI, proporcionamos soluciones avanzadas en desarrollo y análisis de datos que transforman la información en conocimiento accionable. Nuestras herramientas están diseñadas para optimizar procesos de toma de decisiones, impulsando la eficiencia y la rentabilidad de tu negocio. Nos especializamos en`,
              }}
            />
          </div>

          {/* Grid de Features con animaciones escalonadas */}
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {featuresData.map((feature, index) => {
              const isVisible = visibleItems.has(index);
              
              return (
                <div
                  key={index}
                  ref={el => itemsRef.current[index] = el}
                  className={`transform transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms` // Delay progresivo
                  }}
                >
                  {/* Wrapper con efectos hover mejorados */}
                  <div className="group relative">
                    {/* Glow effect en hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                    
                    {/* Contenido del feature */}
                    <div className="relative transform transition-all duration-300 group-hover:scale-105">
                      <SingleFeature feature={feature} />
                    </div>

                  
                  </div>
                </div>
              );
            })}
          </div>

          {/* Líneas conectoras animadas */}
          <div className="absolute inset-0 pointer-events-none">
            {featuresData.map((_, index) => {
              if (index < featuresData.length - 1) {
                const isVisible = visibleItems.has(index) && visibleItems.has(index + 1);
                return (
                  <div
                    key={`line-${index}`}
                    className={`absolute w-px h-20 bg-gradient-to-b from-blue-400/50 to-transparent transition-all duration-1000 ${
                      isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}
                    style={{
                      left: `${(index % 3) * 33.33 + 16.67}%`,
                      top: `${Math.floor(index / 3) * 200 + 150}px`,
                      transitionDelay: `${index * 200}ms`,
                      transformOrigin: 'top'
                    }}
                  />
                );
              }
              return null;
            })}
          </div>

     

          {/* Indicador de progreso */}
          <div className="fixed bottom-6 right-6 z-50">
            <div className={`w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-500 ${
              visibleItems.size > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}>
              <div 
                className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700"
                style={{
                  transform: `scale(${visibleItems.size / featuresData.length})`
                }}
              ></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-in {
          animation: slideInFromBottom 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Feature;