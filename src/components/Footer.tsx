
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-8 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            © 2025 Kapayashwanth. Made with <Heart className="w-4 h-4 inline text-red-500" /> and lots of coffee.
          </p>
          
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://github.com/kapayashwanth" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/yashwanth-kapa" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:kapayashwanth8@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg z-40"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;
