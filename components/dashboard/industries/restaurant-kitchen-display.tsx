"use client";

import { useState, useEffect } from "react";
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
  ]);

  const [history, setHistory] = useState<any[]>([]);

  const prepGuide = [
    { name: "Classic Burgers", qty: 12 },
    { name: "Large Fries", qty: 8 },
    { name: "Ribeye Steaks", qty: 3 },
    { name: "Salads", qty: 2 },
  ];

  const getTimerStyles = (mins: number) => {
    if (mins < 10) return "text-emerald-500";
    if (mins < 16) return "text-amber-500";
    return "text-rose-500 animate-pulse font-black shadow-[0_0_20px_rgba(244,63,94,0.3)]";
  };

  const bumpTicket = (ticket: any) => {
    setActiveTickets(prev => prev.filter(t => t.id !== ticket.id));
    setHistory([ticket, ...history]);
    toast.success(`Ticket ${ticket.id} BUMPED to Expeditor`);
  };

  const recallTicket = () => {
    if (history.length === 0) return;
    const last = history[0];
    setActiveTickets([last, ...activeTickets]);
    setHistory(prev => prev.slice(1));
    toast.info(`Ticket ${last.id} RECALLED to Station`);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] -mx-6 -mt-6 bg-[#0c0c0e] overflow-hidden text-zinc-100 font-brand-sans selection:bg-amber-500/20 selection:text-amber-200 animate-in fade-in duration-700 fill-mode-both">
      
      {/* 1. Main Display Workstation */}
      <main className="flex-1 flex flex-col min-w-0 p-6">
         
         {/* Master Header (Station Overview) */}
         <header className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                  <div className="h-14 w-14 rounded-2xl bg-amber-500 text-zinc-950 flex items-center justify-center shadow-2xl shadow-amber-500/20">
                     <ChefHat className="h-7 w-7" />
                  </div>
                  <div>
                     <h1 className="text-2xl font-black uppercase tracking-tighter text-white">GRILL STATION</h1>
                     <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Primary Cooking Section • Screen 01</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-8">
                  <div className="text-left">
                     <p className="text-[8px] font-black uppercase text-zinc-500 mb-1 leading-none">ACTIVE TICKETS</p>
                     <p className="text-xl font-black italic">{activeTickets.length}</p>
                  </div>
                  <div className="text-left">
                     <p className="text-[8px] font-black uppercase text-zinc-500 mb-1 leading-none">AVG PREP TIME</p>
                     <p className="text-xl font-black italic text-emerald-400">11m 24s</p>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-3">
               <Button variant="outline" className="h-12 px-6 rounded-xl bg-zinc-900 border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 gap-3 font-black uppercase text-[10px] tracking-widest">
                  <Target className="h-4 w-4" /> STATION HEALTH
               </Button>
               <Button 
                onClick={recallTicket}
                disabled={history.length === 0}
                variant="outline" className="h-12 px-6 rounded-xl bg-zinc-900 border-white/5 text-amber-500 hover:bg-zinc-800 gap-3 font-black uppercase text-[10px] tracking-widest disabled:opacity-20"
               >
                  <Undo2 className="h-4 w-4" /> RECALL PREVIOUS
               </Button>
            </div>
         </header>

         {/* 2. Ticket Grid (Oldest on left) */}
         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-2 scrollbar-hide pb-12">
            {[...activeTickets].sort((a,b) => b.time - a.time).map((ticket) => (
              <Card 
                key={ticket.id} 
                onDoubleClick={() => bumpTicket(ticket)}
                className="bg-zinc-900/40 border-2 border-white/5 rounded-none flex flex-col h-fit transition-all hover:bg-zinc-900/60 active:scale-[0.98] group overflow-hidden"
              >
                 {/* Ticket Card Header */}
                 <div className={`p-6 flex items-center justify-between border-b-2 ${ticket.time > 15 ? 'border-rose-600 bg-rose-600/5' : 'border-zinc-800 bg-black/20'}`}>
                    <div className="flex items-center gap-4">
                       <h3 className="text-3xl font-black italic tracking-tighter text-white">{ticket.id}</h3>
                       <div className="h-6 w-px bg-white/10" />
                       <div className="px-3 py-1 rounded bg-white/5 text-[10px] font-black uppercase text-zinc-400 tracking-widest">MAIN SECTION</div>
                    </div>
                    <div className="flex items-center gap-3">
                       <Clock className={`h-5 w-5 ${getTimerStyles(ticket.time)}`} />
                       <span className={`text-2xl font-black italic tabular-nums ${getTimerStyles(ticket.time)}`}>{ticket.time}:00</span>
                    </div>
                 </div>

                 {/* Kitchen-Dense Item List */}
                 <CardContent className="p-6 space-y-6 flex-1">
                    {ticket.items.map((item: any, i: number) => (
                      <div key={i} className="group/item cursor-pointer flex items-start gap-5 select-none transition-opacity hover:opacity-50">
                         <span className="text-2xl font-black text-amber-500 min-w-[2ch] leading-none">{item.qty}x</span>
                         <div className="flex-1">
                            <p className="text-xl font-black uppercase text-white tracking-tight leading-tight mb-1">{item.name}</p>
                            <div className="space-y-1 pl-4 border-l-2 border-white/5 mt-2">
                               {item.mods?.map((m: string) => (
                                 <p key={m} className={`text-[11px] font-black uppercase tracking-[0.2em] italic ${m.includes('NO') ? 'text-rose-500' : 'text-sky-500'}`}>
                                    - {m}
                                 </p>
                               ))}
                            </div>
                         </div>
                      </div>
                    ))}
                 </CardContent>

                 {/* Footer Quick Actions */}
                 <div className="p-3 bg-black/40 border-t border-white/5 grid grid-cols-2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="h-10 rounded-lg bg-zinc-800 text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-white flex items-center justify-center gap-2">
                       <Printer className="h-4 w-4" /> Print Label
                    </button>
                    <button 
                      onClick={() => bumpTicket(ticket)}
                      className="h-10 rounded-lg bg-emerald-600 text-white text-[9px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                    >
                       <CheckCircle2 className="h-4 w-4" /> BUMP READY
                    </button>
                 </div>
              </Card>
            ))}
         </div>

         {/* 5. Virtual Bump Bar (Footer Controls) */}
         <footer className="fixed bottom-6 left-6 right-[420px] bg-zinc-950 border border-white/10 rounded-3xl p-5 flex items-center justify-between shadow-[0_-20px_60px_rgba(0,0,0,0.5)] z-20 overflow-hidden">
            <div className="absolute inset-0 bg-amber-500 opacity-5 blur-3xl rounded-full translate-y-1/2" />
            
            <div className="relative flex items-center gap-8">
               <div className="flex items-center gap-3 pr-8 border-r border-white/10">
                  <Monitor className="h-5 w-5 text-zinc-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Hardware: Active</span>
               </div>
               
               <div className="flex items-center gap-2">
                  {[1,2,3,4,5,6].map(n => (
                    <button key={n} onClick={() => n <= activeTickets.length ? bumpTicket(activeTickets[n-1]) : null} className="h-12 w-12 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 font-mono font-black text-sm hover:bg-zinc-800 hover:text-amber-500 flex items-center justify-center transition-all active:scale-95">
                       {n}
                    </button>
                  ))}
                  <div className="h-12 w-px bg-white/5 mx-2" />
                  <button onClick={recallTicket} className="h-12 px-6 rounded-xl bg-amber-600 text-zinc-950 text-[10px] font-black uppercase tracking-widest hover:bg-amber-500">RECALL (F10)</button>
               </div>
            </div>

            <div className="relative flex items-center gap-4">
               <span className="text-[10px] font-black uppercase text-zinc-500">Expeditor: Online</span>
               <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>
         </footer>
      </main>

      {/* 3. The "Aggregated Prep" Sidebar (Chef's Secret) */}
      <aside className="w-[400px] shrink-0 bg-black border-l border-white/10 flex flex-col p-10 z-30 shadow-[-40px_0_100px_rgba(0,0,0,0.8)]">
         <div className="mb-12 space-y-6">
            <div className="flex items-center justify-between items-start">
               <div>
                  <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">The "Fire" List</h2>
                  <p className="text-[9px] font-bold text-zinc-700 uppercase mt-2 leading-relaxed">Aggregated requirements across all active tickets</p>
               </div>
               <Flame className="h-6 w-6 text-orange-600 animate-pulse" />
            </div>
         </div>

         <div className="flex-1 overflow-y-auto space-y-4 scrollbar-hide">
            {prepGuide.map((item, i) => (
              <div key={i} className="group relative p-8 bg-zinc-900/60 border border-white/5 hover:border-amber-500/20 transition-all overflow-hidden">
                 <div className="absolute top-0 right-0 p-16 bg-amber-500 opacity-0 rounded-full blur-3xl -mr-20 -mt-20 group-hover:opacity-[0.03] transition-opacity" />
                 <div className="relative z-10 flex items-center justify-between">
                    <span className="text-lg font-black uppercase tracking-tight text-zinc-100 italic">{item.name}</span>
                    <div className="flex items-baseline gap-1">
                       <span className="text-[9px] font-black text-zinc-500 mr-2 tracking-tighter italic">REQD:</span>
                       <span className="text-5xl font-black italic text-amber-400 group-hover:scale-110 transition-transform origin-right">{item.qty}</span>
                    </div>
                 </div>
              </div>
            ))}
         </div>

         <div className="mt-12 pt-8 border-t border-white/5 space-y-8">
            <div className="p-6 bg-zinc-900/40 rounded-2xl border border-white/5 space-y-6">
               <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Queue Health</span>
                  <Zap className="h-4 w-4 text-emerald-500" />
               </div>
               <div className="space-y-3">
                  <div className="flex justify-between items-end">
                     <span className="text-[9px] font-bold text-zinc-600 uppercase">Station Capacity</span>
                     <span className="text-xs font-black text-emerald-400 uppercase">Efficient</span>
                  </div>
                  <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-600 w-[45%]" />
                  </div>
               </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-3 text-zinc-500 hover:text-white transition-all group">
               <span className="text-[10px] font-black uppercase tracking-widest">History Tracking</span>
               <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </aside>

    </div>
  );
}
