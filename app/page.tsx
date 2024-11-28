import ContactSection from "./sections/Contact";
import FooterSection from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import MainProjects from "./sections/MainProject";
import ProjectSection from "./sections/Projects";
import SideProjects from "./sections/SideProject";
import SkillSection from "./sections/Skills";


export default function Home() {
  return (
    <div>
       <Header />
       <Hero />
       <SkillSection />
       <MainProjects />
       <SideProjects />
       <ContactSection />
       <FooterSection />
    </div>
  );
}
