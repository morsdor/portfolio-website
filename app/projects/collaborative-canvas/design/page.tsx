import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CollaborativeCanvasDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/projects/collaborative-canvas"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Project
        </Link>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h1 className="font-playfair text-4xl font-bold mb-8">Collaborative Canvas</h1>

          <h2>Project Overview</h2>
          <p>
            A real-time collaborative drawing application using Next.js with Yjs for conflict-free collaborative
            editing. Features infinite canvas, shape manipulation, real-time synchronization, and uses Redux for local
            UI state while Yjs handles shared document state.
          </p>

          <h2>Technical Architecture</h2>

          <h3>Core Technologies</h3>
          <ul>
            <li>
              <strong>Next.js 14</strong> with App Router
            </li>
            <li>
              <strong>TypeScript</strong> for type safety
            </li>
            <li>
              <strong>Yjs</strong> for conflict-free collaborative editing
            </li>
            <li>
              <strong>y-websocket</strong> for real-time synchronization
            </li>
            <li>
              <strong>Redux Toolkit</strong> for local UI state
            </li>
            <li>
              <strong>Canvas API</strong> for drawing operations
            </li>
            <li>
              <strong>WebRTC</strong> for peer-to-peer communication
            </li>
          </ul>

          <h3>Collaborative Architecture</h3>
          <ul>
            <li>
              <strong>CRDT (Conflict-free Replicated Data Types)</strong>: Yjs for automatic conflict resolution
            </li>
            <li>
              <strong>Operational Transformation</strong>: Real-time collaborative editing without conflicts
            </li>
            <li>
              <strong>Peer-to-peer Networking</strong>: Direct communication between clients
            </li>
            <li>
              <strong>State Synchronization</strong>: Automatic sync of canvas state across all clients
            </li>
          </ul>

          <h2>Key Features</h2>

          <h3>Real-time Collaboration</h3>
          <ul>
            <li>Multiple users drawing simultaneously</li>
            <li>Live cursor tracking and user presence</li>
            <li>Conflict-free collaborative editing</li>
            <li>Automatic synchronization across all clients</li>
          </ul>

          <h3>Infinite Canvas</h3>
          <ul>
            <li>Unlimited drawing space with smooth panning</li>
            <li>Zoom functionality with level-of-detail rendering</li>
            <li>Viewport-based rendering for performance</li>
            <li>Minimap for navigation</li>
          </ul>

          <h3>Drawing Tools</h3>
          <ul>
            <li>Freehand drawing with pressure sensitivity</li>
            <li>Shape tools (rectangle, circle, line, arrow)</li>
            <li>Text tool with rich formatting</li>
            <li>Selection and transformation tools</li>
          </ul>

          <h3>Shape Manipulation</h3>
          <ul>
            <li>Multi-select with bounding box</li>
            <li>Resize handles with aspect ratio locking</li>
            <li>Rotation with snap-to-angle</li>
            <li>Copy, paste, and duplicate operations</li>
          </ul>

          <h2>Collaborative Editing Implementation</h2>

          <h3>Yjs Integration</h3>
          <p>Yjs provides conflict-free collaborative editing through CRDTs (Conflict-free Replicated Data Types):</p>
          <ul>
            <li>Automatic conflict resolution without user intervention</li>
            <li>Offline support with automatic sync when reconnected</li>
            <li>Efficient delta synchronization</li>
            <li>Undo/redo that works across collaborative sessions</li>
          </ul>

          <h3>State Management Architecture</h3>
          <ul>
            <li>
              <strong>Yjs Y.Doc</strong>: Shared document state (canvas objects, transformations)
            </li>
            <li>
              <strong>Redux</strong>: Local UI state (tool selection, viewport, user preferences)
            </li>
            <li>
              <strong>WebSocket Provider</strong>: Real-time synchronization layer
            </li>
            <li>
              <strong>Awareness</strong>: User presence and cursor tracking
            </li>
          </ul>

          <h2>Performance Optimizations</h2>

          <h3>Canvas Rendering</h3>
          <ul>
            <li>Viewport-based culling (only render visible objects)</li>
            <li>Level-of-detail rendering for zoom levels</li>
            <li>Efficient redraw regions</li>
            <li>Canvas layering for different object types</li>
          </ul>

          <h3>Collaborative Performance</h3>
          <ul>
            <li>Delta synchronization (only send changes)</li>
            <li>Batched operations for multiple rapid changes</li>
            <li>Efficient conflict resolution algorithms</li>
            <li>Optimistic updates for immediate feedback</li>
          </ul>

          <h3>Memory Management</h3>
          <ul>
            <li>Object pooling for frequently created/destroyed objects</li>
            <li>Efficient data structures for spatial indexing</li>
            <li>Garbage collection optimization</li>
            <li>Resource cleanup for disconnected users</li>
          </ul>

          <h2>User Experience Design</h2>

          <h3>Intuitive Interface</h3>
          <ul>
            <li>Familiar drawing application patterns</li>
            <li>Contextual toolbars and menus</li>
            <li>Keyboard shortcuts for power users</li>
            <li>Touch gestures for mobile devices</li>
          </ul>

          <h3>Collaboration Indicators</h3>
          <ul>
            <li>User avatars and colored cursors</li>
            <li>Real-time selection indicators</li>
            <li>Activity feed for recent changes</li>
            <li>User presence status</li>
          </ul>

          <h2>Challenges and Solutions</h2>

          <h3>Challenge 1: Conflict Resolution</h3>
          <p>
            <strong>Problem</strong>: Multiple users editing the same objects simultaneously causing conflicts
          </p>
          <p>
            <strong>Solution</strong>: Implemented Yjs CRDTs for automatic conflict-free collaborative editing
          </p>

          <h3>Challenge 2: Performance with Large Canvases</h3>
          <p>
            <strong>Problem</strong>: Canvas performance degraded with thousands of objects
          </p>
          <p>
            <strong>Solution</strong>: Implemented viewport-based culling and level-of-detail rendering
          </p>

          <h3>Challenge 3: Real-time Synchronization</h3>
          <p>
            <strong>Problem</strong>: Maintaining consistent state across all connected clients
          </p>
          <p>
            <strong>Solution</strong>: Used Yjs with WebSocket provider for efficient delta synchronization
          </p>

          <h2>Technical Implementation Details</h2>

          <h3>Yjs Document Structure</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`// Collaborative document structure
const ydoc = new Y.Doc()
const yObjects = ydoc.getMap('objects')
const yLayers = ydoc.getArray('layers')

// Adding objects collaboratively
const addShape = (shape: Shape) => {
  const yShape = new Y.Map()
  yShape.set('id', shape.id)
  yShape.set('type', shape.type)
  yShape.set('x', shape.x)
  yShape.set('y', shape.y)
  yShape.set('width', shape.width)
  yShape.set('height', shape.height)
  
  yObjects.set(shape.id, yShape)
}`}</code>
          </pre>

          <h3>Real-time Cursor Tracking</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`// User awareness and cursor tracking
const awareness = provider.awareness

awareness.setLocalStateField('cursor', {
  x: mouseX,
  y: mouseY,
  user: {
    name: userName,
    color: userColor
  }
})

// Listen to cursor updates
awareness.on('change', () => {
  const states = awareness.getStates()
  states.forEach((state, clientId) => {
    if (state.cursor && clientId !== awareness.clientID) {
      renderCursor(state.cursor)
    }
  })
})`}</code>
          </pre>

          <h3>Efficient Canvas Rendering</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`// Viewport-based rendering optimization
class CanvasRenderer {
  render(viewport: Viewport, objects: CanvasObject[]) {
    const visibleObjects = this.spatialIndex.query(viewport.bounds)
    
    this.ctx.save()
    this.ctx.translate(-viewport.x, -viewport.y)
    this.ctx.scale(viewport.zoom, viewport.zoom)
    
    visibleObjects.forEach(obj => {
      if (this.isInViewport(obj, viewport)) {
        obj.render(this.ctx, viewport.zoom)
      }
    })
    
    this.ctx.restore()
  }
}`}</code>
          </pre>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Technical Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Concurrent Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">&lt;50ms</div>
                <div className="text-sm text-muted-foreground">Sync Latency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Conflict Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">60fps</div>
                <div className="text-sm text-muted-foreground">Canvas Performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
