import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Play, Users, Zap, GitBranch, Layers } from 'lucide-react'
import Link from "next/link"
import { MarkdownReader } from "@/components/markdown-reader"

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

  const designDocument = `# Collaborative Canvas - Real-time Drawing Application

## Project Overview
A real-time collaborative drawing application using Next.js with Yjs for conflict-free collaborative editing. Features infinite canvas, shape manipulation, real-time synchronization, and uses Redux for local UI state while Yjs handles shared document state.

## Technical Architecture

### Core Technologies
- **Next.js 15** with App Router for modern React features
- **TypeScript** for comprehensive type safety
- **Yjs** for Conflict-free Replicated Data Types (CRDT)
- **Redux Toolkit** for local UI state management
- **Canvas API** for high-performance shape rendering
- **WebSocket** via y-websocket for real-time synchronization
- **shadcn/ui** for consistent UI components

### State Management Architecture

#### Dual State System
The application uses a sophisticated dual-state architecture that separates concerns between collaborative and local state:

**Shared Document State (Yjs)**
- Shape positions, dimensions, colors, and properties
- Shape hierarchy and grouping relationships
- Layer ordering and visibility states
- Document metadata and settings
- Collaborative undo/redo history

**Local UI State (Redux)**
- Tool selection and configuration
- Viewport position and zoom level
- Drag states and temporary interactions
- UI panel states and preferences
- Selection states and multi-selection

#### CRDT Implementation
Yjs provides conflict-free collaborative editing through:
- **Automatic Conflict Resolution**: No manual merge conflicts
- **Causal Consistency**: Operations maintain logical order
- **Efficient Synchronization**: Only deltas are transmitted
- **Offline Support**: Changes sync when connection restored

## Real-time Collaboration Features

### Multi-user Editing
- **Simultaneous Editing**: Multiple users can edit without conflicts
- **Real-time Cursors**: See other users' cursor positions and selections
- **User Presence**: Visual indicators of active collaborators
- **Collaborative Selection**: See what others have selected
- **Live Updates**: Changes appear instantly across all clients

### Conflict Resolution
- **Automatic Merging**: Yjs handles all conflicts automatically
- **Intention Preservation**: User intentions are maintained during merges
- **Causal Ordering**: Operations are applied in logical order
- **Rollback Protection**: No data loss during network issues

### Advanced Collaboration
- **Collaborative Undo/Redo**: Undo operations work across users
- **Presence Awareness**: Track user activity and focus
- **Permission System**: Control who can edit vs view
- **Session Management**: Handle user joins/leaves gracefully

## Canvas and Shape System

### Infinite Canvas
- **Viewport Management**: Smooth pan and zoom interactions
- **Coordinate Systems**: Efficient world-to-screen transformations
- **Culling**: Only render shapes in visible area
- **Performance**: Maintain 60fps even with thousands of shapes

### Shape Manipulation
- **Multi-selection**: Select and manipulate multiple shapes
- **Grouping**: Create hierarchical shape relationships
- **Transform Handles**: Resize, rotate, and move shapes
- **Snapping**: Align shapes with guides and grids
- **Layering**: Z-index management with drag reordering

### Shape Types
- **Basic Shapes**: Rectangles, circles, lines, polygons
- **Text Objects**: Rich text with formatting options
- **Images**: Raster image support with transformations
- **Custom Shapes**: Extensible shape system for new types

## Performance Optimizations

### Rendering Performance
- **Canvas Optimization**: Direct Canvas API for maximum speed
- **Dirty Rectangle**: Only redraw changed areas
- **Object Pooling**: Reuse shape instances to reduce GC
- **RAF Scheduling**: Smooth animations with requestAnimationFrame

### Memory Management
- **Efficient Data Structures**: Optimized shape storage
- **Garbage Collection**: Proper cleanup of removed shapes
- **Memory Monitoring**: Track usage and optimize automatically
- **Lazy Loading**: Load shape data only when needed

### Network Optimization
- **Delta Synchronization**: Only send changes, not full state
- **Compression**: Efficient encoding of shape data
- **Batching**: Group multiple operations for efficiency
- **Reconnection**: Automatic recovery from network issues

## Challenges and Solutions

### Challenge 1: State Synchronization
**Problem**: Keeping collaborative and local state in sync without conflicts
**Solution**: Clear separation of concerns with Yjs for shared state and Redux for local UI state

### Challenge 2: Performance with Collaboration
**Problem**: Maintaining smooth interactions while synchronizing changes
**Solution**: Optimistic updates with rollback capability and efficient delta synchronization

### Challenge 3: Complex Interactions
**Problem**: Multi-selection, grouping, and collaborative undo/redo complexity
**Solution**: Sophisticated event system with proper state isolation per user

### Challenge 4: Conflict-free Editing
**Problem**: Multiple users editing the same shapes simultaneously
**Solution**: Yjs CRDT automatically resolves conflicts while preserving user intentions

## Advanced Features

### Collaborative Tools
- **Real-time Multi-user Editing**: Simultaneous editing without conflicts
- **User Presence Indicators**: See who's online and where they're working
- **Collaborative Cursors**: Real-time cursor tracking across users
- **Shared Undo/Redo**: Undo operations work across all collaborators
- **Permission Management**: Control edit/view access per user

### Canvas Features
- **Infinite Canvas**: Unlimited workspace with smooth navigation
- **Shape Manipulation**: Move, resize, rotate with visual handles
- **Multi-selection**: Select and manipulate multiple objects
- **Grouping System**: Create hierarchical shape relationships
- **Layer Management**: Z-index control with drag reordering

### Performance Features
- **60fps Rendering**: Smooth interactions even with complex scenes
- **Memory Efficient**: Optimized for long collaborative sessions
- **Network Resilient**: Automatic reconnection and sync recovery
- **Offline Support**: Continue working during network interruptions

## Testing Strategy

### Collaboration Testing
- **Multi-user Scenarios**: Test with multiple simultaneous users
- **Network Simulation**: Test with poor connectivity and interruptions
- **Conflict Resolution**: Verify automatic conflict handling
- **Data Integrity**: Ensure no data loss during collaboration

### Performance Testing
- **Load Testing**: Test with thousands of shapes and multiple users
- **Memory Profiling**: Monitor for leaks during extended sessions
- **Rendering Benchmarks**: Maintain 60fps under various conditions
- **Network Efficiency**: Measure bandwidth usage and optimization

## Future Enhancements

### Planned Features
- **Voice/Video Chat**: Integrated communication for collaborators
- **Version History**: Timeline of document changes with restore points
- **Templates**: Pre-built canvas templates for common use cases
- **Export Options**: PDF, SVG, and image export functionality

### Technical Improvements
- **WebGL Rendering**: Hardware acceleration for complex scenes
- **Operational Transform**: Additional conflict resolution strategies
- **Mobile Optimization**: Touch-optimized interactions for tablets
- **Plugin System**: Extensible architecture for custom tools`

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

      {/* Action Buttons */}
      <section className="py-16 px-6 border-t border-border">
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
    </div>
  )
}
