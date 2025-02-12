
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-850">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,117,204,0.1),transparent_2px),linear-gradient(to_bottom,rgba(20,117,204,0.1),transparent_2px)]"></div>
      <div className="relative">
        <div className="container px-4 py-8">
          {/* ... (Existing Hero Section code: Logo, Nav, Title, Text, Buttons) */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-white" />
              <span className="text-xl font-semibold text-white">Slide</span>
            </div>
            <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#about">About</Link>
            </nav>
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
              Transform Your Instagram Engagement with Slide
            </h1>
            <p className="mt-8 text-lg text-blue-200">
              Slide revolutionizes how you connect with your audience on Instagram. Automate responses and boost engagement.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </Button>
              <Button className="border-blue-400 text-blue-100 hover:bg-blue-800/20">
                Learn More
              </Button>
            </div>
          </div>


          <div className="mt-20 flex justify-center gap-6"> {/* New Community Images Section */}
            {[
              { radius: "rounded-tl-[40px]" },
              { radius: "rounded-tr-[40px]" },
              { radius: "rounded-bl-[40px]" },
              { radius: "rounded-br-[40px]" },
            ].map((style, i) => (
              <div
                key={i}
                className={`relative h-64 w-[260px] overflow-hidden bg-blue-800/50 ${style.radius}`}
              >
                <Image
                  src="/placeholder.svg" // Replace with your image URLs
                  alt="Community member"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent" />
              </div>
            ))}
          </div>

        </div>
        <div className="text-center">
          <p className="text-sm text-blue-300">Scroll for details</p>
        </div>
      </div>
    </section>
  );
}
