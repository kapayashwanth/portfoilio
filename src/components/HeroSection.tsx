import { useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Background animation on scroll
      const backgroundElements = document.querySelectorAll(".bg-element");
      backgroundElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        const yPos = -(window.scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden dark-gradient pt-32"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-element absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full animate-float"></div>
        <div className="bg-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full animate-pulse-slow"></div>
        <div className="bg-element absolute top-3/4 left-1/3 w-48 h-48 bg-orange-500/10 rounded-full animate-spin-slow"></div>
        <div className="bg-element absolute top-1/2 right-1/3 w-32 h-32 bg-red-500/10 rounded-full animate-bounce"></div>
        <div
          className="bg-element absolute bottom-1/3 left-1/4 w-40 h-40 bg-primary/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center justify-center text-center">
        <div className="mb-6 text-sm font-semibold text-accent tracking-widest">
          WELCOME TO MY PORTFOLIO
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8">
          Hi, I'm{" "}
          <span className="relative">
            <span className="animate-blur-k text-orange-500">K</span>
            <span className="text-white">apa </span>
            <span className="animate-blur-y text-orange-500">Y</span>
            <span className="text-white">ashwanth</span>
          </span>
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6 h-[2em]">
          <Typewriter
            options={{
              strings: [
                "I'm a Full Stack Developer",
                "I'm a UI/UX Designer",
                "I'm a Web Developer",
                "I'm a Programmer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
            }}
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Turning Design to Powerful Software. Passionate about creating
          innovative solutions with cutting-edge technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button className="fire-gradient text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl">
            View Projects
          </Button>
          <Button
            variant="outline"
            className="px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl"
            asChild
          >
            <a
              href="/certificates/KapaYashwanth_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </div>
        {/* Social Icons */}
        <div className="flex gap-6 justify-center mb-12">
          <a
            href="https://github.com/kapayashwanth"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground hover:text-primary transition-colors text-2xl"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/yashwanth-kapa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground hover:text-primary transition-colors text-2xl"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:kapayashwanth8@gmail.com"
            aria-label="Email"
            className="text-foreground hover:text-primary transition-colors text-2xl"
          >
            <Mail />
          </a>
          <a
            href="/certificates/KapaYashwanth_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="text-foreground hover:text-primary transition-colors text-2xl"
          >
            <FileText />
          </a>
        </div>
        <div className="flex flex-col items-center mt-8">
          <span className="text-muted-foreground text-sm mb-4">
            Scroll to explore
          </span>
          <div className="animate-bounce">
            <ChevronDown className="text-primary w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
