import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_URL, COMPANY_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Aviso Legal | ${COMPANY_NAME}`,
  description: 'Aviso legal e información sobre el titular del sitio web JRF Gestión Energyca.',
  alternates: { canonical: `${SITE_URL}/aviso-legal` },
  robots: { index: false, follow: false },
}

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-muted">
      {/* Header */}
      <header className="bg-brand-dark border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label={`${COMPANY_NAME} — Volver al inicio`}
          >
            <Image
              src="/images/logo_jrf.png"
              alt={`Logo ${COMPANY_NAME}`}
              width={52}
              height={52}
              className="object-contain"
            />
            <span className="text-brand-text font-bold text-lg">{COMPANY_NAME}</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-brand-muted hover:text-brand-secondary transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-brand-text mb-2">Aviso Legal</h1>
        <p className="text-sm text-brand-muted mb-10">Última actualización: octubre de 2026</p>

        <Section title="1. Datos identificativos del titular">
          <p>
            En cumplimiento de lo establecido en el artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
            se facilitan los siguientes datos identificativos del titular del sitio web:
          </p>
          <ul className="mt-4 space-y-2">
            <li><strong className="text-brand-text">Titular:</strong> Juan Rayo Funes</li>
            <li><strong className="text-brand-text">NIF:</strong> 24249146Q</li>
            <li><strong className="text-brand-text">Domicilio:</strong> Calle Estación 1, 1A, 18110 Las Gabias, Granada (España)</li>
            <li><strong className="text-brand-text">Nombre comercial:</strong> JRF Gestión Energyca</li>
            <li><strong className="text-brand-text">Sitio web:</strong>{' '}
              <a href={SITE_URL} className="text-brand-secondary hover:text-brand-bright transition-colors">{SITE_URL}</a>
            </li>
            <li><strong className="text-brand-text">Contacto:</strong>{' '}
              <a href="https://wa.me/34614483342" className="text-brand-secondary hover:text-brand-bright transition-colors" target="_blank" rel="noopener noreferrer">
                WhatsApp: 614 483 342
              </a>
            </li>
          </ul>
        </Section>

        <Section title="2. Objeto y ámbito de aplicación">
          <p>
            El presente Aviso Legal regula el acceso, navegación y uso del sitio web{' '}
            <strong className="text-brand-text">{SITE_URL}</strong>, cuya titularidad corresponde a Juan Rayo Funes,
            autónomo dedicado a la asesoría energética y a la comercialización de proyectos de energía solar
            para hogares y empresas en España.
          </p>
          <p className="mt-3">
            El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación plena
            y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
          </p>
        </Section>

        <Section title="3. Propiedad intelectual e industrial">
          <p>
            Todos los contenidos del sitio web —incluyendo textos, imágenes, logotipos, diseño gráfico,
            código fuente y cualquier otro elemento— son titularidad de Juan Rayo Funes o de terceros
            que han autorizado su uso, y están protegidos por la legislación española e internacional
            sobre propiedad intelectual e industrial.
          </p>
          <p className="mt-3">
            Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación
            de cualquier contenido del sitio sin autorización expresa y por escrito del titular.
          </p>
        </Section>

        <Section title="4. Condiciones de uso">
          <p>El usuario se compromete a hacer un uso lícito del sitio web y, en particular, a:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>No utilizar el sitio con fines ilícitos o contrarios a la buena fe.</li>
            <li>No introducir virus, código malicioso ni cualquier otro elemento que pueda dañar los sistemas del titular o de terceros.</li>
            <li>No intentar acceder a áreas restringidas del sitio sin autorización.</li>
          </ul>
        </Section>

        <Section title="5. Exclusión de responsabilidad">
          <p>
            Juan Rayo Funes no se hace responsable de los daños y perjuicios de cualquier naturaleza
            que pudieran derivarse del acceso o uso del sitio web, incluyendo los causados por virus
            informáticos, errores tipográficos o inexactitudes en los contenidos.
          </p>
          <p className="mt-3">
            El sitio puede contener enlaces a páginas de terceros. El titular no controla ni se responsabiliza
            del contenido de dichas páginas externas.
          </p>
        </Section>

        <Section title="6. Legislación aplicable y jurisdicción">
          <p>
            Las presentes condiciones se rigen por la legislación española. Para la resolución de
            cualquier controversia derivada del uso de este sitio web, las partes se someten,
            con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados
            y Tribunales de Granada (España).
          </p>
        </Section>

        <Section title="7. Modificaciones">
          <p>
            Juan Rayo Funes se reserva el derecho a modificar el presente Aviso Legal en cualquier
            momento. Los cambios serán efectivos desde su publicación en el sitio web. Se recomienda
            revisarlo periódicamente.
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-brand-text mb-4 pb-2 border-b border-brand-border">
        {title}
      </h2>
      <div className="text-sm leading-relaxed space-y-2">{children}</div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-brand-border mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
        <p>© {new Date().getFullYear()} {COMPANY_NAME} · Juan Rayo Funes · NIF: 24249146Q</p>
        <div className="flex gap-4">
          <Link href="/privacidad" className="hover:text-brand-secondary transition-colors">Privacidad</Link>
          <Link href="/cookies" className="hover:text-brand-secondary transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}


