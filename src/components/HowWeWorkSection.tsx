import React from 'react'

export interface ProcessStepData {
  step: number
  icon: React.ReactNode
  title: string
  description: string
}

const steps: ProcessStepData[] = [
  {
    step: 1,
    icon: <DocumentIcon className="w-7 h-7" />,
    title: 'Nos mandas tu factura',
    description: 'Envíanos tu última factura de luz o gas por WhatsApp. En menos de un minuto tenemos todo lo que necesitamos.',
  },
  {
    step: 2,
    icon: <SearchIcon className="w-7 h-7" />,
    title: 'Analizamos tu consumo',
    description: 'Estudiamos tu perfil de consumo y comparamos todas las tarifas del mercado para encontrar la que más te ahorra.',
  },
  {
    step: 3,
    icon: <PiggyBankIcon className="w-7 h-7" />,
    title: 'Empiezas a ahorrar',
    description: 'Te presentamos la mejor opción y nos encargamos de todo el cambio. Sin papeleo, sin cortes de suministro.',
  },
]

function ProcessStep({ data, isLast }: { data: ProcessStepData; isLast: boolean }) {
  return (
    <div className="flex flex-col items-center text-center md:flex-1 relative">
      {/* Connector line (desktop only) */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-brand-border" aria-hidden="true" />
      )}

      {/* Step bubble */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-secondary mb-4">
          {data.icon}
        </div>

        {/* Step number badge */}
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-secondary text-brand-dark text-xs font-bold flex items-center justify-center shadow">
          {data.step}
        </span>
      </div>

      <h3 className="text-lg font-bold text-brand-text mb-2">{data.title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed max-w-xs">{data.description}</p>

      {/* Mobile connector */}
      {!isLast && (
        <div className="md:hidden w-px h-8 bg-brand-border my-4" aria-hidden="true" />
      )}
    </div>
  )
}

export default function HowWeWorkSection() {
  return (
    <section id="como-trabajamos" className="py-24 bg-brand-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-bright font-semibold text-sm uppercase tracking-widest mb-3">
            El Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-4">
            Cómo trabajamos
          </h2>
          <p className="max-w-xl mx-auto text-brand-muted text-lg">
            En tres pasos sencillos, sin complicaciones y sin coste alguno.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 gap-0">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.step}
              data={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Icons
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75-6.75a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
      <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
    </svg>
  )
}

function PiggyBankIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
    </svg>
  )
}
