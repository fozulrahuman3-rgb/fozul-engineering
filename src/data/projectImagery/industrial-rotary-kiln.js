// Image manifest for Project Group A — Industrial Rotary Kiln / Process
// Plant Inspection. PLACEHOLDER ONLY: no real files exist at these paths
// yet. `exists: false` on every entry until real photography is uploaded
// per IMAGE_UPLOAD_CHECKLIST.md and this flag is flipped to true.
//
// This manifest is not yet wired into any live page/component — it is
// data-layer preparation only, per the "do not invent project names,
// client names, dates, quantities, or outcomes" instruction. No client
// name, project title, date, or outcome is recorded anywhere here.

export const projectSlug = 'industrial-rotary-kiln'
export const folder = 'src/assets/projects/industrial-rotary-kiln'

export const images = [
  {
    filename: 'industrial-rotary-kiln-hero-exterior-overview.jpg',
    exists: false,
    imageType: 'hero',
    category: 'Site Overview',
    projectSlug,
    altText: 'Wide exterior view of an industrial rotary kiln structure at a process plant',
    caption: 'Rotary kiln structure — site overview',
    confidentialityNote: 'Client identity, facility name/signage, and any personnel must not be visible or must be blurred before publishing.',
    isFeatured: true,
  },
  {
    filename: 'industrial-rotary-kiln-shell-inspection-closeup.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Inspection Activity',
    projectSlug,
    altText: 'Close-up inspection of the rotary kiln shell surface',
    caption: 'Kiln shell condition inspection',
    confidentialityNote: 'Blur any visible faces, ID badges, or company-branded PPE before publishing.',
    isFeatured: false,
  },
  {
    filename: 'industrial-rotary-kiln-refractory-lining-detail.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Defect Detail',
    projectSlug,
    altText: 'Detail view of refractory lining condition inside the kiln',
    caption: 'Refractory lining condition detail',
    confidentialityNote: 'Confirm no facility asset tags or nameplates are legible before publishing.',
    isFeatured: false,
  },
  {
    filename: 'industrial-rotary-kiln-elevated-inspection-access.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Inspection Activity',
    projectSlug,
    altText: 'Inspector conducting an elevated inspection at the process plant',
    caption: 'Elevated inspection access',
    confidentialityNote: 'Blur the inspector’s face and any visible ID badge or company logo on PPE/hard hat before publishing.',
    isFeatured: false,
  },
  {
    filename: 'industrial-rotary-kiln-process-plant-piping-overview.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Site Overview',
    projectSlug,
    altText: 'Overview of process plant piping and structural steelwork surrounding the kiln',
    caption: 'Process plant piping and structural overview',
    confidentialityNote: 'Confirm no facility name signage or vehicle plates are legible before publishing.',
    isFeatured: false,
  },
  {
    filename: 'industrial-rotary-kiln-ndt-equipment-setup.jpg',
    exists: false,
    imageType: 'gallery',
    category: 'Equipment',
    projectSlug,
    altText: 'Non-destructive testing equipment set up for kiln shell inspection',
    caption: 'Inspection equipment and instrumentation',
    confidentialityNote: 'Confirm no proprietary equipment serial numbers or client asset tags are legible before publishing.',
    isFeatured: false,
  },
]
