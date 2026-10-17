import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_URL, COMPANY_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Política de Privacidad | ${COMPANY_NAME}`,
  description: 'Política de privacidad y protección de datos de JRF Gestión Energya.',
  alternates: { canonical: `${SITE_URL}/privacidad` },
  robots: { index: false, follow: false },
}

export default function Privacidad() {
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
        <h1 className="text-3xl font-extrabold text-brand-text mb-2">Política de Privacidad</h1>
        <p className="text-sm text-brand-muted mb-10">Última actualización: octubre de 2026</p>

        <Section title="1. Responsable del tratamiento">
          <table className="w-full text-sm mt-2">
            <tbody className="divide-y divide-brand-border">
              <Row label="Responsable" value="Juan Rayo Funes" />
              <Row label="NIF" value="24249146Q" />
              <Row label="Domicilio" value="Calle Estación 1, 1A, 18110 Las Gabias, Granada (España)" />
              <Row label="Nombre comercial" value="JRF Gestión Energya" />
              <Row label="Contacto" value="WhatsApp: 614 483 342" />
            </tbody>
          </table>
        </Section>

        <Section title="2. Datos que se tratan y cómo se recogen">
          <p>
            Este sitio web no dispone de formularios de registro ni de contacto. Los únicos datos
            personales que se pueden tratar son los que el propio usuario facilita de forma
            voluntaria al iniciar una conversación a través de WhatsApp:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Nombre (si el usuario lo facilita en el mensaje)</li>
            <li>Número de teléfono (asociado a la cuenta de WhatsApp del usuario)</li>
            <li>Contenido de los mensajes intercambiados</li>
          </ul>
          <p className="mt-3">
            El tratamiento de esos datos se rige, además, por la política de privacidad de WhatsApp
            (Meta Platforms Ireland Ltd.), sobre la que Juan Rayo Funes no tiene control.
          </p>
        </Section>

        <Section title="3. Finalidad del tratamiento">
          <p>Los datos facilitados por el usuario se tratarán exclusivamente para:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Atender y gestionar las consultas o solicitudes de información recibidas.</li>
            <li>Elaborar y remitir propuestas o presupuestos energéticos personalizados.</li>
            <li>Mantener la comunicación necesaria durante la prestación del servicio.</li>
          </ul>
          <p className="mt-3">
            Los datos no se utilizarán para ninguna otra finalidad sin el consentimiento expreso del usuario.
          </p>
        </Section>

        <Section title="4. Base jurídica del tratamiento">
          <p>El tratamiento de datos se fundamenta en:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>
              <strong className="text-brand-text">Consentimiento del interesado</strong> (art. 6.1.a RGPD):
              el usuario inicia voluntariamente el contacto a través de WhatsApp.
            </li>
            <li>
              <strong className="text-brand-text">Ejecución de un precontrato o contrato</strong> (art. 6.1.b RGPD):
              cuando la comunicación tiene por objeto la prestación efectiva de un servicio.
            </li>
            <li>
              <strong className="text-brand-text">Interés legítimo</strong> (art. 6.1.f RGPD):
              para el seguimiento de consultas no concluidas.
            </li>
          </ul>
        </Section>

        <Section title="5. Plazo de conservación">
          <p>
            Los datos se conservarán durante el tiempo necesario para gestionar la solicitud del usuario
            y, en su caso, durante los plazos legales de prescripción aplicables (con carácter general,
            hasta 5 años según el Código Civil para reclamaciones contractuales). Una vez transcurrido
            dicho plazo, los datos serán suprimidos o anonimizados.
          </p>
        </Section>

        <Section title="6. Cesión de datos a terceros">
          <p>
            Juan Rayo Funes no cederá los datos personales de los usuarios a terceros, salvo que
            exista una obligación legal que lo requiera o el usuario haya prestado su consentimiento expreso.
          </p>
          <p className="mt-3">
            No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo,
            sin perjuicio de las condiciones propias de la plataforma WhatsApp.
          </p>
        </Section>

        <Section title="7. Cookies y herramientas de analítica">
          <p>
            Este sitio web puede utilizar herramientas de analítica web como Google Analytics para
            analizar el uso del sitio y mejorar su contenido. Dichas herramientas pueden implicar
            el tratamiento de datos de navegación (dirección IP anonimizada, páginas visitadas,
            tiempo de sesión, dispositivo utilizado).
          </p>
          <p className="mt-3">
            En caso de usarse, estos tratamientos se realizan con el consentimiento del usuario,
            obtenido a través del banner de cookies. Para más información, consulta nuestra{' '}
            <Link href="/cookies" className="text-brand-secondary hover:text-brand-bright transition-colors">
              Política de Cookies
            </Link>.
          </p>
        </Section>

        <Section title="8. Derechos de los interesados">
          <p>
            El usuario puede ejercer en cualquier momento los siguientes derechos reconocidos
            en el RGPD y la LOPDGDD:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong className="text-brand-text">Acceso:</strong> conocer qué datos se tratan sobre él.</li>
            <li><strong className="text-brand-text">Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong className="text-brand-text">Supresión:</strong> solicitar la eliminación de sus datos («derecho al olvido»).</li>
            <li><strong className="text-brand-text">Limitación:</strong> restringir el tratamiento en determinados supuestos.</li>
            <li><strong className="text-brand-text">Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
            <li><strong className="text-brand-text">Oposición:</strong> oponerse al tratamiento basado en interés legítimo.</li>
          </ul>
          <p className="mt-3">
            Para ejercer estos derechos, el usuario puede contactar a través de WhatsApp (614 483 342)
            indicando claramente el derecho que desea ejercer y adjuntando una copia de su documento
            de identidad para acreditar su identidad.
          </p>
          <p className="mt-3">
            El usuario tiene derecho a presentar una reclamación ante la{' '}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-bright transition-colors"
            >
              Agencia Española de Protección de Datos (AEPD)
            </a>{' '}
            si considera que el tratamiento de sus datos no es conforme al RGPD.
          </p>
        </Section>

        <Section title="9. Seguridad de los datos">
          <p>
            Juan Rayo Funes aplica las medidas técnicas y organizativas apropiadas para garantizar
            un nivel de seguridad adecuado al riesgo, con el fin de proteger los datos personales
            frente a tratamientos no autorizados o ilícitos, pérdida accidental, destrucción o daño.
          </p>
        </Section>

        <Section title="10. Modificaciones de esta política">
          <p>
            Esta política puede ser actualizada para adaptarla a cambios legislativos o a nuevos
            tratamientos de datos. Se recomienda revisarla periódicamente. La fecha de última
            actualización aparece al inicio de este documento.
          </p>
        </Section>
      </main>

      <PageFooter />
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td className="py-2 pr-4 font-semibold text-brand-text w-40">{label}</td>
      <td className="py-2">{value}</td>
    </tr>
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
          <Link href="/cookies" className="hover:text-brand-secondary transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}


