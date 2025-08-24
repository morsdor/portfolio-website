import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowLeft,
  ExternalLink,
  Play,
  Database,
  Zap,
  BarChart3,
  Wifi,
  Github,
  Activity,
  Cpu,
  Monitor,
} from "lucide-react"
import Link from "next/link"

export default function ObservatoryDashboardPage() {
  const challenges = [
    {
      icon: Database,
      title: "Massive Dataset Handling",
      problem: "Rendering and interacting with 100,000+ real-time data points without performance degradation",
      solution:
        "Implemented virtualization, Canvas-based rendering, and sliding window data management with 60fps performance",
    },
    {
      icon: Wifi,
      title: "Real-time Data Streaming",
      problem: "Managing high-frequency WebSocket data streams while maintaining UI responsiveness",
      solution:
        "Built efficient data buffer with automatic reconnection, exponential backoff, and background processing",
    },
    {
      icon: BarChart3,
      title: "Interactive Visualizations",
      problem: "Creating smooth zoom, pan, and hover interactions on large datasets",
      solution: "Used D3.js with HTML5 Canvas for maximum rendering performance and efficient partial redraws",
    },
    {
      icon: Zap,
      title: "Memory Optimization",
      problem: "Preventing memory leaks during extended streaming sessions",
      solution: "Implemented garbage collection strategies, sliding windows, and memory usage monitoring",
    },
  ]

  const featureCategories = [
    {
      title: "Real-time Performance",
      icon: Activity,
      features: [
        "WebSocket data streaming with 1000+ msg/sec throughput",
        "Canvas-based time-series charts with hardware acceleration",
        "Performance monitoring dashboard with real-time FPS metrics",
        "Memory-efficient sliding window data management",
        "Background data processing using Web Workers",
      ],
    },
    {
      title: "Data Management",
      icon: Database,
      features: [
        "Virtualized data grid handling 100k+ rows with react-virtuoso",
        "Advanced filtering with visual query builder",
        "Real-time data aggregation with configurable time windows",
        "Advanced caching strategies with LRU eviction policies",
        "Export functionality for large datasets (CSV/Excel/JSON)",
      ],
    },
    {
      title: "User Experience",
      icon: Monitor,
      features: [
        "Interactive zoom and pan with momentum preservation",
        "Multi-series chart support with crosshair tooltips",
        "Responsive design optimized for desktop and mobile",
        "Dark/light theme support with system preference detection",
        "Automatic reconnection with exponential backoff",
      ],
    },
    {
      title: "Advanced Rendering",
      icon: Cpu,
      features: [
        "WebGL-accelerated rendering for complex visualizations",
        "Hardware-accelerated Canvas API rendering",
        "Optimized partial redraws and coordinate caching",
        "Direct Canvas manipulation for 60fps performance",
      ],
    },
  ]

  const technologies = [
    "Next.js 15",
    "TypeScript",
    "D3.js",
    "Canvas API",
    "WebSocket",
    "Redux Toolkit",
    "react-virtuoso",
    "Tailwind CSS",
    "shadcn/ui",
    "Web Workers",
    "WebGL",
    "Chart.js",
    "Framer Motion",
  ]

  const metrics = [
    { label: "Data Points", value: "100k+", description: "Handled simultaneously" },
    { label: "Frame Rate", value: "60fps", description: "Maintained during interactions" },
    { label: "Memory Usage", value: "<100MB", description: "Even with large datasets" },
    { label: "Response Time", value: "<200ms", description: "For all user interactions" },
  ]

  const architectureDetails = [
    {
      title: "Unified Data Architecture",
      description:
        "Single source of truth for all streaming data with centralized state management and efficient data flow",
      details: [
        "WebSocket connection management with automatic reconnection",
        "Centralized Redux store with normalized data structures",
        "Real-time data validation and type checking",
        "Efficient data serialization and compression",
      ],
    },
    {
      title: "Performance-First Rendering",
      description:
        "Canvas-based rendering system with virtualization and hardware acceleration for maximum performance",
      details: [
        "Direct Canvas API manipulation for 60fps rendering",
        "Virtualized components rendering only visible elements",
        "Hardware-accelerated WebGL for complex visualizations",
        "Optimized partial redraws and coordinate caching",
      ],
    },
    {
      title: "Memory Management",
      description:
        "Advanced memory optimization with sliding windows, garbage collection, and efficient buffer management",
      details: [
        "Sliding window data retention with configurable limits",
        "Automatic garbage collection for expired data points",
        "Memory usage monitoring and leak detection",
        "Efficient data structures with minimal memory footprint",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-6 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="space-y-6">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">Observatory Dashboard</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Enterprise-grade real-time data visualization platform engineered for astronomical observatories and
              high-frequency monitoring systems. Handles 100,000+ concurrent data points with Canvas rendering,
              WebSocket streaming, and advanced filtering while maintaining 60fps performance and sub-200ms response
              times. Built with performance-first architecture using unified data streaming, memory-efficient sliding
              windows, and hardware-accelerated rendering.
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="hover:bg-primary/20 transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-8 px-6 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform" asChild>
              <Link href="https://github.com/morsdor/observatory-dashboard" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Live Dashboard
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent hover:scale-105 transition-transform"
              asChild
            >
              <Link href="https://github.com/morsdor/observatory-dashboard" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub Repository
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent hover:scale-105 transition-transform"
              asChild
            >
              <Link
                href="https://github.com/morsdor/observatory-dashboard/blob/master/design.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Database className="mr-2 h-5 w-5" />
                Technical Design Document
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Demo Placeholder */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/20 inline-block hover:bg-primary/30 transition-colors cursor-pointer">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Live Performance Demo</h3>
                  <p className="text-muted-foreground">
                    Watch the dashboard handle 100k+ data points with real-time streaming and smooth interactions
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">Performance Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Engineered for extreme performance under high-load conditions with enterprise-grade reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{metric.value}</div>
                  <div className="font-semibold text-foreground">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Engineering Challenges Solved
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complex performance problems solved with innovative engineering solutions and advanced optimization
              techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
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

      {/* Advanced Features - Enhanced UI */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground">Advanced Features</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive feature set designed for enterprise-scale data visualization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featureCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 group/item hover:bg-muted/50 p-2 rounded transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/item:bg-accent transition-colors"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Real-time Data Flow - Enhanced */}
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Real-time Data Flow Architecture</h3>
                <p className="text-muted-foreground">
                  Optimized data pipeline for maximum throughput and minimal latency
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: 1, title: "WebSocket Ingestion", desc: "High-frequency observatory data streaming" },
                  { step: 2, title: "Data Processing", desc: "Validation and sliding window buffering" },
                  { step: 3, title: "Virtualization", desc: "Render only visible data points" },
                  { step: 4, title: "Canvas Rendering", desc: "Optimized partial redraws" },
                  { step: 5, title: "Memory Management", desc: "Background garbage collection" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center space-y-3 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center text-sm font-semibold mx-auto transition-colors">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-primary/20 transform translate-x-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground">Technical Architecture</h2>
            <p className="text-xl text-muted-foreground">
              Scalable, maintainable architecture designed for high-performance data processing
            </p>
          </div>

          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">System Architecture Overview</h3>
                  <p className="text-muted-foreground">
                    Complete data flow from backend services through frontend rendering with optimized state management
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uhdMm8eAbuqLZXLWSufKAaJ5H7IsSP.png"
                    alt="Observatory Dashboard System Architecture - showing backend services, frontend application, data layer, and state management flow"
                    className="w-full h-auto rounded-lg border border-border hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {architectureDetails.map((detail, index) => (
              <Card key={index} className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{detail.title}</h3>
                  <p className="text-muted-foreground text-sm">{detail.description}</p>
                  <div className="space-y-2">
                    {detail.details.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 hover:bg-muted/50 p-2 rounded transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
