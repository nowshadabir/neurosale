"use client";

import { useState } from "react";
import {
  Car,
  User,
  Phone,
  CheckCircle2,
  Package,
  Zap,
  CreditCard,
  Wallet,
  Coins,
  History,
  FileText,
  Printer,
  QrCode,
  ShieldCheck,
  RotateCcw,
  Key,
  BadgeCheck,
  ChevronRight,
  TrendingUp,
  MapPin,
  AlertCircle,
  PenTool,
  Send,
  MoreVertical,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CarServicingReady() {
  const [selectedJob, setSelectedJob] = useState<number>(1);
  const [discount, setDiscount] = useState(0);
  const [paymentMode, setPaymentMode] = useState<"card" | "cash" | "split">("card");
  const [keyHandover, setKeyHandover] = useState(false);

  const readyJobs = [
    { id: 1, plate: "DHK-1234", model: "Toyota Corolla", color: "Crystal Black", bill: 12500, time: "10m ago", slot: "B-04", inspector: "Sumit S.", qcTime: "10:15 PM" },
    { id: 2, plate: "CTG-8820", model: "Mitsubishi Pajero", color: "Pearl White", bill: 45200, time: "45m ago", slot: "A-12", inspector: "Abir H.", qcTime: "09:30 PM" },
    { id: 3, plate: "SYL-7712", model: "Honda Civic", color: "Modern Steel", bill: 8900, time: "1h ago", slot: "C-01", inspector: "Rafiq I.", qcTime: "08:45 PM" },
  ];

  const activeJob = readyJobs.find(j => j.id === selectedJob) || readyJobs[0];

  return (
    <div className="grid h-[calc(100vh-120px)] grid-cols-[320px_1fr_320px] gap-6 animate-in fade-in duration-700 fill-mode-both">
      
      {/* 1. Left Sidebar: The Ready Queue */}
      <aside className="flex flex-col gap-4 overflow-y-auto pr-2">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Ready Queue</h3>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-600">{readyJobs.length} Pending</span>
        </div>
        
        <div className="space-y-3">
          {readyJobs.map((job) => (
            <Card 
              key={job.id}
              onClick={() => setSelectedJob(job.id)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedJob === job.id 
                ? "border-sky-500 bg-sky-50/30 ring-1 ring-sky-500 shadow-lg shadow-sky-500/10" 
                : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-400">
                    <Car className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <BadgeCheck className="h-3 w-3" /> QC Passed
                    </p>
                    <p className="mt-1 text-[8px] font-bold text-zinc-300 uppercase">{job.time}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-zinc-900 leading-none">{job.plate}</h4>
                  <p className="mt-1.5 text-xs text-zinc-500">{job.model} • {job.color}</p>
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-100/50">
                   <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 uppercase">
                      <MapPin className="h-3 w-3" />
                      Slot: <span className="text-zinc-900">{job.slot}</span>
                   </div>
                   <p className="text-sm font-black text-zinc-900">৳ {job.bill.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </aside>

      {/* 2. Main Center Area: Smart Billing Engine */}
      <main className="flex flex-col gap-6 overflow-y-auto px-4">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Billing & Checkout</h3>
            <p className="text-[10px] font-medium text-zinc-400">Approved by <span className="font-bold text-zinc-600">{activeJob.inspector}</span> at {activeJob.qcTime}</p>
          </div>

          <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden">
            <div className="bg-zinc-900 p-8 text-white relative">
               <div className="absolute top-0 right-0 p-12 opacity-10 bg-sky-500 rounded-full blur-3xl -mr-20 -mt-20" />
               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 mb-1">CONSOLIDATED INVOICE</p>
                    <h2 className="text-4xl font-black tracking-tighter">৳ {(activeJob.bill - discount).toLocaleString()}</h2>
                    <p className="mt-2 text-xs text-zinc-400 italic">Pre-Tax: ৳ {(activeJob.bill * 0.85).toLocaleString()} + VAT (15%)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-10 border-white/20 bg-white/5 text-white hover:bg-white/10 text-xs font-bold gap-2">
                       <Printer className="h-4 w-4" /> Print Draft
                    </Button>
                    <Button className="h-10 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold gap-2 shadow-lg shadow-sky-500/20">
                       <FileText className="h-4 w-4" /> View Full Details
                    </Button>
                  </div>
               </div>
            </div>

            <CardContent className="p-8 space-y-8">
              {/* Discounts & Loyalty */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Dynamic Discounts</p>
                  <div className="flex flex-wrap gap-2">
                    {["Loyalty (5%)", "New Customer", "Staff Friend", "Seasonal"].map(d => (
                      <button key={d} className="rounded-lg border border-zinc-200 px-3 py-1.5 text-[10px] font-bold text-zinc-600 hover:border-sky-300 hover:bg-sky-50 transition-all">
                        {d}
                      </button>
                    ))}
                    <button className="rounded-lg border border-dashed border-zinc-300 px-3 py-1.5 text-[10px] font-bold text-zinc-400 flex items-center gap-1 hover:border-sky-500 hover:text-sky-600">
                       <Plus className="h-3 w-3" /> Manual
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-4">
                   <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                         <Coins className="h-4 w-4 text-amber-500" />
                         <span className="text-xs font-bold text-zinc-700">Wallet Points</span>
                      </div>
                      <span className="text-xs font-black text-zinc-900">2,450 pts</span>
                   </div>
                   <p className="text-[10px] text-zinc-500 leading-snug">Equivalent to <span className="font-bold">৳ 245</span>. Redeem now?</p>
                   <Button variant="ghost" size="sm" className="h-7 mt-3 w-full border border-amber-200 bg-amber-50/50 text-[10px] font-bold text-amber-700 uppercase tracking-widest hover:bg-amber-100">
                      Redeem All
                   </Button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 pt-6 border-t border-zinc-100">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Payment Modes</p>
                 <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: "card", label: "Credit/Debit", icon: <CreditCard className="h-5 w-5" /> },
                      { id: "cash", label: "Cash", icon: <BadgeCheck className="h-5 w-5" /> },
                      { id: "split", label: "Split Payment", icon: <History className="h-5 w-5" /> }
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setPaymentMode(m.id as any)}
                        className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 py-6 transition-all ${
                          paymentMode === m.id ? "border-sky-600 bg-sky-50 text-sky-700 shadow-xl shadow-sky-600/10" : "border-zinc-100 bg-white text-zinc-400 hover:border-zinc-200"
                        }`}
                      >
                         {m.icon}
                         <span className="text-[10px] font-bold uppercase tracking-widest">{m.label}</span>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Transparency Checklist */}
              <div className="rounded-2xl border border-sky-100/50 bg-sky-50/30 p-6 space-y-4">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600">Post-Service Transparency</p>
                 <div className="grid gap-4 md:grid-cols-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-sky-200 bg-white group-hover:border-sky-500 transition-all">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-600" />
                       </div>
                       <span className="text-xs font-medium text-zinc-700">Old parts shown & disposed?</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-sky-200 bg-white group-hover:border-sky-500 transition-all">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-600" />
                       </div>
                       <span className="text-xs font-medium text-zinc-700">Digital health report sent?</span>
                    </label>
                 </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Handover & Delivery */}
        <section className="mb-10">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">4. Handover Workflow</h3>
          <div className="grid gap-6 md:grid-cols-2">
             <Card className="border-zinc-200/80 bg-white shadow-sm overflow-hidden">
                <CardHeader className="p-5 border-b border-zinc-50 bg-zinc-50/30 flex-row items-center justify-between space-y-0">
                   <CardTitle className="text-xs font-bold uppercase tracking-widest text-zinc-500">Key & Signature</CardTitle>
                   <Key className={`h-4 w-4 transition-colors ${keyHandover ? 'text-emerald-500' : 'text-zinc-300'}`} />
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                   <div 
                    onClick={() => setKeyHandover(!keyHandover)}
                    className={`flex items-center justify-between rounded-xl border-2 px-4 py-3 cursor-pointer transition-all ${keyHandover ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-dashed border-zinc-200 bg-white text-zinc-400'}`}
                   >
                      <span className="text-xs font-bold">{keyHandover ? 'Keys Handed Over' : 'Mark Keys Handed Over'}</span>
                      <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${keyHandover ? 'bg-emerald-500 border-white' : 'border-zinc-200'}`}>
                         {keyHandover && <CheckCircle2 className="h-3 w-3 text-white" />}
                      </div>
                   </div>
                   <div className="h-28 w-full rounded-2xl border-2 border-dashed border-zinc-100 bg-zinc-50/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-zinc-100">
                      <PenTool className="h-5 w-5 text-zinc-300" />
                      <span className="text-[10px] font-bold text-zinc-400 uppercase">Customer Received Signature</span>
                   </div>
                </CardContent>
             </Card>

             <Card className="border-zinc-200/80 bg-white shadow-sm overflow-hidden flex flex-col">
                <CardHeader className="p-5 border-b border-zinc-50 bg-zinc-50/30 flex-row items-center justify-between space-y-0">
                   <CardTitle className="text-xs font-bold uppercase tracking-widest text-zinc-500">Post-Delivery Logic</CardTitle>
                   <Zap className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent className="p-6 flex-1 space-y-4">
                   <div className="p-4 rounded-xl bg-zinc-900 text-white">
                      <div className="flex items-center gap-3">
                         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                            <QrCode className="h-6 w-6 text-sky-400" />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Gate Pass Gen</p>
                            <p className="text-xs font-medium text-zinc-400 mt-0.5">Encrypted Security Clearance</p>
                         </div>
                      </div>
                      <Button variant="ghost" className="w-full mt-4 h-8 bg-sky-600 hover:bg-sky-700 text-white text-[10px] font-bold uppercase tracking-widest border-none">Print Gate Pass</Button>
                   </div>
                   <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center mt-2">
                     + Automated Feedback & Next Service AI Logger
                   </p>
                </CardContent>
             </Card>
          </div>
        </section>
      </main>

      {/* 3. Right Sidebar: Customer Profile Summary */}
      <aside className="space-y-6 overflow-y-auto pl-2">
        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 px-2">Customer Profile</h3>
        <Card className="border-zinc-200/80 bg-white shadow-lg shadow-zinc-200/20 overflow-hidden">
          <CardContent className="p-0">
             <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 text-center border-b border-zinc-200">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-3xl border-4 border-white shadow-xl ring-1 ring-zinc-200/50">
                  <div className="h-full w-full bg-zinc-200 flex items-center justify-center text-2xl font-black text-zinc-400">NA</div>
                </div>
                <h4 className="text-lg font-bold text-zinc-900">Nowshad Abir</h4>
                <p className="text-xs font-medium text-zinc-500 mt-1">Premium Member • Joined 2024</p>
                
                <div className="mt-6 flex items-center justify-center gap-2">
                   <Button size="sm" className="h-9 rounded-xl bg-sky-600 text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-sky-700 shadow-sky-600/20">
                      <Phone className="h-3 w-3 mr-2" />
                      Quick Call
                   </Button>
                   <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-400 hover:text-zinc-900 transition-colors">
                      <MoreVertical className="h-4 w-4" />
                   </button>
                </div>
             </div>

             <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Lifetime Spend</p>
                      <p className="text-sm font-black text-zinc-900">৳ 1.25L</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Total Visits</p>
                      <p className="text-sm font-black text-zinc-900">14</p>
                   </div>
                </div>

                <div className="pt-6 border-t border-zinc-100 space-y-4">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Pending Notes</p>
                   <div className="rounded-xl bg-amber-50 p-3 border border-amber-100">
                      <p className="text-[10px] font-medium leading-relaxed text-amber-900 italic">
                        "Cust is very sensitive about wash quality. Ensure mirror finish on interior dashboard." - Lead Tech
                      </p>
                   </div>
                </div>
             </div>
          </CardContent>
        </Card>

        <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
           <Button className="w-full h-16 rounded-2xl bg-emerald-600 text-sm font-black text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all group">
              <CheckCircle2 className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              COMPLETE DELIVERY
           </Button>
           <p className="mt-4 text-[9px] text-center font-bold text-zinc-400 uppercase tracking-widest">
              Triggers WhatsApp E-Receipt & Feedback
           </p>
        </section>
      </aside>
    </div>
  );
}
