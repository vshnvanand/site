import HeroElement from "./HeroElement";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div >
        <HeroElement />
        <AboutMe />
        {/* Experience */}
        {/* Projects */}
        <Skills />
        <Contact />
    </div>
  )
}

export default LandingPage