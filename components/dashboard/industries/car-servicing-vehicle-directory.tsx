"use client";

import { useState } from "react";
import {
  Car,
  Search,
  Calendar,
  ShieldCheck,
  TrendingUp,
  History,
  Package,
  Camera,
  FileText,
  PlusCircle,
  Printer,
  ChevronRight,
  AlertTriangle,
  Zap,
  MoreVertical,
  Activity,
  Award,
  Clock,
  Wrench,
  Droplets,
  Hammer,
  ArrowRight,
  LineChart,
  ClipboardCheck,
  Play,
  Heart,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CarServicingVehicleDirectory() {
  const [activeTab, setActiveTab] = useState<"history" | "parts" | "media">("history");
  const [selectedVehicle, setSelectedVehicle] = useState<any>({
    plate: "DHK-1234",
    model: "Toyota Corolla 2022",
    color: "Crystal White",
    vin: "TMC-B78-XXXXX-9921",
    status: "Healthy",
    spend: 124500,
  });

  const timelineEvents = [
    { type: "routine", date: "Mar 10, 2026", odo: "42,500 km", title: "Periodic Maintenance", icon: <Droplets className="h-4 w-4" />, color: "bg-sky-500" },
    { type: "repair", date: "Jan 15, 2026", odo: "38,200 km", title: "Brake Pad & Rotor Change", icon: <Wrench className="h-4 w-4" />, color: "bg-amber-500" },
    { type: "detailing", date: "Dec 02, 2025", odo: "36,800 km", title: "Interior Deep Clean & Ceramic", icon: <ShieldCheck className="h-4 w-4" />, color: "bg-emerald-500" },
    { type: "accident", date: "Oct 20, 2025", odo: "34,100 km", title: "Front Bumper Painting", icon: <Hammer className="h-4 w-4" />, color: "bg-pink-500" },
  ];

  const partLog = [
    { part: "Synthetic Oil (5W-30)", date: "Mar 10, 2026", brand: "Mobil 1", warranty: "Expired" },
    { part: "Battery (80Ah)", date: "Jan 05, 2026", brand: "Amaron", warranty: "18 Months Remaining" },
    { part: "Air Filter", date: "Mar 10, 2026", brand: "Genuine Toyota", warranty: "Limited" },
    { part: "Brake Pads (Front)", date: "Jan 15, 2026", brand: "Brembo", warranty: "6 Months Remaining" },
  ];

  return (
    <div className="space-y-8 pb-32">
      {/* 1. Vehicle Identity Header (Sticky-ready) */}
      <div className="sticky top-0 z-30 -mx-4 -mt-4 bg-white/80 px-8 py-6 backdrop-blur-xl border-b border-zinc-100 flex flex-col gap-6 md:flex-row md:items-center md:justify-between animate-in fade-in duration-500">
        <div className="flex items-center gap-5">
           <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-zinc-900 text-white shadow-xl shadow-zinc-900/20 ring-4 ring-zinc-50">
              <Car className="h-8 w-8" />
           </div>
           <div>
              <div className="flex items-center gap-3">
                 <h1 className="text-2xl font-black tracking-tighter text-zinc-900">{selectedVehicle.model}</h1>
                 <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-600 ring-1 ring-emerald-200 flex items-center gap-1.5">
                    <Activity className="h-3 w-3" /> 🟢 {selectedVehicle.status}
                 </span>
              </div>
              <p className="mt-1 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                 {selectedVehicle.plate} • VIN: <span className="text-zinc-600 font-mono tracking-normal">{selectedVehicle.vin}</span>
              </p>
           </div>
        </div>

        <div className="flex items-center gap-8">
           <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Lifetime Spend</p>
              <p className="text-2xl font-black text-zinc-900">৳ {selectedVehicle.spend.toLocaleString()}</p>
           </div>
           <Button className="h-12 rounded-2xl bg-sky-600 px-6 font-bold text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all hover:scale-105 active:scale-95">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Job Card
           </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* Left Column: Timeline & Tabs */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 fill-mode-both">
           {/* Tab Controls */}
           <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 p-1 w-fit">
              {[
                { id: "history", label: "General History", icon: <History className="h-4 w-4" /> },
                { id: "parts", label: "Parts Repository", icon: <Package className="h-4 w-4" /> },
                { id: "media", label: "Media Library", icon: <Camera className="h-4 w-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-xs font-bold transition-all ${
                    activeTab === tab.id ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
           </div>

           {activeTab === "history" && (
             <div className="space-y-10 pl-4 py-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
               {timelineEvents.map((event, i) => (
                 <div key={i} className="relative flex items-start gap-8">
                    {/* Vertical Line Connector */}
                    {i !== timelineEvents.length - 1 && (
                      <div className="absolute top-10 left-5 h-full w-0.5 bg-zinc-100" />
                    )}
                    
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${event.color} transition-transform hover:scale-110 cursor-pointer`}>
                       {event.icon}
                    </div>
                    
                    <Card className="flex-1 border-zinc-200/80 bg-white transition-all hover:border-zinc-300 hover:shadow-lg group">
                       <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                             <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{event.date}</span>
                                <span className="h-1 w-1 rounded-full bg-zinc-300" />
                                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">{event.odo}</span>
                             </div>
                             <button className="rounded-lg p-1 text-zinc-300 hover:text-zinc-900 group-hover:text-zinc-500">
                                <MoreVertical className="h-3.5 w-3.5" />
                             </button>
                          </div>
                          <h4 className="text-sm font-bold text-zinc-900 group-hover:text-sky-600 transition-colors">{event.title}</h4>
                          <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                            Routine maintenance including Engine Oil, Filter, and Air Filter cleanup. General inspection of suspension and brakes performed.
                          </p>
                          <div className="mt-4 flex items-center gap-1.5">
                             <Button variant="ghost" size="sm" className="h-8 rounded-lg text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-sky-600">
                                <FileText className="h-3.5 w-3.5 mr-1.5" /> View Invoice
                             </Button>
                             <Button variant="ghost" size="sm" className="h-8 rounded-lg text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-sky-600">
                                <Activity className="h-3.5 w-3.5 mr-1.5" /> QC Report
                             </Button>
                          </div>
                       </CardContent>
                    </Card>
                 </div>
               ))}
             </div>
           )}

           {activeTab === "parts" && (
             <Card className="animate-in fade-in slide-in-from-bottom-2 duration-500 border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden">
                <CardHeader className="p-6 border-b border-zinc-50 bg-zinc-50/30">
                  <div className="relative max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input type="text" placeholder="Search by part name..." className="h-10 w-full rounded-xl border border-zinc-200 pl-10 pr-4 text-xs font-bold outline-none focus:ring-4 focus:ring-sky-500/10" />
                  </div>
                </CardHeader>
                <div className="divide-y divide-zinc-100">
                  {partLog.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-6 transition-colors hover:bg-zinc-50">
                       <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-400">
                             <Package className="h-5 w-5" />
                          </div>
                          <div>
                             <p className="text-sm font-bold text-zinc-900 leading-none">{item.part}</p>
                             <p className="mt-1.5 text-[10px] text-zinc-500 font-medium">{item.brand}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Installed: {item.date}</p>
                          <span className={`text-[10px] font-black uppercase tracking-tighter ${item.warranty === 'Expired' ? 'text-zinc-300' : 'text-emerald-500'}`}>
                             {item.warranty === 'Expired' ? 'No Warranty' : item.warranty}
                          </span>
                       </div>
                    </div>
                  ))}
                </div>
             </Card>
           )}

           {activeTab === "media" && (
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {[1,2,3,4,5,6].map((m) => (
                  <div key={m} className="group aspect-video relative rounded-3xl bg-zinc-100 overflow-hidden border-2 border-zinc-50 hover:border-sky-500 transition-all cursor-pointer shadow-sm hover:shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                         <p className="text-[10px] font-black text-white uppercase tracking-widest">Inspection Photo #{m}</p>
                         <p className="text-[8px] text-zinc-300 font-bold uppercase">Mar 10, 2026</p>
                      </div>
                      <div className="h-full w-full flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform">
                         {m % 3 === 0 ? <Play className="h-8 w-8 fill-zinc-300" /> : <Camera className="h-8 w-8" />}
                      </div>
                  </div>
                ))}
             </div>
           )}
        </div>

        {/* Right Column: AI Consultant & Data */}
        <aside className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-200 fill-mode-both">
           
           {/* Technical Logs */}
           <section>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Technical Intelligence</h3>
              <Card className="border-0 bg-zinc-900 text-white shadow-xl shadow-zinc-900/10 overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-12 bg-sky-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />
                 <CardContent className="p-8 relative z-10 space-y-6">
                    <div>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-2">Kilometer Trend</p>
                       <div className="h-24 w-full flex items-end gap-1 px-1">
                          {[30, 45, 38, 52, 48, 65, 42].map((v, i) => (
                            <div key={i} className="flex-1 bg-sky-500/20 rounded-t-lg transition-all hover:bg-sky-500" style={{ height: `${v}%` }} />
                          ))}
                       </div>
                       <div className="mt-2 flex justify-between text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
                          <span>OCT 25</span>
                          <span>MAR 26</span>
                       </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10 space-y-4">
                       <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-400 font-medium">Avg Usage</span>
                          <span className="text-sm font-bold">1,250 KM/Month</span>
                       </div>
                       <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-400 font-medium">Next Exp. Service</span>
                          <span className="text-sm font-bold text-amber-400">May 15, 2026</span>
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </section>

           {/* AI Consultant */}
           <section>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Predictive Advice</h3>
              <div className="space-y-4">
                 <div className="rounded-2xl border-2 border-dashed border-red-200 bg-red-50/50 p-6 flex gap-4">
                    <AlertTriangle className="h-6 w-6 text-red-500 shrink-0" />
                    <div>
                       <p className="text-xs font-bold text-red-700 uppercase tracking-[0.05em] leading-snug">Recurring Fault Alert</p>
                       <p className="mt-1 text-[11px] leading-relaxed text-red-800 italic">
                         "Vehicle has visited 3 times for Brake symptoms in 12 months. Recommend a full master cylinder pressure test."
                       </p>
                    </div>
                 </div>

                 <Card className="border-emerald-100 bg-emerald-50/30 overflow-hidden shadow-sm">
                    <CardContent className="p-6">
                       <div className="flex items-center gap-3 mb-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                             <Award className="h-6 w-6" />
                          </div>
                          <div>
                             <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Value Add Facility</p>
                             <h4 className="text-xs font-bold text-emerald-900 leading-none">Vehicle Resale Hub</h4>
                          </div>
                       </div>
                       <p className="text-[10px] text-emerald-700 leading-relaxed font-medium mb-4">
                          Build trust with buyers by generating a verified maintenance certificate signed by our workshop.
                       </p>
                       <Button className="w-full h-10 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 gap-2">
                          <FileText className="h-4 w-4" /> Generate Health Certificate
                       </Button>
                    </CardContent>
                 </Card>
              </div>
           </section>
        </aside>
      </div>

      {/* Floating Action Menu */}
      <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/60 p-2 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-bottom-10 duration-1000 delay-500">
         <Button variant="ghost" className="h-12 w-12 rounded-xl text-zinc-500 hover:bg-sky-50 hover:text-sky-600">
            <Printer className="h-6 w-6" />
         </Button>
         <Button variant="ghost" className="h-12 w-12 rounded-xl text-zinc-500 hover:bg-emerald-50 hover:text-emerald-600">
            <Plus className="h-6 w-6" />
         </Button>
         <div className="h-8 w-px bg-zinc-200 mx-2" />
         <Button className="h-12 px-6 rounded-xl bg-sky-600 text-sm font-black text-white hover:bg-sky-700 shadow-xl shadow-sky-600/20 gap-2">
            START NEW JOURNEY <Zap className="h-4 w-4" />
         </Button>
      </div>
    </div>
  );
}
