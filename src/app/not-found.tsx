import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-center px-4">
      <p className="text-brand-secondary text-5xl font-extrabold mb-4">404</p>
      <h1 className="text-2xl font-bold text-brand-text mb-2">Página no encontrada</h1>
      <p className="text-brand-muted mb-8">Esta página no existe o ha sido eliminada.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-bright text-brand-dark font-semibold px-6 py-3 rounded-full transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
