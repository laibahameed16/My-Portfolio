import './App.css'
import AboutMe from './Components/AboutMe'
import CursorFollower from './Components/CursorFollower'
import Hero from './Components/Hero'
import LogoStrip from './Components/LogoStrip'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Experience from './Components/Experience'
import TestimonialCarousel from './Components/TestimonialCarousel'
import ContactForm from './Components/Contact'
import ScrollAnimationWrapper from './Components/ScrollAnimationWrapper'

function App() {
  return (
    <div className="relative overflow-hidden pt-19"> {/* pt-24 for fixed navbar */}
      <CursorFollower/>
      <Navbar/>

      <section id="home">
        <ScrollAnimationWrapper>
          <Hero/>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={0.2}>
          <LogoStrip/>
        </ScrollAnimationWrapper>
      </section>

      <section id="about">
        <ScrollAnimationWrapper>
          <AboutMe/>
        </ScrollAnimationWrapper>
      </section>

      <section id="projects">
        <ScrollAnimationWrapper>
          <Projects/>
        </ScrollAnimationWrapper>
      </section>

      <section id="services">
        <ScrollAnimationWrapper>
          <Services/>
        </ScrollAnimationWrapper>
      </section>

      <section id="experience">
        <ScrollAnimationWrapper>
          <Experience/>
        </ScrollAnimationWrapper>
      </section>

      <section id="testimonials">
        <ScrollAnimationWrapper>
          <TestimonialCarousel/>
        </ScrollAnimationWrapper>
      </section>

      <section id="contact">
        <ScrollAnimationWrapper>
          <ContactForm/>
        </ScrollAnimationWrapper>
      </section>
    </div>
  )
}

export default App
