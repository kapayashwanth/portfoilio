import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Button } from "./ui/button";
import { ExternalLink, FileText } from "lucide-react";

export function CertificationSection() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my
            expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col h-full">
                {cert.imageUrl && (
                  <div className="mb-4 w-48 h-32 relative overflow-hidden rounded-lg mx-auto">
                    <img
                      src={cert.imageUrl}
                      alt={`${cert.title} certificate`}
                      className="object-cover w-full h-full filter blur-lg hover:filter-none transition-all duration-300"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                {cert.credentialId && (
                  <p className="text-sm text-muted-foreground mb-2">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
                {cert.verificationText && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.verificationText}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.date}
                </p>
                <p className="text-sm mb-4 flex-grow">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {cert.credentialUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={cert.licenseUrl || cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Verify
                      </a>
                    </Button>
                  )}
                  {cert.certificatePath && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={cert.certificatePath}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View Certificate
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
}
