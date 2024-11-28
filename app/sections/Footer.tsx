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
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved</div>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((links) => (
              <Link
                href={links.href}
                key={links.title}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-white/70 hover:underline cursor-pointer"
              >
                <Button>
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
