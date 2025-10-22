"use client";
import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  // This will trigger the visibility after the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`py-32 md:py-48 lg:py-60 transition-transform duration-50 ease-out`}
    >
      <div className="container">
        <div className=" mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Muhammad Aiman Rosli
          </h1>
          <p className="mt-4 text-center text-black/60 md:text-lg lg:text-xl">
            I&apos;m a software engineer with over 5 years of experience specializing
            in back-end development. On the front end, I work extensively
            with React and TypeScript, while on the back end, I leverage technologies like
            Java and C#, using frameworks such as Spring Boot, Spring, Micronaut and .NET. 
            I&apos;m passionate about building
            scalable and efficient applications, and I continually refine my
            skills through hands-on projects and learning. Outside of coding, I
            prioritize my physical and mental well-being through weightlifting
            and watching anime—activities that help me stay fit, focused, and
            balanced.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link href="#projects">
            <Button className="bg-gray-900 text-white h-12 md:h-14 w-full md:w-auto px-8 rounded-xl 
                 font-semibold inline-flex items-center justify-center gap-2 
                 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 shadow-md">
              <span className="font-semibold">Explore My Work</span>
              <MoveDown className="size-4" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/aiman-r-455523329/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gray-100/70 text-gray-900 border border-gray-300 h-12 md:h-14 w-full md:w-auto 
                 px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2
                 hover:bg-gray-200 hover:border-gray-400 hover:scale-[1.02]
                 transition-all duration-300 shadow-sm">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
