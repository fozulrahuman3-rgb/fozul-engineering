import { useEffect } from 'react'

function upsertMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Sets a unique document title + meta description + Open Graph tags for a
// single page. Used only by the new Project Gallery pages (Projects.jsx,
// ProjectCaseStudy.jsx) — every other page keeps today's shared index.html
// meta tags unchanged.
export function useDocumentMeta({ title, description, url }) {
  useEffect(() => {
    if (title) {
      document.title = title
      upsertMeta('property', 'og:title', title)
    }
    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
    }
    if (url) {
      upsertMeta('property', 'og:url', url)
    }
  }, [title, description, url])
}
