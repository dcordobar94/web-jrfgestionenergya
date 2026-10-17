import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_URL, COMPANY_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Política de Cookies | ${COMPANY_NAME}`,
  description: 'Política de cookies del sitio web JRF Gestión Energyca.',
  alternates: { canonical: `${SITE_URL}/cookies` },
  robots: { index: false, follow: false },
}

export default function Cookies() {
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
          <Link href="/" className="text-sm text-brand-muted hover:text-brand-secondary transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-brand-text mb-2">Política de Cookies</h1>
        <p className="text-sm text-brand-muted mb-10">Última actualización: octubre de 2026</p>

        <Section title="1. ¿Qué son las cookies?">
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo
            del usuario al visitarlos. Sirven para que el sitio recuerde información sobre la visita
            (idioma, preferencias, sesión, etc.), lo que facilita la navegación y mejora la experiencia.
          </p>
          <p className="mt-3">
            Según la normativa española (art. 22.2 LSSI-CE) y la Directiva ePrivacy (2002/58/CE),
            el uso de cookies que no sean estrictamente necesarias para el funcionamiento del sitio
            requiere el consentimiento informado del usuario.
          </p>
        </Section>

        <Section title="2. Tipos de cookies que utiliza este sitio">

          <h3 className="text-base font-semibold text-brand-text mt-4 mb-2">2.1 Cookies técnicas (exentas de consentimiento)</h3>
          <p>
            Son imprescindibles para el funcionamiento básico del sitio web. Sin ellas, algunas partes
            del sitio no funcionarían correctamente. No requieren consentimiento del usuario.
          </p>
          <CookieTable cookies={[
            {
              nombre: '_next-*',
              tipo: 'Técnica / sesión',
              finalidad: 'Funcionamiento del framework Next.js (enrutamiento, renderizado)',
              duracion: 'Sesión',
              titular: 'Propia',
            },
          ]} />

          <h3 className="text-base font-semibold text-brand-text mt-6 mb-2">2.2 Cookies analíticas (requieren consentimiento)</h3>
          <p>
            Este sitio puede hacer uso de Google Analytics para analizar de forma agregada y anónima
            el comportamiento de los usuarios con el fin de mejorar el contenido y la experiencia de navegación.
            Estas cookies solo se activarán si el usuario da su consentimiento a través del banner de cookies.
          </p>
          <CookieTable cookies={[
            {
              nombre: '_ga',
              tipo: 'Analítica',
              finalidad: 'Distingue usuarios únicos en Google Analytics',
              duracion: '2 años',
              titular: 'Google LLC',
            },
            {
              nombre: '_ga_*',
              tipo: 'Analítica',
              finalidad: 'Mantiene el estado de la sesión en Google Analytics 4',
              duracion: '2 años',
              titular: 'Google LLC',
            },
            {
              nombre: '_gid',
              tipo: 'Analítica',
              finalidad: 'Distingue usuarios para Google Analytics (sesión)',
              duracion: '24 horas',
              titular: 'Google LLC',
            },
            {
              nombre: '_gat',
              tipo: 'Analítica',
              finalidad: 'Limita la frecuencia de solicitudes a Google Analytics',
              duracion: '1 minuto',
              titular: 'Google LLC',
            },
          ]} />
          <p className="mt-3 text-xs">
            Para más información sobre las cookies de Google Analytics, consulta la{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-bright transition-colors"
            >
              Política de Privacidad de Google
            </a>.
          </p>
        </Section>

        <Section title="3. ¿Cómo gestionamos tu consentimiento?">
          <p>
            Al acceder por primera vez a este sitio web, se mostrará un banner informativo que
            permite aceptar o rechazar las cookies no esenciales. Tu elección se guardará para
            futuras visitas.
          </p>
          <p className="mt-3">
            Puedes revocar tu consentimiento en cualquier momento borrando las cookies de tu
            navegador y volviendo a visitar el sitio (el banner aparecerá de nuevo) o siguiendo
            las instrucciones del apartado 4 de esta política.
          </p>
          <p className="mt-3">
            Las cookies técnicas no pueden desactivarse sin afectar al funcionamiento del sitio,
            por lo que no se solicita consentimiento para ellas.
          </p>
        </Section>

        <Section title="4. Cómo desactivar o eliminar las cookies">
          <p>
            Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento.
            Ten en cuenta que desactivar ciertas cookies puede afectar al funcionamiento del sitio.
          </p>
          <p className="mt-4 font-semibold text-brand-text text-sm">Instrucciones por navegador:</p>
          <ul className="mt-3 space-y-2">
            <BrowserLink
              name="Google Chrome"
              url="https://support.google.com/chrome/answer/95647"
            />
            <BrowserLink
              name="Mozilla Firefox"
              url="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
            />
            <BrowserLink
              name="Safari (Mac / iPhone)"
              url="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            />
            <BrowserLink
              name="Microsoft Edge"
              url="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            />
          </ul>
        </Section>

        <Section title="5. Cookies de terceros">
          <p>
            Algunas cookies pueden ser instaladas por servicios de terceros (como Google) que el
            titular de este sitio utiliza para mejorar el servicio. Estos terceros tienen sus propias
            políticas de privacidad sobre las que Juan Rayo Funes no tiene control.
          </p>
          <p className="mt-3">
            Para rechazar el uso de cookies de Google Analytics de forma global puedes instalar el
            complemento oficial:{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-bright transition-colors"
            >
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </Section>

        <Section title="6. Más información">
          <p>
            Para cualquier consulta sobre esta política de cookies puedes contactar a través de{' '}
            <a
              href="https://wa.me/34614483342"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-bright transition-colors"
            >
              WhatsApp: 614 483 342
            </a>.
          </p>
          <p className="mt-3">
            También puedes consultar la guía sobre el uso de cookies publicada por la Agencia Española
            de Protección de Datos en{' '}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-bright transition-colors"
            >
              www.aepd.es
            </a>.
          </p>
        </Section>
      </main>

      <PageFooter />
    </div>
  )
}

/* ── Sub-components ── */

interface CookieRow {
  nombre: string
  tipo: string
  finalidad: string
  duracion: string
  titular: string
}

function CookieTable({ cookies }: { cookies: CookieRow[] }) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full text-xs border border-brand-border rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-brand-surface text-brand-text">
            <Th>Nombre</Th>
            <Th>Tipo</Th>
            <Th>Finalidad</Th>
            <Th>Duración</Th>
            <Th>Titular</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-border">
          {cookies.map((c) => (
            <tr key={c.nombre} className="hover:bg-brand-surface/50 transition-colors">
              <Td>
                <code className="text-brand-secondary font-mono">{c.nombre}</code>
              </Td>
              <Td>{c.tipo}</Td>
              <Td>{c.finalidad}</Td>
              <Td>{c.duracion}</Td>
              <Td>{c.titular}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">{children}</th>
  )
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-2 align-top">{children}</td>
}

function BrowserLink({ name, url }: { name: string; url: string }) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-secondary hover:text-brand-bright transition-colors text-sm"
      >
        {name} →
      </a>
    </li>
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

function PageFooter() {
  return (
    <footer className="border-t border-brand-border mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
        <p>© {new Date().getFullYear()} {COMPANY_NAME} · Juan Rayo Funes · NIF: 24249146Q</p>
        <div className="flex gap-4">
          <Link href="/aviso-legal" className="hover:text-brand-secondary transition-colors">Aviso Legal</Link>
          <Link href="/privacidad" className="hover:text-brand-secondary transition-colors">Privacidad</Link>
        </div>
      </div>
    </footer>
  )
}


