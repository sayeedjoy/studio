
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const introBio = [
  "I'm an Android Developer and OSINT specialist. I design and build secure mobile applications and conduct in-depth research to provide actionable intelligence.",
  "By blending meticulous development with advanced investigative techniques, I deliver robust solutions and critical insights for complex challenges."
];

const personalLinks = [
  { href: "#resume", label: "Resume" },
  { href: "https://youtube.com", label: "Youtube", target: "_blank" },
  { href: "https://github.com/sayeedjoy", label: "GitHub", target: "_blank" },
  { href: "https://twitter.com/sayeedjoy", label: "Twitter", target: "_blank" },
  { href: "https://linkedin.com/in/sayeedjoy", label: "LinkedIn", target: "_blank" },
  { href: "mailto:sayeed.joy@example.com", label: "Email" },
  { href: "#blog", label: "Blog" },
  { href: "#schedule", label: "Schedule a call" },
];

const personalProjects = [
  {
    title: "PortfolioNext.js",
    url: "https://github.com/sayeedjoy",
    description: "This very portfolio site, built with Next.js, Tailwind CSS, and TypeScript. Showcasing modern web development practices.",
  },
  {
    title: "OSINT Toolkit CLI",
    url: "https://github.com/sayeedjoy", 
    description: "A command-line interface for automating common OSINT tasks, streamlining data collection and analysis.",
  },
  {
    title: "SecureChat Android App",
    url: "https://github.com/sayeedjoy",
    description: "An end-to-end encrypted messaging application for Android, focusing on privacy and security features.",
  },
  {
    title: "DevBlog Platform",
    url: "https://github.com/sayeedjoy",
    description: "A self-hosted blogging platform tailored for developers, featuring Markdown support and code highlighting.",
  },
];

interface WorkExperienceEntry {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

const workExperience: WorkExperienceEntry[] = [
  {
    company: "Alpha Technologies",
    role: "Lead Android Developer",
    duration: "2021 - Present",
    description: "Led the design and development of cutting-edge Android applications for various clients. Specialized in creating secure, high-performance mobile solutions using Kotlin, Java, and Jetpack Compose. Mentored junior developers and spearheaded agile development practices.",
    technologies: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM", "Coroutines", "Dagger/Hilt", "Retrofit", "Git"],
  },
  {
    company: "Cyber Intel Solutions",
    role: "OSINT & Research Specialist",
    duration: "2019 - 2021",
    description: "Conducted in-depth open-source intelligence investigations and digital forensics. Developed custom tools for data extraction and analysis. Provided critical insights for corporate security and threat assessment.",
    technologies: ["Python", "Maltego", "Social Network Analysis", "Data Mining", "Digital Forensics", "Report Writing"],
  },
  {
    company: "Mobile First Co.",
    role: "Android Developer",
    duration: "2017 - 2019",
    description: "Developed and maintained Android applications, focusing on UI/UX improvements and feature implementation. Worked closely with product teams to translate requirements into functional mobile experiences.",
    technologies: ["Java", "Android SDK", "XML Layouts", "SQLite", "Firebase", "Agile Methodologies"],
  }
];


export default function Home() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-10">
          <Avatar className="h-12 w-12 mb-4 border-0">
            <AvatarImage src="https://placehold.co/100x100.png" alt="Sayeed Joy" data-ai-hint="profile portrait" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-semibold text-primary mb-4">
            Hello, I'm Sayeed Joy
          </h1>
          {introBio.map((paragraph, index) => (
            <p key={index} className="text-lg text-foreground/80 leading-relaxed mb-3">
              {paragraph}
            </p>
          ))}
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {personalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target || "_self"}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className="text-sm font-bold underline text-muted-foreground hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm text-muted-foreground mb-6 mt-12">Work.</h2>
          <div className="space-y-8">
            {workExperience.map((job) => (
              <div key={job.company}>
                <h3 className="text-base font-semibold text-primary">{job.company}</h3>
                <p className="text-base text-foreground/80 mt-1">
                  {job.role} <span className="text-muted-foreground">| {job.duration}</span>
                </p>
                <p className="text-lg text-foreground/80 mt-2">{job.description}</p>
                {job.technologies && job.technologies.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-normal text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-sm text-muted-foreground mb-6">Personal.</h2>
          <div className="space-y-6">
            {personalProjects.map((project) => (
              <div key={project.title}>
                <h3>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base font-semibold text-primary hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-lg text-foreground/80 mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="py-8 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {currentYear !== null ? currentYear : new Date().getFullYear()} Sayeed Joy. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
