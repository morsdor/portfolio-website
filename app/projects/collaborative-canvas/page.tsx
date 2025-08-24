import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Play, Users, Zap, GitBranch, Layers } from "lucide-react"
import Link from "next/link"

export default function CollaborativeCanvasPage() {
  const challenges = [
    {
      icon: Users,
      title: "Real-time Collaboration",
      problem: "Enabling multiple users to edit simultaneously without conflicts or data loss",
      solution: "Implemented Yjs CRDT for conflict-free collaborative editing with automatic state synchronization",
    },
    {
      icon: GitBranch,
      title: "State Management Architecture",
      problem: "Separating collaborative document state from local UI state efficiently",
      solution: "Used Yjs for shared document state and Redux for local UI state with clear separation of concerns",
    },
    {
      icon: Layers,
      title: "Complex Shape Interactions",
      problem: "Handling multi-selection, grouping, and collaborative-aware undo/redo operations",
      solution: "Built sophisticated interaction system with proper event handling and state isolation per user",
    },
    {
      icon: Zap,
      title: "Performance with Collaboration",
      problem: "Maintaining smooth interactions while synchronizing changes across multiple clients",
      solution: "Optimized rendering with Canvas API and efficient change propagation using WebSocket",
    },
  ]

  const features = [
    "Real-time multi-user editing",
    "Conflict-free collaborative editing (CRDT)",
    "Shape manipulation (move, resize, rotate)",
    "Multi-selection and grouping",
    "Collaborative-aware undo/redo",
    "User presence indicators",
    "Infinite canvas with pan/zoom",
    "Shape hierarchy management",
    "Real-time cursor tracking",
    "Automatic conflict resolution",
  ]

  const technologies = [
    "Next.js 15",
    "TypeScript",
    "Yjs",
    "Redux Toolkit",
    "Canvas API",
    "WebSocket",
    "shadcn/ui",
    "Tailwind CSS",
    "y-websocket",
  ]

  const architecturePoints = [
    {
      title: "Shared Document State (Yjs)",
      description: "Shape positions, dimensions, colors, and hierarchy stored in conflict-free replicated data types",
    },
    {
      title: "Local UI State (Redux)",
      description: "Tool selection, viewport position, drag states, and UI panel states managed locally",
    },
    {
      title: "Real-time Synchronization",
      description: "WebSocket provider ensures all clients stay synchronized with automatic reconnection",
    },
    {
      title: "Performance Optimization",
      description: "Canvas rendering with efficient partial updates and virtualization for large canvases",
    },
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
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">Collaborative Canvas</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Real-time collaborative drawing application with conflict-free editing using Yjs CRDT, advanced state
              management, and seamless multi-user interactions on an infinite canvas.
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

      {/* Action Buttons */}
      <section className="py-8 px-6 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <ExternalLink className="mr-2 h-5 w-5" />
              Try Live Collaboration
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <GitBranch className="mr-2 h-5 w-5" />
              View Architecture Docs
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/projects/collaborative-canvas/design">
                <GitBranch className="mr-2 h-5 w-5" />
                View Design Document
              </Link>
            </Button>
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
                  <h3 className="text-xl font-semibold mb-2">Collaboration Demo</h3>
                  <p className="text-muted-foreground">
                    Watch multiple users collaborating in real-time without conflicts
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Collaboration Challenges */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">Collaboration Engineering</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solving complex distributed system challenges for seamless multi-user experiences
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

      {/* Architecture Deep Dive */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground">System Architecture</h2>
            <p className="text-xl text-muted-foreground">
              Sophisticated state separation and conflict resolution architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecturePoints.map((point, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground">Advanced Features</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive collaboration tools for professional creative workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-medium">{feature}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Achievements */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="font-playfair text-4xl font-bold text-foreground">Technical Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">0</div>
                <div className="text-muted-foreground">Conflicts with CRDT</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">∞</div>
                <div className="text-muted-foreground">Canvas size supported</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">Concurrent users tested</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
