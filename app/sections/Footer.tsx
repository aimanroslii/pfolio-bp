import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/aimanroslii",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/aiman-r-455523329/",
  },
];

export default function FooterSection() {
  return (
    <footer className="relative overflow-x-clip">
      <div className="container">
        <div className="border-t border-black/15 py-6 text-sm flex flex-row md:flex-row md:justify-between items-center gap-4 md:gap-8">
          <div className="text-black/40 text-xs sm:text-sm md:text-base">&copy; 2025. All rights reserved</div>
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
            {footerLinks.map((links) => (
              <Link
                href={links.href}
                key={links.title}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-black/70 hover:underline cursor-pointer"
              >
                <Button className="bg-gray-900 text-white px-5 py-2 rounded-xl font-semibold 
                             inline-flex items-center gap-2 hover:bg-gray-800 hover:scale-[1.02]
                             transition-all duration-300">
                  <span className="font-semibold">{links.title}</span>
                  <MoveUpRight className="size-4" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
