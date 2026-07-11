// Image manifest for Project Group B — Concrete Spalling and Exposed
// Reinforcement Assessment. PLACEHOLDER ONLY: no real files exist at these
// paths yet. `exists: false` on every entry until real photography is
// uploaded per IMAGE_UPLOAD_CHECKLIST.md and this flag is flipped to true.
//
// This manifest is not yet wired into any live page/component — it is
// data-layer preparation only, per the "do not invent project names,
// client names, dates, quantities, or outcomes" instruction. No client
// name, project title, date, or outcome is recorded anywhere here.

export const projectSlug = 'concrete-deterioration'
export const folder = 'src/assets/projects/concrete-deterioration'

export const images = [
  {
    filename: 'concrete-deterioration-hero-structure-overview.jpg',
    exists: false,
    imageType: 'hero',
    category: 'Site Overview',
    projectSlug,
    altText: 'Wide view of a concrete structure showing visible spalling and deterioration',
    caption: 'Affected concrete structure — overview',
    confidentialityNote: 'Client identity, facility name/signage, and any personnel must not be visible or must be blurred before publishing.',
    isFeatured: true,
  },
  {
    filename: 'concrete-deterioration-spalling-exposed-rebar-closeup.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Defect Detail',
    projectSlug,
    altText: 'Close-up of concrete spalling with exposed reinforcement bars',
    caption: 'Concrete spalling with exposed reinforcement',
    confidentialityNote: 'Confirm no facility asset tags or identifying signage are legible before publishing.',
    isFeatured: false,
  },
  {
    filename: 'concrete-deterioration-reinforcement-corrosion-closeup.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Defect Detail',
    projectSlug,
    altText: 'Close-up of corroded reinforcement bars exposed by concrete spalling',
    caption: 'Reinforcement corrosion detail',
    confidentialityNote: 'Confirm no identifying markings are legible before publishing.',
    isFeatured: false,
  },
  {
    filename: 'concrete-deterioration-rebound-hammer-testing.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Inspection Activity',
    projectSlug,
    altText: 'Inspector performing rebound hammer testing on a concrete surface',
    caption: 'Rebound hammer / UPV condition testing',
    confidentialityNote: 'Blur the inspector’s face and any visible ID badge or company logo on PPE before publishing.',
    isFeatured: false,
  },
  {
    filename: 'concrete-deterioration-crack-mapping-marking.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Inspection Activity',
    projectSlug,
    altText: 'Crack pattern mapped and marked on a concrete surface during assessment',
    caption: 'Crack mapping and marking',
    confidentialityNote: 'Confirm no identifying signage is legible before publishing.',
    isFeatured: false,
  },
  {
    filename: 'concrete-deterioration-repair-area-prepared.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Progress',
    projectSlug,
    altText: 'Concrete repair area after substrate preparation, prior to material placement',
    caption: 'Repair area after substrate preparation',
    confidentialityNote: 'Blur any visible faces, ID badges, or company-branded PPE before publishing.',
    isFeatured: false,
  },
]
