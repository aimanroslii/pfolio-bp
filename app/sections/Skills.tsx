import { Card } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";

const skillsList = [
  {
    id: "1",
    title: "Front-end Dev",
    skills: [
      { title: "React" },
      { title: "Next.js" },
      { title: "TypeScript" },
      { title: "JavaScript" },
      { title: "Tailwind CSS" },
    ],
  },
  {
    id: "2",
    title: "Back-end Dev",
    skills: [
      { title: "Java Springboot" },
      { title: "Java Micronaut" },
      { title: "C# .NET" },
      { title: "TS Next.js" },
    ],
  },
  {
    id: "3",
    title: "Cloud Services",
    skills: [
      { title: "Microsoft Azure" },
      { title: "AWS" },
      { title: "SAP" },
    ],
  },
];

export default function SkillSection() {
  return (
    <section className="w-full flex items-center justify-center" id="skills">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-4">
          Skills
        </h2>
        {/* <p className="mt-4 text-center text-white/60 md:text-lg lg:text-xl">
          I have extensive expertise in various programming languages,
          frameworks, and cloud platforms, which enables me to build and
          optimize scalable solutions.
        </p> */}
        <div className="flex flex-col mt-10 md:mt-20 gap-10 md:flex-col mb-10">
          {skillsList.map((skill) => (
            <Card
              key={skill.id}
              className="bg-gray-200/60 backdrop-blur-md rounded-3xl border border-gray-300 shadow-md hover:shadow-lg transition-all"
            >
              <div className="items-start py-5 px-10">
                <h3 className="mt-5 font-semibold text-2xl md:text-4xl text-gray-900 font-serif">
                  {skill.title}
                </h3>
                <hr className="border-t border-gray-300 mt-4 md:mt-5" />
                <ul
                  key={skill.id}
                  className="flex flex-col mt-4 gap-4 md:mt-5 mb-4 md:mb-5"
                >
                  {skill.skills.map((result) => (
                    <li className="flex gap-2 text-sm md:text-base text-gray-700">
                      <CircleCheckBig className="text-[20px] md:text-[24px] lg:text-[28px] size-4 md:size-5" />
                      <p> {result.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
