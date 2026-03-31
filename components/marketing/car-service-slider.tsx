"use client";

import { useMemo, useState } from "react";
import {
  Car,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Package,
  Receipt,
  Settings,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const slides = [
  {
    icon: ClipboardList,
    title: "Job & Service Management",
    summary: "Track each vehicle from intake to delivery with bay-level visibility.",
    points: [
      "Create job cards with service notes",
      "Monitor active bays in real time",
      "Run quality check before handover",
      "Archive full job history",
    ],
  },
  {
    icon: Car,
    title: "Vehicle Directory",
    summary: "Keep full vehicle records searchable by VIN or plate number.",
    points: [
      "VIN and plate number lookup",
      "Maintenance timeline per vehicle",
      "Service reminders and follow-ups",
      "Corporate and fleet vehicle mapping",
    ],
  },
  {
    icon: Package,
    title: "Spare Parts Inventory",
    summary: "Manage parts stock across branches with intelligent replenishment.",
    points: [
      "Parts catalog with branch pricing",
      "Low-stock and reorder alerts",
      "Inter-branch transfer requests",
      "Multi-branch stock visibility",
    ],
  },
  {
    icon: Wrench,
    title: "Services & Labor",
    summary: "Control labor rates and service packages with precision.",
    points: [
      "Create predefined service packages",
      "Configure hourly labor rates",
      "Assign mechanics to tasks",
      "Track commission and overtime",
    ],
  },
  {
    icon: Receipt,
    title: "Sales & Billing",
    summary: "Deliver accurate estimates, invoices, and after-service warranty flows.",
    points: [
      "Generate invoices and quotations",
      "Handle warranty claim billing",
      "Manage returns and adjustments",
      "Connect job cards to accounts",
    ],
  },
  {
    icon: Settings,
    title: "Settings & Control",
    summary: "Run multi-branch service operations with tax and sync governance.",
    points: [
      "Configure multi-branch setup",
      "Manage tax and VAT rules",
      "Monitor offline sync status",
      "Role-based user permissions",
    ],
  },
];

export function CarServiceSlider() {
  const [index, setIndex] = useState(0);

  const totalSlides = slides.length;
  const active = useMemo(() => slides[index], [index]);
  const ActiveIcon = active.icon;

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm md:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-zinc-500 uppercase">
            Car Servicing Center Profile
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            Workflow Slider for Service Operations
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="bg-white"
            onClick={() => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="bg-white"
            onClick={() => setIndex((prev) => (prev + 1) % totalSlides)}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <Card className="border-sky-100 bg-[linear-gradient(160deg,#f8fcff_0%,#ffffff_100%)]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-zinc-900">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <ActiveIcon className="size-5" />
            </span>
            {active.title}
          </CardTitle>
          <p className="text-sm leading-relaxed text-zinc-600">{active.summary}</p>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 sm:grid-cols-2">
            {active.points.map((point) => (
              <li
                key={point}
                className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700"
              >
                {point}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setIndex(slideIndex)}
            className={`h-2.5 rounded-full transition-all ${
              slideIndex === index ? "w-7 bg-sky-600" : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Go to ${slide.title}`}
          />
        ))}
      </div>
    </section>
  );
}
