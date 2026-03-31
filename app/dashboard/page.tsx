"use client";

import Link from "next/link";
import {
  BadgeCheck,
  Bot,
  Building,
  Briefcase,
  Car,
  CreditCard,
  Database,
  Cog,
  FileText,
  LifeBuoy,
  Layers3,
  Network,
  Package,
  Receipt,
  Shield,
  Store,
  Users,
  UserCog,
  Wrench,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

const navSections = [
  {
    label: "Platform",
    modules: [
      {
        icon: Layers3,
        title: "SaaS Overview",
        items: ["Global KPIs", "Usage & Growth", "AI Activity Feed"],
      },
      {
        icon: Building,
        title: "Tenants & Workspaces",
        items: ["Businesses", "Branch Network", "Workspace Provisioning"],
      },
      {
        icon: Shield,
        title: "Security & Compliance",
        items: ["Access Policies", "Audit Logs", "Data Controls"],
      },
    ],
  },
  {
    label: "Operations",
    modules: [
      {
        icon: Network,
        title: "Multi-Branch Operations",
        items: ["Live Branch Status", "Cross-Branch Transfers", "Offline Sync"],
      },
      {
        icon: Store,
        title: "POS Workflows",
        items: ["Checkout Engine", "Returns & Exchanges", "Counter Health"],
      },
      {
        icon: Bot,
        title: "AI Intelligence",
        items: ["Forecasting", "Anomaly Alerts", "Recommendations"],
      },
      {
        icon: Database,
        title: "Catalog & Inventory",
        items: ["Products/Services", "Stock Visibility", "Procurement Flow"],
      },
    ],
  },
  {
    label: "Commercial",
    modules: [
      {
        icon: CreditCard,
        title: "Billing & Subscriptions",
        items: ["Plans", "Invoices", "Payment Methods"],
      },
      {
        icon: Briefcase,
        title: "Finance",
        items: ["Revenue", "Expenses", "Payout Tracking"],
      },
      {
        icon: Users,
        title: "Customer Success",
        items: ["Accounts", "Onboarding", "Renewals"],
      },
    ],
  },
  {
    label: "Profile Pack: Car Servicing",
    modules: [
      {
        icon: Wrench,
        title: "Job & Service Management",
        items: ["Job Cards", "Active Bays", "Quality Check", "Ready Delivery"],
      },
      {
        icon: Car,
        title: "Vehicles",
        items: ["Vehicle Directory", "Maintenance Reminders"],
      },
      {
        icon: Package,
        title: "Parts Inventory",
        items: ["Parts Catalog", "Stock Levels", "Reorder Alerts"],
      },
      {
        icon: Receipt,
        title: "Service Billing",
        items: ["Invoices", "Quotations", "Warranty Claims"],
      },
      {
        icon: UserCog,
        title: "Workshop Teams",
        items: ["Mechanic Assignments", "Commission", "System Roles"],
      },
      {
        icon: FileText,
        title: "Service Reports",
        items: ["Revenue by Mechanic", "Top Parts", "Profit & Loss"],
      },
    ],
  },
  {
    label: "Admin",
    modules: [
      {
        icon: Cog,
        title: "System Settings",
        items: ["Tax/VAT", "Integrations", "Feature Flags"],
      },
      {
        icon: LifeBuoy,
        title: "Support",
        items: ["Ticket Queue", "SLA Monitor", "Knowledge Base"],
      },
      {
        icon: BadgeCheck,
        title: "Release & Status",
        items: ["Deployment Health", "Incident Timeline", "Uptime 99.99%"],
      },
    ],
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto">
          <div className="mb-4 rounded-xl bg-sky-50 p-3">
            <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase">
              Neurosale SaaS Control
            </p>
            <p className="mt-1 text-sm text-zinc-700">
              Multi-business + multi-branch navigation architecture
            </p>
          </div>

          <nav className="space-y-4">
            {navSections.map((section) => (
              <div key={section.label}>
                <p className="mb-2 px-1 text-[0.68rem] font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                  {section.label}
                </p>
                <div className="space-y-2">
                  {section.modules.map((module) => {
                    const Icon = module.icon;
                    return (
                      <div key={module.title} className="rounded-xl border border-zinc-200/80 p-3">
                        <p className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                          <Icon className="size-4 text-sky-700" />
                          {module.title}
                        </p>
                        <ul className="mt-2 space-y-1">
                          {module.items.map((item) => (
                            <li
                              key={item}
                              className="rounded-md px-2 py-1 text-xs text-zinc-600 hover:bg-zinc-50"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase">
            SaaS Dashboard Preview
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
            Multi-Tenant Operations Workspace
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-600">
            The left navigation now follows SaaS information architecture with
            tenant controls, operations, billing, admin, and profile packs. It
            is ready for routing each module into dedicated screens next.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-xs text-zinc-500">Active Tenants</p>
              <p className="mt-2 text-2xl font-semibold text-zinc-900">18</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-xs text-zinc-500">Branches Online</p>
              <p className="mt-2 text-2xl font-semibold text-zinc-900">247</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-xs text-zinc-500">SLA Uptime</p>
              <p className="mt-2 text-2xl font-semibold text-zinc-900">99.99%</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/" className={buttonVariants()}>
              Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
