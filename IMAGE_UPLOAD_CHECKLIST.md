# Real Project Image Upload Checklist

Reference for adding real photography to the three prepared project groups.
Nothing in this checklist is live on the site yet — see
`src/data/projectImagery/` for the full per-image metadata manifests this
table summarizes, and `src/assets/projects/<group>/` for destination
folders (currently empty, `.gitkeep`'d via README).

## Before uploading any photo — privacy & confidentiality review

- [ ] **Blur every visible face.** No inspector, contractor, or bystander
      should be identifiable.
- [ ] **Hide or blur company logos and ID badges** — on PPE, hard hats,
      vests, vehicles, and any handheld equipment.
- [ ] **Check for facility-identifying signage** — nameplates, safety
      boards, building signage, vehicle license plates. Blur or crop out.
- [ ] **Check for legible asset tags / serial numbers** on equipment that
      could identify the specific client or facility.
- [ ] Confirm you have the right to publish the photo (taken by you or with
      documented client permission).

## Group A — Industrial Rotary Kiln / Process Plant Inspection

Destination: `src/assets/projects/industrial-rotary-kiln/`

| Recommended filename | Recommended caption | Recommended alt text | Crop ratio | Blur faces? | Hide logos/badges? |
|---|---|---|---|---|---|
| `industrial-rotary-kiln-hero-exterior-overview.jpg` | Rotary kiln structure — site overview | Wide exterior view of an industrial rotary kiln structure at a process plant | 16:9 (hero banner) | Yes | Yes |
| `industrial-rotary-kiln-shell-inspection-closeup.jpg` | Kiln shell condition inspection | Close-up inspection of the rotary kiln shell surface | 4:3 | Yes | Yes |
| `industrial-rotary-kiln-refractory-lining-detail.jpg` | Refractory lining condition detail | Detail view of refractory lining condition inside the kiln | 4:3 | Yes | Yes |
| `industrial-rotary-kiln-elevated-inspection-access.jpg` | Elevated inspection access | Inspector conducting an elevated inspection at the process plant | 4:3 | Yes | Yes |
| `industrial-rotary-kiln-process-plant-piping-overview.jpg` | Process plant piping and structural overview | Overview of process plant piping and structural steelwork surrounding the kiln | 16:9 | Yes | Yes |
| `industrial-rotary-kiln-ndt-equipment-setup.jpg` | Inspection equipment and instrumentation | Non-destructive testing equipment set up for kiln shell inspection | 4:3 | Yes | Yes |

## Group B — Concrete Spalling and Exposed Reinforcement Assessment

Destination: `src/assets/projects/concrete-deterioration/`

| Recommended filename | Recommended caption | Recommended alt text | Crop ratio | Blur faces? | Hide logos/badges? |
|---|---|---|---|---|---|
| `concrete-deterioration-hero-structure-overview.jpg` | Affected concrete structure — overview | Wide view of a concrete structure showing visible spalling and deterioration | 16:9 (hero banner) | Yes | Yes |
| `concrete-deterioration-spalling-exposed-rebar-closeup.jpg` | Concrete spalling with exposed reinforcement | Close-up of concrete spalling with exposed reinforcement bars | 4:3 | Yes | Yes |
| `concrete-deterioration-reinforcement-corrosion-closeup.jpg` | Reinforcement corrosion detail | Close-up of corroded reinforcement bars exposed by concrete spalling | 4:3 | Yes | Yes |
| `concrete-deterioration-rebound-hammer-testing.jpg` | Rebound hammer / UPV condition testing | Inspector performing rebound hammer testing on a concrete surface | 4:3 | Yes | Yes |
| `concrete-deterioration-crack-mapping-marking.jpg` | Crack mapping and marking | Crack pattern mapped and marked on a concrete surface during assessment | 4:3 | Yes | Yes |
| `concrete-deterioration-repair-area-prepared.jpg` | Repair area after substrate preparation | Concrete repair area after substrate preparation, prior to material placement | 4:3 | Yes | Yes |

## Group C — Elevated Industrial Concrete Crack Assessment

Destination: `src/assets/projects/structural-crack-assessment/`

| Recommended filename | Recommended caption | Recommended alt text | Crop ratio | Blur faces? | Hide logos/badges? |
|---|---|---|---|---|---|
| `structural-crack-assessment-hero-elevated-structure.jpg` | Elevated structure — assessment overview | Wide view of an elevated industrial concrete structure under crack assessment | 16:9 (hero banner) | Yes | Yes |
| `structural-crack-assessment-crack-pattern-closeup.jpg` | Crack pattern detail | Close-up of a crack pattern on an elevated structural concrete element | 4:3 | Yes | Yes |
| `structural-crack-assessment-elevated-access-setup.jpg` | Elevated access inspection setup | Rope-access or scaffold inspection setup for an elevated structural assessment | 4:3 | Yes | Yes |
| `structural-crack-assessment-crack-width-gauge-measurement.jpg` | Crack width gauge measurement | Crack width gauge measurement being taken on a structural concrete element | 4:3 | Yes | Yes |
| `structural-crack-assessment-connection-detail-closeup.jpg` | Structural connection detail | Close-up of a structural connection detail at the crack assessment location | 4:3 | Yes | Yes |
| `structural-crack-assessment-ground-level-overview.jpg` | Elevated structure — ground-level overview | Ground-level overview of the elevated structure under assessment | 16:9 | Yes | Yes |

## After uploading real files

1. Place the file in the destination folder using the recommended filename
   (or update the `filename` field in the matching entry in
   `src/data/projectImagery/<group>.js` if you use a different name).
2. Flip that entry's `exists: false` to `exists: true`.
3. Let the assistant know which group is ready — wiring the manifest into
   the live gallery/hero components is a separate, explicitly-approved step
   (not automatic), consistent with "no real images without approval."
