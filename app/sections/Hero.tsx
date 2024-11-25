"use client"
import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {

  const [isVisible, setIsVisible] = useState(false);

  // This will trigger the visibility after the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className={`py-32 md:py-48 lg:py-60 transition-transform duration-1000 ease-out ${
      isVisible ? "transform translate-y-0 opacity-100" : "transform translate-y-20 opacity-0"
    }`} >
      <div className="container">
        <div className=" mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Muhammad Aiman Rosli
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            4 years of experience as web developer
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <MoveDown className="size-4" />
          </Button>
          <Button className="inline-flex items-center gap-2 rounded-xl border border-white bg-white text-gray-900 px-6">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
