"use client";

import { useState } from "react";
import {
  ArrowRightLeft,
  Truck,
  Package,
  AlertCircle,
  Search,
  Filter,
  MoreVertical,
  ChevronRight,
  Plus,
  ArrowRight,
  User,
  QrCode,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  FileText,
  Printer,
  History,
  TrendingDown,
  Info,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CarServicingTransfers() {
  const [selectedTransfer, setSelectedTransfer] = useState<any>(null);
  const [isNewTransferOpen, setIsNewTransferOpen] = useState(false);

  const summary = [
    { label: "Pending Inbound", value: "4 Shipments", icon: <ArrowRight className="h-5 w-5 rotate-45" />, color: "text-sky-600", bg: "bg-sky-50" },
    { label: "Pending Outbound", value: "2 Requests", icon: <ArrowRight className="h-5 w-5 -rotate-135" />, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "In-Transit Value", value: "৳ 12.8K", icon: <Truck className="h-5 w-5" />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Discrepancies", value: "1 Alert", icon: <AlertCircle className="h-5 w-5" />, color: "text-red-600", bg: "bg-red-50" },
  ];

  const transfers = [
    { id: "#TR-501", date: "2026-03-31", from: "Main Hub", to: "Uttara", items: 5, status: "shipped", carrier: "Selim (Bike)", priority: "urgent" },
    { id: "#TR-498", date: "2026-03-29", from: "Dhanmondi", to: "Main Hub", items: 2, status: "received", carrier: "Rakib", priority: "routine" },
    { id: "#TR-495", date: "2026-03-28", from: "Uttara", to: "Main Hub", items: 10, status: "discrepancy", carrier: "External Courier", priority: "routine" },
    { id: "#TR-490", date: "2026-03-25", from: "Main Hub", to: "Dhanmondi", items: 12, status: "requested", carrier: "Pending", priority: "routine" },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "received": return "bg-emerald-50 text-emerald-600 ring-emerald-200";
      case "shipped": return "bg-amber-50 text-amber-600 ring-amber-200";
      case "requested": return "bg-sky-50 text-sky-600 ring-sky-200";
      case "discrepancy": return "bg-red-50 text-red-600 ring-red-200";
      default: return "bg-zinc-50 text-zinc-600 ring-zinc-200";
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] animate-in fade-in duration-700 fill-mode-both">
      
      {/* 1. The Transfer Dashboard (Top Summary) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 shrink-0">
        {summary.map((stat) => (
          <Card key={stat.label} className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 group hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-6 flex items-center gap-4">
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
        {/* 2. Main Tracking Table & Search */}
        <main className="flex-1 flex flex-col gap-6 overflow-hidden">
           <div className="flex items-center justify-between gap-4 shrink-0">
              <div className="relative flex-1 max-w-md">
                 <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                 <input 
                  type="text" 
                  placeholder="Search by Transfer ID, Branch, or Carrier..."
                  className="h-14 w-full rounded-2xl border-none bg-white shadow-sm ring-1 ring-zinc-200/50 pl-12 pr-4 text-sm font-medium outline-none focus:ring-4 focus:ring-sky-500/10 transition-all"
                 />
              </div>
              <div className="flex items-center gap-3">
                 <Button variant="outline" className="h-14 w-14 rounded-2xl border-zinc-200 bg-white p-0 shadow-sm text-zinc-500 hover:text-sky-600 transition-colors">
                    <History className="h-6 w-6" />
                 </Button>
                 <Button 
                   onClick={() => setIsNewTransferOpen(true)}
                   className="h-14 rounded-2xl bg-sky-600 px-6 font-bold text-white shadow-xl shadow-sky-600/20 hover:bg-sky-700 hover:scale-[1.02] active:scale-[0.98] transition-all gap-2"
                 >
                    <Plus className="h-5 w-5" /> NEW TRANSFER
                 </Button>
              </div>
           </div>

           <Card className="flex-1 border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden flex flex-col">
              <div className="overflow-auto flex-1 h-0 scrollbar-hide">
                 <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 z-10 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-100">
                       <tr>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Transfer ID / Date</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Logistic Chain (From → To)</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-400">Items/SKUs</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Status</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Carrier / Driver</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right text-zinc-400">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                       {transfers.map((t) => (
                         <tr 
                          key={t.id} 
                          onClick={() => setSelectedTransfer(t)}
                          className={`group cursor-pointer transition-all hover:bg-zinc-50/50 ${selectedTransfer?.id === t.id ? 'bg-sky-50 shadow-[inset_4px_0_0_0_#0ea5e9]' : ''}`}
                         >
                           <td className="px-6 py-5">
                              <p className="text-xs font-bold text-zinc-900 leading-none">{t.id}</p>
                              <p className="mt-1.5 text-[10px] font-medium text-zinc-400 uppercase tracking-widest">{t.date}</p>
                           </td>
                           <td className="px-6 py-5">
                              <div className="flex items-center gap-3">
                                 <div className="text-xs font-bold text-zinc-500">{t.from}</div>
                                 <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
                                 <div className="text-xs font-black text-zinc-900">{t.to}</div>
                              </div>
                           </td>
                           <td className="px-6 py-5 text-center">
                              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-[10px] font-black text-zinc-600">
                                 {t.items}
                              </div>
                           </td>
                           <td className="px-6 py-5">
                              <div className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ring-1 ${getStatusStyle(t.status)}`}>
                                 {t.status}
                              </div>
                              {t.priority === 'urgent' && <span className="ml-2 h-1.5 w-1.5 rounded-full bg-red-500 inline-block animate-pulse" />}
                           </td>
                           <td className="px-6 py-5">
                              <div className="flex items-center gap-2">
                                 <User className="h-3.5 w-3.5 text-zinc-300" />
                                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{t.carrier}</span>
                              </div>
                           </td>
                           <td className="px-6 py-5 text-right">
                             <div className="flex items-center justify-end gap-2">
                                <Button variant="outline" size="sm" className="h-8 rounded-lg border-zinc-200 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-sky-600 shadow-sm">
                                   <QrCode className="h-3.5 w-3.5 mr-1.5" /> Track
                                </Button>
                             </div>
                           </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </Card>
        </main>

        {/* 3. The Receiving / Detail Interface */}
        <aside className="w-[450px] shrink-0 space-y-8 overflow-y-auto pr-1 scrollbar-hide animate-in slide-in-from-right-4 duration-500 ease-out">
           {selectedTransfer ? (
             <>
               {/* Transfer Header Card */}
               <Card className="border-none bg-zinc-900 text-white shadow-xl shadow-zinc-900/10 p-8 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 bg-sky-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />
                  <div className="relative z-10 flex justify-between items-start">
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-1">Logistics Manifest</p>
                        <h2 className="text-3xl font-black tracking-tighter">{selectedTransfer.id}</h2>
                     </div>
                     <div className="text-right">
                        <QrCode className="h-10 w-10 text-white/50 bg-white/5 p-2 rounded-xl border border-white/10" />
                        <p className="mt-2 text-[8px] font-bold uppercase tracking-widest text-zinc-500">Scan to Receive</p>
                     </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/10">
                     <div className="text-center">
                        <p className="text-[8px] font-bold uppercase text-zinc-500">From</p>
                        <p className="text-[10px] font-black">{selectedTransfer.from}</p>
                     </div>
                     <ArrowRightLeft className="h-5 w-5 text-sky-400" />
                     <div className="text-center">
                        <p className="text-[8px] font-bold uppercase text-zinc-500">To</p>
                        <p className="text-[10px] font-black">{selectedTransfer.to}</p>
                     </div>
                  </div>
               </Card>

               {/* Checklist Mode Interface */}
               <section className="space-y-4">
                  <div className="flex items-center justify-between">
                     <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Receiving Checklist</h3>
                     {selectedTransfer.status === 'discrepancy' && (
                       <span className="flex items-center gap-1 text-[10px] font-bold text-red-500 uppercase tracking-tighter">
                          <AlertCircle className="h-3 w-3" /> Audit Required
                       </span>
                     )}
                  </div>
                  <Card className="border-zinc-200/80 bg-white overflow-hidden shadow-sm">
                     <div className="divide-y divide-zinc-100">
                        {[
                          { name: "Synthetic Oil (5W-30)", sent: 5, received: 5, discrepancy: 0 },
                          { name: "Genuine Oil Filter", sent: 12, received: 11, discrepancy: 1 },
                          { name: "AC Gas R134a", sent: 2, received: 2, discrepancy: 0 }
                        ].map((item, i) => (
                          <div key={i} className="p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className={`flex h-6 w-6 items-center justify-center rounded border-2 transition-all ${item.discrepancy > 0 ? 'border-red-500 bg-red-50 text-red-600' : 'border-emerald-500 bg-emerald-50 text-emerald-600'}`}>
                                   {item.discrepancy > 0 ? <XCircle className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
                                </div>
                                <div>
                                   <p className="text-xs font-bold text-zinc-900 leading-none">{item.name}</p>
                                   <p className="mt-1 text-[10px] font-medium text-zinc-400 uppercase tracking-tighter">Sent: {item.sent} • Received: {item.received}</p>
                                </div>
                             </div>
                             {item.discrepancy > 0 && <span className="text-[8px] font-black text-red-600 uppercase tracking-widest bg-red-100 px-1.5 py-0.5 rounded">Partial Receipt</span>}
                          </div>
                        ))}
                     </div>
                  </Card>
               </section>

               {/* Advanced Logistics Tools */}
               <section className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-zinc-200 p-4 space-y-2">
                     <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Carrier Logistics</p>
                     <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-sky-500" />
                        <span className="text-xs font-bold text-zinc-900">{selectedTransfer.carrier}</span>
                     </div>
                     <p className="text-[10px] text-zinc-500 font-medium">Fee: ৳ 450 (Courier)</p>
                  </div>
                  <div className="rounded-2xl border border-dashed border-sky-100 bg-sky-50/50 p-4 space-y-2">
                     <p className="text-[8px] font-black uppercase tracking-widest text-sky-600">AI Health Suggestion</p>
                     <p className="text-[9px] leading-tight text-sky-800 italic">"Consolidate with TR-504 to save ৳ 120 in courier fees."</p>
                  </div>
               </section>

               <div className="pt-4 flex items-center gap-3">
                  <Button className="flex-1 h-14 rounded-2xl bg-sky-600 text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-sky-600/20 hover:bg-sky-700 transition-all">
                     Confirm Receipt & Audit
                  </Button>
                  <Button variant="outline" className="h-14 w-14 rounded-2xl border-zinc-200 hover:bg-zinc-50">
                     <Printer className="h-6 w-6 text-zinc-400" />
                  </Button>
               </div>
             </>
           ) : (
             <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-zinc-50/50 rounded-3xl border-2 border-dashed border-zinc-200">
                <ArrowRightLeft className="h-12 w-12 text-zinc-300 mb-6" />
                <h3 className="text-base font-bold text-zinc-900">Logistic Control Unit</h3>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed max-w-[280px]">
                  Select a manifest to manage <span className="font-bold">Checklist Verification</span>, <span className="font-bold">Partial Receipt Audits</span>, and <span className="underline">QR Gate Pass</span> triggers.
                </p>
             </div>
           )}
        </aside>
      </div>

      {/* 4. New Transfer Workflow / Modal Simulation Sidebar Hint */}
      {isNewTransferOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-zinc-900/20 backdrop-blur-sm animate-in fade-in duration-300">
           <Card className="h-full w-full max-w-[500px] bg-white shadow-2xl rounded-none animate-in slide-in-from-right duration-500 flex flex-col">
              <CardHeader className="px-8 py-6 border-b border-zinc-100 flex-row items-center justify-between space-y-0">
                 <div>
                    <CardTitle className="text-xl font-black tracking-tighter">Initiate Internal Transfer</CardTitle>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Multi-Step Logistics Wizard</p>
                 </div>
                 <button onClick={() => setIsNewTransferOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-50 text-zinc-400 transition-hover hover:bg-zinc-100"><XCircle className="h-6 w-6" /></button>
              </CardHeader>
              <div className="flex-1 overflow-y-auto p-8 space-y-10">
                 {/* Step 1: Source & Dest */}
                 <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-sky-600">Step 1: Logistic Route</p>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Source Branch</label>
                          <select className="h-11 w-full rounded-xl border border-zinc-200 px-3 text-xs font-bold outline-none">
                             <option>Main Hub</option>
                             <option>Dhanmondi</option>
                             <option>Uttara</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Destination</label>
                          <select className="h-11 w-full rounded-xl border border-zinc-200 px-3 text-xs font-bold outline-none">
                             <option>Uttara</option>
                             <option>Dhanmondi</option>
                             <option>Main Hub</option>
                          </select>
                       </div>
                    </div>
                 </div>

                 {/* Step 2: Item Select */}
                 <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-sky-600">Step 2: Item Selection</p>
                    <div className="relative">
                       <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                       <input type="text" placeholder="Search item (shows live source stock)..." className="h-12 w-full rounded-xl border border-zinc-200 pl-10 pr-4 text-xs font-bold outline-none focus:ring-4 focus:ring-sky-500/10" />
                    </div>
                    <div className="rounded-xl bg-zinc-50 p-4 border border-zinc-100 space-y-3">
                       <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-zinc-600">0W-20 Engine Oil</span>
                          <div className="flex items-center gap-3">
                             <span className="text-[10px] font-bold text-zinc-400">Src Stock: 150L</span>
                             <input type="number" placeholder="Qty" className="h-8 w-16 rounded border border-zinc-200 text-center text-xs font-bold" />
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Step 3: Priority & Notes */}
                 <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-sky-600">Step 3: Protocol & Notes</p>
                    <div className="flex items-center gap-6">
                       <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="priority" className="h-4 w-4 border-zinc-300 text-sky-600 focus:ring-sky-500" defaultChecked />
                          <span className="text-xs font-bold text-zinc-600 uppercase tracking-tighter group-hover:text-zinc-900">Routine Dispatch</span>
                       </label>
                       <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="priority" className="h-4 w-4 border-zinc-300 text-red-600 focus:ring-red-500" />
                          <span className="text-xs font-bold text-red-600 uppercase tracking-tighter group-hover:font-black">Urgent (Red Flag)</span>
                       </label>
                    </div>
                    <textarea 
                       placeholder="Internal note (e.g., 'Emergency parts for Job #991')..."
                       className="w-full h-24 rounded-xl border border-zinc-200 p-4 text-xs outline-none focus:border-sky-500 transition-all resize-none"
                    />
                 </div>
              </div>
              <div className="p-8 border-t border-zinc-100 bg-zinc-50/30">
                 <Button className="w-full h-14 rounded-2xl bg-sky-600 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-sky-600/20 hover:bg-sky-700 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    AUTHORIZE & PRINT GATE PASS
                 </Button>
              </div>
           </Card>
        </div>
      )}
    </div>
  );
}
