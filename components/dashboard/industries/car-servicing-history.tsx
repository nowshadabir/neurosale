"use client";

import { useState } from "react";
import {
  Search,
  Calendar,
  Filter,
  FileDown,
  Printer,
  ChevronRight,
  MoreVertical,
  Undo2,
  FileText,
  MessageSquare,
  ExternalLink,
  ChevronLeft,
  ArrowUpDown,
  History,
  TrendingUp,
  Clock,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Eye,
  Copy,
  Plus,
  Share2,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CarServicingHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [statusFilter, setStatusFilter] = useState("all");

  const historyData = [
    { id: "#JC-2026-001", date: "2026-03-31", plate: "DHK-1234", vehicle: "Toyota Corolla", customer: "Nowshad Abir", service: "Full Synthetic Oil & Filter", tech: "Abir Hasan", bill: 12500, status: "completed", type: "regular" },
    { id: "#JC-2025-998", date: "2026-03-25", plate: "DHK-5562", vehicle: "Toyota Premio-G", customer: "Mawa Islam", service: "Suspension Overhaul", tech: "Rakib Ahmed", bill: 45000, status: "re-fix", type: "warranty" },
    { id: "#JC-2025-995", date: "2026-03-12", plate: "CTG-8820", vehicle: "Mitsubishi Pajero", customer: "Rafiq Islam", service: "Brake Pad Replacement", tech: "Selim Khan", bill: 8900, status: "completed", type: "regular" },
    { id: "#JC-2025-990", date: "2026-02-28", plate: "SYL-7712", vehicle: "Honda Civic", customer: "Sumit Sarkar", service: "AC Gas & Compressor Check", tech: "Niaz Ahmed", bill: 11200, status: "cancelled", type: "none" },
    { id: "#JC-2025-985", date: "2026-02-20", plate: "DHK-0021", vehicle: "Nissan X-Trail", customer: "Tanvir S.", service: "Engine Tuning & Plugin", tech: "Abir Hasan", bill: 6500, status: "completed", type: "regular" },
  ];

  const stats = [
    { label: "Total Revenue", value: "৳ 84.1K", icon: <TrendingUp className="h-4 w-4" />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Avg. Duration", value: "3h 45m", icon: <Clock className="h-4 w-4" />, color: "text-sky-600", bg: "bg-sky-50" },
    { label: "Re-fix Rate", value: "2.4%", icon: <RotateCcw className="h-4 w-4" />, color: "text-red-600", bg: "bg-red-50" },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* 4. Analytics Summary Ribbon */}
      <div className="grid gap-6 md:grid-cols-3 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20">
            <CardContent className="flex items-center gap-4 p-6">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{stat.label}</p>
                <p className="text-2xl font-black tracking-tight text-zinc-900">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 1. Advanced Search & Filter Bar */}
      <section className="animate-in fade-in slide-in-from-left-4 duration-500 delay-100 fill-mode-both">
        <Card className="border-none bg-zinc-900 text-white shadow-xl shadow-zinc-900/10">
          <CardContent className="p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_200px_200px_200px]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Universal Search (Job ID, Plate, Phone, Mechanic...)"
                  className="h-14 w-full rounded-2xl border-white/5 bg-white/10 pl-12 pr-4 text-sm font-medium outline-none focus:ring-4 focus:ring-sky-500/20 transition-all transition-colors"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <select className="h-14 w-full appearance-none rounded-2xl border-white/5 bg-white/10 pl-11 pr-4 text-xs font-bold outline-none hover:bg-white/15 transition-all">
                   <option>Last 30 Days</option>
                   <option>Today</option>
                   <option>This Week</option>
                   <option>Financial Year</option>
                </select>
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <select 
                  className="h-14 w-full appearance-none rounded-2xl border-white/5 bg-white/10 pl-11 pr-4 text-xs font-bold outline-none hover:bg-white/15 transition-all"
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                   <option value="all">All Statuses</option>
                   <option value="completed">Completed</option>
                   <option value="re-fix">Re-fix Required</option>
                   <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <Button className="h-14 rounded-2xl bg-sky-600 text-sm font-bold shadow-lg shadow-sky-600/20 hover:bg-sky-700">
                <FileDown className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. History Master Table */}
      <section className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200 fill-mode-both">
        <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20 overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-zinc-50/50 border-b border-zinc-100">
                       <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Date/ID</th>
                       <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Vehicle & Plate</th>
                       <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Customer</th>
                       <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Primary Service</th>
                       <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Technician</th>
                       <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Total Bill</th>
                       <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 text-right">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-zinc-100">
                    {historyData.map((job) => (
                      <tr key={job.id} className="group hover:bg-zinc-50/80 transition-colors relative">
                        {/* Status Strip */}
                        <td className={`absolute left-0 top-0 bottom-0 w-1 ${
                          job.status === 'completed' ? 'bg-emerald-500' :
                          job.status === 're-fix' ? 'bg-red-500' : 'bg-zinc-300'
                        }`} />
                        
                        <td className="px-6 py-4">
                           <p className="text-xs font-bold text-zinc-900 leading-none">{job.date}</p>
                           <p className="mt-1.5 text-[10px] font-medium text-zinc-400 italic font-mono">{job.id}</p>
                        </td>
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-400 group-hover:bg-white transition-colors border border-transparent group-hover:border-zinc-200">
                                 <Car className="h-4 w-4" />
                              </div>
                              <div>
                                 <p className="text-xs font-bold text-zinc-900 leading-none">{job.plate}</p>
                                 <p className="mt-1.5 text-[10px] text-zinc-500 font-medium">{job.vehicle}</p>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4">
                           <p className="text-xs font-bold text-zinc-700">{job.customer}</p>
                        </td>
                        <td className="px-6 py-4">
                           <p className="text-xs font-medium text-zinc-600 line-clamp-1">{job.service}</p>
                        </td>
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-zinc-600">{job.tech}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4">
                           <p className="text-sm font-black text-zinc-900 leading-none">৳ {job.bill.toLocaleString()}</p>
                           {job.type === 'warranty' && <span className="text-[8px] font-bold text-red-500 uppercase tracking-tighter">Warranty Work</span>}
                        </td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2">
                              <Button 
                                onClick={() => setSelectedJob(job)}
                                variant="outline" size="sm" className="h-8 rounded-lg border-zinc-200 text-[10px] font-bold tracking-widest uppercase hover:bg-sky-50 hover:text-sky-600"
                              >
                                 <Eye className="h-3 w-3 mr-1.5" /> View
                              </Button>
                              <div className="relative group/menu">
                                 <button className="rounded-lg p-1.5 hover:bg-zinc-100 text-zinc-400 transition-colors">
                                    <MoreVertical className="h-4 w-4" />
                                 </button>
                                 {/* Hover Menu Simulation */}
                                 <div className="absolute right-0 top-full mt-1 z-20 w-48 rounded-xl border border-zinc-100 bg-white p-1 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-200">
                                    <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-zinc-600 hover:bg-sky-50 hover:text-sky-600">
                                       <Copy className="h-3.5 w-3.5" /> Duplicate Job
                                    </button>
                                    <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-zinc-600 hover:bg-sky-50 hover:text-sky-600">
                                       <Share2 className="h-3.5 w-3.5" /> WhatsApp Receipt
                                    </button>
                                    <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-zinc-600 hover:bg-sky-50 hover:text-sky-600">
                                       <Plus className="h-3.5 w-3.5" /> Post-Service Note
                                    </button>
                                    <div className="my-1 border-t border-zinc-50" />
                                    <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-red-500 hover:bg-red-50">
                                       <FileText className="h-3.5 w-3.5" /> Export PDF
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
           
           {/* Pagination Footer */}
           <div className="flex items-center justify-between border-t border-zinc-100 bg-white px-6 py-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                 Showing <span className="text-zinc-900">1 to 5</span> of <span className="text-zinc-900">1,245</span> Records
              </p>
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-zinc-400 mr-2 uppercase tracking-tighter">Rows per page:</span>
                    <select className="rounded border border-zinc-200 px-1 py-0.5 text-xs font-bold outline-none">
                       <option>10</option>
                       <option selected>25</option>
                       <option>50</option>
                    </select>
                 </div>
                 <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg" disabled>
                       <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex h-8 items-center gap-1 px-2">
                       <span className="text-xs font-bold text-sky-600">1</span>
                       <span className="text-xs font-bold text-zinc-400 mx-1">/</span>
                       <span className="text-xs font-bold text-zinc-400">50</span>
                    </div>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600">
                       <ChevronRight className="h-4 w-4" />
                    </Button>
                 </div>
              </div>
           </div>
        </Card>
      </section>

      {/* 3. The "Deep Dive" Job Modal (The Detail View) */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-zinc-950/20 backdrop-blur-sm animate-in fade-in duration-300">
           <div 
            className="h-full w-full max-w-[500px] bg-white shadow-2xl animate-in slide-in-from-right duration-500 ease-out flex flex-col"
            onClick={(e) => e.stopPropagation()}
           >
              <div className="flex items-center justify-between border-b border-zinc-100 px-8 py-6">
                 <div>
                    <h3 className="text-lg font-black tracking-tighter text-zinc-900">{selectedJob.id}</h3>
                    <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{selectedJob.date}</p>
                 </div>
                 <Button 
                  onClick={() => setSelectedJob(null)}
                  variant="ghost" className="h-10 w-10 p-0 rounded-xl hover:bg-zinc-50"
                 >
                    <XCircle className="h-6 w-6 text-zinc-400" />
                 </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                 {/* Original Complaint */}
                 <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sky-600">
                       <MessageSquare className="h-4 w-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Customer Voice</span>
                    </div>
                    <p className="text-sm border-l-2 border-zinc-100 pl-4 text-zinc-600 italic leading-relaxed">
                      "Car is making a slight rattling noise from the front left suspension while going over speed bumps. Also noticed a drop in AC cooling efficiency."
                    </p>
                 </div>

                 {/* Tech Notes */}
                 <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-600">
                       <FileText className="h-4 w-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Technician Notes</span>
                    </div>
                    <div className="rounded-2xl bg-zinc-50 p-5 border border-zinc-100 shadow-sm">
                       <p className="text-xs leading-relaxed text-zinc-600">
                          Replaced lower arm bush. Found minor engine oil sweat near head gasket – advised customer for next visit. AC gas was low due to valve leak, replaced valve & recharged.
                       </p>
                       <div className="mt-4 flex items-center gap-2 pt-4 border-t border-zinc-100/50">
                          <div className="h-6 w-6 rounded-lg bg-zinc-900 flex items-center justify-center text-[8px] font-bold text-white">RH</div>
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Logged by Rafiq Ahmed</span>
                       </div>
                    </div>
                 </div>

                 {/* Parts Archive */}
                 <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2 text-zinc-900">
                          <History className="h-4 w-4" />
                          <span className="text-[10px] font-black uppercase tracking-widest">Parts Replaced</span>
                       </div>
                       <span className="text-[10px] font-bold text-zinc-400">Total 4 Items</span>
                    </div>
                    <div className="space-y-2">
                       {[
                         { name: "Synthetic Oil (5W-30)", qty: "4L", price: "5,400" },
                         { name: "Genuine Oil Filter", qty: "1pc", price: "1,200" },
                         { name: "AC Gas R134a", qty: "1 unit", price: "2,500" },
                         { name: "Lower Arm Bush", qty: "1 set", price: "3,400" }
                       ].map((p, i) => (
                         <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-50 last:border-0 hover:translate-x-1 transition-transform">
                            <div>
                               <p className="text-xs font-bold text-zinc-800">{p.name}</p>
                               <p className="text-[10px] text-zinc-400">{p.qty}</p>
                            </div>
                            <span className="text-xs font-black text-zinc-900">৳ {p.price}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Payment Summary */}
                 <div className="rounded-2xl bg-zinc-900 p-6 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 bg-sky-500 opacity-10 rounded-full blur-2xl -mr-16 -mt-16" />
                    <div className="relative z-10 flex items-center justify-between">
                       <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">FINAL PAYMENT</p>
                          <p className="mt-1 text-2xl font-black">৳ {selectedJob.bill.toLocaleString()}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">VIA CARD</p>
                          <p className="mt-1 text-[8px] font-bold uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded text-emerald-400">Success</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="border-t border-zinc-100 bg-zinc-50/50 p-8 flex items-center gap-3">
                 <Button className="flex-1 h-12 rounded-xl bg-sky-600 font-bold hover:bg-sky-700 shadow-xl shadow-sky-600/20">
                    <Printer className="h-4 w-4 mr-2" /> Download Invoice
                 </Button>
                 <Button variant="ghost" className="h-12 w-12 rounded-xl border border-zinc-200 bg-white p-0 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-600">
                    <Undo2 className="h-5 w-5" />
                 </Button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
