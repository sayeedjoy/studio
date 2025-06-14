import HeadlineGenerator from "@/components/HeadlineGenerator";
import IconLink from "@/components/IconLink";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Mail, Briefcase, CalendarDays, BadgeInfo } from "lucide-react";
import Image from "next/image";

const bio = "A passionate Android Developer and OSINT/Research enthusiast with a knack for crafting robust mobile solutions and uncovering critical insights. I thrive on challenges, continuous learning, and contributing to impactful projects. My expertise lies in building user-centric Android applications and conducting in-depth open-source intelligence investigations.";

const workExperiences = [
  {
    company: "Innovatech Solutions Ltd.",
    logo: "https://placehold.co/40x40.png",
    logoHint: "tech logo",
    title: "Senior Android Developer",
    dates: "Jan 2021 - Present",
    description: [
      "Lead development of cutting-edge Android applications, focusing on performance and user experience.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
      "Mentor junior developers and conduct code reviews to maintain high-quality standards.",
      "Integrate third-party APIs and services, ensuring seamless functionality.",
    ],
  },
  {
    company: "Cyber Intel Group",
    logo: "https://placehold.co/40x40.png",
    logoHint: "cyber security",
    title: "OSINT & Research Analyst",
    dates: "Jul 2019 - Dec 2020",
    description: [
      "Conducted comprehensive open-source intelligence (OSINT) investigations for diverse clients.",
      "Utilized advanced research methodologies and tools to gather and analyze data.",
      "Produced detailed reports and actionable insights based on findings.",
      "Stayed updated with the latest OSINT techniques and cybersecurity trends.",
    ],
  },
  {
    company: "Mobile First Devs",
    logo: "https://placehold.co/40x40.png",
    logoHint: "mobile app",
    title: "Junior Android Developer",
    dates: "Jun 2018 - Jun 2019",
    description: [
      "Assisted in the development and maintenance of various Android applications.",
      "Participated in the full software development lifecycle, from concept to deployment.",
      "Fixed bugs and improved application performance under senior guidance.",
      "Gained hands-on experience with Java, Kotlin, and Android SDK.",
    ],
  },
];

const links = [
  { href: "https://github.com/sayeedjoy", icon: <Github className="h-6 w-6" />, label: "GitHub" },
  { href: "https://linkedin.com/in/sayeedjoy", icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn" },
  { href: "https://twitter.com/sayeedjoy", icon: <Twitter className="h-6 w-6" />, label: "Twitter" },
  { href: "mailto:sayeed.joy@example.com", icon: <Mail className="h-6 w-6" />, label: "Email" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <header className="py-6 md:py-10 bg-card shadow-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Sayeed Joy" data-ai-hint="profile picture" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Sayeed Joy
              </h1>
            </div>
          </div>
          <nav className="flex space-x-2 sm:space-x-4">
            {links.map((link) => (
              <IconLink key={link.label} href={link.href} icon={link.icon} label={link.label} className="text-primary hover:text-accent" />
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Section title="" className="pt-12 md:pt-16 bg-background">
          <div className="container mx-auto px-4 grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <Image 
                src="https://placehold.co/400x400.png" 
                alt="Sayeed Joy professional portrait" 
                width={300} 
                height={300}
                className="rounded-full shadow-xl border-4 border-primary object-cover"
                data-ai-hint="developer portrait"
              />
            </div>
            <div className="md:col-span-3 text-center md:text-left">
              <HeadlineGenerator />
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                {bio}
              </p>
            </div>
          </div>
        </Section>

        <Section title="Work Experience" className="bg-secondary/50">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {workExperiences.map((exp, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <Image 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      width={40} 
                      height={40} 
                      className="rounded-sm mt-1"
                      data-ai-hint={exp.logoHint}
                    />
                    <div>
                      <CardTitle className="text-xl font-semibold text-primary">{exp.company}</CardTitle>
                      <CardDescription className="text-accent font-medium flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" /> {exp.title}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-sm text-muted-foreground mb-3 flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2" /> {exp.dates}
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-foreground/90">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        
        <Section title="Let's Connect" className="bg-background">
          <p className="text-center text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {links.map((link) => (
              <ButtonAsLink key={link.label} href={link.href} icon={link.icon} label={link.label} />
            ))}
          </div>
        </Section>
      </main>

      <footer className="py-6 bg-card text-center border-t">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sayeed Joy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}


// Helper component to style links as buttons for the "Let's Connect" section
function ButtonAsLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 min-w-[120px] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
    >
      {icon}
      {label}
    </a>
  );
}
