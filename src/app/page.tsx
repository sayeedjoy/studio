
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import type { ComponentType } from 'react';
import {
  Smartphone,
  Code2,
  Layers,
  Cloud,
  Cog,
  Search,
  Database,
  Terminal,
  GitCommitVertical,
  Rocket,
  Package,
  CloudUpload,
  GitBranch,
  Users,
  DatabaseZap,
  FileLock2,
  FileText,
  FileCode,
  KanbanSquare,
  Briefcase,
  Link as LinkIcon,
  Mail,
  Rss,
  CalendarDays
} from 'lucide-react';

const introBio = [
  "I'm an Android Developer and OSINT specialist. I design and build secure mobile applications and conduct in-depth research to provide actionable intelligence.",
  "By blending meticulous development with advanced investigative techniques, I deliver robust solutions and critical insights for complex challenges."
];

// Lucide-react specific icons / Custom SVG Icons
const PlayCircle = (props: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
);
const Github = (props: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const Twitter = (props: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);
const Linkedin = (props: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const personalLinks = [
  { href: "#resume", label: "Resume", icon: Briefcase },
  { href: "https://youtube.com", label: "Youtube", target: "_blank", icon: PlayCircle },
  { href: "https://github.com/sayeedjoy", label: "GitHub", target: "_blank", icon: Github },
  { href: "https://twitter.com/sayeedjoy", label: "Twitter", target: "_blank", icon: Twitter },
  { href: "https://linkedin.com/in/sayeedjoy", label: "LinkedIn", target: "_blank", icon: Linkedin },
  { href: "mailto:sayeed.joy@example.com", label: "Email", icon: Mail },
  { href: "#blog", label: "Blog", icon: Rss },
  { href: "#schedule", label: "Schedule a call", icon: CalendarDays },
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

interface SkillEntry {
  name: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
}

const skillsAndStack: SkillEntry[] = [
  { name: "Android Development", icon: Smartphone },
  { name: "Kotlin", icon: Code2 },
  { name: "Java", icon: Code2 },
  { name: "Jetpack Compose", icon: Layers },
  { name: "MVVM / MVI", icon: GitCommitVertical },
  { name: "Google Cloud Platform", icon: Cloud },
  { name: "Firebase", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "DevOps (CI/CD)", icon: Cog },
  { name: "Docker", icon: Terminal },
  { name: "Python", icon: Code2 },
  { name: "OSINT", icon: Search },
];

const technologyToIconMap: Record<string, ComponentType<{ size?: number; className?: string }> | undefined> = {
  "Kotlin": Code2,
  "Java": Code2,
  "Android SDK": Smartphone,
  "Jetpack Compose": Layers,
  "MVVM": GitCommitVertical,
  "Coroutines": Rocket,
  "Dagger/Hilt": Package,
  "Retrofit": CloudUpload,
  "Git": GitBranch,
  "Python": Code2,
  "Maltego": Search,
  "Social Network Analysis": Users,
  "Data Mining": DatabaseZap,
  "Digital Forensics": FileLock2,
  "Report Writing": FileText,
  "XML Layouts": FileCode,
  "SQLite": Database,
  "Firebase": Database,
  "Agile Methodologies": KanbanSquare,
};


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
            {personalLinks.map((link) => {
               const Icon = link.icon || LinkIcon;
               return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.target || "_self"}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="text-sm font-bold underline text-muted-foreground hover:text-primary flex items-center gap-1"
                >
                  <Icon size={14} />
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="mt-12">
          <h2 className="text-sm text-muted-foreground mb-6">Skills &amp; Stack.</h2>
          <div className="flex flex-wrap gap-2">
            {skillsAndStack.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Badge key={skill.name} variant="outline" className="font-normal text-sm flex items-center gap-1 py-1 px-2.5">
                  {IconComponent && <IconComponent size={14} className="mr-1" />}
                  {skill.name}
                </Badge>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-sm text-muted-foreground mb-6">Work.</h2>
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
                    {job.technologies.map((tech) => {
                      const IconComponent = technologyToIconMap[tech];
                      return (
                        <Badge key={tech} variant="outline" className="font-normal text-sm flex items-center gap-1 py-1 px-2.5">
                          {IconComponent && <IconComponent size={14} className="mr-1" />}
                          {tech}
                        </Badge>
                      );
                    })}
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

    