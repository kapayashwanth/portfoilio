import { useEffect, useRef } from "react";
import {
  Code,
  Database,
  Globe,
  GitBranch,
  Cpu,
  Cloud,
  Smartphone,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll(".progress-bar");
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                const width = bar.getAttribute("data-width");
                (bar as HTMLElement).style.width = `${width}%`;
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-section");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-primary to-accent",
      skills: [
        { name: "C", level: 95 },
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      color: "from-accent to-orange-500",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 75 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "Supabase", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-red-500 to-primary",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Netlify", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 80 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-primary to-accent",
      skills: [
        { name: "TensorFlow", level: 70 },
        { name: "Scikit-learn", level: 75 },
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 85 },
      ],
    },
    {
      title: "Deployment & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-accent to-orange-500",
      skills: [
        { name: "Docker", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in modern technologies and frameworks for
            building scalable solutions
          </p>
          <div className="w-24 h-1 fire-gradient mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="fade-in-section border border-border/30 p-8 rounded-2xl hover:border-primary/50 transition-all duration-500 group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`progress-bar h-2.5 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: "0%" }}
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center fade-in-section">
          <div className="border border-border/30 p-8 rounded-2xl max-w-4xl mx-auto hover:border-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Always Learning
            </h3>
            <p className="text-lg text-muted-foreground">
              I'm constantly exploring new technologies and frameworks to stay
              ahead in the rapidly evolving tech landscape. Currently focusing
              on advanced AI/ML techniques, cloud architecture, and modern web
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
