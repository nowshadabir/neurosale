"use client";

import { useState } from "react";
import {
  Search,
  Mic,
  Users,
  Utensils,
  IceCream,
  Wine,
  Star,
  Plus,
  Minus,
  Trash2,
  ChevronRight,
  Flame,
  Clock,
  CheckCircle2,
  ArrowRightLeft,
  Banknote,
  CreditCard,
  Cloud,
  Monitor,
  MoreVertical,
  X,
  Edit2,
  LayoutGrid,
  History,
  Phone,
  User,
  Smartphone,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export function RestaurantPOSTerminal() {
  const [orderItems, setOrderItems] = useState<any[]>([]);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [estimatedTime, setEstimatedTime] = useState("15m");
  const [heldOrders, setHeldOrders] = useState<any[]>([]);
  
  // Modals & UI States
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [isHeldModalOpen, setIsHeldModalOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"pos" | "details" | "payment" | "success">("pos");
  
  // Customer Info
  const [customerInfo, setCustomerInfo] = useState({ name: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState("");

  const categories = [
    { id: "starters", label: "Starters", icon: <Utensils className="h-4 w-4" /> },
    { id: "mains", label: "Mains", icon: <Flame className="h-4 w-4" /> },
    { id: "drinks", label: "Drinks", icon: <Wine className="h-4 w-4" /> },
    { id: "desserts", label: "Desserts", icon: <IceCream className="h-4 w-4" /> },
  ];

  const menuItems = [
    { id: 101, name: "T-Bone Steak", price: 32.00, img: "🥩" },
    { id: 102, name: "Beef Burger", price: 18.50, img: "🍔" },
    { id: 103, name: "Grilled Chicken", price: 22.00, img: "🍗" },
    { id: 104, name: "Salmon Platter", price: 26.50, img: "🐟" },
    { id: 105, name: "Lamb Chops", price: 30.00, img: "🍖" },
    { id: 106, name: "Veggie Pasta", price: 16.00, img: "🍝" },
    { id: 107, name: "Coke / Soda", price: 3.50, img: "🥤" },
  ];

  const tables = ["T-01", "T-02", "T-03", "T-14", "T-15", "T-22", "B-01", "B-05", "VIP-1"];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  // Actions
  const handleAddItem = (item: any) => {
    if (!selectedTable) {
      toast.error("Please select a table first");
      setIsTableModalOpen(true);
      return;
    }
    const existing = orderItems.find(i => i.id === item.id);
    if (existing) {
      setOrderItems(prev => prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setOrderItems([...orderItems, { ...item, qty: 1, modifiers: ["Standard"] }]);
    }
    toast.success(`Add ${item.name}`);
  };

  const handleHoldOrder = () => {
    if (orderItems.length === 0) return;
    const newHold = { id: Date.now(), table: selectedTable, items: [...orderItems], total, time: new Date().toLocaleTimeString() };
    setHeldOrders([...heldOrders, newHold]);
    setOrderItems([]);
    setSelectedTable(null);
    toast.info("Ticket placed on HOLD");
  };

  const loadHeldOrder = (held: any) => {
    setOrderItems(held.items);
    setSelectedTable(held.table);
    setHeldOrders(prev => prev.filter(h => h.id !== held.id));
    setIsHeldModalOpen(false);
    toast.success(`Restored Table ${held.table}`);
  };

  const finalizePayment = () => {
    if (!paymentMethod) { toast.error("Select payment method"); return; }
    setCheckoutStep("success");
    toast.success("Transaction Finalized!");
  };

  return (
    <div className="flex bg-zinc-50 h-[calc(100vh-120px)] -mx-6 -mt-6 border-t border-zinc-100 overflow-hidden text-zinc-900 font-brand-sans selection:bg-sky-100 animate-in fade-in duration-700 fill-mode-both">
      
      {/* Sidebar Rail */}
      <aside className="w-24 shrink-0 bg-white border-r border-zinc-200 flex flex-col p-2 gap-2 z-30">
         <div className="p-2 border-b border-zinc-100">
            <button 
              onClick={() => setIsTableModalOpen(true)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl w-full transition-all group ${selectedTable ? 'bg-zinc-900 text-white shadow-xl' : 'bg-zinc-100 text-zinc-400'}`}
            >
               <LayoutGrid className="h-5 w-5 mb-1" />
               <span className="text-[9px] font-black uppercase tracking-tight">{selectedTable || "TABLE"}</span>
            </button>
         </div>

         <div className="space-y-2 py-4">
            {categories.map((cat) => (
              <button key={cat.id} className="flex flex-col items-center justify-center py-5 rounded-2xl border-2 border-transparent text-zinc-400 hover:bg-zinc-50 transition-all grayscale hover:grayscale-0">
                 {cat.icon}
                 <span className="mt-2 text-[8px] font-black uppercase tracking-tight">{cat.label}</span>
              </button>
            ))}
         </div>
         
         <div className="mt-auto p-2 border-t border-zinc-100 space-y-4">
            <button 
               onClick={() => setIsHeldModalOpen(true)}
               className="flex flex-col items-center py-4 text-zinc-400 hover:text-sky-600 relative group"
            >
               <History className="h-5 w-5" />
               <span className="mt-1 text-[8px] font-bold uppercase tracking-widest leading-none">HELD</span>
               {heldOrders.length > 0 && <span className="absolute top-2 right-4 h-4 w-4 rounded-full bg-rose-500 text-white text-[8px] flex items-center justify-center border-2 border-white">{heldOrders.length}</span>}
            </button>
         </div>
      </aside>

      {/* Main Terminal Pane */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden shadow-2xl relative">
         
         {/* Top Header contexts */}
         <section className="px-8 py-6 border-b border-zinc-100 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10 gap-8">
            <div className="flex items-center gap-8">
               <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setIsTableModalOpen(true)}>
                  <div className={`h-11 w-11 rounded-2xl border-2 flex items-center justify-center transition-all ${selectedTable ? 'bg-zinc-950 border-zinc-950 text-sky-400' : 'bg-zinc-50 border-zinc-100 text-zinc-400'}`}>
                     <LayoutGrid className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                     <p className="text-[8px] font-black uppercase text-zinc-400 leading-none">Dining Space</p>
                     <p className="text-sm font-black uppercase text-zinc-900 flex items-center gap-2">{selectedTable || "No Table Selected"} <ChevronDown className="h-3 w-3 opacity-20" /></p>
                  </div>
               </div>

               <div className="h-8 w-px bg-zinc-100" />

               <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setIsTimeModalOpen(true)}>
                  <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shadow-lg shadow-amber-500/5">
                     <Clock className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                     <p className="text-[8px] font-black uppercase text-amber-600 leading-none">PRER ESTIMATE</p>
                     <p className="text-sm font-black text-amber-700 italic flex items-center gap-2">{estimatedTime} <ChevronDown className="h-3 w-3 opacity-20" /></p>
                  </div>
               </div>
            </div>

            <div className="relative max-w-sm flex-1">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-300" />
               <input type="text" placeholder="Search menu items..." className="h-12 w-full rounded-2xl border border-zinc-100 bg-zinc-50 pl-11 pr-4 text-xs font-bold outline-none focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all" />
            </div>
         </section>

         {/* Menu Grid */}
         <section className="flex-1 overflow-y-auto p-8 scrollbar-hide bg-zinc-50/20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
               {menuItems.map(item => (
                 <button 
                  key={item.id} 
                  onClick={() => handleAddItem(item)}
                  className="bg-white border border-zinc-200 p-6 rounded-[2rem] flex flex-col items-center text-center hover:border-zinc-900 hover:shadow-2xl hover:shadow-zinc-900/5 transition-all group active:scale-95"
                 >
                    <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.img}</span>
                    <h4 className="text-[10px] font-black uppercase text-zinc-500 leading-tight">{item.name}</h4>
                    <p className="mt-1 text-sm font-black text-zinc-900 italic">৳ {item.price.toFixed(2)}</p>
                 </button>
               ))}
            </div>
         </section>
      </main>

      {/* Ticket Sidebar */}
      <aside className="w-[450px] shrink-0 border-l border-zinc-200 flex flex-col bg-zinc-50/50">
         <div className="p-8 pb-4 flex items-center justify-between border-b border-zinc-100 bg-white">
            <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900 flex items-center gap-2">Ticket <span className="h-5 w-5 bg-zinc-900 text-white rounded flex items-center justify-center text-[10px] tabular-nums">{orderItems.length}</span></h3>
            <button onClick={() => setOrderItems([])} className="text-[10px] font-black text-rose-500 uppercase">Clear All</button>
         </div>

         <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
            {orderItems.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full opacity-10 animate-pulse grayscale">
                 <Utensils className="h-16 w-16 mb-4" />
                 <p className="text-[10px] font-black uppercase tracking-[0.25em]">Ticket Empty</p>
              </div>
            )}
            {orderItems.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm relative group hover:border-zinc-900 transition-all">
                 <div className="flex justify-between items-start mb-3">
                    <div>
                       <p className="text-xs font-black text-zinc-900 uppercase italic leading-none">{item.name}</p>
                       <p className="text-[9px] font-bold text-zinc-400 mt-2">15% VAT Included • Standard Prep</p>
                    </div>
                    <p className="text-sm font-black tabular-nums italic">৳ {(item.price * item.qty).toFixed(2)}</p>
                 </div>
                 <div className="flex items-center justify-between pt-3 border-t border-zinc-50">
                    <div className="flex items-center gap-3">
                       <button className="h-7 w-7 rounded-lg bg-zinc-50 flex items-center justify-center"><Minus className="h-3 w-3" /></button>
                       <span className="text-xs font-black italic">{item.qty}</span>
                       <button className="h-7 w-7 rounded-lg bg-zinc-50 flex items-center justify-center"><Plus className="h-3 w-3" /></button>
                    </div>
                    <button className="h-7 w-7 text-zinc-300 hover:text-rose-500"><Trash2 className="h-4 w-4" /></button>
                 </div>
              </div>
            ))}
         </div>

         {/* Bottom Action Footer */}
         <div className="p-8 bg-white border-t border-zinc-200 space-y-6 shadow-2xl">
            <div className="space-y-1 flex flex-col items-center justify-center text-center">
               <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Total Check Amount</p>
               <h4 className="text-4xl font-black italic tracking-tighter tabular-nums">৳ {total.toFixed(2)}</h4>
            </div>

            <div className="grid grid-cols-2 gap-2">
               <button 
                onClick={handleHoldOrder}
                className="h-14 rounded-2xl border-2 border-zinc-100 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:bg-zinc-50 flex items-center justify-center gap-3 group transition-all"
               >
                  <History className="h-5 w-5 text-zinc-300 group-hover:text-sky-600" /> HOLD BILL
               </button>
               <button 
                onClick={() => { setOrderItems([]); toast.success("Fired to Kitchen! 🔥 Kitchen screen updated."); }}
                className="h-14 rounded-2xl bg-zinc-900 text-[10px] font-black uppercase tracking-widest text-white hover:bg-black flex items-center justify-center gap-3 shadow-xl shadow-zinc-950/20 active:scale-95 transition-all"
               >
                  <Flame className="h-5 w-5 text-orange-400" /> FIRE KITCHEN
               </button>
            </div>

            <button 
               onClick={() => setCheckoutStep("details")}
               disabled={orderItems.length === 0}
               className="w-full h-16 rounded-2xl bg-sky-600 text-[10px] font-black uppercase tracking-[0.25em] text-white shadow-xl shadow-sky-600/30 hover:bg-sky-700 flex items-center justify-center gap-4 transition-all disabled:opacity-40 disabled:grayscale"
            >
               PROCEED TO CHECKOUT <ChevronRight className="h-5 w-5" />
            </button>
         </div>
      </aside>

      {/* --- Overlay Modals & Wizard Steps --- */}

      {/* 1. Table Selector */}
      {isTableModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/60 p-4 animate-in fade-in duration-300">
           <Card className="w-full max-w-sm bg-white rounded-[2rem] p-8 border-none animate-in zoom-in-95 duration-500">
              <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-900 border-b border-zinc-100 pb-4 mb-6">Select Table</h3>
              <div className="grid grid-cols-3 gap-2">
                 {tables.map(t => (
                   <button 
                    key={t} 
                    onClick={() => { setSelectedTable(t); setIsTableModalOpen(false); }}
                    className={`h-14 rounded-xl border-2 text-xs font-black transition-all ${selectedTable === t ? 'bg-zinc-900 border-zinc-900 text-white' : 'border-zinc-100 hover:border-zinc-300 text-zinc-600'}`}
                   >
                     {t}
                   </button>
                 ))}
              </div>
              <Button variant="ghost" onClick={() => setIsTableModalOpen(false)} className="w-full mt-6 text-[10px] font-black text-zinc-400">Cancel</Button>
           </Card>
        </div>
      )}

      {/* 2. Prep Time Selector */}
      {isTimeModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/60 p-4 animate-in fade-in duration-300">
           <Card className="w-full max-w-sm bg-white rounded-[2rem] p-8 border-none animate-in zoom-in-95 duration-500 text-center">
              <Clock className="h-10 w-10 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-900 mb-6">Set Estimated Prep</h3>
              <div className="grid grid-cols-2 gap-2">
                 {["10m", "15m", "20m", "30m"].map(t => (
                   <button 
                    key={t} 
                    onClick={() => { setEstimatedTime(t); setIsTimeModalOpen(false); }}
                    className={`h-14 rounded-xl border-2 text-xs font-black transition-all ${estimatedTime === t ? 'bg-amber-500 border-amber-500 text-white' : 'border-zinc-100 hover:border-zinc-300 text-zinc-600'}`}
                   >
                     {t}
                   </button>
                 ))}
              </div>
           </Card>
        </div>
      )}

      {/* 3. Held Orders List */}
      {isHeldModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/60 p-4 animate-in fade-in duration-300">
           <Card className="w-full max-w-lg bg-white rounded-[2rem] border-none animate-in zoom-in-95 duration-300 flex flex-col overflow-hidden max-h-[80vh]">
              <div className="p-8 bg-zinc-950 text-white flex justify-between items-center">
                 <div>
                    <h3 className="text-xl font-black uppercase tracking-tighter">Held Orders</h3>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">Pending Settlements</p>
                 </div>
                 <button onClick={() => setIsHeldModalOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white text-white hover:text-zinc-900"><X /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
                 {heldOrders.length === 0 && <div className="py-20 text-center text-[10px] font-black uppercase tracking-widest text-zinc-300 italic italic">No bills on hold</div>}
                 {heldOrders.map(held => (
                   <div key={held.id} onClick={() => loadHeldOrder(held)} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-between cursor-pointer group hover:bg-white hover:border-sky-600 transition-all shadow-sm">
                      <div className="flex items-center gap-4">
                         <div className="h-12 w-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-xs font-black italic">{held.table}</div>
                         <div>
                            <p className="text-xs font-black text-zinc-900 uppercase">Order at {held.time}</p>
                            <p className="text-[9px] font-bold text-zinc-400 uppercase mt-1">{held.items.length} Items Selected</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className="text-sm font-black italic group-hover:text-sky-600">৳ {held.total.toFixed(2)}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </Card>
        </div>
      )}

      {/* 4. Checkout Steps (Overlay Wizard) */}
      {(checkoutStep === "details" || checkoutStep === "payment" || checkoutStep === "success") && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/80 p-4 animate-in fade-in duration-300 backdrop-blur-md">
           <Card className="w-full max-w-lg bg-white rounded-[3rem] p-0 border-none animate-in zoom-in-95 duration-500 overflow-hidden shadow-2xl">
              
              {checkoutStep === "details" && (
                <div className="p-12 space-y-10 animate-in slide-in-from-bottom-6 duration-500">
                   <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black uppercase tracking-tighter">Checkout Details</h3>
                      <button onClick={() => setCheckoutStep("pos")} className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center"><X className="h-5 w-5" /></button>
                   </div>
                   <div className="space-y-6">
                      <div className="space-y-2">
                         <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Customer Name</p>
                         <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-300" />
                            <input value={customerInfo.name} onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})} type="text" placeholder="e.g. John Doe" className="w-full h-14 bg-zinc-50 rounded-2xl border-none pl-12 text-sm font-bold focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all" />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Phone Number</p>
                         <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-300" />
                            <input value={customerInfo.phone} onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})} type="tel" placeholder="0171XXXXXXX" className="w-full h-14 bg-zinc-50 rounded-2xl border-none pl-12 text-sm font-bold focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all" />
                         </div>
                      </div>
                   </div>
                   <Button onClick={() => setCheckoutStep("payment")} className="w-full h-16 rounded-[1.5rem] bg-zinc-900 text-xs font-black uppercase tracking-widest gap-2">CHOOSE PAYMENT <ArrowRight className="h-4 w-4" /></Button>
                </div>
              )}

              {checkoutStep === "payment" && (
                <div className="p-12 space-y-10 animate-in slide-in-from-right-6 duration-500">
                   <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black uppercase tracking-tighter">Payment Method</h3>
                      <button onClick={() => setCheckoutStep("details")} className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center rotate-180"><ArrowRight className="h-5 w-5" /></button>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'cash', label: 'CASH', icon: <Banknote className="h-6 w-6" /> },
                        { id: 'card', label: 'CARD', icon: <CreditCard className="h-6 w-6" /> },
                        { id: 'wallet', label: 'E-WALLET', icon: <Smartphone className="h-6 w-6" /> },
                        { id: 'split', label: 'SPLIT', icon: <ArrowRightLeft className="h-6 w-6" /> },
                      ].map(p => (
                        <button 
                          key={p.id} 
                          onClick={() => setPaymentMethod(p.id)}
                          className={`flex flex-col items-center justify-center p-8 rounded-3xl border-2 transition-all group ${paymentMethod === p.id ? 'bg-sky-600 border-sky-600 text-white shadow-xl shadow-sky-600/20' : 'bg-zinc-50 border-zinc-50 hover:border-zinc-200 text-zinc-400'}`}
                        >
                           {p.icon}
                           <span className="mt-4 text-[10px] font-black uppercase tracking-widest">{p.label}</span>
                        </button>
                      ))}
                   </div>
                   <Button onClick={finalizePayment} className="w-full h-16 rounded-[1.5rem] bg-zinc-900 text-xs font-black uppercase tracking-[0.25em] shadow-xl shadow-zinc-950/20">FINALIZE Payout</Button>
                </div>
              )}

              {checkoutStep === "success" && (
                <div className="p-16 text-center space-y-8 animate-in zoom-in-95 duration-700">
                   <div className="h-24 w-24 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40">
                      <CheckCircle2 className="h-12 w-12" />
                   </div>
                   <div>
                      <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">Paid in Full</h2>
                      <p className="mt-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Transaction #42058 Completed</p>
                   </div>
                   <div className="pt-8 space-y-3">
                      <Button onClick={() => { setOrderItems([]); setCheckoutStep("pos"); setSelectedTable(null); setCustomerInfo({name: "", phone: ""}); setPaymentMethod(""); }} className="w-full h-16 rounded-[1.5rem] bg-zinc-900 text-xs font-black uppercase tracking-widest text-white shadow-2xl">NEW ORDER</Button>
                      <Button variant="ghost" className="w-full text-[10px] font-bold text-zinc-400 uppercase">Print Final Receipt</Button>
                   </div>
                </div>
              )}

           </Card>
        </div>
      )}

    </div>
  );
}
