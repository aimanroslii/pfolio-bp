import ContactSection from "./sections/Contact";
import FooterSection from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import MainProjects from "./sections/MainProject";
import ProjectSection from "./sections/Projects";
import SideProjects from "./sections/SideProject";
import SkillSection from "./sections/Skills";
import VideoIntro from "./sections/VideoIntro";


export default function Home() {
  return (
    <div>
       <Header />
       <Hero />
       <VideoIntro/>
       <SkillSection />
       <MainProjects />
       <SideProjects />
       {/* <ContactSection /> */}
       <FooterSection />
    </div>
  );
}
