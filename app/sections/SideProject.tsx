import smDashboard from "@/assets/images/soleMaster_dashboard.png";
import smStorefront from "@/assets/images/soleMaster_storefront.png";

import { Button } from "@/components/ui/button";
import { CircleCheckBig, Github, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "Sole Master CMS Dashboard",
    results:
      "This project showcases the development of a dynamic, responsive e-commerce dashboard using Next.js. The dashboard provides real-time analytics and insights for managing an online store, enabling users to monitor key metrics like sales performance, inventory status, and customer behavior. Built with a focus on user experience and performance optimization, the dashboard allows store administrators to manage and analyze data through interactive charts, tables, and detailed reports.",
    link: "https://sm-commerce-eight.vercel.app/dashboard",
    githubLink: "https://github.com/aimanroslii/sm-commerce",
    image: smDashboard,
  },
  {
    title: "Sole Master Storefront",
    results:
      "This project involves the creation of a dynamic, fully functional e-commerce website using Next.js. The site offers a seamless shopping experience with features such as product browsing, user authentication, cart management, and secure checkout. Leveraging Next.js’ server-side rendering (SSR) for fast loading times and SEO optimization, the site provides an intuitive interface for users while delivering high performance and responsiveness across devices. Integrated with a back-end for handling product data, orders, and payments, the website is designed to be both scalable and easily customizable, making it ideal for growing online stores.",
    link: "https://sm-commerce-eight.vercel.app",
    githubLink: "https://github.com/aimanroslii/sm-commerce",
    image: smStorefront,
  },
];

export default function SideProjects() {
  return (
    <section className="pb-16 lg:py-24 mt-10">
      <div className="container">
        {/* <div className="flex justify-center">
          <p className="uppercase text-center font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Real-World Results
          </p>
        </div> */}
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Side Projects
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
                  <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <p className="flex gap-2 text-sm md:text-base text-white/50 mt-5">
                    {project.results}
                  </p>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto
                    px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8
                    hover:bg-white/70 hover:text-gray-900"
                    >
                      <span>Visit Live Site</span>
                      <MoveUpRight className="size-4" />
                    </Button>
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="border border-white/15 hover:bg-white/10 hover:text-white transition duration-300 h-12 md:h-14 w-full md:w-auto
                    px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8
                     md:ml-4 lg:ml-8"
                    >
                      <span>Github Link</span>
                      <Github className="size-4" />
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
