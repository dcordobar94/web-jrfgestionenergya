import Image from 'next/image'
import { WHATSAPP_URL } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-hero-gradient pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo_jrf.png"
            alt="Logo JRF Gestión Energya"
            width={260}
            height={260}
            className="object-contain"
            priority
          />
        </div>

        {/* Eyebrow */}
        <p className="inline-block bg-brand-secondary/15 text-brand-secondary border border-brand-secondary/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Asesoría Energética Independiente
        </p>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-text leading-tight mb-6">
          Ahorra en tu factura{' '}
          <span className="text-brand-bright">energética</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-brand-muted mb-12 leading-relaxed">
          Analizamos tu consumo y encontramos la mejor tarifa para tu hogar o empresa.
          Sin compromiso. Sin letra pequeña.
        </p>

        {/* Primary CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-secondary hover:bg-brand-bright active:bg-brand-secondary text-brand-dark font-bold text-lg px-8 py-4 rounded-full shadow-gold transition-all duration-200 hover:scale-105"
          aria-label="Contactar por WhatsApp ahora"
        >
          <WhatsAppIcon className="w-6 h-6 shrink-0" />
          Habla con nosotros gratis
        </a>

        {/* Trust signals */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-brand-muted/70 text-sm">
          <span className="flex items-center gap-2">
            <CheckIcon />
            Sin permanencia
          </span>
          <span className="hidden sm:block text-brand-border">·</span>
          <span className="flex items-center gap-2">
            <CheckIcon />
            Respuesta en menos de 24h
          </span>
          <span className="hidden sm:block text-brand-border">·</span>
          <span className="flex items-center gap-2">
            <CheckIcon />
            100% independiente
          </span>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-brand-bright shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  )
}
