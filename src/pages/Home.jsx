import Hero from '../components/Hero'
import CompanyIntro from '../components/CompanyIntro'
import ServicesPreview from '../components/ServicesPreview'
import IndustriesPreview from '../components/IndustriesPreview'
import WhyFaheem from '../components/WhyFaheem'
import ProjectsPreview from '../components/ProjectsPreview'
import LeadershipPreview from '../components/LeadershipPreview'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

import { services } from '../data/services'
import { featuredProjects } from '../data/projects'
import { leadership } from '../data/leadership'

export default function Home({
  SectionHeading,
  PremiumIcon,
  feLogo,
  profilePhoto,
  companyIntroCards = [],
  industriesServed = [],
  whyChooseFaheem = [],
  socialLinks = [],
}) {
  return (
    <>
      <Hero feLogo={feLogo} profilePhoto={profilePhoto} />
      <CompanyIntro SectionHeading={SectionHeading} items={companyIntroCards} />
      <ServicesPreview SectionHeading={SectionHeading} PremiumIcon={PremiumIcon} services={services} />
      <IndustriesPreview SectionHeading={SectionHeading} PremiumIcon={PremiumIcon} industries={industriesServed} />
      <WhyFaheem SectionHeading={SectionHeading} items={whyChooseFaheem} />
      <ProjectsPreview SectionHeading={SectionHeading} PremiumIcon={PremiumIcon} projects={featuredProjects} />
      <LeadershipPreview SectionHeading={SectionHeading} profilePhoto={profilePhoto} leadership={leadership} />
      <CTA SectionHeading={SectionHeading} />
      <Footer socialLinks={socialLinks} />
    </>
  )
}
