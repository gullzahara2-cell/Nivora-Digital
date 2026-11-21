// import WhyChooseUs from '../components/WhyChooseUs'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import AboutSection from '../components/AboutSection'
import ServicesPreview from '../components/ServicesPreview'
import Registration from '../components/Registration'
import SEO from '../components/SEO'
import WhyChooseUs from '../components/whychooseUs'

export default function Home() {
  return (
    <>
      <SEO
        title="Nivora Digital | Digital Solutions for Business Growth"
        description="Nivora Digital is a modern business solutions agency helping brands grow."
      />
      <Hero />
      <Introduction />
      <AboutSection />
      <ServicesPreview />
      <Registration />
      <WhyChooseUs />
    </>
  )
}