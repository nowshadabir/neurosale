import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 py-16 md:px-10">
      <header className="space-y-2">
        <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Next.js + Node Backend + SQL
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Neurosale starter is ready
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          This project uses Next.js App Router, Shadcn UI components, and Prisma
          for SQL access from Node runtime API routes.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Lead Intake Form</CardTitle>
            <CardDescription>
              Starter UI with Shadcn components. Wire this form to POST
              /api/leads.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Ava Patel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="ava@acme.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                placeholder="Acme Industries"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Lead</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Backend Endpoints</CardTitle>
            <CardDescription>
              Node runtime API routes are ready for server-side logic.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">GET</span> /api/health
            </p>
            <p>
              <span className="font-medium text-foreground">GET</span> /api/leads
            </p>
            <p>
              <span className="font-medium text-foreground">POST</span> /api/leads
            </p>
            <p className="pt-2">
              Configure your SQL database URL in .env and run Prisma migrations
              before using the leads endpoints.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground">
        Quick start: npm run prisma:generate, npm run prisma:migrate, npm run dev
      </section>
    </main>
  );
}
