import firstLandingPage from "@/assets/images/first_landingPage.png";
import secondLandingPage from "@/assets/images/second_landingPage.png";
import thirdLandingPage from "@/assets/images/third_landingPage.jpg";
import { Button } from "@/components/ui/button";
import { CircleCheckBig, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user expoerience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.youtube.com/watch?v=B2Aics11qUU",
    image: firstLandingPage,
  },
  {
    company: "Innovative Corp",
    year: "2022",
    title: "Furlish Landing Page",
    results: [
      { title: "Enhanced user expoerience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.youtube.com/watch?v=B2Aics11qUU",
    image: secondLandingPage,
  },
  {
    company: "Heist Corp",
    year: "2022",
    title: "Cute Landing Page",
    results: [
      { title: "Enhanced user expoerience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.youtube.com/watch?v=B2Aics11qUU",
    image: thirdLandingPage,
  },
];

export default function ProjectSection() {
  return (
    <section className="pb-16 lg:py-24 mt-10">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase text-center font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0  overflow-hidden after:z-10 
              after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline 
              after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 
              md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className=" gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <p>{project.company}</p>
                    <p>&bull;</p>
                    <p>{project.year}</p>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul
                    key={project.title}
                    className="flex flex-col gap-4 mt-4 md:mt-5"
                  >
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CircleCheckBig className="size-5 md:size-6" />
                        <p>{result.title}</p>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link}>
                    <Button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto
                  px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <MoveUpRight className="size-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 rounded-md md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
