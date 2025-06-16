export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  licenseId?: string;
  licenseUrl?: string;
  imageUrl?: string;
  skills: string[];
  description: string;
  verificationText?: string;
  certificatePath?: string;
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jun 2025",
    credentialId: "AWS-CCP-123456",
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_ncvG7RGcDDhihF4KK_1750007896396_completion_certificate.pdf",
    imageUrl: "/certificates/aws_cloud_practitioner.png",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"],
    description:
      "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    verificationText: "View certificate via Forage",
    certificatePath: "/certificates/aws_cloud_practitioner.pdf",
  },
  {
    title: "British Airways Data Analytics",
    issuer: "British Airways",
    date: "Jun 2025",
    credentialId: "BA-DA-789012",
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_ncvG7RGcDDhihF4KK_1750008641425_completion_certificate.pdf",
    imageUrl: "/certificates/british_airways.png",
    skills: ["Data Analytics", "Business Intelligence", "Data Visualization"],
    description:
      "Completed British Airways' virtual job simulation, gaining hands-on experience in data analytics and business intelligence.",
    verificationText: "View certificate via Forage",
    certificatePath: "/certificates/british_airways.pdf",
  },
  {
    title: "Infosys Generative AI for all",
    issuer: "Infosys Springboard",
    date: "Jun 2025",
    credentialUrl: "https://verify.onwingspan.com/",
    imageUrl: "/certificates/infosys_gen_ai_preview.jpg",
    skills: ["Generative AI", "AI Ethics", "Machine Learning"],
    description:
      "Foundational understanding of Generative AI principles and applications.",
    verificationText: "Scan QR to verify",
    certificatePath: "/certificates/infosys GEN AI .pdf",
  },
  {
    title: "Java for Beginner",
    issuer: "Udemy",
    date: "Jun 2025",
    credentialId: "UC-4e8ebfb2-a222-4872-916d-217101c48dc1",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-4e8ebfb2-a222-4872-916d-217101c48dc1/",
    imageUrl: "/certificates/udemy_java_preview.jpg",
    skills: ["Java", "Object-Oriented Programming", "Core Java"],
    description: "Comprehensive introduction to Java programming fundamentals.",
    certificatePath: "/certificates/Udemy JAVA.pdf",
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "Jun 2025",
    credentialId: "42e3388e9615",
    credentialUrl: "https://www.hackerrank.com/certificates/42e3388e9615",
    imageUrl: "/certificates/hacker_rank_preview.jpg",
    skills: ["Problem Solving", "Data Structures", "Algorithms"],
    description:
      "Demonstrated proficiency in software engineering fundamentals and problem-solving skills.",
    certificatePath: "/certificates/software_engineer_intern certificate.pdf",
  },
  {
    title: "Programming in C Certification",
    issuer: "CAT Computer Point",
    date: "Jun 2025",
    credentialId: "C2407001",
    credentialUrl: "https://catcomputerpoint.com/verify/",
    imageUrl: "/certificates/c-language cat.jpg",
    skills: ["C Programming", "Pointers", "Data Structures"],
    description:
      "Built a strong base in programming by learning C – focusing on logic building, memory-level understanding, and clean coding practices",
    certificatePath: "/certificates/c-language cat.pdf",
  },
  {
    title: "Deloitte Australia - Technology Job Simulation",
    issuer: "Deloitte Australia",
    date: "Jun 2025",
    credentialId: "pzB9cJdQ8gL2pfBh9",
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_ncvG7RGcDDhihF4KK_1749836930542_completion_certificate.pdf",
    imageUrl: "/certificates/deloitte.png",
    skills: [
      "Technology Consulting",
      "Business Analysis",
      "Client Communication",
    ],
    description:
      "Completed Deloitte's virtual job simulation, gaining hands-on experience in technology consulting, business analysis, and client communication.",
    verificationText: "View certificate via Forage",
    licenseUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_ncvG7RGcDDhihF4KK_1749836930542_completion_certificate.pdf",
    certificatePath: "/certificates/deloitte.pdf",
  },
];
