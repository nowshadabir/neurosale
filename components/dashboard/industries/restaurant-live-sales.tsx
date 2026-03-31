"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  Users,
  UtensilsCrossed,
  Clock,
  Zap,
  ShoppingBag,
  Truck,
  ChefHat,
  AlertTriangle,
  ArrowRight,
  TrendingDown,
  Star,
  Undo2,
  CheckCircle2,
  Timer,
  ChevronRight,
  LayoutDashboard,
  Calendar,
  Search,
  Filter,
  MoreVertical,
  Monitor,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RestaurantLiveSales() {
  const [revenue, setRevenue] = useState(42500);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prev) => prev + Math.floor(Math.random() * 500));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Total Sales (Today)", value: `৳ ${revenue.toLocaleString()}`, sub: "+12% vs last week", icon: <TrendingUp className="h-5 w-5" />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Occupancy Rate", value: "72%", sub: "18 of 25 Tables", icon: <Users className="h-5 w-5" />, color: "text-sky-600", bg: "bg-sky-50" },
    { label: "Active Orders", value: "12", sub: "Kitchen is busy", icon: <ChefHat className="h-5 w-5" />, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Avg. Ticket Size", value: "৳ 1,840", sub: "Standard performance", icon: <UtensilsCrossed className="h-5 w-5" />, color: "text-zinc-600", bg: "bg-zinc-100" },
  ];

  const recentActivity = [
    { time: "11:30 PM", msg: "Table 12 bill settled", amt: "৳ 4,500", type: "settle" },
    { time: "11:28 PM", msg: "New Delivery Order #902", amt: "৳ 2,250", type: "order" },
    { time: "11:25 PM", msg: "Table 5 modification (Extra Cheese)", amt: "+ ৳ 150", type: "update" },
    { time: "11:20 PM", msg: "Voided Item: Steak (Table 2)", amt: "- ৳ 1,200", type: "alert" },
  ];

  const topItems = [
    { name: "Cappuccino", sold: 42, margin: "High", trend: "up" },
    { name: "Avocado Toast", sold: 28, margin: "High", trend: "up" },
    { name: "Spicy Pasta", sold: 22, margin: "Med", trend: "flat" },
    { name: "Beef Burger", sold: 18, margin: "Low", trend: "down" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      
      {/* 1. The Professional Pulse Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Live Sales Operations</h1>
            <p className="text-sm text-zinc-500 font-medium">Real-time performance metrics for your restaurant and delivery channels.</p>
         </div>
         <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 shadow-sm">
               <Calendar className="h-4 w-4 text-zinc-400" />
               <span className="text-xs font-bold text-zinc-600">March 31, 2026</span>
            </div>
            <Button variant="outline" className="h-10 rounded-xl gap-2 text-xs font-bold border-zinc-200">
               <Filter className="h-4 w-4" /> Filter View
            </Button>
         </div>
      </header>

      {/* 2. Key Performance Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
         {stats.map((stat) => (
           <Card key={stat.label} className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden group">
              <CardContent className="p-6">
                 <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                       {stat.icon}
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{stat.sub}</span>
                 </div>
                 <div>
                    <h4 className="text-2xl font-black tracking-tight text-zinc-900">{stat.value}</h4>
                    <p className="mt-1 text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                 </div>
              </CardContent>
           </Card>
         ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
         <div className="space-y-8">
            
            {/* 3. Sales Velocity (Clean Linear Chart) */}
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20">
                 <CardHeader className="p-8 border-b border-zinc-100 flex flex-row items-center justify-between space-y-0">
                    <div>
                       <CardTitle className="text-sm font-bold uppercase tracking-widest text-zinc-400">Sales Velocity (24H)</CardTitle>
                       <p className="text-[10px] text-zinc-500 mt-1 font-medium italic">Peak hour prediction: 12:30 PM - 02:00 PM</p>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                          <div className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Today
                       </span>
                       <span className="flex items-center gap-2 text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                          <div className="h-1.5 w-1.5 rounded-full bg-zinc-200" /> Avg.
                       </span>
                    </div>
                 </CardHeader>
                 <CardContent className="p-8">
                    <div className="h-48 w-full flex items-end gap-2 px-1">
                       {[30, 25, 40, 35, 60, 70, 85, 95, 65, 45, 55, 60, 75, 80, 70, 90, 85, 60, 40, 50, 45, 30].map((v, i) => (
                         <div 
                          key={i} 
                          className={`flex-1 rounded-t-lg transition-all duration-700 ${i === 7 ? 'bg-sky-600' : 'bg-sky-200 hover:bg-sky-300'}`} 
                          style={{ height: `${v}%` }} 
                         />
                       ))}
                    </div>
                    <div className="mt-4 flex justify-between text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 border-t border-zinc-50 pt-4 px-2">
                       <span>08:00 AM</span>
                       <span>12:00 PM</span>
                       <span>04:00 PM</span>
                       <span>08:00 PM</span>
                       <span>12:00 AM</span>
                    </div>
                 </CardContent>
              </Card>
            </section>

            <div className="grid gap-6 md:grid-cols-2">
               {/* 4. Sales Channels (Split) */}
               <section>
                  <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 p-8 space-y-6">
                     <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Channel Distribution</h3>
                     <div className="space-y-6">
                        {[
                          { label: "Dine-In", pc: 45, val: "৳ 19,125", color: "bg-sky-600" },
                          { label: "Takeaway", pc: 30, val: "৳ 12,750", color: "bg-amber-500" },
                          { label: "Delivery", pc: 25, val: "৳ 10,625", color: "bg-zinc-800" },
                        ].map((c) => (
                          <div key={c.label} className="space-y-2">
                             <div className="flex items-center justify-between text-[10px] font-bold">
                                <span className="text-zinc-500">{c.label}</span>
                                <span className="text-zinc-900">{c.pc}% — {c.val}</span>
                             </div>
                             <div className="h-1.5 w-full rounded-full bg-zinc-100 overflow-hidden">
                                <div className={`h-full ${c.color} transition-all duration-1000`} style={{ width: `${c.pc}%` }} />
                             </div>
                          </div>
                        ))}
                     </div>
                  </Card>
               </section>

               {/* 5. Top Performing Menu Items */}
               <section>
                  <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 p-8 space-y-6">
                     <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sales Leaderboard</h3>
                     <div className="divide-y divide-zinc-100 italic">
                        {topItems.map((item, i) => (
                          <div key={item.name} className="flex items-center justify-between py-3 group not-italic">
                             <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold text-zinc-300">{i + 1}</span>
                                <div className="text-xs font-bold text-zinc-800 uppercase tracking-tighter truncate max-w-[120px]">{item.name}</div>
                             </div>
                             <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold text-zinc-400">{item.sold} Sold</span>
                                {item.margin === 'High' && <Star className="h-3 w-3 text-amber-500 fill-amber-500" />}
                                {item.trend === 'up' ? <TrendingUp className="h-3 w-3 text-emerald-500" /> : <TrendingDown className="h-3 w-3 text-red-500" />}
                             </div>
                          </div>
                        ))}
                     </div>
                  </Card>
               </section>
            </div>

            {/* 6. Kitchen Efficiency Monitoring */}
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Kitchen Operations Sync</h3>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-tighter">92% Compliance</span>
               </div>
               <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20">
                  <div className="divide-y divide-zinc-100">
                     {[
                       { id: 4, msg: "T4: Beef Ribs / Steak", elapsed: "25m", status: "delayed" },
                       { id: 18, msg: "T18: Salmon Platter", elapsed: "12m", status: "healthy" },
                       { id: 2, msg: "T2: Lunch Combo x2", elapsed: "5m", status: "fresh" },
                     ].map((t) => (
                       <div key={t.id} className="p-4 flex items-center justify-between group hover:bg-zinc-50/50 transition-colors">
                          <div className="flex items-center gap-4">
                             <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${t.status === 'delayed' ? 'bg-red-100 text-red-600' : 'bg-zinc-100 text-zinc-500'}`}>
                                {t.status === 'delayed' ? <AlertTriangle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                             </div>
                             <span className="text-xs font-bold text-zinc-800">{t.msg}</span>
                          </div>
                          <div className="flex items-center gap-6">
                             <div className="text-right">
                                <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">Elapsed</p>
                                <p className={`text-xs font-black ${t.status === 'delayed' ? 'text-red-500' : 'text-emerald-600'}`}>{t.elapsed}</p>
                             </div>
                             <ChevronRight className="h-3.5 w-3.5 text-zinc-300" />
                          </div>
                       </div>
                     ))}
                  </div>
               </Card>
            </section>
         </div>

         {/* 7. Recent Transactions & Alerts (Side Area) */}
         <aside className="space-y-8 animate-in slide-in-from-right-4 duration-700 delay-300">
            {/* System Alerts */}
            <section className="space-y-4">
               <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Inventory & Security</h3>
               <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-700">
                     <AlertTriangle className="h-4 w-4" />
                     <p className="text-[10px] font-black uppercase tracking-[0.05em]">Ingredient Critical</p>
                  </div>
                  <p className="text-xs leading-relaxed text-amber-800/80 font-medium italic italic">
                    "Burger Buns inventory below threshold (12 left). Consider pausing online channels."
                  </p>
               </div>
               
               <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 text-red-700">
                     <Undo2 className="h-4 w-4" />
                     <p className="text-[10px] font-black uppercase tracking-[0.05em]">Refund Authorization</p>
                  </div>
                  <p className="text-xs leading-relaxed text-red-800/80 font-medium italic italic">
                    "Manager override required for Table 2 refund (Amount: ৳ 1,200)."
                  </p>
               </div>
            </section>

            {/* Live Feed */}
            <section className="space-y-4">
               <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Live Activity Feed</h3>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
               </div>
               <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden divide-y divide-zinc-100">
                  {recentActivity.map((act, i) => (
                    <div key={i} className="p-4 hover:bg-zinc-50 transition-all cursor-pointer group">
                       <div className="flex justify-between items-start mb-2">
                          <span className="text-[9px] font-bold text-zinc-400 uppercase">{act.time}</span>
                          <span className={`text-[10px] font-black ${act.type === 'alert' ? 'text-red-500' : 'text-emerald-600'}`}>{act.amt}</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className={`h-1.5 w-1.5 rounded-full ${act.type === 'order' ? 'bg-sky-500' : act.type === 'settle' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                          <p className="text-xs font-bold text-zinc-700 group-hover:text-sky-600 transition-colors uppercase tracking-tighter leading-none">{act.msg}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <Button variant="ghost" className="w-full text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 gap-2">
                  View Full Operations Log <ChevronRight className="h-3 w-3" />
               </Button>
            </section>

            {/* Performance Footer */}
            <section className="rounded-2xl bg-zinc-900 p-6 text-white overflow-hidden relative shadow-xl">
               <div className="absolute top-0 right-0 p-12 bg-sky-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />
               <div className="relative z-10 flex flex-col items-center justify-center text-center py-4">
                  <Monitor className="h-10 w-10 text-sky-400 mb-4" />
                  <h3 className="text-base font-black tracking-tight mb-2 uppercase">Always-On Optimized</h3>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Digital Signage Mode Active</p>
                  <Button className="mt-6 h-10 w-full rounded-xl bg-sky-600 text-[10px] font-black uppercase tracking-widest shadow-xl shadow-sky-600/20 hover:bg-sky-700">
                     ENTER FOCUS MODE
                  </Button>
               </div>
            </section>
         </aside>
      </div>

    </div>
  );
}
