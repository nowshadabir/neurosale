"use client";

import { useState } from "react";
import {
  Users,
  Clock,
  ChevronRight,
  Flame,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  Trash2,
  ArrowRightLeft,
  Link as LinkIcon,
  Search,
  Filter,
  FileText,
  Printer,
  User,
  Zap,
  TrendingUp,
  CreditCard,
  History,
  Timer,
  LayoutGrid,
  Menu,
  X,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export function RestaurantFloorMap() {
  const [filter, setFilter] = useState("all");
  const [selectedTable, setSelectedTable] = useState<any>(null);

  const stats = [
    { label: "Occupancy", value: "65%", sub: "42/64 Seats", color: "text-sky-600" },
    { label: "Active Tables", value: "12", sub: "8 Vacant | 2 Dirty", color: "text-emerald-600" },
    { label: "Waitlist", value: "3", sub: "Avg. 15m wait", color: "text-amber-600" },
    { label: "Revenue Live", value: "৳ 12,400", sub: "Open Bills", color: "text-zinc-900" },
  ];

  const [tables, setTables] = useState<any[]>([
    { id: "101", status: "vacant", capacity: "2P", seated: "--", activity: "--", total: 0, server: "--", attention: false },
    { id: "102", status: "served", capacity: "2P", seated: "45m", activity: "12m ago", total: 4500, server: "Rakib", attention: false },
    { id: "103", status: "ordered", capacity: "4P", seated: "22m", activity: "5m ago", total: 11200, server: "Abir", attention: true },
    { id: "104", status: "payment", capacity: "6P", seated: "65m", activity: "2m ago", total: 21000, server: "Selim", attention: false, billPrinted: true },
    { id: "201", status: "reserved", capacity: "8P", seated: "Due 8 PM", activity: "--", total: 0, server: "Mawa", attention: false, reservationGlow: true },
    { id: "B-01", status: "dirty", capacity: "4P", seated: "--", activity: "10m ago", total: 0, server: "--", attention: false },
    { id: "B-05", status: "served", capacity: "2P", seated: "32m", activity: "25m ago", total: 3200, server: "Rakib", attention: true },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'vacant': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'served': return 'bg-sky-50 text-sky-600 border-sky-100';
      case 'ordered': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'payment': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'reserved': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'dirty': return 'bg-zinc-100 text-zinc-500 border-zinc-200';
      default: return 'bg-zinc-50 text-zinc-500 border-zinc-100';
    }
  };

  const filteredTables = tables.filter(t => {
    if (filter === 'attention') return t.attention || t.status === 'payment';
    if (filter === 'clear') return t.status === 'dirty' || (t.status === 'payment' && t.billPrinted);
    if (filter === 'my') return t.server === 'Rakib';
    return true;
  });

  return (
    <div className="flex h-[calc(100vh-120px)] -mx-6 -mt-6 bg-white overflow-hidden text-zinc-900 font-brand-sans selection:bg-sky-100 animate-in fade-in duration-700 fill-mode-both">
      
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* 1. The Summary Ribbon (Global Insight) */}
        <header className="px-8 py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between z-20">
           <div className="flex items-center gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{stat.label}</span>
                   <div className="flex items-baseline gap-2">
                      <span className={`text-base font-black ${stat.color}`}>{stat.value}</span>
                      <span className="text-[10px] font-bold text-zinc-400">{stat.sub}</span>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="flex items-center gap-3">
              <div className="h-8 w-px bg-zinc-200 mx-2" />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                 <Zap className="h-3 w-3 shadow-sm" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Live Sync: Active</span>
              </div>
           </div>
        </header>

        {/* 2. List Control Bar (Search & Filter) */}
        <section className="px-8 py-4 border-b border-zinc-100 flex items-center justify-between gap-4">
           <div className="flex items-center gap-2">
              {[
                { id: 'all', label: 'All Tables' },
                { id: 'attention', label: 'Needs Attention', count: 3 },
                { id: 'clear', label: 'Ready to Clear', count: 2 },
                { id: 'my', label: 'My Tables' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`h-9 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all gap-2 flex items-center ${
                    filter === btn.id ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/10" : "text-zinc-400 hover:bg-zinc-100"
                  }`}
                >
                   {btn.label}
                   {btn.count && <span className={`h-4 w-4 rounded-full flex items-center justify-center text-[8px] ${filter === btn.id ? 'bg-white text-zinc-900' : 'bg-zinc-200 text-zinc-500'}`}>{btn.count}</span>}
                </button>
              ))}
           </div>
           
           <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
              <input type="text" placeholder="Jump to table..." className="h-9 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-9 pr-4 text-[10px] font-bold outline-none focus:bg-white focus:ring-4 focus:ring-sky-500/10" />
           </div>
        </section>

        {/* 3. The Interactive Table List (Main View) */}
        <section className="flex-1 overflow-auto scrollbar-hide">
           <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-white z-10">
                 <tr className="border-b border-zinc-100">
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Table ID</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Capacity</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Time Seated</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Last Activity</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Bill Total</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Server</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                 {filteredTables.map((table) => (
                   <tr 
                    key={table.id} 
                    onClick={() => setSelectedTable(table)}
                    className={`group cursor-pointer transition-colors hover:bg-zinc-50/80 ${selectedTable?.id === table.id ? 'bg-sky-50/50' : ''}`}
                   >
                      <td className="px-8 py-5">
                         <div className="flex items-center gap-3">
                            {table.reservationGlow && <div className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.5)]" />}
                            <span className="text-sm font-black tracking-tighter text-zinc-900 uppercase">T-{table.id}</span>
                            {table.billPrinted && <Printer className="h-3 w-3 text-rose-400" />}
                         </div>
                      </td>
                      <td className="px-6 py-5">
                         <span className={`px-2.5 py-1 rounded-lg border text-[9px] font-black uppercase tracking-[0.05em] ${getStatusColor(table.status)}`}>
                            {table.status}
                         </span>
                      </td>
                      <td className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase">{table.capacity}</td>
                      <td className="px-6 py-5 text-xs font-black text-zinc-900 text-center tabular-nums">{table.seated}</td>
                      <td className="px-6 py-5 text-center">
                         <span className={`text-xs font-black tabular-nums transition-all ${
                           table.attention ? 'text-rose-500 animate-pulse' : 'text-zinc-500'
                         }`}>
                           {table.activity}
                         </span>
                      </td>
                      <td className="px-6 py-5 text-right font-black italic text-sm">
                         {table.total > 0 ? `৳ ${table.total.toLocaleString()}` : '--'}
                      </td>
                      <td className="px-8 py-5">
                         <div className="flex items-center gap-2 group-hover:text-sky-600 transition-colors">
                            <User className="h-3 w-3 opacity-30" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{table.server}</span>
                         </div>
                      </td>
                   </tr>
                 ))}
              </tbody>
           </table>
           
           {/* Empty State */}
           {filteredTables.length === 0 && (
             <div className="py-32 flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300 mb-4">
                   <Filter className="h-8 w-8" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400">No tables matching this filter</h3>
             </div>
           )}
        </section>
      </div>

      {/* 4. Quick Action Side Panel (Inspector) */}
      <aside className={`w-[400px] shrink-0 border-l border-zinc-200 bg-zinc-50/80 transition-all duration-500 shadow-[-10px_0_40px_rgba(0,0,0,0.035)] ${
        selectedTable ? 'translate-x-0' : 'translate-x-full fixed right-0 h-full'
      }`}>
         {selectedTable && (
           <div className="flex flex-col h-full animate-in slide-in-from-right-10 duration-500 fill-mode-both">
              {/* Profile Header */}
              <div className="p-8 bg-zinc-950 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-24 bg-sky-500 opacity-5 rounded-full blur-3xl -mr-32 -mt-32" />
                 <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                       <span className="px-3 py-1 bg-white/10 rounded-lg text-[9px] font-black tracking-[0.2em] uppercase text-sky-400">Contextual Operations</span>
                       <button onClick={() => setSelectedTable(null)} className="h-6 w-6 text-white/30 hover:text-white"><X className="h-5 w-5" /></button>
                    </div>
                    <div>
                       <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none">Table {selectedTable.id}</h3>
                       <p className="mt-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                          Status Workflow: <span className={`text-sky-400`}>{selectedTable.status}</span>
                       </p>
                    </div>
                 </div>
              </div>

              {/* Actions content */}
              <div className="flex-1 overflow-y-auto p-8 space-y-10 scrollbar-hide">
                 {/* Quick Status Toggle */}
                 <section className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Workflow State</h4>
                    <div className="grid grid-cols-2 gap-2">
                       {['Vacant', 'Served', 'Dirty', 'Ordered'].map((s) => (
                         <button 
                          key={s} 
                          className={`h-11 rounded-xl border border-zinc-200 bg-white text-[9px] font-black uppercase tracking-widest transition-all ${
                            selectedTable.status.toLowerCase() === s.toLowerCase() ? 'border-sky-600 bg-sky-50 text-sky-600 ring-2 ring-sky-500/20 shadow-sm' : 'hover:border-zinc-300'
                          }`}
                         >
                           {s}
                         </button>
                       ))}
                    </div>
                 </section>

                 {/* Order Preview (Add item entry) */}
                 <section className="space-y-4">
                    <div className="flex items-center justify-between">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Current Order Preview</h4>
                       <Button variant="ghost" className="h-7 text-[8px] font-black uppercase text-sky-600">Open Full POS</Button>
                    </div>
                    <div className="relative">
                       <Search className="absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-zinc-400" />
                       <input type="text" placeholder="Quick add (e.g. 'Coffee')..." className="h-10 w-full rounded-xl border border-zinc-200 bg-white pl-9 pr-4 text-[10px] font-bold outline-none" />
                    </div>
                 </section>

                 {/* Logistics */}
                 <section className="space-y-4 pt-10 border-t border-zinc-100">
                    <div className="grid grid-cols-2 gap-3">
                       <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 transition-all group shadow-sm">
                          <History className="h-5 w-5 text-zinc-300 group-hover:text-zinc-600 mb-2" />
                          <span className="text-[8px] font-black uppercase tracking-widest">Audit Trail</span>
                       </button>
                       <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 transition-all group shadow-sm">
                          <ArrowRightLeft className="h-5 w-5 text-zinc-300 group-hover:text-sky-600 mb-2" />
                          <span className="text-[8px] font-black uppercase tracking-widest">Swap Table</span>
                       </button>
                    </div>
                 </section>
              </div>

              {/* Fiscal Action (Footer) */}
              <div className="p-8 bg-white border-t border-zinc-200 space-y-4">
                 <div className="flex justify-between items-end mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-400 leading-none">Open Check Total</span>
                    <span className="text-3xl font-black tabular-nums italic">৳ {selectedTable.total.toLocaleString()}</span>
                 </div>
                 <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="h-14 rounded-2xl border-zinc-200 text-[9px] font-black uppercase tracking-[0.2em] gap-2">
                       <Printer className="h-4 w-4" /> Print Bill
                    </Button>
                    <Button className="h-14 rounded-2xl bg-sky-600 text-white text-[9px] font-black uppercase tracking-[0.25em] shadow-xl shadow-sky-600/20 hover:bg-sky-700">
                       <CreditCard className="h-4 w-4" /> CHECKOUT
                    </Button>
                 </div>
              </div>
           </div>
         )}
      </aside>

    </div>
  );
}
