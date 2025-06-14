import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  skills: string[];
  githubLink?: string;
  liveDemoLink?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "CRIMINAL DATA MANAGEMENT SYSTEM",
    description:
      "Developed a Java-based application for secure crime record storage, and analysis. Implemented data encryption, role-based access control, and automated reporting.",
    skills: ["Java", "Swing"],
    githubLink:
      "https://github.com/kapayashwanth/CriminalDataManagamentSystem.git",
    imageUrl: "/projects/criminal_data_management.png",
  },
  {
    title: "EVENT LISTING WEBSITE",
    description:
      "Built Amritostav 2025 event website for Amrita Vishwa Vidyapeetham with categorized event listings and responsive UI. Automated email confirmations using AI agents(n8n & Zapier).",
    skills: ["HTML", "CSS", "Javascript", "Netlify", "n8n"],
    githubLink:
      "https://github.com/kapayashwanth/College-Event-listing-Website-.git",
    liveDemoLink: "https://amritostav-2025.netlify.app/",
    imageUrl: "/projects/event_listing_website.png",
  },
  {
    title: "MEDIMIND AI",
    description:
      "Engineered MEDIMIND-AI, a full-stack application utilizing cutting-edge AI models and a modern tech stack to deliver comprehensive medical information services.",
    skills: ["Firebase", "Gemini API", "TypeScript"],
    githubLink: "https://github.com/kapayashwanth/MEDIMIND-AI.git",
    liveDemoLink:
      "https://app.base44.com/apps/6846b3e000cee0cf7ccb119d/editor/preview/Dashboard",
    imageUrl: "/projects/medimind_ai.png",
  },
  {
    title: "E-SPORTS TOURNAMENT HOSTING WEBSITE",
    description:
      "Developed a full-stack eSports tournament platform using TypeScript, JavaScript, HTML, CSS with admin authentication, role-based access, and backend features for event and match management.",
    skills: ["Base44", "TypeScript", "Web Technologies"],
    githubLink:
      "https://github.com/kapayashwanth/AVVP-Tournaments-e-Sports-.git",
    liveDemoLink: "https://tinyurl.com/avvptournaments",
    imageUrl: "/projects/esports_tournament.png",
  },
  {
    title: "AI Chatbot",
    description:
      "An intelligent chatbot developed using Python and integrated with the Gemini API to provide interactive and comprehensive responses.",
    skills: ["Python", "Gemini API", "Flask", "Natural Language Processing"],
    githubLink: "https://github.com/kapayashwanth/ai-chatbot.git",
    imageUrl: "/projects/ai_chatbot.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing a selection of my key projects, demonstrating my skills
            and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300 min-h-full"
            >
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 flex flex-col justify-between min-h-[150px]">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveDemoLink && (
                    <Button asChild size="sm">
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
