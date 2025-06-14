const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          My professional journey and key roles that have shaped my skills.
        </p>

        <div className="space-y-12">
          {/* Example Experience Item */}
          <div className="bg-card rounded-lg p-6 shadow-lg border border-border/50 text-left">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Software Engineer Intern
                </h3>
                <p className="text-muted-foreground">HackerRank</p>
              </div>
              <span className="text-sm text-muted-foreground md:mt-0 mt-2">
                June 2025 - Present
              </span>
            </div>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                Gained foundational knowledge and practical skills in software
                engineering, data structures, and algorithms.
              </li>
              <li>
                Developed problem-solving abilities through various coding
                challenges and practical exercises.
              </li>
              <li>
                Demonstrated proficiency in core computer science concepts
                essential for a software development role.
              </li>
            </ul>
          </div>
          {/* Add more experience items here */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
