import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Play, Code2, Accessibility, Zap, Users } from 'lucide-react'
import Link from "next/link"

export default function ReactComponentsPage() {
  const designDocument = `# Advanced React Components Portfolio

## Project Overview
A comprehensive React component library showcasing 14 advanced components including modals, autocomplete, data grids, carousels, tabs, star ratings, multi-step forms, file explorers, transfer lists, kanban boards, progress bars, and a country game. Built with Next.js, TypeScript, Tailwind CSS, and focuses heavily on accessibility and performance.

## Technical Architecture

### Core Technologies
- **React 18** with concurrent features
- **TypeScript** for type safety
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **@dnd-kit** for drag and drop functionality
- **WAI-ARIA** compliance for accessibility

### Component Design Principles
- **Accessibility First**: All components meet WCAG AA standards
- **Performance Optimized**: Virtual scrolling and efficient re-renders
- **Reusable Architecture**: Consistent prop interfaces and composition patterns
- **Developer Experience**: Comprehensive TypeScript types and documentation

## Key Components

### 1. Modal Dialog System
- Focus trapping and restoration
- Escape key handling
- Backdrop click dismissal
- Portal rendering for z-index management

### 2. High-Performance Autocomplete
- Debounced search with 300ms delay
- Virtual scrolling for large datasets
- Keyboard navigation (arrow keys, enter, escape)
- Async data loading support

### 3. Virtualized Data Grid
- Handles 10,000+ rows efficiently
- Column sorting and filtering
- Row selection and bulk actions
- Responsive design with horizontal scrolling

### 4. Accessible Carousel
- Touch/swipe gestures
- Keyboard navigation
- Auto-play with pause on hover
- Screen reader announcements

### 5. Multi-step Form Wizard
- Form validation at each step
- Progress indication
- Data persistence between steps
- Conditional step rendering

## Performance Optimizations

### Virtual Scrolling Implementation
- Only renders visible items plus buffer
- Smooth scrolling with momentum
- Dynamic item height calculation
- Memory efficient for large datasets

### React Optimization Techniques
- React.memo for component memoization
- useMemo for expensive calculations
- useCallback for stable function references
- Lazy loading for code splitting

## Accessibility Features

### WCAG AA Compliance
- Proper heading hierarchy
- Color contrast ratios > 4.5:1
- Focus indicators on all interactive elements
- Screen reader compatible markup

### Keyboard Navigation
- Tab order management
- Arrow key navigation in lists
- Enter/Space for activation
- Escape for dismissal

### ARIA Implementation
- Proper roles and properties
- Live regions for dynamic content
- Descriptive labels and descriptions
- State announcements

## Testing Strategy

### Unit Testing
- Jest for component logic
- React Testing Library for DOM testing
- Mock implementations for external dependencies
- Coverage reports and thresholds

### Accessibility Testing
- axe-core integration
- Manual keyboard testing
- Screen reader testing with NVDA/JAWS
- Color contrast validation

## Challenges and Solutions

### Challenge 1: Performance with Large Datasets
**Problem**: Data grid and autocomplete components became sluggish with 1000+ items
**Solution**: Implemented virtual scrolling and debounced search, reducing render time by 90%

### Challenge 2: Accessibility Compliance
**Problem**: Complex components like carousel and data grid needed full keyboard support
**Solution**: Implemented comprehensive ARIA patterns and focus management strategies

### Challenge 3: Component Reusability
**Problem**: Components needed to work in various contexts without code duplication
**Solution**: Created flexible prop interfaces and compound component patterns`

  const challenges = [
    {
      icon: Accessibility,
      title: "Accessibility Compliance",
      problem:
        "Building 14 components that meet WCAG AA standards with full keyboard navigation and screen reader support",
      solution:
        "Implemented comprehensive ARIA patterns, focus management, and semantic HTML structure for each component",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      problem: "Handling large datasets (1000+ items) in data grids and autocomplete without UI lag",
      solution: "Implemented virtual scrolling, debounced search, and optimized re-renders with React.memo and useMemo",
    },
    {
      icon: Code2,
      title: "Component Composition",
      problem: "Creating reusable, flexible components that work together seamlessly",
      solution: "Designed consistent prop interfaces, compound component patterns, and a unified styling system",
    },
    {
      icon: Users,
      title: "Developer Experience",
      problem: "Ensuring components are easy to use and integrate for other developers",
      solution: "Comprehensive TypeScript types, clear documentation, and intuitive API design",
    },
  ]

  const components = [
    "Modal Dialog with Focus Trapping",
    "High-Performance Autocomplete",
    "Virtualized Data Grid",
    "Accessible Carousel",
    "WAI-ARIA Compliant Tabs",
    "Interactive Star Rating",
    "Multi-step Form Wizard",
    "Hierarchical File Explorer",
    "Dual Transfer List",
    "Drag-and-Drop Kanban Board",
    "Concurrent Progress Tracker",
    "Interactive Country Quiz",
    "Toast Notification System",
    "Custom React Hooks",
  ]

  const technologies = [
    "React 18",
    "TypeScript",
    "Next.js 14",
    "Tailwind CSS",
    "React Icons",
    "@dnd-kit",
    "WAI-ARIA",
    "Intersection Observer",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-6 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="space-y-6">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">Advanced React Components</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive library of 14 production-ready React components showcasing advanced patterns,
              accessibility compliance, and performance optimization techniques.
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Placeholder */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/20 inline-block">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interactive Demo Video</h3>
                  <p className="text-muted-foreground">
                    Watch a comprehensive walkthrough of all 14 components in action
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Problem-Solving Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Engineering Challenges Solved
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complex problems require innovative solutions and careful architectural decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <challenge.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-destructive mb-1">Challenge:</h4>
                      <p className="text-muted-foreground">{challenge.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-accent mb-1">Solution:</h4>
                      <p className="text-muted-foreground">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Components List */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground">Component Library</h2>
            <p className="text-xl text-muted-foreground">
              Each component built with accessibility, performance, and reusability in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {components.map((component, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-medium">{component}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="font-playfair text-4xl font-bold text-foreground">Key Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">WCAG AA Compliance</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">1000+</div>
                <div className="text-muted-foreground">Items handled efficiently</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">14</div>
                <div className="text-muted-foreground">Production-ready components</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-16 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="https://github.com/morsdor/react-components" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Live Demo
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <Link href="https://github.com/morsdor/react-components" target="_blank" rel="noopener noreferrer">
                <Code2 className="mr-2 h-5 w-5" />
                View Source Code
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <Link href="https://github.com/morsdor/react-components/blob/main/design.md" target="_blank" rel="noopener noreferrer">
                <Code2 className="mr-2 h-5 w-5" />
                View Design Document
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
