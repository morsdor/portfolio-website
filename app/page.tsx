"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Code2,
  Database,
  Layers,
  Palette,
  Zap,
  Users,
  Download,
  Mail,
  MapPin,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const scrollToProjects = () => {
    document.getElementById("featured-projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const skills = [
    {
      icon: Code2,
      title: "React & TypeScript",
      description:
        "5+ years building scalable applications with React, Next.js 14+, TypeScript, and modern JavaScript (ES6+)",
      level: "Expert",
      technologies: ["React", "Next.js", "TypeScript", "JavaScript"],
    },
    {
      icon: Layers,
      title: "Frontend Architecture",
      description: "Micro-frontends, design systems, component libraries with IBM Carbon, shadcn/ui, and Tailwind CSS",
      level: "Expert",
      technologies: ["Design Systems", "Micro-frontends", "Component Libraries"],
    },
    {
      icon: Database,
      title: "Full-Stack Development",
      description: "Node.js, Express.js, Spring Boot, PostgreSQL, MongoDB, REST APIs, and GraphQL integration",
      level: "Advanced",
      technologies: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"],
    },
    {
      icon: Zap,
      title: "Performance Engineering",
      description: "Code splitting, lazy loading, virtualization, Canvas rendering for 100k+ data points at 60fps",
      level: "Advanced",
      technologies: ["Performance", "Optimization", "Canvas", "Virtualization"],
    },
    {
      icon: Users,
      title: "Real-time Systems",
      description: "WebSocket integration, collaborative editing with Yjs, Redux Toolkit, and state synchronization",
      level: "Advanced",
      technologies: ["WebSocket", "Yjs", "Redux", "Real-time"],
    },
    {
      icon: Palette,
      title: "UI/UX Excellence",
      description:
        "WCAG AA accessibility, responsive design, micro-interactions, and enterprise-grade user experiences",
      level: "Expert",
      technologies: ["Accessibility", "Responsive", "UX", "Design"],
    },
  ]

  const projects = [
    {
      title: "Advanced React Components",
      description:
        "14 production-ready components with full accessibility, keyboard navigation, and performance optimization",
      tech: ["React", "TypeScript", "Tailwind CSS", "WAI-ARIA"],
      href: "/projects/react-components",
      highlight: "14 Components Built",
    },
    {
      title: "Observatory Dashboard",
      description: "High-performance data visualization handling 100k+ real-time data points with Canvas rendering",
      tech: ["Next.js", "D3.js", "WebSocket", "Virtualization"],
      href: "/projects/observatory-dashboard",
      highlight: "100k+ Data Points",
    },
    {
      title: "Collaborative Canvas",
      description:
        "Real-time collaborative drawing app with conflict-free editing using Yjs and advanced state management",
      tech: ["Next.js", "Yjs", "Redux", "Canvas API"],
      href: "/projects/collaborative-canvas",
      highlight: "Real-time Collaboration",
    },
  ]

  const achievements = [
    { number: "5+", label: "Years Experience", description: "Building scalable web applications" },
    { number: "50k+", label: "Enterprise Users", description: "Served by SQL Editor at IBM" },
    { number: "30%", label: "Performance Boost", description: "Achieved through optimization" },
    { number: "85%", label: "Code Coverage", description: "Comprehensive testing strategy" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-20 left-10 w-20 h-20 text-primary/20 animate-float"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="absolute top-40 right-20 w-16 h-16 text-accent/20 animate-float"
            style={{ animationDelay: "1s" }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg
            className="absolute bottom-20 left-1/4 w-12 h-12 text-primary/30 animate-float"
            style={{ animationDelay: "2s" }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm animate-pulse-glow">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Available for new opportunities
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground">Mritunjay Mohitesh</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">Senior Frontend Engineer</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                5+ years of experience building scalable, high-performance web applications serving thousands of users.
                Expert in React ecosystem specializing in performance optimization and enterprise solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Bengaluru, India
                </div>
                <a
                  href="mailto:mritunjaymohitesh@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  mritunjaymohitesh@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/mritunjay-mohitesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 group" onClick={scrollToProjects}>
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent group" asChild>
                <a href="/resume/Mritunjay_Mohitesh_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized in building scalable, accessible, and high-performance user interfaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-primary/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className={`font-medium ${
                        skill.level === "Expert"
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-accent-foreground"
                      } group-hover:scale-105 transition-all`}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed mb-4">{skill.description}</CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Professional Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable results from enterprise-level projects and technical leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="featured-projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complex engineering challenges solved with innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-card border-border/50 hover:border-primary/20 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary/10 text-primary border-primary/20">{project.highlight}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="space-y-4 relative">
                  <CardTitle className="text-2xl font-serif font-bold group-hover:text-primary transition-colors pr-20">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-sm group-hover:border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link href={project.href}>
                      <Button className="w-full group-hover:bg-primary/90 transition-all duration-300 group">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Current Role</h2>
            <Card className="text-left max-w-3xl mx-auto">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold">Software Engineer</CardTitle>
                    <CardDescription className="text-lg text-primary font-semibold">
                      IBM India Software Labs
                    </CardDescription>
                    <p className="text-muted-foreground">Jan 2024 - Present</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 ml-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5726.PNG-5eAtXzWt56EN3iOXj6HxfuID8Rnbq7.jpeg"
                        alt="Mritunjay Mohitesh"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Badge className="bg-primary/10 text-primary text-xs">Current</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base leading-relaxed">
                  <strong>Watson Knowledge Catalog</strong> - Enterprise Data Management Platform
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Architected SQL Editor serving 50K+ enterprise users with real-time query execution</li>
                  <li>• Led migration to IBM Carbon 11 design system, achieving 20% increase in user satisfaction</li>
                  <li>• Built advanced Microsegments feature for data segmentation by geography and behaviors</li>
                  <li>• Implemented comprehensive testing strategy with 85% code coverage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
