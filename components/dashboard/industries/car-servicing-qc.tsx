"use client";

import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Camera,
  AlertTriangle,
  ClipboardCheck,
  Zap,
  Gauge,
  Wind,
  ShieldCheck,
  Send,
  UserCheck,
  Printer,
  ChevronRight,
  Info,
  Clock,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CarServicingQC() {
  const [qcProgress, setQcProgress] = useState(65);
  const [viewMode, setViewMode] = useState<"audit" | "summary">("audit");
  
  const tasks = [
    { id: 1, name: "Motor Oil & Filter Replacement", status: "completed", critical: true },
    { id: 2, name: "Brake Pad Inspection & Cleaning", status: "pending", critical: true },
    { id: 3, name: "AC Filter Cleaning/Replacement", status: "completed", critical: false },
    { id: 4, name: "Chassis Nut-Bolt Tightening", status: "pending", critical: true },
  ];

  const fluidChecks = [
    { name: "Coolant Level", level: "Optimal" },
    { name: "Brake Fluid", level: "Warning (Low)" },
    { name: "Washer Fluid", level: "Full" },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* 0. Top Header & Progress */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
        <div className="flex items-center gap-4">
          <div className="relative flex h-16 w-16 items-center justify-center">
             <svg className="absolute inset-0 h-full w-full rotate-[-90deg]">
                <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4" className="text-zinc-100" />
                <circle 
                  cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4" 
                  strokeDasharray="175.9" strokeDashoffset={175.9 - (175.9 * qcProgress) / 100}
                  className="text-sky-600 transition-all duration-1000 ease-out" 
                />
             </svg>
             <span className="text-sm font-bold text-sky-600">{qcProgress}%</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Quality Assurance Hub</h1>
            <p className="text-xs text-zinc-500">Inspecting: <span className="font-bold text-zinc-900">DHK-1234 (Toyota Corolla)</span> • Job <span className="font-mono text-sky-600">#JC-2026-001</span></p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 p-1">
          <button 
            onClick={() => setViewMode("audit")}
            className={`rounded-xl px-6 py-2 text-xs font-bold transition-all ${viewMode === 'audit' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
          >
            Full Inspection
          </button>
          <button 
            onClick={() => setViewMode("summary")}
            className={`rounded-xl px-6 py-2 text-xs font-bold transition-all ${viewMode === 'summary' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
          >
            QC Summary
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          
          {/* 1. Service Verification List */}
          <section className="animate-in fade-in slide-in-from-left-4 duration-500 delay-100 fill-mode-both">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">1. Service Verification List</h3>
              <p className="text-[10px] font-bold text-amber-600">Pulled from Job Card</p>
            </div>
            
            <Card className="border-zinc-200/80 bg-white shadow-sm overflow-hidden">
               <div className="divide-y divide-zinc-100">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex flex-col md:flex-row md:items-center justify-between p-5 transition-colors hover:bg-zinc-50/50">
                      <div className="flex items-start gap-4">
                        <div className={`mt-0.5 rounded-lg border p-1.5 ${task.status === 'completed' ? 'border-sky-100 bg-sky-50 text-sky-600' : 'border-zinc-200 bg-white text-zinc-300'}`}>
                           <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-900">
                            {task.name}
                            {task.critical && <span className="ml-2 inline-flex items-center text-[8px] font-black uppercase text-red-500 ring-1 ring-red-200 px-1 rounded">Safety Critical</span>}
                          </p>
                          <div className="mt-2 flex items-center gap-4">
                             <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-sky-600 hover:underline">
                                <Camera className="h-3 w-3" /> Add Evidence
                             </button>
                             {task.critical && (
                               <div className="flex items-center gap-2 rounded bg-zinc-100 px-2 py-0.5 border border-zinc-200">
                                  <Zap className="h-3 w-3 text-amber-500" />
                                  <input type="text" placeholder="Torque Value (Nm)" className="w-24 bg-transparent text-[10px] font-medium outline-none" />
                               </div>
                             )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex shrink-0 items-center justify-end gap-2 md:mt-0">
                         <Button variant="outline" size="sm" className="h-9 rounded-xl border-red-100 text-xs font-bold text-red-500 hover:bg-red-50">
                           <XCircle className="h-4 w-4 mr-1.5" /> Fail
                         </Button>
                         <Button size="sm" className="h-9 rounded-xl bg-emerald-600 text-xs font-bold text-white shadow-sm hover:bg-emerald-700">
                           <CheckCircle2 className="h-4 w-4 mr-1.5" /> Pass
                         </Button>
                      </div>
                    </div>
                  ))}
               </div>
            </Card>
          </section>

          {/* 2. Standard 40-Point Health Check */}
          <section className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200 fill-mode-both">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">2. Standard Audit Checklist</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-zinc-200/80 bg-white shadow-sm">
                <CardContent className="p-6 space-y-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Fluid & Levels</p>
                  <div className="space-y-4">
                    {fluidChecks.map((f) => (
                      <div key={f.name} className="flex items-center justify-between">
                        <span className="text-xs font-medium text-zinc-600">{f.name}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold ${f.level.includes('Warning') ? 'text-red-500' : 'text-emerald-500'}`}>{f.level}</span>
                          <button className="rounded bg-sky-50 p-1 text-sky-600"><CheckCircle2 className="h-3 w-3" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100 space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Dashboard & Safety</p>
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-medium text-zinc-600">Scan Errors Cleared?</span>
                       <div className="flex rounded-lg bg-zinc-100 p-0.5">
                          <button className="rounded-md bg-white px-3 py-1 text-[10px] font-bold text-zinc-900 shadow-sm">YES</button>
                          <button className="rounded-md px-3 py-1 text-[10px] font-bold text-zinc-500">NO</button>
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">PSI Front</label>
                          <input type="number" placeholder="32" className="h-8 w-full rounded-lg border border-zinc-200 px-3 text-xs font-bold outline-none focus:border-sky-500" />
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">PSI Rear</label>
                          <input type="number" placeholder="30" className="h-8 w-full rounded-lg border border-zinc-200 px-3 text-xs font-bold outline-none focus:border-sky-500" />
                       </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-200/80 bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="bg-zinc-50/50 p-4 border-b border-zinc-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Test Drive Report</p>
                </div>
                <div className="flex-1 p-6 space-y-4">
                   <textarea 
                    placeholder="Enter handling, brake feedback, or noises during test drive..."
                    className="min-h-[140px] w-full rounded-xl border-zinc-200 bg-zinc-50/30 p-4 text-xs outline-none focus:border-sky-500 transition-all resize-none"
                   />
                   <Button variant="ghost" className="w-full h-10 border border-dashed border-zinc-200 rounded-xl text-sky-600 font-bold gap-2 hover:bg-sky-50">
                      <Zap className="h-4 w-4" />
                      Voice-to-Text Report
                   </Button>
                </div>
              </Card>
            </div>
          </section>

          {/* 3. Cleanliness Audit */}
          <section className="animate-in fade-in slide-in-from-left-4 duration-500 delay-300 fill-mode-both">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">3. Presentation & Cleanliness</h3>
            <Card className="border-zinc-200/80 bg-white shadow-sm">
              <CardContent className="p-6 grid gap-8 md:grid-cols-3">
                 {[
                   { label: "Interior Clean", items: "Steering, Seats, Floor", icon: <Sparkles className="h-5 w-5 text-amber-500" /> },
                   { label: "Exterior Finish", items: "Body Wash, Tire Polish", icon: <Wind className="h-5 w-5 text-sky-500" /> },
                   { label: "Belongings", items: "Spare Tire, Jack, Tools", icon: <ShieldCheck className="h-5 w-5 text-emerald-500" /> },
                 ].map((c) => (
                   <div key={c.label} className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl hover:bg-zinc-50 transition-colors cursor-pointer group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 group-hover:bg-white border border-zinc-100 shadow-sm transition-all">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900 leading-none">{c.label}</p>
                        <p className="mt-1.5 text-[8px] font-bold text-zinc-400 uppercase tracking-widest">{c.items}</p>
                      </div>
                      <div className="h-5 w-5 rounded-full border-2 border-zinc-200 group-hover:border-emerald-500 group-hover:bg-emerald-500 flex items-center justify-center transition-all">
                         <CheckCircle2 className="h-3 w-3 text-white opacity-0 group-hover:opacity-100" />
                      </div>
                   </div>
                 ))}
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Sidebar: Final Approval & Faults */}
        <aside className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 delay-200 fill-mode-both">
          
          {/* 4. Fault Reporting / Upsell */}
          <section>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Discovered Issues</h3>
            <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden">
               <CardContent className="p-6 space-y-4">
                  <div className="rounded-xl border border-dashed border-red-200 bg-red-50/50 p-4 text-center">
                     <AlertTriangle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                     <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Serious Fault Found?</p>
                     <Button className="mt-4 w-full h-10 rounded-xl bg-red-600 text-white font-bold text-xs shadow-lg shadow-red-600/20 hover:bg-red-700">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Fail & Return to Bay
                     </Button>
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Add Future Recommendation</p>
                     <Button variant="outline" className="w-full h-10 rounded-xl border-zinc-200 text-xs font-bold gap-2 text-zinc-600 hover:bg-zinc-50">
                        <Info className="h-4 w-4" />
                        New Recommendation
                     </Button>
                  </div>
               </CardContent>
            </Card>
          </section>

          {/* 5. Final Approval */}
          <section>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Certification & Handover</h3>
            <Card className="border-0 bg-zinc-900 text-white shadow-xl shadow-sky-900/10 overflow-hidden relative">
              <div className="absolute right-0 top-0 h-32 w-32 -mr-16 -mt-16 rounded-full bg-sky-500/20 blur-3xl" />
              <CardContent className="p-8 relative z-10 space-y-6">
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-sky-400">Inspector Certification</p>
                   <div className="mt-4 h-24 w-full rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:bg-white/5 border-dashed">
                      <UserCheck className="h-6 w-6 text-sky-400" />
                      <span className="text-[10px] font-medium text-zinc-500">Tap to Digital Sign</span>
                   </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                   <div className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-sky-500/50 bg-transparent text-sky-600 focus:ring-sky-500" />
                      <span className="text-xs font-medium text-zinc-300">Auto-send Completion WhatsApp</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4 rounded border-sky-500/50 bg-transparent text-sky-600 focus:ring-sky-500" />
                      <span className="text-xs font-medium text-zinc-300">Generate QC Certificate</span>
                   </div>
                </div>

                <Button 
                  disabled={qcProgress < 100 && false} // Logic for safety
                  className="w-full h-14 rounded-2xl bg-sky-600 text-sm font-bold text-white shadow-xl shadow-sky-600/30 hover:bg-sky-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Send className="h-5 w-5 mr-3" />
                  Approve & Ready
                </Button>
                
                <Button variant="ghost" className="w-full h-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white">
                   <Printer className="h-3 w-3 mr-2" />
                   Print Hang-Tag
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Workflow Toggle Hint */}
          <div className="rounded-2xl bg-amber-50 p-6 border border-amber-100">
             <div className="flex items-start gap-4">
                <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-[10px] font-medium leading-relaxed text-amber-800 uppercase tracking-tight">
                  <span className="font-black">Current Mode: Supervisor Audit.</span><br />
                  Technicians can perform 'Self-QC' but final handover requires a Supervisor sign-off.
                </p>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
