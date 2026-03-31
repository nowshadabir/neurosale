"use client";

import { useState } from "react";
import {
  FileText,
  User,
  Car,
  ChevronRight,
  Plus,
  Trash2,
  Percent,
  Banknote,
  CreditCard,
  QrCode,
  Smartphone,
  Printer,
  Send,
  ShieldCheck,
  Zap,
  Info,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  History,
  MoreVertical,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CarServicingInvoice() {
  const [paymentMode, setPaymentMode] = useState<"cash" | "card" | "wallet" | "split">("cash");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [includeShopSupplies, setIncludeShopSupplies] = useState(true);

  const items = [
    { id: 1, desc: "Full Synthetic Oil (5W-30)", type: "part", qty: "4L", price: 15.00, disc: 0, total: 60.00 },
    { id: 2, desc: "Oil Filter (OEM)", type: "part", qty: "1", price: 12.00, disc: 2.00, total: 10.00 },
    { id: 3, desc: "Engine Tuning & Diagnostic", type: "labor", qty: "2 Hrs", price: 40.00, disc: 0, total: 80.00 },
    { id: 4, desc: "Brake Pad Installation", type: "labor", qty: "1 set", price: 30.00, disc: 3.00, total: 27.00 },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.total, 0) + (includeShopSupplies ? 5.00 : 0);
  const tax = subtotal * 0.15;
  const grandTotal = subtotal + tax;

  return (
    <div className="flex h-[calc(100vh-120px)] gap-8 animate-in fade-in duration-700 fill-mode-both">
      
      {/* 1. Left Column: Invoice Details & Table */}
      <main className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
        
        {/* The Smart Header */}
        <section className="animate-in fade-in slide-in-from-top-4 duration-500">
           <Card className="border-0 bg-zinc-900 text-white shadow-xl shadow-zinc-900/10 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 bg-sky-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />
              <CardContent className="p-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                 <div>
                    <div className="flex items-center gap-3 mb-2">
                       <FileText className="h-5 w-5 text-sky-400" />
                       <h2 className="text-xl font-black tracking-tighter">INV-2026-005</h2>
                       <button className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-sky-400 border border-white/5 hover:bg-white/20 transition-all">
                          <History className="h-3 w-3" /> Job Card #JC-991
                       </button>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="flex items-center gap-2">
                          <User className="h-3.5 w-3.5 text-zinc-500" />
                          <span className="text-xs font-bold">Nowshad Abir</span>
                          <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-tighter text-amber-500 ring-1 ring-amber-500/30">Gold Member</span>
                       </div>
                       <div className="h-4 w-px bg-white/10" />
                       <div className="flex items-center gap-2">
                          <Car className="h-3.5 w-3.5 text-zinc-500" />
                          <span className="text-xs font-bold text-zinc-300">DHK-1234 • Corolla</span>
                       </div>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Invoice Date</p>
                    <p className="text-sm font-bold">Mar 31, 2026 • 11:30 PM</p>
                 </div>
              </CardContent>
           </Card>
        </section>

        {/* The Billing Table (Split View) */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 flex-1 flex flex-col">
           <Card className="flex-1 border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden flex flex-col">
              <div className="overflow-auto flex-1 h-0">
                 <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 z-10 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-100">
                       <tr>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Description</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-400">Type</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-400">Qty / Hrs</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-400">Unit Price</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-400">Discount</th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right text-zinc-400">Total</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 italic font-medium text-xs text-zinc-600">
                       {/* Section: Parts */}
                       <tr className="bg-zinc-50/30"><td colSpan={6} className="px-6 py-2 text-[9px] font-black uppercase tracking-widest text-zinc-400">Spare Parts & Consumables</td></tr>
                       {items.filter(i => i.type === 'part').map((item) => (
                         <tr key={item.id} className="group hover:bg-zinc-50 transition-colors">
                            <td className="px-6 py-4 font-bold text-zinc-900 not-italic">{item.desc}</td>
                            <td className="px-6 py-4 text-center"><span className="rounded bg-sky-50 px-2 py-0.5 text-[8px] font-black uppercase text-sky-600 ring-1 ring-sky-200">Part</span></td>
                            <td className="px-6 py-4 text-center font-bold text-zinc-800 not-italic">{item.qty}</td>
                            <td className="px-6 py-4 text-center">৳ {item.price.toFixed(2)}</td>
                            <td className="px-6 py-4 text-center text-red-500 font-bold">-৳ {item.disc.toFixed(2)}</td>
                            <td className="px-6 py-4 text-right font-black text-zinc-900 not-italic">৳ {item.total.toFixed(2)}</td>
                         </tr>
                       ))}

                       {/* Section: Labor */}
                       <tr className="bg-zinc-50/30 border-t border-zinc-100"><td colSpan={6} className="px-6 py-2 text-[9px] font-black uppercase tracking-widest text-zinc-400">Labor & Technical Services</td></tr>
                       {items.filter(i => i.type === 'labor').map((item) => (
                         <tr key={item.id} className="group hover:bg-zinc-50 transition-colors">
                            <td className="px-6 py-4 font-bold text-zinc-900 not-italic">{item.desc}</td>
                            <td className="px-6 py-4 text-center"><span className="rounded bg-amber-50 px-2 py-0.5 text-[8px] font-black uppercase text-amber-600 ring-1 ring-amber-200">Labor</span></td>
                            <td className="px-6 py-4 text-center font-bold text-zinc-800 not-italic">{item.qty}</td>
                            <td className="px-6 py-4 text-center">৳ {item.price.toFixed(2)}</td>
                            <td className="px-6 py-4 text-center text-red-500 font-bold">-৳ {item.disc.toFixed(2)}</td>
                            <td className="px-6 py-4 text-right font-black text-zinc-900 not-italic">৳ {item.total.toFixed(2)}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              
              <div className="bg-zinc-50/50 border-t border-zinc-100 p-6">
                 <div className="grid md:grid-cols-2 gap-8 items-end">
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                          <label className="flex items-center gap-3 cursor-pointer group">
                             <div 
                              onClick={() => setIncludeShopSupplies(!includeShopSupplies)}
                              className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all ${includeShopSupplies ? 'bg-sky-600 border-sky-600 text-white' : 'border-zinc-200 bg-white'}`}>
                                {includeShopSupplies && <CheckCircle2 className="h-3.5 w-3.5" />}
                             </div>
                             <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Add Shop Consumables Fee (৳ 5.00)</span>
                          </label>
                       </div>
                       <div className="relative max-w-sm">
                          <Percent className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                          <input 
                            type="text" 
                            placeholder="Type Coupon Code..." 
                            className="h-10 w-full rounded-xl border border-zinc-200 pl-10 pr-4 text-[10px] font-black uppercase tracking-widest outline-none focus:ring-4 focus:ring-sky-500/10 transition-all"
                            value={appliedCoupon}
                            onChange={(e) => setAppliedCoupon(e.target.value)}
                          />
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <div className="flex items-center justify-between text-xs font-bold text-zinc-400">
                          <span className="uppercase tracking-widest">Subtotal (Parts + Labor)</span>
                          <span className="text-zinc-600">৳ {subtotal.toFixed(2)}</span>
                       </div>
                       <div className="flex items-center justify-between text-xs font-bold text-zinc-400">
                          <span className="uppercase tracking-widest">VAT / Sales Tax (15%)</span>
                          <span className="text-zinc-600">৳ {tax.toFixed(2)}</span>
                       </div>
                       <div className="pt-2 mt-2 border-t border-zinc-200 flex items-center justify-between group">
                          <span className="text-sm font-black text-zinc-900 uppercase tracking-tighter">Grand Total</span>
                          <span className="text-2xl font-black text-zinc-900 group-hover:scale-110 group-hover:text-sky-600 transition-all origin-right">৳ {grandTotal.toFixed(2)}</span>
                       </div>
                    </div>
                 </div>
              </div>
           </Card>
        </section>

        {/* Post-Service Transparency Sidebar (Bottom) */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
           <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 space-y-4">
                 <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-sky-600" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-sky-600">Warranty & Next Visit</p>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white p-3 border border-sky-100 shadow-sm">
                       <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Active Warranties</p>
                       <p className="text-xs font-bold text-zinc-800 mt-1">2 Parts (18 Mo)</p>
                    </div>
                    <div className="rounded-xl bg-white p-3 border border-sky-100 shadow-sm">
                       <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Service Due</p>
                       <p className="text-xs font-bold text-zinc-800 mt-1">Sept 30, 2026</p>
                    </div>
                 </div>
              </div>
              
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/30 p-6 space-y-3">
                 <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Internal Recommendation</p>
                 <textarea 
                  placeholder="Note: Your rear tires are at 3mm; recommend replacement in 3 months..."
                  className="w-full h-16 rounded-xl border-none bg-transparent text-xs text-zinc-600 italic leading-relaxed outline-none scrollbar-hide resize-none"
                 />
                 <label className="flex items-center gap-2 cursor-pointer mt-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-sky-600 focus:ring-sky-500" defaultChecked />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter italic">"Customer has inspected and received old parts"</span>
                 </label>
              </div>
           </div>
        </section>
      </main>

      {/* 2. Right Column: Multi-Channel Payment Terminal */}
      <aside className="w-[400px] shrink-0 flex flex-col gap-8 animate-in slide-in-from-right-4 duration-500 delay-200">
         <section className="flex-1 flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Payment Terminal</h3>
            <Card className="flex-1 border-0 bg-white shadow-xl shadow-zinc-200/50 flex flex-col overflow-hidden">
               <CardContent className="p-8 space-y-8 flex-1">
                  
                  {/* Payment Method Icons */}
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       { id: "cash", label: "Cash", icon: <Banknote className="h-6 w-6" /> },
                       { id: "card", label: "Card", icon: <CreditCard className="h-6 w-6" /> },
                       { id: "wallet", label: "Wallets", icon: <QrCode className="h-6 w-6" /> },
                       { id: "split", label: "Split / Credit", icon: <Plus className="h-6 w-6" /> }
                     ].map((m) => (
                       <button
                         key={m.id}
                         onClick={() => setPaymentMode(m.id as any)}
                         className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 py-8 transition-all hover:scale-[1.02] active:scale-[0.98] ${
                           paymentMode === m.id ? "border-sky-600 bg-sky-50 text-sky-700 shadow-lg shadow-sky-600/10" : "border-zinc-100 bg-white text-zinc-400 hover:border-zinc-200"
                         }`}
                       >
                          {m.icon}
                          <span className="text-[10px] font-black uppercase tracking-widest">{m.label}</span>
                       </button>
                     ))}
                  </div>

                  {/* Contextual Input (Cash Math) */}
                  {paymentMode === 'cash' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Received Amount</label>
                          <div className="flex items-center gap-3">
                             <input type="number" placeholder="0.00" className="h-14 flex-1 rounded-2xl border-none bg-zinc-100 px-6 text-xl font-black outline-none focus:ring-4 focus:ring-sky-500/10 transition-all font-brand-mono" />
                          </div>
                          <div className="flex gap-2 pt-2">
                             {[50, 100, 500, 1000].map(v => (
                               <button key={v} className="flex-1 rounded-xl border border-zinc-200 py-2 text-[10px] font-bold text-zinc-600 hover:bg-zinc-100 transition-all">+{v}</button>
                             ))}
                          </div>
                       </div>
                       <div className="rounded-2xl bg-amber-50 p-6 flex flex-col items-center justify-center border border-amber-100 border-dashed">
                          <p className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-1">Return Change</p>
                          <h4 className="text-3xl font-black text-amber-700">৳ 0.00</h4>
                       </div>
                    </div>
                  )}

                  {paymentMode === 'wallet' && (
                    <div className="space-y-6 flex flex-col items-center animate-in zoom-in-95 duration-300">
                       <div className="h-48 w-48 rounded-3xl border-8 border-zinc-100 p-4 shadow-inner flex items-center justify-center bg-white">
                          <QrCode className="h-32 w-32 text-zinc-900" />
                       </div>
                       <div className="grid grid-cols-3 gap-6 w-full opacity-50">
                          <div className="flex flex-col items-center gap-1"><Smartphone className="h-5 w-5 text-zinc-400" /><span className="text-[8px] font-bold uppercase">bKash</span></div>
                          <div className="flex flex-col items-center gap-1"><Zap className="h-5 w-5 text-zinc-400" /><span className="text-[8px] font-bold uppercase">Nagad</span></div>
                          <div className="flex flex-col items-center gap-1"><Smartphone className="h-5 w-5 text-zinc-400" /><span className="text-[8px] font-bold uppercase">Apple Pay</span></div>
                       </div>
                    </div>
                  )}
               </CardContent>
               
               <div className="p-8 bg-zinc-50/50 border-t border-zinc-100 space-y-4">
                  <Button className="w-full h-16 rounded-2xl bg-emerald-600 text-sm font-black text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all group">
                     <CheckCircle2 className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                     COLLECT PAYMENT: ৳ {grandTotal.toFixed(2)}
                  </Button>
                  <Button variant="ghost" className="w-full h-8 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-600">
                     MARK AS CREDIT / DEBT
                  </Button>
               </div>
            </Card>
         </section>

         {/* Post-Action Buttons (The Slider Finish) */}
         <section className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-16 rounded-2xl border-zinc-200 bg-white font-bold text-xs gap-3 shadow-md hover:bg-sky-50 hover:text-sky-600 transition-all">
               <Printer className="h-5 w-5" /> Thermal (80mm)
            </Button>
            <Button variant="outline" className="h-16 rounded-2xl border-zinc-200 bg-white font-bold text-xs gap-3 shadow-md hover:bg-sky-50 hover:text-sky-600 transition-all">
               <div className="flex flex-col items-start leading-none gap-1">
                  <span className="flex items-center gap-2"><Send className="h-4 w-4" /> Send PDF</span>
                  <span className="text-[8px] font-medium text-zinc-400 uppercase">WhatsApp / Email</span>
               </div>
            </Button>
            <Button className="col-span-2 h-14 rounded-2xl bg-zinc-900 border-zinc-800 text-white font-bold text-xs gap-3 shadow-xl hover:bg-black transition-all group">
               <QrCode className="h-5 w-5 text-sky-400 group-hover:rotate-12 transition-transform" /> 
               GENERATE GATE PASS (CLEARANCE)
            </Button>
         </section>
      </aside>

      {/* Floating Global Action (Manual Item) */}
      <div className="fixed bottom-10 left-10">
         <Button className="h-14 w-14 rounded-2xl bg-zinc-100 text-zinc-400 shadow-xl hover:bg-white hover:text-sky-600 transition-all border border-transparent hover:border-zinc-200">
            <Plus className="h-8 w-8" />
         </Button>
      </div>

    </div>
  );
}
