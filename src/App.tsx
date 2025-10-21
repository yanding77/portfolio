import Hero from './sections/Hero.tsx'
import ShowcaseSection from "./sections/ShowcaseSection.tsx";
import Navbar from "./components/NavBar.tsx";
import Strengths from "./sections/Strengths.tsx";
import ExperienceSection from "./sections/ExperienceSection.tsx";
import TechStack from "./sections/TechStack.tsx";
import ContactSection from "./sections/ContactSection.tsx";
import Footer from "./sections/Footer.tsx";

const App = () => {
    return (
      <>
          <Navbar/>
          <Hero/>
          <ShowcaseSection/>
          <Strengths />
          <ExperienceSection/>
          <TechStack/>
          <ContactSection/>
          <Footer/>

      </>
    )
}

export default App