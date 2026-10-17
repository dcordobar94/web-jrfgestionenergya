import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_URL, COMPANY_NAME } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${COMPANY_NAME} | Asesoría Energética y Energía Solar`,
  description:
    'Ahorra en tu factura energética con JRF Gestión Energyca. Asesoría energética personalizada y proyectos de energía solar para hogares y empresas en España.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY_NAME} | Asesoría Energética y Energía Solar`,
    description:
      'Ahorra en tu factura energética con JRF Gestión Energyca. Asesoría energética personalizada y proyectos de energía solar.',
    url: SITE_URL,
    type: 'website',
    locale: 'es_ES',
    siteName: COMPANY_NAME,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_NAME,
  url: SITE_URL,
  description:
    'Asesoría energética y energía solar para hogares y empresas en España.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ES',
  },
  sameAs: [SITE_URL],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
