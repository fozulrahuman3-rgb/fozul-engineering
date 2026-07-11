// Aggregated image manifests for the three real-photography project groups
// prepared ahead of real image upload. Not yet imported by any live
// page/component. See IMAGE_UPLOAD_CHECKLIST.md before adding real files.

import * as industrialRotaryKiln from './industrial-rotary-kiln'
import * as concreteDeterioration from './concrete-deterioration'
import * as structuralCrackAssessment from './structural-crack-assessment'

export const projectImageGroups = [
  industrialRotaryKiln,
  concreteDeterioration,
  structuralCrackAssessment,
]

export function getImageryBySlug(projectSlug) {
  return projectImageGroups.find((group) => group.projectSlug === projectSlug)
}
