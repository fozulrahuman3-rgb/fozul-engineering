// Image manifest for Project Group C — Elevated Industrial Concrete Crack
// Assessment. PLACEHOLDER ONLY: no real files exist at these paths yet.
// `exists: false` on every entry until real photography is uploaded per
// IMAGE_UPLOAD_CHECKLIST.md and this flag is flipped to true.
//
// This manifest is not yet wired into any live page/component — it is
// data-layer preparation only, per the "do not invent project names,
// client names, dates, quantities, or outcomes" instruction. No client
// name, project title, date, or outcome is recorded anywhere here.

export const projectSlug = 'structural-crack-assessment'
export const folder = 'src/assets/projects/structural-crack-assessment'

export const images = [
  {
    filename: 'structural-crack-assessment-hero-elevated-structure.jpg',
    exists: false,
    imageType: 'hero',
    category: 'Site Overview',
    projectSlug,
    altText: 'Wide view of an elevated industrial concrete structure under crack assessment',
    caption: 'Elevated structure — assessment overview',
    confidentialityNote: 'Client identity, facility name/signage, and any personnel must not be visible or must be blurred before publishing.',
    isFeatured: true,
  },
  {
    filename: 'structural-crack-assessment-crack-pattern-closeup.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Defect Detail',
    projectSlug,
    altText: 'Close-up of a crack pattern on an elevated structural concrete element',
    caption: 'Crack pattern detail',
    confidentialityNote: 'Confirm no facility asset tags or identifying signage are legible before publishing.',
    isFeatured: false,
  },
  {
    filename: 'structural-crack-assessment-elevated-access-setup.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Inspection Activity',
    projectSlug,
    altText: 'Rope-access or scaffold inspection setup for an elevated structural assessment',
    caption: 'Elevated access inspection setup',
    confidentialityNote: 'Blur the inspector’s face and any visible ID badge or company logo on PPE/hard hat before publishing.',
    isFeatured: false,
  },
  {
    filename: 'structural-crack-assessment-crack-width-gauge-measurement.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Inspection Activity',
    projectSlug,
    altText: 'Crack width gauge measurement being taken on a structural concrete element',
    caption: 'Crack width gauge measurement',
    confidentialityNote: 'Confirm no identifying markings are legible before publishing.',
    isFeatured: false,
  },
  {
    filename: 'structural-crack-assessment-connection-detail-closeup.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Defect Detail',
    projectSlug,
    altText: 'Close-up of a structural connection detail at the crack assessment location',
    caption: 'Structural connection detail',
    confidentialityNote: 'Confirm no facility asset tags are legible before publishing.',
    isFeatured: false,
  },
  {
    filename: 'structural-crack-assessment-ground-level-overview.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Site Overview',
    projectSlug,
    altText: 'Ground-level overview of the elevated structure under assessment',
    caption: 'Elevated structure — ground-level overview',
    confidentialityNote: 'Confirm no facility name signage or vehicle plates are legible before publishing.',
    isFeatured: false,
  },
]
