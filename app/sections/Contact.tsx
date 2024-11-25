import { MoveUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="py-16 pt-12">
      <div className="container">
        <div className="text-center md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life ? Let&apos;s connect
              </p>
            </div>
            <div className="lg:ml-20">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max">
                <span className="font-semibold">Contact Me</span>
                <MoveUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}