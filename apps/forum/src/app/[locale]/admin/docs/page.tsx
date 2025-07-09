/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/forum – Documentation Overview Page         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Main documentation landing page that provides an overview
 * of the entire Portuguese Forum monorepo structure and guides.
 *
 * Exports:
 *  - `DocsPage` → Default export for the overview page
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import Link from 'next/link';
import { DocsLayout } from '../../../../components/docs';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  Badge,
  Button,
} from '@pfsa/ui';
import { 
  BookOpenIcon, 
  CodeBracketIcon, 
  CogIcon, 
  DocumentTextIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Page Component
 * ───────────────────────────────────────────────────────────── */
export default function DocsPage() {
  return (
    <DocsLayout 
      title="Portuguese Forum Documentation" 
      description="Everything you need to know about the @pfsa/* monorepo"
    >
      {/* Quick Start Section */}
      <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <RocketLaunchIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Quick Start</h2>
            <p className="text-muted-foreground mb-4">
              Get up and running with the Portuguese Forum development environment in minutes.
            </p>
            <div className="flex gap-2">
              <Button variant="default" size="sm" asChild>
                <Link href="/admin/docs/getting-started/setup">Development Setup</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/admin/docs/getting-started/architecture">Architecture Overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Documentation Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpenIcon className="h-5 w-5" />
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              New to the project? Start here to understand the architecture and setup your development environment.
            </p>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/admin/docs/getting-started/setup">→ Development Setup</Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/admin/docs/getting-started/architecture">→ Architecture Overview</Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/admin/docs/getting-started/contributing">→ Contributing Guide</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CodeBracketIcon className="h-5 w-5" />
              Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Coding standards, testing guidelines, and development workflows for consistent code quality.
            </p>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/admin/docs/development/code-formatting">→ Code Formatting</Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/admin/docs/development/testing">→ Testing Standards</Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/admin/docs/development/git-workflow">→ Git Workflow</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CogIcon className="h-5 w-5" />
              Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Deep dive into the system architecture, component relationships, and technical decisions.
            </p>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/admin/docs/architecture/overview">→ System Overview</Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/admin/docs/architecture/apps">→ Apps Documentation</Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/admin/docs/architecture/libs">→ Libraries Documentation</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DocumentTextIcon className="h-5 w-5" />
              Project Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Current project status, technology stack, and recent updates.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium mb-2">Frontend Stack</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Next.js 15</Badge>
                  <Badge variant="outline">React 19</Badge>
                  <Badge variant="outline">Tailwind v4</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Backend Stack</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">Hono</Badge>
                  <Badge variant="secondary">MongoDB 6</Badge>
                  <Badge variant="secondary">Mongoose v8</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Development</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Nx 21.2.2</Badge>
                  <Badge variant="outline">pnpm 10</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Updates Section */}
      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          📈 Recent Updates
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Documentation system setup with MDX support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Fresh dependency installation completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Nx workspace structure established</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Code formatting standards documented</span>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 p-6 border border-border rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
        <p className="text-muted-foreground mb-4">
          If you&apos;re having trouble finding what you need, here are some quick resources:
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/docs/development/code-formatting">Code Standards</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/docs/getting-started/setup">Setup Guide</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/docs/architecture/overview">Architecture</Link>
          </Button>
        </div>
      </div>
    </DocsLayout>
  );
}