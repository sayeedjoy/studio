import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image"; // Keep for avatar if needed, but example uses ShadCN avatar

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
    url: "https://github.com/sayeedjoy", // Generic personal project link
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

const clientProjects = [
  {
    title: "E-commerce Site for Alpha Goods",
    url: "#client-project-1",
    description: "Built a scalable e-commerce platform for a growing retail business using Next.js and Shopify Headless.",
  },
  {
    title: "Data Visualization Dashboard for Beta Corp",
    url: "#client-project-2",
    description: "Developed an interactive dashboard for visualizing complex business intelligence data using React and D3.js.",
  },
  {
    title: "Mobile App for Gamma Services",
    url: "#client-project-3",
    description: "Created a cross-platform mobile application to improve field service operations for a logistics company.",
  },
  {
    title: "Internal Tool for Delta Solutions",
    url: "#client-project-4",
    description: "Designed and implemented an internal management tool to streamline workflows and improve productivity.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-10">
          <Avatar className="h-12 w-12 mb-4">
            <AvatarImage src="https://placehold.co/100x100.png" alt="Sayeed Joy" data-ai-hint="profile portrait" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-semibold text-primary mb-4">
            Hello, I'm Sayeed Joy
          </h1>
          {introBio.map((paragraph, index) => (
            <p key={index} className="text-base text-foreground/80 leading-relaxed mb-3">
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
                className="text-sm text-muted-foreground hover:text-primary hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm text-muted-foreground mb-6 mt-12">Personal.</h2>
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
                <p className="text-sm text-foreground/80 mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm text-muted-foreground mb-6 mt-12">Client.</h2>
          <div className="space-y-6">
            {clientProjects.map((project) => (
              <div key={project.title}>
                <h3>
                  <a 
                    href={project.url} 
                    target={project.url.startsWith("#") ? "_self" : "_blank"}
                    rel={project.url.startsWith("#") ? undefined : "noopener noreferrer" }
                    className="text-base font-semibold text-primary hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-sm text-foreground/80 mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="py-8 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Sayeed Joy. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
