import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import { COMPANY_NAME, WHATSAPP_URL } from '@/lib/constants'

// Mock next/font/google used indirectly via layout
vi.mock('next/navigation', () => ({ useRouter: () => ({}) }))

describe('Navbar', () => {
  it('renders the company logo text', () => {
    render(<Navbar />)
    // At least one element with the short name or full name
    expect(screen.getByLabelText(`${COMPANY_NAME} — Inicio`)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Servicios')).toBeInTheDocument()
    expect(screen.getByText('Cómo Trabajamos')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('renders a WhatsApp CTA button pointing to wa.me', () => {
    render(<Navbar />)
    const whatsappLinks = screen.getAllByRole('link', { name: /WhatsApp/i })
    expect(whatsappLinks.length).toBeGreaterThan(0)
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', WHATSAPP_URL)
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
