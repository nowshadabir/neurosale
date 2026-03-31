"use client";

import { useState, useEffect } from "react";
import {
  Car,
  User,
  Users,
  Timer,
  CheckCircle2,
  AlertTriangle,
  Package,
  MessageSquare,
  Maximize,
  LayoutGrid,
  History,
  MoreVertical,
  Plus,
  PlayCircle,
  PauseCircle,
  Eye,
  Camera,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CarServicingBays() {
  const [viewMode, setViewMode] = useState<"bay" | "staff">("bay");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Status-based colors and labels
  const bayStatus = {
    available: { color: "bg-emerald-500", border: "border-emerald-500", label: "Available", bg: "bg-emerald-50/10" },
    occupied: { color: "bg-amber-500", border: "border-amber-500", label: "Occupied", bg: "bg-amber-50/10" },
    delayed: { color: "bg-red-500", border: "border-red-500", label: "Delayed", bg: "bg-red-50/10" },
    qc: { color: "bg-sky-500", border: "border-sky-500", label: "QC / Testing", bg: "bg-sky-50/10" },
  };

  const initialBays = [
    { id: "Bay 01", type: "Standard Lift", status: "occupied", car: "DHK-1234 | Toyota Corolla", tech: "Abir Hasan", progress: 65, elapsed: "45m", eta: "15m", partAlert: false },
    { id: "Bay 02", type: "Heavy-Duty Lift", status: "delayed", car: "CTG-8820 | Mitsubishi Pajero", tech: "Rafiq Islam", progress: 30, elapsed: "2h 10m", eta: "40m", partAlert: true },
    { id: "Bay 03", type: "Standard Lift", status: "available", car: null, tech: null, progress: 0, elapsed: null, eta: null, partAlert: false },
    { id: "Alignment Rack", type: "Hunter Pro", status: "qc", car: "SYL-7712 | Honda Civic", tech: "Sumit Sarkar", progress: 90, elapsed: "1h 20m", eta: "5m", partAlert: false },
    { id: "Bay 04", type: "Standard Lift", status: "occupied", car: "DHK-9944 | Nissan X-Trail", tech: "Niaz Ahmed", progress: 45, elapsed: "1h", eta: "25m", partAlert: false },
    { id: "Bay 05", type: "Quick Service", status: "available", car: null, tech: null, progress: 0, elapsed: null, eta: null, partAlert: false },
  ];

  const waitingRoom = [
    { id: "JID-1002", plate: "DHK-7722", model: "Hyundai Tucson", service: "AC Service", time: "18m ago" },
    { id: "JID-1003", plate: "DHK-4455", model: "Toyota Premio", service: "Brake Pad Change", time: "25m ago" },
    { id: "JID-1005", plate: "DHK-8811", model: "Ford Endeavour", service: "Periodic Maintenance", time: "40m ago" },
  ];

  const technicians = [
    { name: "Abir Hasan", load: "High", pending: 3, progress: 1, avatar: "AH" },
    { name: "Rafiq Islam", load: "Moderate", pending: 2, progress: 1, avatar: "RI" },
    { name: "Sumit Sarkar", load: "Low", pending: 1, progress: 1, avatar: "SS" },
  ];

  return (
    <div className={`space-y-8 pb-10 ${isFullscreen ? "fixed inset-0 z-[100] bg-zinc-950 p-10 overflow-y-auto" : ""}`}>
      {/* Header & View Controls */}
      <div className="flex flex-col gap-4 border-b border-zinc-100 pb-6 md:flex-row md:items-center md:justify-between animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 shadow-sm ring-1 ring-sky-100/50">
            <LayoutGrid className="h-6 w-6" />
          </div>
          <div>
            <h1 className={`text-2xl font-bold tracking-tight ${isFullscreen ? "text-white" : "text-zinc-900"}`}>Live Workshop Monitoring</h1>
            <p className={`text-xs ${isFullscreen ? "text-zinc-400" : "text-zinc-500"}`}>Active Bays & Real-time Resource Allocation</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex rounded-xl bg-zinc-100 p-1">
            <button
              onClick={() => setViewMode("bay")}
              className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                viewMode === "bay" ? "bg-white text-sky-600 shadow-sm" : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              Bay View
            </button>
            <button
              onClick={() => setViewMode("staff")}
              className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                viewMode === "staff" ? "bg-white text-sky-600 shadow-sm" : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              Staff Load
            </button>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className={`h-10 gap-2 rounded-xl border-zinc-200 ${isFullscreen ? "bg-zinc-900 text-white border-zinc-700" : "bg-white shadow-sm"}`}
          >
            <Maximize className="h-4 w-4" />
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen TV"}
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Main Grid */}
        <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-100 fill-mode-both">
          {viewMode === "bay" ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {initialBays.map((bay, i) => {
                const status = bayStatus[bay.status as keyof typeof bayStatus];
                return (
                  <Card
                    key={bay.id}
                    onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-sky-500', 'bg-sky-50/20'); }}
                    onDragLeave={(e) => { e.currentTarget.classList.remove('border-sky-500', 'bg-sky-50/20'); }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.remove('border-sky-500', 'bg-sky-50/20');
                      const jobId = e.dataTransfer.getData("jobId");
                      console.log(`Assigning ${jobId} to ${bay.id}`);
                      // Here you would trigger an API call or state update
                    }}
                    className={`relative group h-full overflow-hidden border-2 bg-white transition-all duration-300 ${
                      bay.status === 'available' ? 'border-emerald-100/50 hover:border-emerald-500 ring-4 ring-transparent hover:ring-emerald-500/10' :
                      bay.status === 'delayed' ? 'border-red-100/50 hover:border-red-500 animate-pulse-slight' :
                      `border-zinc-200/80 hover:border-zinc-300 shadow-sm hover:shadow-xl`
                    }`}
                  >
                    <CardContent className="p-0">
                      {/* Bay Header */}
                      <div className={`flex items-center justify-between px-5 py-3 border-b border-zinc-50 ${status.bg}`}>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">{bay.type}</p>
                          <h4 className="mt-1.5 font-bold text-zinc-900">{bay.id}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white ${status.color}`}>
                            {status.label}
                          </span>
                          <button className="rounded-lg p-1 hover:bg-zinc-200/50 transition-colors">
                            <MoreVertical className="h-3.5 w-3.5 text-zinc-400" />
                          </button>
                        </div>
                      </div>

                      {/* Bay Body (Inside Car Card) */}
                      <div className="p-5">
                        {bay.car ? (
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                                  <Car className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-zinc-900 leading-none">{bay.car.split("|")[0]}</p>
                                  <p className="mt-1.5 text-[10px] font-medium text-zinc-400">{bay.car.split("|")[1]}</p>
                                </div>
                              </div>
                              {bay.partAlert && (
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 animate-pulse" title="Parts Missing">
                                  <Package className="h-4 w-4" />
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                              <div className="flex items-center gap-1.5">
                                <User className="h-3 w-3" />
                                {bay.tech}
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Timer className="h-3 w-3" />
                                {bay.elapsed} / <span className="text-zinc-600">ETA {bay.eta}</span>
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <div className="flex justify-between">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Progress</span>
                                <span className="text-xs font-bold text-sky-600">{bay.progress}%</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                                <div 
                                  className={`h-full transition-all duration-[2s] ease-out ${bay.status === 'delayed' ? 'bg-red-400' : 'bg-sky-600'}`} 
                                  style={{ width: `${bay.progress}%` }} 
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest hover:text-sky-600">
                                  <Eye className="h-3 w-3" />
                                  View Job
                                </Button>
                                <div className="flex items-center gap-1">
                                  <button className="rounded-lg p-1.5 hover:bg-sky-50 text-sky-600 transition-colors">
                                    <MessageSquare className="h-3.5 w-3.5" />
                                  </button>
                                  <button className="rounded-lg p-1.5 hover:bg-zinc-100 text-zinc-400 transition-colors">
                                    <Camera className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-6 text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-dashed border-zinc-100 text-zinc-200">
                              <Plus className="h-6 w-6" />
                            </div>
                            <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Ready for Assignment</p>
                            <p className="mt-1 text-[8px] text-zinc-300 uppercase font-medium">Drag car here</p>
                          </div>
                        )}
                      </div>

                      {/* Small Live Snapshot Icon if occupied */}
                      {bay.car && (
                        <div className="absolute top-2 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                           <div className="rounded bg-black/60 px-1 py-0.5 backdrop-blur-md">
                              <span className="text-[8px] font-bold text-white uppercase tracking-tighter">Live Feed</span>
                           </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {technicians.map((staff, i) => (
                <Card key={staff.name} className="overflow-hidden border-zinc-200/80 bg-white transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-bold text-white">
                          {staff.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-900">{staff.name}</h4>
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${staff.load === 'High' ? 'text-amber-500' : 'text-emerald-500'}`}>
                            {staff.load} Efficiency
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-sky-600">Reassign</Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-zinc-50 p-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Pending</p>
                        <p className="mt-1 text-lg font-bold text-zinc-900">{staff.pending}</p>
                      </div>
                      <div className="rounded-xl bg-sky-50 p-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600">In-Progress</p>
                        <p className="mt-1 text-lg font-bold text-sky-700">{staff.progress}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar: Waiting Room */}
        <aside className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 delay-200 fill-mode-both">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Waiting Room</h3>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-600">
              {waitingRoom.length}
            </span>
          </div>

          <div className="space-y-4">
            {waitingRoom.map((car, i) => (
              <div
                key={car.id}
                draggable
                onDragStart={(e) => { e.dataTransfer.setData("jobId", car.id); }}
                className="group cursor-move rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:scale-[1.02] hover:border-sky-300 hover:shadow-lg active:scale-95"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-400 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                      <Car className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">#{car.id}</p>
                      <p className="text-sm font-bold text-zinc-900">{car.plate}</p>
                      <p className="text-[10px] font-medium text-zinc-500">{car.model}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">{car.service}</p>
                    <p className="mt-1 text-[8px] font-bold uppercase tracking-widest text-zinc-300">{car.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-zinc-900 p-6 text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 p-8 opacity-10 blur-2xl bg-sky-500 rounded-full w-32 h-32 -mr-16 -mt-16" />
             <div className="relative z-10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">Quick Reminder</h4>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                  <span className="font-bold text-white">4 cars</span> are waiting for a Bay. Suggest moving Bay 05 tasks to express lane.
                </p>
                <Button className="mt-4 w-full h-8 bg-sky-600 hover:bg-sky-700 text-[10px] font-bold uppercase tracking-widest">Optimize Workflow</Button>
             </div>
          </div>
        </aside>
      </div>

      <style jsx global>{`
        @keyframes pulse-slight {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(0.995); }
        }
        .animate-pulse-slight {
          animation: pulse-slight 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
