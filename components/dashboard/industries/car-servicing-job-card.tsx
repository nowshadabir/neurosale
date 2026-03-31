"use client";

import { useState, useRef } from "react";
import {
  Car,
  User,
  Search,
  Plus,
  Camera,
  Wrench,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Smartphone,
  Printer,
  Save,
  ChevronDown,
  Gauge,
  UserCog,
  Layout,
  History,
  FileText,
  DollarSign,
  PenTool,
  X,
  PlusCircle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CarServicingJobCard() {
  const [priority, setPriority] = useState("Medium");
  const [fuelLevel, setFuelLevel] = useState(50);
  const [odometer, setOdometer] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [damagePoints, setDamagePoints] = useState<{ x: number, y: number, id: number }[]>([]);

  const handleCarMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setDamagePoints([...damagePoints, { x, y, id: Date.now() }]);
  };

  const removeDamagePoint = (id: number) => {
    setDamagePoints(damagePoints.filter(p => p.id !== id));
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  return (
    <div className="relative min-h-screen pb-24 space-y-8">
      {/* 1. Header: Quick Actions */}
      <div className="flex flex-col gap-4 border-b border-zinc-100 pb-6 md:flex-row md:items-center md:justify-between animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Create Job Card</h1>
            <span className="rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-600">#JC-2026-001</span>
            <span className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-bold text-zinc-500 uppercase tracking-wider">Draft</span>
          </div>
          <p className="mt-1 text-xs text-zinc-400">March 31, 2026 • 10:48 PM (Editable)</p>
        </div>
        
        <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 p-1">
          {["Low", "Medium", "High", "Emergency"].map((p) => (
            <button
              key={p}
              onClick={() => setPriority(p)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                priority === p 
                ? p === "Emergency" ? "bg-red-600 text-white shadow-lg" : "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-8">
          
          {/* 2. Customer & Vehicle Identification (Search-First) */}
          <section className="animate-in fade-in slide-in-from-left-4 duration-500 delay-100 fill-mode-both">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Customer & Vehicle Identification</h3>
              <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs font-bold text-sky-600 hover:bg-sky-50">
                <PlusCircle className="h-4 w-4" />
                New Customer
              </Button>
            </div>
            
            <Card className="overflow-hidden border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20">
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                  <input 
                    type="text" 
                    placeholder="Search by Mobile, Name, or License Plate (e.g., Dhaka-Metro-1234)"
                    className="h-14 w-full rounded-2xl border-none bg-zinc-50 pl-12 pr-4 text-sm font-medium outline-none focus:ring-4 focus:ring-sky-600/10 transition-all"
                  />
                </div>

                {/* Simulated Auto-fill Result for Returning Customer */}
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-6 rounded-2xl bg-sky-50/50 p-6 border border-sky-100/50">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600/60">Selected Customer</p>
                    <p className="text-sm font-bold text-zinc-900">Nowshad Abir (01712-XXXXXX)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600/60">Vehicle</p>
                    <p className="text-sm font-bold text-zinc-900">Toyota Premio-G (2018)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600/60">License Plate</p>
                    <p className="text-sm font-bold text-zinc-900">Dhaka Metro-GA-12-3456</p>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600/60">Current Odometer (Mandatory)</p>
                    <div className="relative mt-1">
                      <Gauge className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                      <input 
                        type="number" 
                        value={odometer}
                        onChange={(e) => setOdometer(e.target.value)}
                        placeholder="e.g., 42,500"
                        className="h-9 w-full rounded-lg border-zinc-200 bg-white pl-9 text-sm font-bold outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 3. Visual Health Check (Interactive Component) */}
          <section className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200 fill-mode-both">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Visual Health Check</h3>
            <Card className="border-zinc-200/80 bg-white shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:grid md:grid-cols-[1fr_300px]">
                  {/* Car Map */}
                  <div className="relative border-b md:border-b-0 md:border-r border-zinc-100 p-8">
                    <p className="mb-6 text-xs font-semibold text-zinc-500 text-center uppercase tracking-widest">Mark Damage Areas (Click on Map)</p>
                    <div 
                      className="relative mx-auto aspect-[2.5/1] max-w-[500px] cursor-crosshair rounded-3xl bg-zinc-50 p-6 flex items-center justify-center transition-all hover:bg-zinc-100"
                      onClick={handleCarMapClick}
                    >
                      {/* Placeholder for SVG Car Diagram */}
                      <Car className="h-48 w-48 text-zinc-200" />
                      {damagePoints.map((p) => (
                        <div 
                          key={p.id}
                          className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-red-500 shadow-lg shadow-red-500/40 animate-in zoom-in duration-300"
                          style={{ left: `${p.x}%`, top: `${p.y}%` }}
                          onClick={(e) => { e.stopPropagation(); removeDamagePoint(p.id); }}
                        >
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-black px-1.5 py-0.5 text-[8px] font-bold text-white">Remove</span>
                        </div>
                      ))}
                    </div>
                    {damagePoints.length > 0 && (
                      <p className="mt-4 text-center text-[10px] font-bold text-red-500 uppercase tracking-widest">
                        {damagePoints.length} Surface Issue(s) Recorded
                      </p>
                    )}
                  </div>

                  {/* Fuel & Photos */}
                  <div className="p-8 space-y-8 bg-zinc-50/30">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Fuel Gauge Level</p>
                        <span className="text-xs font-bold text-zinc-900">{fuelLevel}%</span>
                      </div>
                      <input 
                        type="range"
                        min="0"
                        max="100"
                        value={fuelLevel}
                        onChange={(e) => setFuelLevel(parseInt(e.target.value))}
                        className="w-full h-1.5 rounded-full bg-zinc-200 accent-sky-600 outline-none cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] font-bold text-zinc-400">
                        <span>EMPTY</span>
                        <span>HALF</span>
                        <span>FULL</span>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-zinc-200/50">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Condition Proofs (Photo/Video)</p>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-zinc-200 bg-white py-6 text-zinc-400 transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600">
                          <Camera className="h-6 w-6" />
                          <span className="text-[10px] font-bold">Upload Photos</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-zinc-200 bg-white py-6 text-zinc-400 transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600">
                          <Smartphone className="h-6 w-6" />
                          <span className="text-[10px] font-bold">Use Mobile App</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 4. Problem Description & Service Selection */}
          <section className="animate-in fade-in slide-in-from-left-4 duration-500 delay-300 fill-mode-both">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Service Requirements</h3>
            <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Customer Voice (Primary Complaints)</p>
                  <textarea 
                    placeholder="Owner's exact complaints (e.g., Squeaky noise from front left wheel, low AC cooling...)"
                    className="min-h-[120px] w-full rounded-2xl border-zinc-200 bg-zinc-50/50 p-4 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Quick Service Selection</p>
                    <p className="text-[10px] font-bold text-sky-600 italic">AI Suggested based on history</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Basic Maintenance", "Full Syntheic Oil Change", "Brake Pad Check", "AC Gas Charge", "Engine Wash", "Wheel Alignment"
                    ].map((service) => (
                      <button
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`rounded-xl border px-4 py-2 text-xs font-bold transition-all ${
                          selectedServices.includes(service)
                          ? "border-sky-600 bg-sky-600 text-white shadow-lg shadow-sky-600/20"
                          : "border-zinc-200 bg-white text-zinc-600 hover:border-sky-200 hover:bg-sky-50"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 pt-6 border-t border-zinc-100">
                  <div className="flex-1 min-w-[200px] space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Estimated Delivery</p>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                      <input 
                        type="datetime-local" 
                        className="h-11 w-full rounded-xl border-zinc-200 bg-zinc-50/50 pl-10 pr-4 text-sm font-bold outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>
                  <div className="hidden items-center gap-3 rounded-2xl bg-sky-50/50 p-4 md:flex">
                    <Zap className="h-5 w-5 text-sky-600" />
                    <p className="text-[10px] font-bold text-sky-700 uppercase leading-snug">
                      AI Load Estimator:<br />
                      <span className="text-xs">Available for pickup by 5:00 PM Today</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Sidebar: Technical & Financial */}
        <aside className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 delay-200 fill-mode-both">
          
          {/* 5. Technical Assignment */}
          <section>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Technical Assignment</h3>
            <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Lead Mechanic</label>
                  <Button variant="outline" className="w-full justify-between rounded-xl border-zinc-200 h-11 px-4 text-sm">
                    <div className="flex items-center gap-2">
                      <UserCog className="h-4 w-4 text-sky-600" />
                      Assign Mechanic
                    </div>
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Service Bay</label>
                  <Button variant="outline" className="w-full justify-between rounded-xl border-zinc-200 h-11 px-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Layout className="h-4 w-4 text-sky-600" />
                      Select Bay
                    </div>
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </div>
                <div className="space-y-3 pt-4 border-t border-zinc-100 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Initial Spare Parts Request</p>
                  <Button variant="ghost" className="w-full rounded-xl bg-zinc-50 hover:bg-zinc-100 text-xs font-bold text-zinc-600 h-11">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Predicted Parts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 6. Financial Estimate */}
          <section>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Financial Estimate</h3>
            <Card className="border-0 bg-zinc-900 text-white shadow-xl shadow-sky-900/10 overflow-hidden relative">
              <div className="absolute right-0 top-0 h-32 w-32 -mr-16 -mt-16 rounded-full bg-sky-500/10 blur-3xl" />
              <CardContent className="p-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-400">Est. Labor Cost</span>
                    <span className="text-sm font-bold">৳ 2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-400">Est. Parts Cost</span>
                    <span className="text-sm font-bold">৳ 6,240</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-sky-400">Total Estimate</p>
                      <p className="text-3xl font-bold tracking-tighter">৳ {(8740).toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-6 w-6 text-sky-500 opacity-50 mb-1" />
                  </div>
                  <p className="mt-4 text-[10px] text-zinc-500 leading-relaxed italic">
                    * Subject to changes based on detailed mechanical inspection.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 7. Customer Consent & Authorization */}
          <section>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Consent & Authorization</h3>
            <Card className="border-zinc-200/80 bg-white shadow-sm ring-1 ring-zinc-200/20">
              <CardContent className="p-6 space-y-6 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Customer Signature</p>
                <div className="h-32 w-full rounded-2xl border-2 border-dashed border-zinc-100 bg-zinc-50/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:bg-zinc-100">
                  <PenTool className="h-6 w-6 text-zinc-300" />
                  <span className="text-xs font-medium text-zinc-400">Sign directly on tablet</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-emerald-50 px-4 py-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-xs font-bold text-emerald-700">Auto-send to WhatsApp</span>
                </div>
              </CardContent>
            </Card>
          </section>
        </aside>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-64 right-0 z-50 animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both">
        <div className="flex items-center justify-between border-t border-zinc-200 bg-white/80 px-8 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-6">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-100">
              <div className="h-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-400">AD</div>
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-900">Current Advisor: Nowshad Abir</p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Main Workshop Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="h-11 rounded-xl border-zinc-200 px-6 font-bold text-zinc-600 shadow-sm hover:bg-zinc-50">
              <Printer className="h-4 w-4 mr-2" />
              Print Ghost ID
            </Button>
            <Button className="h-11 rounded-xl bg-sky-600 px-10 font-bold text-white shadow-xl shadow-sky-600/20 hover:bg-sky-700 transition-all hover:scale-105 active:scale-95">
              <Save className="h-4 w-4 mr-2" />
              Capture Job Card
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
