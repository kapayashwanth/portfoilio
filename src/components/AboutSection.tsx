import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A brief introduction to my journey and passion for technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Avatar className="w-full h-full">
              <AvatarImage
                src="/images/profile.jpg"
                alt="Kapa Yashwanth"
                className="object-cover"
              />
              <AvatarFallback>KY</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am Kapa Yashwanth, a passionate CSE student and an AI-Enabled
              Full Stack Developer at Amrita Vishwa Vidyapeetham. My journey in
              technology began with a fascination for how software solves
              real-world problems. I thrive on building robust, scalable, and
              intelligent applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both front-end and back-end
              development, coupled with an keen interest in Artificial
              Intelligence, I am always eager to learn new technologies and
              apply them to create impactful solutions. My goal is to leverage
              AI to enhance user experiences and build innovative systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
