"use client";
import React from 'react';
import Image from 'next/image';
import { 
  Package, 
  Search, 
  ClipboardList, 
  Bot, 
  Shield, 
  DollarSign, 
  FlaskConical, 
  TrendingUp,
  FolderRoot,
  DollarSign as MoneyIcon,
  BarChart3,
  Pickaxe,
  Database,
  Map
} from 'lucide-react';

const Integration = () => {
  const products = [
    {
      title: "SCM GOSOFT",
      subtitle: "Sistema de Control de Mineral",
      description: "Simplifica la gestión de tus inventarios de stocks de manera eficiente y sin complicaciones.",
      icon: Package,
      gradient: "from-blue-500 to-blue-600",
      bgClass: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      title: "RCA GOSOFT",
      subtitle: "Análisis de Causa Raíz", 
      description: "Registra y analiza las causas principales de problemas o fallas de tus activos para maximizar la disponibilidad.",
      icon: Search,
      gradient: "from-cyan-500 to-blue-500",
      bgClass: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    {
      title: "TASKRECORD GOSOFT",
      subtitle: "Registro de Pautas",
      description: "Permite registrar procedimientos y recomendaciones para garantizar la vida útil de los activos.",
      icon: ClipboardList,
      gradient: "from-blue-600 to-indigo-600", 
      bgClass: "bg-gradient-to-r from-blue-600 to-indigo-600"
    },
    {
      title: "MINEBOT GOSOFT",
      subtitle: "ChatBot para Mantenimiento",
      description: "Inteligencia artificial que potencia la productividad y gestión de equipos con información precisa y actualizada de manera ágil.",
      icon: Bot,
      gradient: "from-indigo-500 to-purple-500",
      bgClass: "bg-gradient-to-r from-indigo-500 to-purple-500"
    },
    {
      title: "FORZADOS GOSOFT",
      subtitle: "Sistema de Gestión de Forzados",
      description: "Reduce riesgos y protege tus operaciones, gestionando la ejecución de cambios en las lógicas de control como: enclavamientos, etc.",
      icon: Shield,
      gradient: "from-blue-500 to-blue-600",
      bgClass: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      title: "SPP GOSOFT", 
      subtitle: "Sistema de Pago a Proveedores",
      description: "Registra la gestión de pagos a proveedores, estableciendo los flujos de aprobaciones e informes de forma rápida.",
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-500",
      bgClass: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      title: "RLAB GOSOFT",
      subtitle: "Registro de Laboratorio", 
      description: "Gestiona el registro de las muestras, análisis y resultados de laboratorio de forma ágil y segura.",
      icon: FlaskConical,
      gradient: "from-purple-500 to-indigo-500",
      bgClass: "bg-gradient-to-r from-purple-500 to-indigo-500"
    },
    {
      title: "BI GOSOFT",
      subtitle: "Inteligencia de Negocios",
      description: "Solución que integra tus sistemas en una plataforma de inteligencia de negocios para una toma de decisiones informada.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500",
      bgClass: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      title: "GEPRO",
      subtitle: "Sistema Integral para Oficina de Gestión de Proyectos",
      description: "Herramienta completa para la gestión integral de proyectos, desde la planificación hasta el seguimiento y control de todas las fases del proyecto.",
      icon: FolderRoot,
      gradient: "from-teal-500 to-green-500",
      bgClass: "bg-gradient-to-r from-teal-500 to-green-500"
    },
    {
      title: "GC3P",
      subtitle: "Sistema de Monitoreo Financiero de Proyectos con interfaz al SIAF-SP",
      description: "Monitorea y controla los aspectos financieros de tus proyectos con integración directa al Sistema Integrado de Administración Financiera.",
      icon: MoneyIcon,
      gradient: "from-red-500 to-rose-500",
      bgClass: "bg-gradient-to-r from-red-500 to-rose-500"
    },
    {
      title: "AGEKPI",
      subtitle: "Sistema de Registro y Monitoreo de Indicadores y Planes de Acción",
      description: "Gestiona y monitorea indicadores clave de rendimiento (KPIs) y planes de acción para optimizar la toma de decisiones estratégicas.",
      icon: BarChart3,
      gradient: "from-orange-500 to-amber-500",
      bgClass: "bg-gradient-to-r from-orange-500 to-amber-500"
    },
    {
      title: "CUBMIN",
      subtitle: "Sistema Inteligente para Planificación, Control y Optimización Minera",
      description: "Plataforma avanzada que integra inteligencia artificial para optimizar la planificación minera, control de operaciones y maximización de recursos.",
      icon: Pickaxe,
      gradient: "from-slate-600 to-gray-700",
      bgClass: "bg-gradient-to-r from-slate-600 to-gray-700"
    },
    {
      title: "SISBID",
      subtitle: "Sistema de Conversión y Búsqueda Avanzada de Información Digital",
      description: "Convierte y organiza información digital para facilitar búsquedas avanzadas y acceso rápido a documentos y datos críticos.",
      icon: Database,
      gradient: "from-blue-600 to-purple-600",
      bgClass: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      title: "GISPRO",
      subtitle: "Sistema de Información Geográfica para Proyectos",
      description: "Herramienta especializada en el manejo de información geográfica y espacial para la gestión integral de proyectos con componente territorial.",
      icon: Map,
      gradient: "from-emerald-500 to-teal-600",
      bgClass: "bg-gradient-to-r from-emerald-500 to-teal-600"
    }
  ];

  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
           <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-base font-medium text-white">
            Business Partner con GO Integreat y Cognosys
          </span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl xl:text-5xl">
              Productos y Servicios Tecnológicos
            </h2>
            <p className="mx-auto max-w-c-800 text-base text-body-color dark:text-white md:text-lg">
              Soluciones integrales para la gestión minera, proyectos, sistemas financieros y optimización de procesos empresariales
            </p>
          </div>
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1390 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={index}
                  className="group animate_top rounded-2xl bg-white p-6 shadow-solid-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-solid-10 dark:bg-blacksection dark:shadow-solid-7"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                  }}
                >
                  {/* Header con gradiente */}
                  <div className={`mb-6 rounded-xl p-4 text-white ${product.bgClass} relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 h-16 w-16 rounded-full bg-white/10 -translate-y-2 translate-x-2"></div>
                    <div className="absolute bottom-0 left-0 h-12 w-12 rounded-full bg-white/10 translate-y-2 -translate-x-2"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-lg font-bold">{product.title}</h3>
                        <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                          <IconComponent size={20} className="text-white" />
                        </div>
                      </div>
                      <p className="text-sm font-medium text-white/90">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="mb-6">
                    <p className="text-sm leading-relaxed text-body-color dark:text-white">
                      {product.description}
                    </p>
                  </div>

                  {/* Barra de progreso */}
                  <div className="h-1 overflow-hidden rounded-full bg-gray-100 dark:bg-strokedark">
                    <div 
                      className={`h-full rounded-full transition-transform duration-500 ${product.bgClass} -translate-x-full group-hover:translate-x-0`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mx-auto mt-16 max-w-c-1390 px-4 md:px-8 2xl:px-0">
                      <div className="animate_top mx-auto max-w-c-600 rounded-2xl bg-white p-8 text-center shadow-solid-7 dark:bg-blacksection dark:shadow-solid-7">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              ¿Listo para transformar tu empresa?
            </h3>
            <p className="mb-6 text-body-color dark:text-white">
              Descubre cómo nuestras soluciones pueden optimizar tus operaciones
            </p>
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl">
              Contactar Ahora
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate_top {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Integration;