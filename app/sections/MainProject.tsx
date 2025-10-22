import intlIcon from "@/assets/images/intel_icon.png";
import motorlaIcon from "@/assets/images/motorola_icon.png";
import eyIcon from "@/assets/images/ey.png";
import Image from "next/image";

// const workingProjects = [
//   {
//     id: "1",
//     company: "Motorola Solutions",
//     year: "2023-2024",
//     title: "TLK 25 Gateway and Application Project",
//     results:
//       "As a lead developer for the TLK 25 Gateway and Application Development project, I spearheaded the development of a back-end application using the Java Micronaut framework. This included designing and implementing both Function Apps and App Service Apps for deployment on Azure, streamlining the deployment pipeline and reducing deployment times by 30%. I also led the optimization of Java code, improving performance by 25% and ensuring the application’s scalability to handle increasing traffic. By incorporating unit testing and automating deployment scripts, I improved code reliability and accelerated delivery cycles. My efforts on multiple key projects resulted in a 40% increase in code efficiency, significantly reducing resource consumption and operational costs in production environments, while enhancing overall system performance and reliability.",
//     image: motorlaIcon,
//   },
//   {
//     id: "2",
//     company: "Intel Corporation",
//     year: "2022-2023",
//     title: "GPU Validation Application Project",
//     results:
//       "As a full-stack developer for the GPU Validation Application, I was responsible for both front-end development using React and back-end development in .NET C#, as well as developing new services using Java Spring Boot to enhance scalability. This web-based application was designed to streamline the tracking and monitoring of GPU system validation results. I optimized performance by improving back-end APIs, reducing response times by 50%, and implemented real-time data monitoring, which increased system accuracy and reduced error rates by 30%. Additionally, I automated validation status updates, contributing to a 40% reduction in manual tracking, and developed real-time dashboards to improve team visibility. By collaborating with cross-functional teams and integrating real-time data feeds, I helped accelerate the validation process by 25% and increased team productivity by 30%, while the new Java Spring Boot services enhanced system scalability and supported growing demands.",
//     image: intlIcon,
//   },
//   {
//     id: "3",
//     company: "Intel Corporation",
//     year: "2020-2022",
//     title: "Dynamic Tuning Thermal Application Project",
//     results:
//       "As a full-stack developer for the Dynamic Tuning Thermal Application, I utilized React for the front-end and ASP.NET Core with C# for the back-end to design and implement a web-based solution that enabled the Thermal team to dynamically adjust test configurations for thermal systems. I automated the configuration modification process, reducing the time required for changes by 60%, and developed a robust, scalable back-end architecture that ensured reliable system performance during peak usage. Additionally, I implemented comprehensive data validation mechanisms that reduced misconfigurations by 15%, ensuring greater accuracy in thermal testing. My work optimized testing for over 200 systems, streamlining the overall testing process and enabling more configurations to be tested in less time, significantly improving the efficiency of the Thermal team's workflow.",
//     image: intlIcon,
//   },
// ];

const workingProjects = [
  {
    id: "3",
    company: "Ernst & Young",
    year: "Jun 2025 - Present",
    title: "Senior Software Developer",
    results:
      "As a full-stack developer for the Dynamic Tuning Thermal Application, I utilized React for the front-end and ASP.NET Core with C# for the back-end to design and implement a web-based solution that enabled the Thermal team to dynamically adjust test configurations for thermal systems. I automated the configuration modification process, reducing the time required for changes by 60%, and developed a robust, scalable back-end architecture that ensured reliable system performance during peak usage. Additionally, I implemented comprehensive data validation mechanisms that reduced misconfigurations by 15%, ensuring greater accuracy in thermal testing. My work optimized testing for over 200 systems, streamlining the overall testing process and enabling more configurations to be tested in less time, significantly improving the efficiency of the Thermal team's workflow.",
    image: eyIcon,
  },
  {
    id: "1",
    company: "Motorola Solutions",
    year: "Sept 2023 - Jun 2025",
    title: "Software Engineer",
    results:
      "As a lead developer for the TLK 25 Gateway and Application Development project, I spearheaded the development of a back-end application using the Java Micronaut framework. This included designing and implementing both Function Apps and App Service Apps for deployment on Azure, streamlining the deployment pipeline and reducing deployment times by 30%. I also led the optimization of Java code, improving performance by 25% and ensuring the application’s scalability to handle increasing traffic. By incorporating unit testing and automating deployment scripts, I improved code reliability and accelerated delivery cycles. My efforts on multiple key projects resulted in a 40% increase in code efficiency, significantly reducing resource consumption and operational costs in production environments, while enhancing overall system performance and reliability.",
    image: motorlaIcon,
  },
  {
    id: "2",
    company: "Intel Corporation",
    year: "Sept 2020 - Sept 2023",
    title: "Software Engineer",
    results:
      "As a full-stack developer for the GPU Validation Application, I was responsible for both front-end development using React and back-end development in .NET C#, as well as developing new services using Java Spring Boot to enhance scalability. This web-based application was designed to streamline the tracking and monitoring of GPU system validation results. I optimized performance by improving back-end APIs, reducing response times by 50%, and implemented real-time data monitoring, which increased system accuracy and reduced error rates by 30%. Additionally, I automated validation status updates, contributing to a 40% reduction in manual tracking, and developed real-time dashboards to improve team visibility. By collaborating with cross-functional teams and integrating real-time data feeds, I helped accelerate the validation process by 25% and increased team productivity by 30%, while the new Java Spring Boot services enhanced system scalability and supported growing demands.",
    image: intlIcon,
  },
];

export default function MainProjects() {
  return (
    <section className="pb-16 lg:py-24 mt-10" id="projects">
      <div className="container">
        <div className="flex justify-center">
          {/* <p className="uppercase text-center font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Real-World Results
          </p> */}
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Work Experience
        </h2>
        {/* <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto"> */}
        {/* <p className="mt-4 text-center text-white/60 md:text-lg lg:text-xl" >
          My work experience has involved a range of projects that have helped
          me develop valuable skills and knowledge. I have contributed to
          initiatives that enhanced operational efficiency, fostered innovation,
          and supported team collaboration. These projects have strengthened my
          ability to adapt to challenges, drive results, and make meaningful
          contributions to organizational goals.
        </p> */}
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {workingProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100/70 backdrop-blur-md rounded-3xl relative z-0 overflow-hidden 
              border border-gray-300 shadow-md hover:shadow-xl transition-all px-8 pt-8 
              md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex flex-col gap-1 font-bold uppercase tracking-widest text-sm text-gray-700">
                    <p className="text-sm md:text-base">{project.company}</p>
                    <p className="text-xs md:text-sm text-gray-600">{project.year}</p>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t border-gray-300 mt-4 md:mt-5" />
                  {/* <p className="flex gap-2 text-sm md:text-base text-gray-700 mt-5 leading-relaxed">{project.results}</p> */}
                  {/* <ul
                    key={project.title}
                    className="flex flex-col gap-4 mt-4 md:mt-5"
                  >
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CircleCheckBig className="size-5 md:size-6" />
                        <p>{result.title}</p>
                      </li>
                    ))}
                  </ul> */}
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 rounded-md md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 rounded-md md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
