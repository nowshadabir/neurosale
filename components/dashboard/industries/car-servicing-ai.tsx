"use client";

import { useState } from "react";
import {
  TrendingUp,
  Brain,
  Zap,
  ArrowRight,
  Package,
  Users,
  Target,
  RefreshCcw,
  Sparkles,
  CloudRain,
  Sun,
  AlertCircle,
  ChevronUp,
  LineChart,
  Bot,
  PlusCircle,
  Timer,
  ChevronDown,
  UserCog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CarServicingAI() {
  const [forecastDays, setForecastDays] = useState(30);
  const [extraBays, setExtraBays] = useState(0);

  const inventoryPredictions = [
    { part: "Mobile 1 (5W-30) Oil", emoji: "🛢️", stockOut: "4 days", savings: "12%", status: "critical" },
    { part: "Semi-Metallic Brake Pads", emoji: "🛑", stockOut: "9 days", savings: "8%", status: "warning" },
    { part: "High-Flow Oil Filters", emoji: "🧪", stockOut: "12 days", savings: "15%", status: "recommend" },
  ];

  const highProbabilityReturns = [
    { name: "Nowshad Abir", vehicle: "Toyota Premio-G", probability: "96%", reason: "Last Service: 4.2 mo ago" },
    { name: "Tahmid Hasan", vehicle: "Honda Civic-RS", probability: "89%", reason: "Brake service interval reached" },
    { name: "Zubair Khan", vehicle: "Mitsubishi Montero", probability: "84%", reason: "60k KM milestone approaching" },
  ];

  const projectedRevenue = 842000 + (extraBays * 125000);

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both">
          <div className="flex items-center gap-2 text-sky-600">
            <Brain className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Advanced Intelligence</span>
          </div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900">AI Service Forecasting</h1>
        </div>
        <div className="flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both">
          <div className="flex rounded-xl bg-zinc-100 p-1">
            {[7, 14, 30].map((d) => (
              <button
                key={d}
                onClick={() => setForecastDays(d)}
                className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                  forecastDays === d ? "bg-white text-sky-600 shadow-sm" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {d}D
              </button>
            ))}
          </div>
          <Button className="h-10 gap-2 rounded-xl bg-zinc-900 px-5 text-white shadow-xl hover:bg-zinc-800">
            <RefreshCcw className="h-4 w-4" />
            Recalculate
          </Button>
        </div>
      </div>

      {/* Main Crystal Ball Chart */}
      <Card className="overflow-hidden border-zinc-200/80 bg-white shadow-xl shadow-zinc-200/30 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both">
        <CardHeader className="flex flex-row items-center border-b border-zinc-100 bg-zinc-50/50 pb-4">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold">Demand Frequency Forecasting</CardTitle>
            <p className="text-xs text-zinc-500">Projected vehicle footfall based on weather, trends, and history</p>
          </div>
          <div className="flex items-center gap-6 text-right">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Confidence Score</p>
              <div className="flex items-center gap-1.5 justify-end">
                <span className="text-xl font-bold text-emerald-600">88%</span>
                <Sparkles className="h-4 w-4 text-emerald-500 animate-pulse" />
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Current Trend</p>
              <div className="flex items-center gap-1.5 justify-end text-sky-600">
                <span className="text-xl font-bold">High Demand</span>
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative h-[360px] w-full p-8">
            {/* Legend & Weather Tooltips */}
            <div className="absolute right-12 top-12 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-3 shadow-lg backdrop-blur-md animate-in fade-in slide-in-from-right-4 delay-500 fill-mode-both">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                  <CloudRain className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Tuesday, 4th May</p>
                  <p className="text-xs font-bold text-zinc-900">Heavy Rain Projected</p>
                  <p className="text-[10px] text-sky-600">+12% Brake Check Demand</p>
                </div>
              </div>
            </div>

            {/* Simulated Large Line Chart */}
            <svg viewBox="0 0 1000 300" className="h-full w-full overflow-visible">
              <defs>
                <linearGradient id="crystalBallGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Guides */}
              <line x1="0" y1="0" x2="1000" y2="0" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="100" x2="1000" y2="100" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="200" x2="1000" y2="200" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="300" x2="1000" y2="300" stroke="#f1f5f9" strokeWidth="1" />
              
              {/* Main Forecast Path */}
              <path
                d="M 0 250 Q 150 180 300 220 T 600 80 T 1000 120"
                fill="none"
                stroke="#0284c7"
                strokeWidth="5"
                strokeLinecap="round"
                className="animate-in fade-in zoom-in-y duration-[2s] delay-300 fill-mode-both"
              />
              <path
                d="M 0 250 Q 150 180 300 220 T 600 80 T 1000 120 V 300 H 0 Z"
                fill="url(#crystalBallGradient)"
                className="animate-in fade-in duration-[2s] delay-400 fill-mode-both"
              />

              {/* Data Points */}
              <circle cx="300" cy="220" r="5" fill="#0284c7" className="animate-ping" stroke="white" strokeWidth="2" />
              <circle cx="600" cy="80" r="5" fill="#0284c7" stroke="white" strokeWidth="2" />
            </svg>

            <div className="mt-8 flex justify-between px-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              <span>Current</span>
              <span>7 Days Out</span>
              <span>15 Days Out</span>
              <span>Peak Demand Window</span>
              <span>30 Days (End)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inventory Intelligence */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-bold text-zinc-900">Smart Inventory Predictions</h3>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-600">Preventing Stock-outs</span>
          </div>
          <div className="grid gap-4">
            {inventoryPredictions.map((item, i) => (
              <Card key={item.part} className="group relative overflow-hidden border-zinc-200/80 bg-white transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 text-2xl shadow-inner group-hover:scale-110 transition-transform">
                      {item.emoji}
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{item.part}</h4>
                      <p className="mt-1 text-xs text-zinc-500">
                        Predicted Stock-out in <span className="font-bold text-red-500">{item.stockOut}</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">Bulk-Buy Margin</p>
                    <p className="mt-1.5 text-lg font-bold text-emerald-600">Save {item.savings}</p>
                    <Button variant="ghost" size="sm" className="mt-2 h-8 gap-1.5 text-xs font-bold text-sky-600 hover:bg-sky-50">
                      Order Now
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
                {item.status === 'critical' && (
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-red-500" />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Predictive CRM */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-bold text-zinc-900">High-Probability Return List</h3>
            <Users className="h-5 w-5 text-sky-600" />
          </div>
          <Card className="border-zinc-200/80 bg-white shadow-sm animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both">
            <CardContent className="p-0">
              <div className="divide-y divide-zinc-50">
                {highProbabilityReturns.map((client, i) => (
                  <div key={client.name} className="flex items-center justify-between p-5 transition-colors hover:bg-zinc-50/50">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-sky-500/20 bg-sky-50 text-xs font-bold text-sky-600">
                        {client.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-900">{client.name}</p>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">{client.vehicle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="text-sm font-bold text-zinc-900">{client.probability}</span>
                        <div className="h-2 w-8 overflow-hidden rounded-full bg-zinc-100">
                          <div className="h-full bg-emerald-500" style={{ width: client.probability }} />
                        </div>
                      </div>
                      <p className="mt-1 text-[10px] font-medium text-zinc-400">{client.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-100 p-4">
                <Button variant="outline" className="w-full h-10 gap-2 rounded-xl text-sky-600 hover:bg-sky-50 border-sky-100">
                  <Zap className="h-4 w-4" />
                  Automated Outreach Campaign
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-red-50/50 p-6 animate-in fade-in slide-in-from-right-4 duration-500 delay-500 fill-mode-both">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-500 shadow-sm shadow-red-100">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900">Churn Warning</h4>
                <p className="text-xs text-zinc-500">12 customers haven't visited in 12+ months</p>
              </div>
              <Button variant="link" className="ml-auto text-xs font-bold text-red-600">View List</Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Revenue & Labor Optimization */}
        <Card className="lg:col-span-2 overflow-hidden border-zinc-200/80 bg-white shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both leading-relaxed">
          <CardHeader className="flex flex-row items-center justify-between border-b border-zinc-100 bg-zinc-50/20 py-4">
            <CardTitle className="text-base font-bold">Labor & Resource Optimization</CardTitle>
            <Timer className="h-4 w-4 text-sky-600" />
          </CardHeader>
          <CardContent className="grid gap-8 p-8 md:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Staffing Suggestion</p>
              <div className="mt-3 flex gap-4 rounded-2xl bg-sky-50 px-4 py-5 border border-sky-100/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm shadow-sky-100">
                  <UserCog className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 leading-tight">High Engine-Work Demand Expected (Tue-Wed)</p>
                  <p className="mt-2 text-xs text-sky-700 leading-relaxed">
                    Reassign <span className="font-bold underline decoration-sky-300">Technician Abir</span> from general service to optimize throughput by <span className="font-bold">14.2%</span>.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Dynamic Pricing Slots</p>
                <div className="flex items-center justify-between rounded-xl border border-dashed border-zinc-200 p-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                    <span className="text-xs font-medium text-zinc-600">Slow window detected: Wednesday</span>
                  </div>
                  <span className="text-[10px] font-bold text-sky-600 uppercase cursor-pointer hover:underline">Apply 10% Discount</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">What-If Revenue Simulator</p>
              <div className="rounded-2xl bg-zinc-900 p-6 text-white shadow-2xl">
                <div className="flex justify-between">
                  <span className="text-xs text-zinc-400">Current Monthly Projection</span>
                  <p className="text-sm font-bold">৳ 8.42L</p>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-sky-400">
                    <span>Add Service Bays</span>
                    <span>+{extraBays} Bays</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={extraBays}
                    onChange={(e) => setExtraBays(parseInt(e.target.value))}
                    className="w-full h-1.5 rounded-full bg-zinc-800 accent-sky-500 outline-none cursor-pointer"
                  />
                  <div className="mt-6 border-t border-white/10 pt-4 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">New Potential Revenue</p>
                      <p className="text-2xl font-bold tracking-tighter text-sky-400">৳ {(projectedRevenue / 100000).toFixed(2)}L</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-emerald-500 leading-none">+{((extraBays * 125000 / 842000) * 100).toFixed(0)}% Lift</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Goal Tracking */}
        <div className="flex flex-col gap-6">
          <Card className="flex-1 overflow-hidden border-0 bg-[linear-gradient(225deg,#0284c7_0%,#0369a1_100%)] p-8 text-white shadow-xl shadow-sky-900/20 animate-in fade-in slide-in-from-right-6 duration-700 delay-500 fill-mode-both">
            <div className="mb-8 flex items-center justify-between">
              <h4 className="font-bold uppercase tracking-widest text-sky-100/50 text-xs">Revenue Goal Tracking</h4>
              <Target className="h-5 w-5 text-sky-200" />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-end justify-between text-white">
                  <div>
                    <p className="text-xs text-sky-100/60">Target: ৳ 10.0L</p>
                    <p className="text-3xl font-bold tracking-tighter">On Track</p>
                  </div>
                  <span className="text-sm font-bold bg-white/20 px-2 py-0.5 rounded-lg">84%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full bg-white animate-in slide-in-from-left duration-[3s]" style={{ width: '84%' }} />
                </div>
              </div>
              <p className="text-xs text-sky-100/70 leading-relaxed">
                <Sparkles className="inline h-3 w-3 mr-1" />
                AI projection suggests you'll hit this target by May 28th if current service volume persists.
              </p>
            </div>
          </Card>

          <Card className="border-zinc-200/80 bg-white p-6 animate-in fade-in slide-in-from-right-6 duration-700 delay-700 fill-mode-both hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">AI Daily Suggestion</p>
                <p className="text-sm font-bold text-zinc-900">Send "Brake Service" reminder to 42 fleet vehicles now.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
