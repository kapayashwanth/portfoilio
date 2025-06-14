import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  MessageCircle,
  User,
  CheckCircle,
  Globe,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      ".fade-in-section, .slide-in-left-section, .slide-in-right-section"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully! 🚀",
          description:
            "Thank you for reaching out! I'll get back to you within 24 hours.",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(true);

        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "kapayashwanth8@gmail.com",
      href: "mailto:kapayashwanth8@gmail.com",
      color: "hover:bg-red-500/20 hover:border-red-500/50",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/yashwanth-kapa",
      color: "hover:bg-blue-500/20 hover:border-blue-500/50",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/kapayashwanth",
      color: "hover:bg-orange-500/20 hover:border-orange-500/50",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: "Resume",
      value: "Download my resume",
      href: "/certificates/KapaYashwanth_Resume.pdf",
      color: "hover:bg-green-500/20 hover:border-green-500/50",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Nellore, Andhra Pradesh",
      href: "#",
      color: "hover:bg-primary/20 hover:border-primary/50",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects? Let's discuss how we can
            create something amazing together.
          </p>
          <div className="w-24 h-1 fire-gradient mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Contact Information */}
          <div className="slide-in-left-section flex-1">
            <div className="bg-card/40 border border-border/30 p-6 rounded-2xl transition-all duration-300 group hover:bg-card/60">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center">
                  <Globe className="w-6 h-6 mr-3" />
                  Get In Touch
                </h3>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative
                  projects, or simply connect with fellow developers. Whether
                  you have a project in mind or just want to chat about
                  technology, feel free to reach out!
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`flex items-center p-4 bg-card/40 border border-border/30 rounded-xl transition-all duration-300 hover:scale-105 ${link.color} hover:shadow-lg relative overflow-hidden`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative z-10 flex items-center w-full">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white mr-4 hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </div>
                        <div>
                          <p className="font-bold text-foreground hover:text-primary transition-colors text-lg">
                            {link.label}
                          </p>
                          <p className="text-muted-foreground hover:text-accent transition-colors">
                            {link.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Steve Jobs Quote */}
          <div className="slide-in-right-section flex flex-col gap-4">
            <div className="bg-card/40 border border-border/30 p-8 rounded-2xl transition-all duration-300 group hover:bg-card/60 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center">
                  <Send className="w-6 h-6 mr-3" />
                  Send a Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-12 bg-secondary/50 border-border/50 focus:border-primary h-12 rounded-xl transition-all duration-300"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-12 bg-secondary/50 border-border/50 focus:border-primary h-12 rounded-xl transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="pl-12 bg-secondary/50 border-border/50 focus:border-primary h-12 rounded-xl transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="pl-12 bg-secondary/50 border-border/50 focus:border-primary rounded-xl transition-all duration-300 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full fire-gradient hover:scale-105 text-white h-14 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </div>
                    ) : isSubmitted ? (
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3" />
                        Sent Successfully!
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Steve Jobs Quote Section - Moved Here */}
            <div className="bg-card/40 border border-border/30 p-4 pt-2 rounded-2xl transition-all duration-300 group hover:bg-card/60 relative overflow-hidden fade-in-section">
              <div className="relative z-10 flex flex-col items-center text-center">
                <img
                  src="https://cgbigul.com/wp-content/uploads/2023/10/cropped-steve-jobs-1.jpg"
                  alt="Steve Jobs"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto mb-4">
                  "Details matter, it's worth waiting to get it right."
                </blockquote>
                <p className="text-sm text-foreground mt-2">- Steve Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
