import React from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

export interface ServiceCardData {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  ctaLabel: string
}

const services: ServiceCardData[] = [
  {
    id: 'asesoria-energetica',
    icon: <BoltIcon className="w-8 h-8" />,
    title: 'Asesoría Energética',
    description:
      'Revisamos tus facturas, comparamos todas las tarifas del mercado y te recomendamos la opción que más te ahorra. Gestión del cambio incluida.',
    ctaLabel: 'Quiero ahorrar en mi factura',
  },
  {
    id: 'energia-solar',
    icon: <SunIcon className="w-8 h-8" />,
    title: 'Energía Solar',
    description:
      'Estudiamos la viabilidad de instalar paneles solares en tu hogar o negocio. Te acompañamos desde el presupuesto hasta la puesta en marcha.',
    ctaLabel: 'Quiero instalar placas solares',
  },
]

function ServiceCard({ service }: { service: ServiceCardData }) {
  const whatsappUrl = `${WHATSAPP_URL}&text=${encodeURIComponent(`Hola, me interesa el servicio: ${service.title}`)}`
  return (
    <article className="group bg-brand-surface rounded-2xl p-8 border border-brand-border hover:border-brand-secondary/50 hover:shadow-gold transition-all duration-300 flex flex-col">
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-primary/60 text-brand-secondary mb-6 group-hover:bg-brand-primary transition-colors">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-brand-text mb-3">{service.title}</h3>

      {/* Description */}
      <p className="text-brand-muted leading-relaxed flex-1 mb-8">{service.description}</p>

      {/* CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-brand-secondary font-semibold text-sm hover:text-brand-bright transition-colors"
        aria-label={`${service.ctaLabel} por WhatsApp`}
      >
        <WhatsAppSmallIcon className="w-4 h-4" />
        {service.ctaLabel}
        <ArrowIcon className="w-4 h-4 ml-auto" />
      </a>
    </article>
  )
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-bright font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-4">
            Todo lo que necesitas para ahorrar energía
          </h2>
          <p className="max-w-xl mx-auto text-brand-muted text-lg">
            Asesoría personalizada para que pagues menos y consumas de forma más inteligente.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Icons
function BoltIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.268a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.895-.143z" clipRule="evenodd" />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.166 17.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.59-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 5.106a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.061l-1.59-1.59z" />
    </svg>
  )
}

function WhatsAppSmallIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  )
}
