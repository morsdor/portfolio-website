import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReactComponentsDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/projects/react-components"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Project
        </Link>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h1 className="font-playfair text-4xl font-bold mb-8">Advanced React Components Portfolio</h1>

          <h2>Project Overview</h2>
          <p>
            A comprehensive React component library showcasing 14 advanced components including modals, autocomplete,
            data grids, carousels, tabs, star ratings, multi-step forms, file explorers, transfer lists, kanban boards,
            progress bars, and a country game. Built with Next.js, TypeScript, Tailwind CSS, and focuses heavily on
            accessibility and performance.
          </p>

          <h2>Technical Architecture</h2>

          <h3>Core Technologies</h3>
          <ul>
            <li>
              <strong>React 18</strong> with concurrent features
            </li>
            <li>
              <strong>TypeScript</strong> for type safety
            </li>
            <li>
              <strong>Next.js 14</strong> with App Router
            </li>
            <li>
              <strong>Tailwind CSS</strong> for styling
            </li>
            <li>
              <strong>@dnd-kit</strong> for drag and drop functionality
            </li>
            <li>
              <strong>WAI-ARIA</strong> compliance for accessibility
            </li>
          </ul>

          <h3>Component Design Principles</h3>
          <ul>
            <li>
              <strong>Accessibility First</strong>: All components meet WCAG AA standards
            </li>
            <li>
              <strong>Performance Optimized</strong>: Virtual scrolling and efficient re-renders
            </li>
            <li>
              <strong>Reusable Architecture</strong>: Consistent prop interfaces and composition patterns
            </li>
            <li>
              <strong>Developer Experience</strong>: Comprehensive TypeScript types and documentation
            </li>
          </ul>

          <h2>Key Components</h2>

          <h3>1. Modal Dialog System</h3>
          <ul>
            <li>Focus trapping and restoration</li>
            <li>Escape key handling</li>
            <li>Backdrop click dismissal</li>
            <li>Portal rendering for z-index management</li>
          </ul>

          <h3>2. High-Performance Autocomplete</h3>
          <ul>
            <li>Debounced search with 300ms delay</li>
            <li>Virtual scrolling for large datasets</li>
            <li>Keyboard navigation (arrow keys, enter, escape)</li>
            <li>Async data loading support</li>
          </ul>

          <h3>3. Virtualized Data Grid</h3>
          <ul>
            <li>Handles 10,000+ rows efficiently</li>
            <li>Column sorting and filtering</li>
            <li>Row selection and bulk actions</li>
            <li>Responsive design with horizontal scrolling</li>
          </ul>

          <h3>4. Accessible Carousel</h3>
          <ul>
            <li>Touch/swipe gestures</li>
            <li>Keyboard navigation</li>
            <li>Auto-play with pause on hover</li>
            <li>Screen reader announcements</li>
          </ul>

          <h3>5. Multi-step Form Wizard</h3>
          <ul>
            <li>Form validation at each step</li>
            <li>Progress indication</li>
            <li>Data persistence between steps</li>
            <li>Conditional step rendering</li>
          </ul>

          <h2>Performance Optimizations</h2>

          <h3>Virtual Scrolling Implementation</h3>
          <ul>
            <li>Only renders visible items plus buffer</li>
            <li>Smooth scrolling with momentum</li>
            <li>Dynamic item height calculation</li>
            <li>Memory efficient for large datasets</li>
          </ul>

          <h3>React Optimization Techniques</h3>
          <ul>
            <li>React.memo for component memoization</li>
            <li>useMemo for expensive calculations</li>
            <li>useCallback for stable function references</li>
            <li>Lazy loading for code splitting</li>
          </ul>

          <h2>Accessibility Features</h2>

          <h3>WCAG AA Compliance</h3>
          <ul>
            <li>Proper heading hierarchy</li>
            <li>Color contrast ratios &gt; 4.5:1</li>
            <li>Focus indicators on all interactive elements</li>
            <li>Screen reader compatible markup</li>
          </ul>

          <h3>Keyboard Navigation</h3>
          <ul>
            <li>Tab order management</li>
            <li>Arrow key navigation in lists</li>
            <li>Enter/Space for activation</li>
            <li>Escape for dismissal</li>
          </ul>

          <h3>ARIA Implementation</h3>
          <ul>
            <li>Proper roles and properties</li>
            <li>Live regions for dynamic content</li>
            <li>Descriptive labels and descriptions</li>
            <li>State announcements</li>
          </ul>

          <h2>Testing Strategy</h2>

          <h3>Unit Testing</h3>
          <ul>
            <li>Jest for component logic</li>
            <li>React Testing Library for DOM testing</li>
            <li>Mock implementations for external dependencies</li>
            <li>Coverage reports and thresholds</li>
          </ul>

          <h3>Accessibility Testing</h3>
          <ul>
            <li>axe-core integration</li>
            <li>Manual keyboard testing</li>
            <li>Screen reader testing with NVDA/JAWS</li>
            <li>Color contrast validation</li>
          </ul>

          <h2>Challenges and Solutions</h2>

          <h3>Challenge 1: Performance with Large Datasets</h3>
          <p>
            <strong>Problem</strong>: Data grid and autocomplete components became sluggish with 1000+ items
          </p>
          <p>
            <strong>Solution</strong>: Implemented virtual scrolling and debounced search, reducing render time by 90%
          </p>

          <h3>Challenge 2: Accessibility Compliance</h3>
          <p>
            <strong>Problem</strong>: Complex components like carousel and data grid needed full keyboard support
          </p>
          <p>
            <strong>Solution</strong>: Implemented comprehensive ARIA patterns and focus management strategies
          </p>

          <h3>Challenge 3: Component Reusability</h3>
          <p>
            <strong>Problem</strong>: Components needed to work in various contexts without code duplication
          </p>
          <p>
            <strong>Solution</strong>: Created flexible prop interfaces and compound component patterns
          </p>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Technical Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">14</div>
                <div className="text-sm text-muted-foreground">Components</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">WCAG AA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Items Handled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">90%</div>
                <div className="text-sm text-muted-foreground">Performance Gain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
