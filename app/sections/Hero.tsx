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
      className={`py-32 md:py-48 lg:py-60 transition-transform duration-50 ease-out ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-20 opacity-0"
      }`}
    >
      <div className="container">
        <div className=" mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Muhammad Aiman Rosli
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg lg:text-xl">
            I&apos;m a software engineer with 4 years of experience specializing
            in full-stack web development. On the front end, I work extensively
            with React, while on the back end, I leverage technologies like
            Java, C#, and TypeScript, using frameworks such as Micronaut, Spring
            Boot, Node.js, and Next.js. I&apos;m passionate about building
            scalable and efficient applications, and I continually refine my
            skills through hands-on projects and learning. Outside of coding, I
            prioritize my physical and mental well-being through weightlifting
            and watching anime—activities that help me stay fit, focused, and
            balanced.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link href="#projects">
            <Button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 hover:text-white transition duration-300">
              <span className="font-semibold">Explore My Work</span>
              <MoveDown className="size-4" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/aiman-r-455523329/" target="_blank" rel="noopener noreferrer">
            <Button className="inline-flex items-center gap-2 rounded-xl border border-white bg-white text-gray-900 px-6 hover:bg-white/70 hover:text-gray-900">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
