import ContactSection from "./sections/Contact";
import FooterSection from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ProjectSection from "./sections/Projects";


export default function Home() {
  return (
    <div>
       <Header />
       <Hero />
       <ProjectSection />
       <ContactSection />
       <FooterSection />
    </div>
  );
}
