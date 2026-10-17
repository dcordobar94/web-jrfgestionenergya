import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Paleta basada en la tarjeta corporativa: verde petróleo + dorado energético
          primary:   '#12403B',  // Verde teal intermedio — fondo de iconos, acentos primarios
          secondary: '#E5BC58',  // Dorado principal — CTAs, acentos, texto destacado
          bright:    '#F5D77F',  // Dorado brillante — brillos, bordes activos, hovers
          dark:      '#071716',  // Verde muy oscuro — header, footer, fondos profundos
          surface:   '#0E2927',  // Verde petróleo — tarjetas, paneles, secciones alternadas
          bg:        '#071716',  // Fondo general de página
          text:      '#E5BC58',  // Texto principal (dorado)
          muted:     '#C5A059',  // Texto secundario / datos de contacto
          border:    '#1B4D47',  // Bordes sutiles verdosos
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}

export default config
