"use client";

import { useState } from "react";
import {
  Clock,
  ChevronRight,
  Flame,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  Undo2,
  ChefHat,
  Monitor,
  Printer,
  History as HistoryIcon,
  Timer,
  LayoutGrid,
  Menu,
  X,
  Plus,
  ArrowRight,
  Target,
  Hash,
  Zap,
  Ticket,
  BellRing,
  Hammer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export function RestaurantKitchenDisplay() {
  const [activeTickets, setActiveTickets] = useState<any[]>([
    { id: "T-14", time: 18, items: [{ qty: 2, name: "Ribeye Steak", mods: ["MEDIUM RARE", "NO ONION"] }, { qty: 1, name: "Salmon Platter" }] },
    { id: "T-05", time: 12, items: [{ qty: 3, name: "Classic Burger", mods: ["NO TOMATO"] }, { qty: 2, name: "Large Fries" }] },
    { id: "T-22", time: 5, items: [{ qty: 1, name: "T-Bone Steak", mods: ["WELL DONE"] }, { qty: 1, name: "Pasta Carbonara" }] },
    { id: "B-01", time: 8, items: [{ qty: 4, name: "Classic Burger" }, { qty: 2, name: "Coke" }] },
    { id: "T-09", time: 4, items: [{ qty: 1, name: "Greek Salad" }, { qty: 1, name: "Grilled Chicken" }] },
    { id: "T-11", time: 22, items: [{ qty: 2, name: "Ribeye Steak", mods: ["WELL DONE"] }] },
  ]);

  const prepGuide = [
    { name: "BURGERS", qty: 12 },
    { name: "FRIES", qty: 8 },
    { name: "STEAKS", qty: 3 },
    { name: "SALADS", qty: 2 },
  ];

  const bumpTicket = (ticketId: string) => {
    setActiveTickets(prev => prev.filter(t => t.id !== ticketId));
    toast.success(`Ticket ${ticketId} BUMPED! Dispatching to floor 🚀`);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] -mx-6 -mt-6 bg-[#09090b] overflow-hidden text-zinc-100 font-brand-sans selection:bg-rose-500/20 selection:text-rose-200 animate-in fade-in duration-700 fill-mode-both relative">
      
      {/* 1. Industrial Expedition Sidebar (Vertical Control) */}
      <aside className="w-80 shrink-0 bg-[#121217] border-r border-white/[0.03] flex flex-col p-8 z-30 shadow-[40px_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
         <div className="absolute top-0 right-0 p-32 bg-amber-500 opacity-5 rounded-full blur-3xl -mr-24 -mt-24" />
         
         <div className="mb-12 relative z-10">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-950 shadow-2xl">
                  <ChefHat className="h-6 w-6" />
               </div>
               <div>
                  <h1 className="text-xl font-black italic uppercase tracking-tighter text-white">GRILL OPS</h1>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-1">Station Alpha</p>
               </div>
            </div>
            
            <div className="space-y-6 pt-10">
               <div className="p-6 rounded-3xl bg-black/40 border border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Live Rush Meter</span>
                     <Zap className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500 w-[42%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-3">
                  <div className="text-left py-4 px-6 rounded-3xl bg-zinc-900 border border-white/5">
                     <p className="text-[8px] font-black uppercase text-zinc-500 mb-1">Queue</p>
                     <p className="text-2xl font-black italic">{activeTickets.length}</p>
                  </div>
                  <div className="text-left py-4 px-6 rounded-3xl bg-zinc-900 border border-white/5">
                     <p className="text-[8px] font-black uppercase text-zinc-500 mb-1">Pace</p>
                     <p className="text-2xl font-black italic text-emerald-400">12m</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Aggregated Fire List (The List) */}
         <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-hide py-4 relative z-10">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-6 flex items-center gap-3">
               <Flame className="h-3 w-3 text-rose-500" /> Global Prep Sum
            </h3>
            {prepGuide.map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-zinc-900/60 border border-white/[0.03] hover:border-white/10 transition-all flex items-center justify-between overflow-hidden">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-zinc-400 tracking-tighter">{item.name}</span>
                    <span className="text-3xl font-black italic text-white group-hover:scale-110 transition-transform origin-left">{item.qty} <span className="text-[10px] text-zinc-600 not-italic ml-1">units</span></span>
                 </div>
                 <div className="h-12 w-12 rounded-xl bg-white opacity-5 group-hover:opacity-10 transition-opacity" />
              </div>
            ))}
         </div>

         <div className="pt-8 border-t border-white/5 space-y-3">
            <Button variant="outline" className="w-full h-14 rounded-2xl border-white/5 bg-zinc-900 text-amber-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest gap-3 shadow-2xl">
               <Undo2 className="h-4 w-4" /> RECALL PREVIOUS
            </Button>
         </div>
      </aside>

      {/* 2. Professional Ticket Sea (Horizontal Expedition View) */}
      <main className="flex-1 overflow-x-auto flex items-stretch gap-8 p-12 scrollbar-hide bg-[#0c0c0e]">
         
         {activeTickets.length === 0 && (
           <div className="flex-1 flex flex-col items-center justify-center text-center py-20 grayscale animate-pulse">
              <div className="h-24 w-24 rounded-full border-4 border-dashed border-zinc-800 flex items-center justify-center mb-6">
                 <ChefHat className="h-10 w-10 text-zinc-800" />
              </div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-700">Kitchen Cleared</h2>
              <p className="text-[10px] font-bold text-zinc-800 uppercase mt-2 italic">Waiting for next fire event...</p>
           </div>
         )}

         {activeTickets.map((ticket, idx) => (
           <Card 
            key={ticket.id} 
            className="w-[450px] shrink-0 bg-zinc-900 border-none rounded-none flex flex-col h-full animate-in slide-in-from-right-12 duration-700 shadow-2xl shadow-black ring-1 ring-white/5"
            style={{ animationDelay: `${idx * 100}ms` }}
           >
              {/* Ticket Header (Mission Profile) */}
              <div className={`p-8 flex items-center justify-between border-b-4 ${
                ticket.time > 15 ? 'border-rose-600' : 
                ticket.time > 10 ? 'border-amber-500' : 'border-emerald-500'
              }`}>
                 <div className="flex flex-col">
                    <h2 className="text-5xl font-black italic tracking-tighter text-white uppercase">{ticket.id}</h2>
                    <div className="flex items-center gap-3 mt-2">
                       <span className="px-3 py-1 bg-white/5 rounded text-[10px] font-black uppercase tracking-widest text-zinc-500">DINE-IN</span>
                       <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Service Timer</span>
                    <h3 className={`text-5xl font-black italic tabular-nums leading-none ${
                        ticket.time > 15 ? 'text-rose-500 animate-pulse font-black' : 
                        ticket.time > 10 ? 'text-amber-500' : 'text-emerald-500'
                    }`}>
                       {ticket.time}:00
                    </h3>
                 </div>
              </div>

              {/* Ultra-High Contrast List */}
              <CardContent className="flex-1 overflow-y-auto p-10 space-y-10 scrollbar-hide">
                 {ticket.items.map((item: any, i: number) => (
                   <div key={i} className="flex items-start gap-8 group/item">
                      <div className="h-16 w-16 bg-white/[0.04] rounded-2xl border border-white/5 flex items-center justify-center text-3xl font-black italic text-amber-500">
                         {item.qty}
                      </div>
                      <div className="flex-1">
                         <p className="text-2xl font-black uppercase text-white tracking-tighter leading-none mb-3 italic">{item.name}</p>
                         <div className="space-y-2 mt-4 flex flex-wrap gap-2">
                            {item.mods?.map((m: string) => (
                               <span key={m} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] shadow-xl ${
                                  m.includes('NO') ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 
                                  'bg-sky-500/10 text-sky-500 border border-sky-500/20'
                               }`}>
                                  {m}
                               </span>
                            ))}
                         </div>
                      </div>
                   </div>
                 ))}
              </CardContent>

              {/* Tactile Payout (Bump Area) */}
              <div className="p-8 bg-black/40 pt-4">
                 <button 
                  onClick={() => bumpTicket(ticket.id)}
                  className="w-full h-24 rounded-3xl bg-[#09090b] border-2 border-white/5 hover:border-emerald-500/40 text-emerald-500 hover:bg-emerald-500/5 transition-all flex items-center justify-center gap-6 group relative overflow-hidden"
                 >
                    <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-[0.02] transition-opacity" />
                    <div className="flex flex-col items-center">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 group-hover:translate-y-[-2px] transition-transform">Mark as Done</span>
                       <div className="flex items-center gap-4">
                          <CheckCircle2 className="h-8 w-8 text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
                          <div className="h-px w-10 bg-emerald-500/20" />
                          <span className="text-sm font-black italic uppercase tracking-widest text-emerald-400">BUMP NOW</span>
                       </div>
                    </div>
                 </button>
                 
                 <div className="flex items-center justify-between mt-6 px-2">
                    <button className="text-[10px] font-black uppercase text-zinc-600 hover:text-white flex items-center gap-2 transition-colors">
                       <Printer className="h-4 w-4" /> Print Label
                    </button>
                    <button className="text-[10px] font-black uppercase text-zinc-600 hover:text-white flex items-center gap-2 transition-colors">
                       <AlertCircle className="h-4 w-4" /> Flag Shift Manager
                    </button>
                 </div>
              </div>
           </Card>
         ))}
      </main>

      {/* Virtual Expedition Bump Bar UI */}
      <footer className="fixed bottom-0 left-[320px] right-0 h-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 opacity-50 blur-xl z-20 pointer-events-none" />

    </div>
  );
}
