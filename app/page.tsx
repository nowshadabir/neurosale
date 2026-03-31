import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  CircuitBoard,
  Globe2,
  Layers3,
  LifeBuoy,
  MonitorSmartphone,
  Shield,
  Sparkles,
  Store,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CarServiceSlider } from "@/components/marketing/car-service-slider";

const featurePillars = [
  {
    icon: Layers3,
    title: "Multiple Businesses in One POS",
    description:
      "Manage separate companies, tax profiles, catalogs, and teams from one unified POS command center.",
  },
  {
    icon: Store,
    title: "Multi-Branch Intelligence",
    description:
      "Control pricing, inventory, permissions, and reporting branch-by-branch without losing centralized visibility.",
  },
  {
    icon: Bot,
    title: "AI-Integrated Operations",
    description:
      "Use AI-assisted forecasting, stock risk alerts, and smart recommendations to optimize sales and operations.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Everywhere",
    description:
      "From desktop counters to tablets and mobile devices, your POS workflows stay fast and fully responsive.",
  },
];

const modules = [
  "Lightning checkout with split and partial payments",
  "Real-time branch inventory and stock transfer",
  "Customer loyalty, wallet, and coupon engine",
  "Advanced discount governance and audit trails",
  "Supplier, purchase order, and GRN workflows",
  "Role-based access by business and branch",
  "Smart dashboards with AI-driven insights",
  "Accounting-friendly export and tax-ready reports",
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(2,132,199,0.18),transparent_34%),radial-gradient(circle_at_85%_2%,rgba(14,165,233,0.14),transparent_30%),linear-gradient(180deg,#f4fbff_0%,#f6f9ff_45%,#ffffff_100%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-14 md:px-10 md:py-20">
        <nav className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-900 shadow-sm">
            <CircuitBoard className="size-4 text-sky-600" />
            Neurosale POS
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Button variant="outline" className="bg-white">
              Contact Sales
            </Button>
            <Button className="bg-sky-600 text-white hover:bg-sky-700">Book Demo</Button>
          </div>
        </nav>

        <header className="animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase backdrop-blur-sm">
            <Sparkles className="size-3.5" />
            Bangladesh-first enterprise POS
          </div>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                The only POS in Bangladesh built for
                <span className="block text-sky-700">multiple businesses in one system</span>
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600">
                A modern, advanced, AI-integrated platform engineered for scale.
                Run every branch, every brand, and every checkout experience from
                one responsive command center.
              </p>

              <div className="grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
                <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white/80 px-3 py-2">
                  <Shield className="size-4 text-sky-700" />
                  99.99% platform uptime
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white/80 px-3 py-2">
                  <LifeBuoy className="size-4 text-sky-700" />
                  24/7 dedicated support
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white/80 px-3 py-2 sm:col-span-2">
                  <Globe2 className="size-4 text-sky-700" />
                  Multi-business, multi-branch, fully responsive
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="gap-2 bg-sky-600 text-white hover:bg-sky-700">
                  Start Enterprise Demo
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/90">
                  See All POS Features
                </Button>
              </div>
            </div>

            <Card className="animate-in fade-in slide-in-from-right-6 duration-900 border-0 bg-zinc-900 text-zinc-100 ring-zinc-300/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-zinc-50">
                  <Building2 className="size-5 text-sky-300" />
                  Live Multi-Business Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-zinc-300">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-zinc-800/80 p-3">
                    <p className="text-xs uppercase tracking-widest text-zinc-400">
                      Businesses
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-zinc-50">18</p>
                  </div>
                  <div className="rounded-lg bg-zinc-800/80 p-3">
                    <p className="text-xs uppercase tracking-widest text-zinc-400">
                      Branches
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-zinc-50">247</p>
                  </div>
                </div>
                <div className="rounded-lg border border-zinc-700 bg-zinc-800/60 p-3">
                  <p className="text-xs uppercase tracking-widest text-zinc-400">
                    Availability
                  </p>
                  <p className="mt-2 text-zinc-100">99.99% uptime SLA active</p>
                </div>
                <div className="rounded-lg border border-zinc-700 bg-zinc-800/60 p-3">
                  <p className="text-xs uppercase tracking-widest text-zinc-400">
                    AI status
                  </p>
                  <p className="mt-2 text-zinc-200">
                    Forecast confidence: 96.4% for next 14 days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          {[
            ["1 POS", "for many businesses"],
            ["AI", "integrated smart operations"],
            ["24/7", "human support team"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-zinc-200/80 bg-white/85 p-5 shadow-sm backdrop-blur-sm duration-700"
            >
              <p className="text-3xl font-semibold text-zinc-900">{value}</p>
              <p className="mt-1 text-sm text-zinc-600">{label}</p>
            </div>
          ))}
        </section>

        <CarServiceSlider />

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.15em] text-zinc-500 uppercase">
              Why Neurosale
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Advanced POS built for serious growth
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featurePillars.map((pillar) => (
              <Card key={pillar.title} className="border-zinc-200/80 bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-zinc-900">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                      <pillar.icon className="size-5" />
                    </span>
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-zinc-600">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:grid-cols-[1fr_1fr] md:p-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-zinc-500 uppercase">
              Core POS Suite
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900">
              Heavy-featured modules for enterprise retail and F&B
            </h3>
            <p className="mt-3 text-zinc-600">
              Built for high transaction volumes, strict governance, and
              branch-level complexity without slowing the frontline team.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
            {modules.map((module) => (
              <li key={module} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-sky-700" />
                <span>{module}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-sky-200 bg-[linear-gradient(140deg,#082f49_0%,#0c4a6e_45%,#075985_100%)] p-6 text-zinc-100 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-xs tracking-[0.15em] text-sky-200 uppercase">
                Launch Faster
              </p>
              <h4 className="mt-3 text-3xl font-semibold tracking-tight">
                Upgrade to Bangladesh&apos;s most advanced multi-business POS
              </h4>
              <p className="mt-3 max-w-xl text-sky-100">
                Migrate data, onboard teams, and go live with guided rollout,
                AI setup, and 24/7 support from day one.
              </p>
            </div>

            <form className="space-y-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <Input
                type="email"
                name="email"
                placeholder="work email"
                className="h-10 border-white/25 text-white placeholder:text-sky-100"
              />
              <Button className="w-full gap-2 bg-white text-sky-800 hover:bg-sky-100">
                Request Private Demo
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
