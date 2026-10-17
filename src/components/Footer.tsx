import Image from 'next/image'
import { COMPANY_NAME, COMPANY_ADDRESS, SITE_URL, WHATSAPP_URL } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-brand-dark border-t border-brand-border text-brand-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo_jrf.png"
                alt={`Logo ${COMPANY_NAME}`}
                width={52}
                height={52}
                className="object-contain"
              />
              <span className="text-brand-text font-bold text-lg">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed">
              Asesoría energética independiente para hogares y empresas en España.
              Te ayudamos a ahorrar en tu factura de luz y gas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-brand-text font-semibold mb-4 text-sm uppercase tracking-widest">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-brand-secondary transition-colors">Servicios</a></li>
              <li><a href="#como-trabajamos" className="hover:text-brand-secondary transition-colors">Cómo Trabajamos</a></li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors">
                  Contacto por WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-brand-text font-semibold mb-4 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/aviso-legal" className="hover:text-brand-secondary transition-colors">Aviso Legal</a></li>
              <li><a href="/privacidad" className="hover:text-brand-secondary transition-colors">Política de Privacidad</a></li>
              <li><a href="/cookies" className="hover:text-brand-secondary transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {year} {COMPANY_NAME} · {COMPANY_ADDRESS}
          </p>
          <a
            href={SITE_URL}
            className="hover:text-brand-secondary transition-colors"
          >
            {SITE_URL.replace('https://', '')}
          </a>
        </div>
      </div>
    </footer>
  )
}

