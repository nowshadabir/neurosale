"use client";

import {
  TrendingUp,
  Wrench,
  Car,
  DollarSign,
  ChevronUp,
  ChevronDown,
  Calendar,
  Filter,
  Layers,
  ClipboardCheck,
  Zap,
  BarChart3,
  LineChart,
  PieChart,
  Users,
  Package,
  History,
} from "lucide-react";

export function CarServicingDashboard() {
  const powerStats = [
    {
      label: "Total Revenue",
      value: "৳ 2.45L",
      growth: "+14.8%",
      isPositive: true,
      timeframe: "vs. last month",
      icon: DollarSign,
      color: "sky",
    },
    {
      label: "Active Jobs",
      value: "24",
      growth: "+2 new",
      isPositive: true,
      timeframe: "currently in bays",
      icon: Wrench,
      color: "zinc",
    },
    {
      label: "Ready for Delivery",
      value: "08",
      growth: "-2 since 1hr",
      isPositive: false,
      timeframe: "awaiting pickup",
      icon: Car,
      color: "emerald",
    },
    {
      label: "Avg. Invoice Value",
      value: "৳ 12,400",
      growth: "+5.2%",
      isPositive: true,
      timeframe: "upselling parts",
      icon: TrendingUp,
      color: "indigo",
    },
  ];

  const jobsByStatus = [
    { label: "Pending", value: 35, color: "#94a3b8" },
    { label: "In-Progress", value: 45, color: "#0284c7" },
    { label: "QC/Testing", value: 15, color: "#10b981" },
    { label: "Completed", value: 5, color: "#cbd5e1" },
  ];

  const topTechnicians = [
    { name: "Abir Hassan", efficiency: "98%", status: "Active", completed: 42 },
    { name: "Rafiq Islam", efficiency: "94%", status: "Idle", completed: 38 },
    { name: "Sumit Sarkar", efficiency: "91%", status: "In-Job", completed: 35 },
    { name: "Niaz Ahmed", efficiency: "88%", status: "Active", completed: 31 },
  ];

  const lowStockAlerts = [
    { part: "Mobile 1 (5W-30) Oil", branch: "Main Branch", current: 12, threshold: 20 },
    { part: "Brake Pads (Toyota)", branch: "Uttara", current: 5, threshold: 15 },
    { part: "Oil Filter (Honda)", branch: "Main Branch", current: 3, threshold: 10 },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Header & Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both">
          Operations Overview
        </h1>
        <div className="flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both">
          <select className="h-10 rounded-xl border border-zinc-200 bg-white/50 px-3 text-sm font-medium outline-none ring-sky-600/20 transition-all hover:bg-white focus:ring-4">
            <option>All Branches</option>
            <option>Main Branch</option>
            <option>Uttara Branch</option>
            <option>Mirpur Hub</option>
          </select>
          <button className="flex h-10 items-center gap-2 rounded-xl border border-zinc-200 bg-white/50 px-4 text-sm font-medium hover:bg-white transition-all shadow-sm">
            <Filter className="h-4 w-4" />
            Last 30 Days
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Power Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {powerStats.map((stat, i) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-500/5 animate-in fade-in zoom-in-95 duration-700 fill-mode-both"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className={`rounded-2xl bg-sky-50 p-3 text-sky-600 ring-1 ring-sky-100 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${stat.isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {stat.isPositive ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                {stat.growth}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-zinc-500">{stat.label}</p>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{stat.value}</h3>
              <p className="mt-1 text-[10px] text-zinc-400 font-medium">{stat.timeframe}</p>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-zinc-50 transition-all duration-700 group-hover:scale-150 group-hover:bg-sky-50" />
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* Main Revenue Chart */}
        <div className="group rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/5 animate-in fade-in slide-in-from-left-6 duration-700 delay-300 fill-mode-both">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold text-zinc-900">Revenue Analysis</h3>
              <p className="text-xs text-zinc-500">Tracking income vs expenses flow</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-sky-600" />
                <span className="text-xs font-medium text-zinc-600">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-zinc-400" />
                <span className="text-xs font-medium text-zinc-600">Expenses</span>
              </div>
            </div>
          </div>
          {/* Simulated Line Chart */}
          <div className="relative h-[320px] w-full">
            <svg viewBox="0 0 1000 300" className="h-full w-full overflow-visible">
              <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              {[0, 1, 2, 3].map((val) => (
                <line key={val} x1="0" y1={val * 100} x2="1000" y2={val * 100} stroke="#f1f5f9" strokeWidth="1" />
              ))}
              {/* Path */}
              <path
                d="M 0 250 Q 150 200 300 180 T 600 100 T 1000 50"
                fill="none"
                stroke="#0284c7"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-in fade-in zoom-in-y duration-[2s] delay-700 fill-mode-both"
              />
              <path
                d="M 0 250 Q 150 200 300 180 T 600 100 T 1000 50 V 300 H 0 Z"
                fill="url(#incomeGradient)"
                className="animate-in fade-in duration-[2s] delay-700 fill-mode-both"
              />
              {/* Expense Path */}
              <path
                d="M 0 280 Q 200 250 400 240 T 800 200 T 1000 180"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-in fade-in duration-[2.5s] delay-700 fill-mode-both"
              />
            </svg>
            <div className="mt-6 flex justify-between px-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Job Status Donut */}
        <div className="group rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/5 animate-in fade-in slide-in-from-right-6 duration-700 delay-300 fill-mode-both text-center">
          <h3 className="text-lg font-bold text-zinc-900">Job Status Flow</h3>
          <p className="mt-1 text-xs text-zinc-500">Live workshop throughput</p>
          <div className="relative mx-auto mt-8 h-56 w-56">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
              {/* Simplistic Simulated Slices */}
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0284c7" strokeWidth="12" strokeDasharray="125 251" className="animate-in fade-in duration-1000 delay-1000 fill-mode-both" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="12" strokeDasharray="60 251" strokeDashoffset="-125" className="animate-in fade-in duration-1000 delay-1200 fill-mode-both" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#94a3b8" strokeWidth="12" strokeDasharray="66 251" strokeDashoffset="-185" className="animate-in fade-in duration-1000 delay-1400 fill-mode-both" />
            </svg>
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col">
              <span className="text-3xl font-bold text-zinc-900">24</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Total Jobs</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {jobsByStatus.map((status) => (
              <div key={status.label} className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: status.color }} />
                <span className="text-xs font-semibold text-zinc-600">{status.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Technician Productivity */}
        <div className="rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-zinc-900">Staff Productivity</h3>
            <Users className="h-5 w-5 text-sky-600" />
          </div>
          <div className="space-y-6">
            {topTechnicians.map((tech, i) => (
              <div key={tech.name} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-xs font-bold text-zinc-400">
                    {tech.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">{tech.name}</p>
                    <p className="text-[10px] text-zinc-400">{tech.completed} jobs completed</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-sky-600">{tech.efficiency}</span>
                  <p className={`text-[10px] font-medium leading-none ${tech.status === 'In-Job' ? 'text-amber-500' : 'text-emerald-500'}`}>{tech.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Intelligence */}
        <div className="rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-zinc-900">Low Stock Alerts</h3>
            <Package className="h-5 w-5 text-amber-500" />
          </div>
          <div className="space-y-5">
            {lowStockAlerts.map((item) => (
              <div key={item.part} className="rounded-2xl bg-zinc-50 p-4 transition-all hover:bg-zinc-100/80">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-zinc-700">{item.part}</p>
                  <span className="text-[10px] font-bold text-amber-600 underline cursor-pointer">Order Now</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">In Stock</p>
                    <p className="mt-1 text-sm font-bold text-zinc-900">{item.current} units</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">Threshold</p>
                    <p className="mt-1 text-sm font-bold text-red-500">{item.threshold}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI slots */}
        <div className="flex flex-col gap-6">
          <div className="flex-1 rounded-3xl bg-[linear-gradient(135deg,#0c4a6e_0%,#075985_100%)] p-8 text-white shadow-xl shadow-sky-900/20 animate-in fade-in slide-in-from-right-6 duration-700 delay-500 fill-mode-both">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300 ring-1 ring-white/20">
                <Zap className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold">AI Revenue Projection</h4>
                <p className="text-xs text-sky-100/60">Based on current service flow</p>
              </div>
            </div>
            <div className="mt-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-200/50">Projected Monthly Total</span>
              <div className="mt-2 text-4xl font-bold tracking-tighter">৳ 8.42L</div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-medium backdrop-blur-md">
                <TrendingUp className="h-3 w-3" />
                Probable 24% increase vs. month ago
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm animate-in fade-in slide-in-from-right-6 duration-700 delay-700 fill-mode-both">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Peak Hour Heatmap</h3>
              <Calendar className="h-4 w-4 text-zinc-400" />
            </div>
            <div className="mt-6 flex h-24 items-end gap-1.5">
              {[4, 2, 8, 5, 2, 4, 3, 7, 9, 4, 3, 6, 8, 3].map((val, i) => (
                <div 
                  key={i} 
                  className="w-full rounded-full bg-sky-100 transition-all duration-700 hover:bg-sky-600 animate-in fade-in slide-in-from-bottom-4 fill-mode-both" 
                  style={{ height: `${val * 10}%`, animationDelay: `${700 + i * 50}ms` }} 
                />
              ))}
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              <span>08 AM</span>
              <span>12 PM</span>
              <span>08 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-700 fill-mode-both">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-zinc-900">Recent Service Activity</h3>
            <p className="text-xs text-zinc-500">Live operational log and invoice generation</p>
          </div>
          <History className="h-5 w-5 text-zinc-300" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-100 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                <th className="pb-4 pr-4">Vehicle / Job ID</th>
                <th className="pb-4 px-4">Service Description</th>
                <th className="pb-4 px-4">Customer</th>
                <th className="pb-4 px-4">Cost</th>
                <th className="pb-4 px-4">Status</th>
                <th className="pb-4 pl-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {[
                { id: "JID-8821", vehicle: "Toyota Corolla (Dhaka-12)", desc: "Periodic Maintenance / Oil Change", customer: "Abir Ahmed", cost: "৳ 8,400", status: "Completed", time: "12m ago" },
                { id: "JID-8820", vehicle: "Honda Civic (Dhaka-04)", desc: "Brake Pad Replacement", customer: "Sarah Islam", cost: "৳ 12,400", status: "In-Progress", time: "45m ago" },
                { id: "JID-8819", vehicle: "Mitsubishi Pajero (Dhaka-15)", desc: "Engine Overhaul / Tuning", customer: "Zahid Khan", cost: "৳ 42,000", status: "QC/Testing", time: "2h ago" },
                { id: "JID-8818", vehicle: "Nissan X-Trail (Gazipur-12)", desc: "AC Service & Gas Charge", customer: "M. Nayeem", cost: "৳ 5,500", status: "Ready", time: "4h ago" },
              ].map((row, i) => (
                <tr key={row.id} className="group hover:bg-zinc-50/50 transition-colors">
                  <td className="py-4 pr-4">
                    <p className="text-sm font-bold text-zinc-900">{row.vehicle}</p>
                    <p className="text-[10px] text-zinc-400">#{row.id}</p>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-zinc-600">{row.desc}</td>
                  <td className="py-4 px-4 text-sm font-medium text-zinc-600">{row.customer}</td>
                  <td className="py-4 px-4 text-sm font-bold text-zinc-900">{row.cost}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      row.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                      row.status === 'In-Progress' ? 'bg-sky-50 text-sky-600' :
                      row.status === 'Ready' ? 'bg-amber-50 text-amber-600' : 'bg-zinc-100 text-zinc-600'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 pl-4 text-right text-[10px] font-bold uppercase tracking-widest text-zinc-400">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
