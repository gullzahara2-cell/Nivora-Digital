import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import ServicesPreview from '../components/ServicesPreview'

export default function Services() {
  return (
    <>
      <SEO title="Our Services | Nivora Digital" description="Explore Nivora Digital services: e-commerce solutions, import and export services, sourcing and web development." />
      <PageHeader title="Our Services" text="What we do" />
      <ServicesPreview />
    </>
  )
}