"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Package,
  Plus,
  ArrowUpDown,
  MoreVertical,
  Printer,
  ChevronRight,
  ChevronLeft,
  Warehouse,
  History,
  TrendingDown,
  TrendingUp,
  FileText,
  Camera,
  Layers,
  Zap,
  Info,
  MapPin,
  Tag,
  ShieldCheck,
  Eye,
  Trash2,
  Download,
  Barcode,
  Settings2,
  XCircle,
  Cpu,
  ZapOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CarServicingPartsCatalog() {
  const [selectedPart, setSelectedPart] = useState<any>(null);
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  const categories = [
    { id: "engine", label: "Engine Components", items: 452, icon: <Settings2 className="h-4 w-4" /> },
    { id: "braking", label: "Braking System", items: 128, icon: <ZapOff className="h-4 w-4" /> },
    { id: "suspension", label: "Suspension & Steering", items: 215, icon: <TrendingDown className="h-4 w-4" /> },
    { id: "electrical", label: "Electrical & Lighting", items: 342, icon: <Zap className="h-4 w-4" /> },
  ];

  const parts = [
    { id: "OF-99-TM", img: "🛢️", name: "Premium Oil Filter", brand: "Toyota Genuine", cat: "Engine", compatibility: "Camry, RAV4, Corolla (2018-2024)", stock: 142, price: 12.50, status: "in-stock" },
    { id: "BP-SET-B01", img: "🛑", name: "Brake Pad Set (Front)", brand: "Bosch Premium", cat: "Braking", compatibility: "Universal (78 Models)", stock: 12, price: 45.00, status: "low" },
    { id: "SP-PLUG-NGK", img: "⚡", name: "Iridium Spark Plug", brand: "NGK Laser", cat: "Engine", compatibility: "All Petrol Engines", stock: 0, price: 8.90, status: "out" },
    { id: "SB-2022-X", img: "🔩", name: "Lower Arm Bushing", brand: "Sankei 555", cat: "Suspension", compatibility: "X-Trail, Qashqai", stock: 34, price: 18.25, status: "in-stock" },
  ];

  return (
    <div className="flex h-[calc(100vh-120px)] gap-8 animate-in fade-in duration-700 fill-mode-both">
      
      {/* 1. Sidebar: Multi-Level Categories & Brands */}
      <aside className="w-72 shrink-0 space-y-8 overflow-y-auto pr-2">
         <section>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Master Categories</h3>
            <div className="space-y-1">
               {categories.map((c) => (
                 <button key={c.id} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all hover:bg-zinc-100 group active:scale-[0.98]">
                    <div className="flex items-center gap-3">
                       <div className="text-zinc-400 group-hover:text-sky-600">{c.icon}</div>
                       <span className="text-xs font-bold text-zinc-600 group-hover:text-zinc-900">{c.label}</span>
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400">{c.items}</span>
                 </button>
               ))}
            </div>
         </section>

         <section className="pt-6 border-t border-zinc-100">
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Brand Tiers</h3>
            <div className="grid grid-cols-1 gap-2">
               {[
                 { id: "oem", label: "Genuine (OEM)", color: "text-emerald-600", bg: "bg-emerald-50" },
                 { id: "aftermarket", label: "Aftermarket Premium", color: "text-sky-600", bg: "bg-sky-50" },
                 { id: "economy", label: "Economy Plus", color: "text-zinc-600", bg: "bg-zinc-50" }
               ].map((b) => (
                 <label key={b.id} className="flex items-center gap-3 rounded-xl border border-transparent hover:border-zinc-100 px-3 py-2 cursor-pointer group transition-all">
                    <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-sky-600 focus:ring-sky-500" />
                    <span className={`text-[10px] font-black uppercase tracking-tight ${b.color}`}>{b.label}</span>
                 </label>
               ))}
            </div>
         </section>
      </aside>

      {/* 2. Main Area: Search & Table */}
      <main className="flex-1 flex flex-col gap-6 overflow-hidden">
         {/* Global Search & Actions */}
         <section className="animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                  <input 
                    type="text" 
                    placeholder="Search Part Name, OEM #, Barcode, or Compatibility (e.g. Corolla 2022)..."
                    className="h-14 w-full rounded-2xl border-none bg-white shadow-sm ring-1 ring-zinc-200/50 pl-12 pr-4 text-sm font-medium outline-none focus:ring-4 focus:ring-sky-500/10 transition-all font-brand-sans"
                  />
               </div>
               <div className="flex items-center gap-3">
                  <Button variant="outline" className="h-14 w-14 rounded-2xl border-zinc-200 bg-white p-0 shadow-sm text-zinc-400 hover:text-sky-600">
                     <Barcode className="h-6 w-6" />
                  </Button>
                  <Button className="h-14 rounded-2xl bg-sky-600 px-6 font-bold text-white shadow-xl shadow-sky-600/20 hover:bg-sky-700 hover:scale-[1.02] active:scale-[0.98] transition-all gap-2">
                     <Plus className="h-5 w-5" /> ADD NEW PART
                  </Button>
               </div>
            </div>
         </section>

         {/* Parts Master Table */}
         <Card className="flex-1 border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="overflow-x-auto flex-1 h-0 scrollbar-hide">
               <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 z-10 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-100">
                     <tr>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Part Info</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Brand/Cat</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Compatibility</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Stock Status</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Unit Price</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                     {parts.map((p) => (
                       <tr 
                        key={p.id} 
                        onClick={() => setSelectedPart(p)}
                        className={`group cursor-pointer transition-all hover:bg-zinc-50/80 ${selectedPart?.id === p.id ? 'bg-sky-50 shadow-[inset_4px_0_0_0_#0ea5e9]' : ''}`}
                       >
                         <td className="px-6 py-4">
                            <div className="flex items-center gap-4">
                               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-zinc-200">
                                  {p.img}
                               </div>
                               <div>
                                  <p className="text-xs font-bold text-zinc-900 leading-none">{p.name}</p>
                                  <p className="mt-1.5 text-[10px] font-mono font-medium text-zinc-400 italic">{p.id}</p>
                               </div>
                            </div>
                         </td>
                         <td className="px-6 py-4">
                            <p className="text-[10px] font-bold text-zinc-600">{p.brand}</p>
                            <p className="mt-1 text-[8px] font-bold uppercase tracking-widest text-zinc-400">{p.cat}</p>
                         </td>
                         <td className="px-6 py-4">
                            <div className="group/tip relative flex items-center gap-1.5">
                               <span className="max-w-[150px] truncate text-[10px] font-medium text-zinc-500">{p.compatibility}</span>
                               <Info className="h-3 w-3 text-zinc-300 cursor-help" />
                               {/* Tooltip Simulation */}
                               <div className="absolute bottom-full left-0 mb-2 w-48 rounded-xl bg-zinc-900 p-3 text-[10px] text-white opacity-0 group-hover/tip:opacity-100 transition-opacity pointer-events-none shadow-xl z-20">
                                  <p className="font-bold border-b border-white/10 pb-1.5 mb-1.5">Full Compatibility</p>
                                  {p.compatibility}
                               </div>
                            </div>
                         </td>
                         <td className="px-6 py-4">
                            <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-tighter ${
                              p.status === 'in-stock' ? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200' :
                              p.status === 'low' ? 'bg-amber-50 text-amber-600 ring-1 ring-amber-200 animate-pulse' :
                              'bg-red-50 text-red-600 ring-1 ring-red-200'
                            }`}>
                               {p.status === 'in-stock' ? `${p.stock} Units` : 
                                p.status === 'low' ? `Critical: ${p.stock}` : 'Out of Stock'}
                            </div>
                         </td>
                         <td className="px-6 py-4">
                            <p className="text-sm font-black text-zinc-900 leading-none">৳ {p.price.toLocaleString()}</p>
                            <p className="mt-1 text-[8px] font-bold text-zinc-400 uppercase tracking-widest">+ 15% VAT</p>
                         </td>
                         <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2">
                              <button className="rounded-lg p-2 text-zinc-400 hover:bg-white hover:text-sky-600 transition-all border border-transparent hover:border-zinc-200 shadow-sm">
                                 <History className="h-4 w-4" />
                              </button>
                              <button className="rounded-lg p-2 text-zinc-400 hover:bg-white hover:text-emerald-600 transition-all border border-transparent hover:border-zinc-200 shadow-sm">
                                 <Plus className="h-4 w-4" />
                              </button>
                           </div>
                         </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/50 px-6 py-4">
               <p className="text-[10px] font-bold tracking-widest text-zinc-400">
                  <span className="text-zinc-900">4</span> / 1,280 SKUS LOADED
               </p>
               <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg" disabled><ChevronLeft className="h-4 w-4" /></Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg hover:border-sky-200 hover:bg-sky-50 text-sky-600"><ChevronRight className="h-4 w-4" /></Button>
               </div>
            </div>
         </Card>
      </main>

      {/* 3. Advanced Part Detail View (Side Panel) */}
      {selectedPart && (
        <aside className="fixed right-0 top-0 z-50 h-full w-[450px] bg-white shadow-2xl animate-in slide-in-from-right duration-500 ease-out flex flex-col border-l border-zinc-200">
           <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-100">
              <div>
                 <h2 className="text-lg font-black tracking-tighter text-zinc-900 line-clamp-1">{selectedPart.name}</h2>
                 <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">{selectedPart.id}</p>
              </div>
              <button 
                onClick={() => setSelectedPart(null)}
                className="h-10 w-10 rounded-xl bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-400 transition-all hover:scale-105 active:scale-95"
              >
                 <XCircle className="h-6 w-6" />
              </button>
           </div>

           <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
              {/* Warehouse & Storage Location */}
              <section className="space-y-4">
                 <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-sky-600">Inventory Distribution</h4>
                    <span className="text-[10px] font-bold text-zinc-400">2 Branches</span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { city: "Dhaka HQ", stock: 120, pos: "Aisle 4, B-12" },
                      { city: "CTG Hub", stock: 22, pos: "Aisle 1, C-02" }
                    ].map((b) => (
                      <div key={b.city} className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4">
                         <div className="flex items-center gap-2 mb-2">
                            <Warehouse className="h-3.5 w-3.5 text-zinc-400" />
                            <span className="text-[10px] font-bold text-zinc-900">{b.city}</span>
                         </div>
                         <p className="text-xl font-black text-zinc-900 leading-none">{b.stock}</p>
                         <div className="mt-3 flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-widest text-zinc-400">
                            <MapPin className="h-2.5 w-2.5" /> {b.pos}
                         </div>
                      </div>
                    ))}
                 </div>
              </section>

              {/* Price Intelligence Sparkline */}
              <section className="space-y-4">
                 <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-sky-600">Price Intelligence</h4>
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                 </div>
                 <Card className="border-0 bg-zinc-900 p-6 text-white overflow-hidden relative">
                    <div className="absolute bottom-0 left-0 w-full h-12 opacity-20">
                       <svg viewBox="0 0 100 20" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                          <path d="M0,20 L10,15 L30,18 L50,12 L70,8 L90,2 L100,0" fill="none" stroke="#38bdf8" strokeWidth="2" />
                       </svg>
                    </div>
                    <div className="relative z-10 flex justify-between items-end">
                       <div>
                          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-1">Cost Price (Supplier)</p>
                          <p className="text-xl font-black italic">৳ {(selectedPart.price * 0.75).toFixed(2)}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-1">Margin</p>
                          <p className="text-xl font-black text-sky-400">25.0%</p>
                       </div>
                    </div>
                 </Card>
                 {/* Margin Calculator Tool */}
                 <div className="flex items-center gap-2">
                    <Button variant="outline" className="flex-1 h-10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-50 border-zinc-200">Bulk Margin +5%</Button>
                    <Button variant="outline" className="h-10 w-10 p-0 rounded-xl border-zinc-200"><TrendingUp className="h-4 w-4" /></Button>
                 </div>
              </section>

              {/* Technical Matrix */}
              <section className="space-y-4 pt-4 border-t border-zinc-100">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-sky-600">Technical Matrix</h4>
                 <div className="grid grid-cols-2 gap-y-6">
                    <div>
                       <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Compatibility</p>
                       <p className="text-xs font-semibold text-zinc-800 leading-relaxed pr-2">Multiple Platform (2018-2024)</p>
                    </div>
                    <div>
                       <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Material</p>
                       <p className="text-xs font-semibold text-zinc-800">Fiber Reinforced ABS</p>
                    </div>
                    <div>
                       <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Installation</p>
                       <Button variant="ghost" className="h-8 px-0 text-sky-600 font-bold text-[10px] gap-2 uppercase tracking-widest">
                          <Download className="h-3.5 w-3.5" /> PDF Manual
                       </Button>
                    </div>
                    <div>
                       <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-400 mb-1">OEM Equiv.</p>
                       <p className="text-xs font-bold text-emerald-600">12399-ABCD-00</p>
                    </div>
                 </div>
              </section>

              {/* Media Gallery (Part Multi-angle) */}
              <section className="space-y-4 pt-4 border-t border-zinc-100">
                 <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-sky-600">Visual Verification</h4>
                    <span className="text-[8px] font-bold text-zinc-400">4 Photos</span>
                 </div>
                 <div className="grid grid-cols-4 gap-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="aspect-square rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-300 hover:border-sky-500 cursor-pointer transition-all">
                         <Camera className="h-5 w-5" />
                      </div>
                    ))}
                 </div>
              </section>
           </div>

           <div className="p-8 border-t border-zinc-100 bg-zinc-50/50 flex items-center gap-3">
              <Button variant="outline" className="flex-1 h-12 rounded-xl border-zinc-200 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-sm">
                 <Printer className="h-5 w-5 mr-2" /> Label
              </Button>
              <Button className="flex-[2] h-12 rounded-xl bg-sky-600 text-xs font-bold uppercase tracking-widest text-white shadow-xl shadow-sky-600/20 hover:bg-sky-700 transition-all hover:scale-[1.02]">
                 <Edit className="h-5 w-5 mr-2" /> EDIT SKU
              </Button>
           </div>
        </aside>
      )}

      {/* Floating Add New Part (Fallback) */}
      <div className="fixed bottom-10 right-10 z-30">
         <Button className="h-16 w-16 rounded-3xl bg-zinc-900 text-white shadow-2xl hover:bg-zinc-800 transition-all hover:scale-110 active:scale-95 group">
            <Plus className="h-8 w-8 group-hover:rotate-90 transition-transform duration-300" />
         </Button>
      </div>

    </div>
  );
}

// Icon fallbacks if needed
function Edit({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}
