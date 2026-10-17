import { describe, it, expect } from 'vitest'
import { metadata } from '@/app/layout'
import sitemap from '@/app/sitemap'
import robots from '@/app/robots'
import { SITE_URL, COMPANY_NAME } from '@/lib/constants'

describe('SEO metadata', () => {
  it('title contains company name', () => {
    expect(String(metadata.title)).toContain(COMPANY_NAME)
  })

  it('description is non-empty', () => {
    expect(typeof metadata.description).toBe('string')
    expect((metadata.description as string).length).toBeGreaterThan(0)
  })

  it('openGraph url matches SITE_URL', () => {
    const og = metadata.openGraph as { url?: string }
    expect(og?.url).toBe(SITE_URL)
  })

  it('canonical alternates point to root', () => {
    const canonical = (metadata.alternates as { canonical?: string })?.canonical
    expect(canonical).toBe('/')
  })
})

describe('sitemap', () => {
  it('returns an entry for the canonical URL', () => {
    const entries = sitemap()
    expect(entries.length).toBeGreaterThan(0)
    expect(entries[0].url).toBe(SITE_URL)
  })
})

describe('robots.txt', () => {
  it('allows all crawlers', () => {
    const result = robots()
    const rules = Array.isArray(result.rules) ? result.rules[0] : result.rules
    expect(rules.allow).toBe('/')
  })

  it('references the sitemap', () => {
    const result = robots()
    expect(result.sitemap).toContain('sitemap.xml')
  })
})
