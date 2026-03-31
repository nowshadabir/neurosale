"use client";

import { useState } from "react";
import {
  Package,
  Warehouse,
  TrendingDown,
  AlertTriangle,
  ArrowRightLeft,
  Search,
  Filter,
  MoreVertical,
  ChevronRight,
  ChevronLeft,
  Zap,
  Info,
  MapPin,
  Clock,
  LineChart,
  ArrowRight,
  TrendingUp,
  XCircle,
  Barcode,
  Plus,
  ArrowDownToLine,
  Truck,
  RotateCcw,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CarServicingStockLevels() {
  const [selectedPart, setSelectedPart] = useState<any>(null);
  const [filterBranch, setFilterBranch] = useState("all");

  const summary = [
    { label: "Inventory Value", value: "৳ 42.5L", icon: <Package className="h-5 w-5" />, color: "text-sky-600", bg: "bg-sky-50" },
    { label: "Low Stock Items", value: "24 SKUs", icon: <AlertTriangle className="h-5 w-5" />, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Out of Stock", value: "8 SKUs", icon: <XCircle className="h-5 w-5" />, color: "text-red-600", bg: "bg-red-50" },
    { label: "In-Transit", value: "12 Parts", icon: <Truck className="h-5 w-5" />, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const stockData = [
    { 
      id: "OIL-0W20", name: "0W-20 Engine Oil", cat: "Lubricants", total: "240L", 
      branches: { main: { qty: 150, status: "healthy", pos: "R4-B1" }, dhanmondi: { qty: 40, status: "low", pos: "R1-A2" }, uttara: { qty: 50, status: "healthy", pos: "R2-C5" } } 
    },
    { 
      id: "BP-01", name: "Brake Pad (BP-01)", cat: "Braking", total: "18 Sets", 
      branches: { main: { qty: 10, status: "healthy", pos: "R5-D1" }, dhanmondi: { qty: 0, status: "out", pos: "N/A" }, uttara: { qty: 8, status: "low", pos: "R3-A1" } } 
    },
    { 
      id: "SP-NGK", name: "Spark Plug (NGK)", cat: "Electrical", total: "55 Pcs", 
      branches: { main: { qty: 20, status: "healthy", pos: "R2-B2" }, dhanmondi: { qty: 15, status: "healthy", pos: "R1-B1" }, uttara: { qty: 20, status: "healthy", pos: "R1-B2" } } 
    },
    { 
      id: "FL-02", name: "Oil Filter (OF-99)", cat: "Filtration", total: "102 Pcs", 
      branches: { main: { qty: 80, status: "healthy", pos: "R4-D3" }, dhanmondi: { qty: 12, status: "low", pos: "R1-D1" }, uttara: { qty: 10, status: "low", pos: "R2-D1" } } 
    }
  ];

  const renderQty = (branchData: any) => {
    const { qty, status, pos } = branchData;
    return (
      <div className="group relative flex flex-col items-center justify-center p-4 transition-all hover:bg-zinc-50 border-r border-zinc-100 last:border-0 h-full">
         <span className={`text-base font-black ${
           status === 'healthy' ? 'text-emerald-600' : 
           status === 'low' ? 'text-amber-600 animate-pulse' : 'text-red-500'
         }`}>
            {qty === 0 ? 'OUT' : qty}
         </span>
         <div className="mt-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">{pos}</span>
            <button className="text-sky-600 hover:scale-110"><Barcode className="h-2.5 w-2.5" /></button>
         </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] animate-in fade-in duration-700 fill-mode-both">
      
      {/* 1. Global Inventory Summary (Top Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 shrink-0">
        {summary.map((stat, i) => (
          <Card key={stat.label} className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden relative group">
             <div className="absolute inset-0 bg-zinc-50/50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-full group-hover:translate-y-0 duration-500 ease-out" />
             <CardContent className="p-6 relative z-10 flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.color} shadow-sm group-hover:scale-110 transition-transform`}>
                   {stat.icon}
                </div>
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{stat.label}</p>
                   <p className="text-2xl font-black text-zinc-900 tracking-tight">{stat.value}</p>
                </div>
             </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex-1 flex gap-8 overflow-hidden">
        {/* 2. Main Area: Multi-Branch Stock Matrix */}
        <main className="flex-1 flex flex-col gap-6 overflow-hidden">
           {/* Filters & Branch Toggle */}
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 p-1 w-full md:w-fit">
                 {["all", "main", "dhanmondi", "uttara"].map((b) => (
                   <button 
                    key={b}
                    onClick={() => setFilterBranch(b)}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${
                      filterBranch === b ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-400 hover:text-zinc-600"
                    }`}
                   >
                     {b === 'all' ? "Across All Branches" : b}
                   </button>
                 ))}
              </div>
              
              <div className="flex items-center gap-3">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input type="text" placeholder="Search item..." className="h-10 w-64 rounded-xl border border-zinc-200 pl-10 pr-4 text-xs font-bold outline-none focus:ring-4 focus:ring-sky-500/10" />
                 </div>
                 <Button variant="outline" className="h-10 w-10 p-0 rounded-xl border-zinc-200">
                    <Filter className="h-4 w-4 text-zinc-400" />
                 </Button>
              </div>
           </div>

           {/* The Multi-Branch Table */}
           <Card className="flex-1 border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden flex flex-col">
              <div className="overflow-auto flex-1 h-0 scrollbar-hide">
                 <table className="w-full text-left border-collapse table-fixed min-w-[1000px]">
                    <thead className="sticky top-0 z-10 bg-zinc-50 border-b border-zinc-100">
                       <tr>
                          <th className="w-[300px] px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Part Intelligence</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 text-center">Total Stock</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-sky-600 bg-sky-50/50 text-center">Branch A (Main)</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50/50 text-center">Branch B (DMD)</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50/50 text-center">Branch C (UTR)</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                       {stockData.map((p) => (
                         <tr 
                          key={p.id} 
                          onClick={() => setSelectedPart(p)}
                          className={`group cursor-pointer transition-colors hover:bg-zinc-50/30 ${selectedPart?.id === p.id ? 'bg-sky-50 shadow-[inset_4px_0_0_0_#38bdf8]' : ''}`}
                         >
                           <td className="px-6 py-5">
                              <div className="flex items-center gap-4">
                                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-400 group-hover:bg-white border-transparent transition-all">
                                    <Package className="h-5 w-5" />
                                 </div>
                                 <div className="overflow-hidden">
                                    <p className="text-xs font-bold text-zinc-900 truncate">{p.name}</p>
                                    <p className="mt-1 text-[8px] font-bold text-zinc-400 uppercase tracking-widest">{p.id} • {p.cat}</p>
                                 </div>
                              </div>
                           </td>
                           <td className="px-6 py-5 text-center">
                              <p className="text-sm font-black text-zinc-800">{p.total}</p>
                           </td>
                           <td className="p-0 text-center bg-sky-50/20">{renderQty(p.branches.main)}</td>
                           <td className="p-0 text-center bg-amber-50/20">{renderQty(p.branches.dhanmondi)}</td>
                           <td className="p-0 text-center bg-emerald-50/20">{renderQty(p.branches.uttara)}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              
              <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/50 px-6 py-4">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Total Items: 1,452 | Load Time: 0.1s</p>
                 <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg"><ChevronLeft className="h-4 w-4" /></Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg"><ChevronRight className="h-4 w-4" /></Button>
                 </div>
              </div>
           </Card>
        </main>

        {/* 3. Action Sidebar: Transitions & AI Health */}
        {selectedPart ? (
          <aside className="w-[380px] shrink-0 h-full overflow-y-auto space-y-8 animate-in slide-in-from-right-4 duration-500 ease-out pr-1 scrollbar-hide">
             {/* Part Context */}
             <section className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                   <h3 className="text-sm font-black text-zinc-900 tracking-tight">{selectedPart.name}</h3>
                   <button onClick={() => setSelectedPart(null)} className="h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors"><XCircle className="h-5 w-5" /></button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <Card className="border-0 bg-zinc-900 text-white overflow-hidden p-5">
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Shelf Aging</p>
                      <h4 className="text-xl font-black">42 Days</h4>
                      <p className="mt-1 text-[9px] text-zinc-500 font-medium">Healthy Turnover</p>
                   </Card>
                   <Card className="border-0 bg-sky-600 text-white overflow-hidden p-5 shadow-lg shadow-sky-600/20">
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-sky-100 mb-2">Burn Rate</p>
                      <h4 className="text-xl font-black italic">4.2 U/Day</h4>
                      <p className="mt-1 text-[9px] text-sky-200 font-medium">+12% vs LW</p>
                   </Card>
                </div>
             </section>

             {/* Smart Rebalancing (AI Highlight) */}
             <section className="rounded-2xl border-2 border-dashed border-sky-100 bg-sky-50/50 p-6 space-y-4">
                <div className="flex items-center gap-3">
                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                      <Zap className="h-6 w-6" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-sky-600">AI Rebalance Alert</p>
                      <p className="text-xs font-bold text-zinc-900">Branch B is Critical</p>
                   </div>
                </div>
                <p className="text-[10px] leading-relaxed text-zinc-600 font-medium">
                  "Branch A has 150 units with 42 days of cover. Dhanmondi has 0 units. Authorize immediate transfer of 20 units?"
                </p>
                <Button className="w-full h-11 bg-white border border-sky-200 text-sky-600 font-bold text-[10px] shadow-sm hover:bg-sky-100 uppercase tracking-widest gap-2">
                   <RotateCcw className="h-4 w-4" /> REBALANCE NOW
                </Button>
             </section>

             {/* Quick Actions Portal */}
             <section className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Quick Operations</h3>
                <div className="grid gap-3">
                   <Button variant="outline" className="h-14 justify-start gap-3 rounded-2xl border-zinc-100 bg-white px-5 text-zinc-600 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-600 hover:border-sky-100">
                      <ArrowRightLeft className="h-5 w-5" />
                      <div className="text-left">
                         <p className="text-xs font-bold">Internal Transfer</p>
                         <p className="text-[9px] opacity-70">Move goods between branches</p>
                      </div>
                   </Button>
                   <Button variant="outline" className="h-14 justify-start gap-3 rounded-2xl border-zinc-100 bg-white px-5 text-zinc-600 shadow-sm transition-all hover:bg-amber-50 hover:text-amber-600 hover:border-amber-100">
                      <ArrowDownToLine className="h-5 w-5" />
                      <div className="text-left">
                         <p className="text-xs font-bold">Raise Purchase Order</p>
                         <p className="text-[9px] opacity-70">Low stocks across the fleet</p>
                      </div>
                   </Button>
                   <Button variant="outline" className="h-14 justify-start gap-3 rounded-2xl border-zinc-100 bg-white px-5 text-zinc-600 shadow-sm transition-all hover:bg-red-50 hover:text-red-600 hover:border-red-100">
                      <AlertTriangle className="h-5 w-5" />
                      <div className="text-left">
                         <p className="text-xs font-bold">Manual Stock Correction</p>
                         <p className="text-[9px] opacity-70 italic">Adjustment reason is mandatory</p>
                      </div>
                   </Button>
                </div>
             </section>

             {/* Stock Prediction Chart */}
             <section className="space-y-4 pb-10">
                <div className="flex items-center justify-between">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Inventory Health</h3>
                   <span className="text-[10px] font-bold text-amber-600">8 Days of Cover Remaining</span>
                </div>
                <div className="h-32 w-full rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center p-4">
                   <div className="flex items-end gap-1.5 w-full h-full">
                      {[40, 35, 30, 25, 20, 15, 8, 5, 2, 1].map((v, i) => (
                        <div 
                          key={i} 
                          className={`flex-1 rounded-t-lg transition-all duration-1000 ${i > 5 ? 'bg-red-200' : 'bg-emerald-100'}`} 
                          style={{ height: `${v * 2}%` }} 
                        />
                      ))}
                   </div>
                </div>
             </section>
          </aside>
        ) : (
          <aside className="w-[380px] shrink-0 flex flex-col items-center justify-center text-center p-8 bg-zinc-50/50 rounded-3xl border border-dashed border-zinc-200 animate-in fade-in duration-700">
             <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl shadow-zinc-200/50 text-zinc-300">
                <Warehouse className="h-10 w-10" />
             </div>
             <h4 className="mt-6 text-base font-bold text-zinc-900 leading-none">Intelligence Panel</h4>
             <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
               Select an item from the matrix to view <span className="font-bold">Real-time Stock Aging</span>, <span className="font-bold">Consumption Burn Rate</span>, and <span className="underline">AI Rebalancing Suggetions</span>.
             </p>
          </aside>
        )}
      </div>

      {/* Floating Quick Count / Barcode Action */}
      <div className="fixed bottom-10 right-10 z-50 flex items-center gap-3">
         <div className="flex h-14 items-center gap-3 rounded-2xl border border-zinc-200 bg-white/60 p-2 backdrop-blur-xl shadow-2xl">
            <Button variant="ghost" className="h-10 w-10 p-0 text-zinc-400 hover:text-sky-600">
               <RotateCcw className="h-5 w-5" />
            </Button>
            <div className="h-6 w-px bg-zinc-200" />
            <Button className="h-10 rounded-xl bg-zinc-900 text-[10px] font-black uppercase tracking-widest text-white hover:bg-zinc-800 gap-2">
               <Barcode className="h-4 w-4" /> Quick Count
            </Button>
         </div>
         <Button className="h-14 w-14 rounded-2xl bg-sky-600 text-white shadow-xl shadow-sky-600/30 hover:scale-110 active:scale-95 transition-all">
            <Plus className="h-8 w-8 font-black" />
         </Button>
      </div>

    </div>
  );
}
