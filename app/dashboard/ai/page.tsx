"use client";

import { useBusiness } from "@/context/business-context";
import { Bot, Zap, Sparkles, Construction, ArrowRight, TrendingUp, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIDashboardPage() {
  const { category } = useBusiness();

  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-xl -mx-6 -mt-6 animate-in fade-in zoom-in-95 duration-1000 fill-mode-both">
       <div className="relative mb-12">
          <div className="absolute inset-0 animate-pulse rounded-full bg-sky-200 opacity-30 shadow-[0_0_80px_rgba(14,165,233,0.4)]" />
          <div className="relative flex h-32 w-32 items-center justify-center rounded-[2.5rem] bg-sky-600 text-white shadow-2xl shadow-sky-600/30">
             <Bot className="h-16 w-16" />
          </div>
          <div className="absolute -top-2 -right-2 h-10 w-10 flex items-center justify-center rounded-full bg-amber-400 text-zinc-950 shadow-lg border-4 border-white">
             <Sparkles className="h-5 w-5" />
          </div>
       </div>
       
       <h2 className="text-4xl font-black tracking-tighter text-zinc-900 uppercase">AI Data-Ops Hub</h2>
       <p className="mt-4 max-w-lg text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 leading-relaxed">
          Deep-learning forecasting, peak-prediction matrix, and automated depletion alerts specifically engineered for <span className="text-sky-600 bg-sky-50 px-2 py-0.5 rounded">{category}</span>.
       </p>
       
       <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex h-12 items-center justify-center gap-4 rounded-2xl border border-sky-100 bg-white px-8 text-[10px] font-black uppercase tracking-widest text-sky-700 shadow-sm">
             <Construction className="h-4 w-4" />
             Neural Models Currently training
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
             <div className="bg-zinc-50 border border-zinc-100 p-6 rounded-3xl text-left">
                <BrainCircuit className="h-6 w-6 text-sky-500 mb-4" />
                <p className="text-[9px] font-black uppercase text-zinc-400 mb-1">Status</p>
                <p className="text-sm font-black italic">Syncing Dataset...</p>
             </div>
             <div className="bg-zinc-50 border border-zinc-100 p-6 rounded-3xl text-left">
                <TrendingUp className="h-6 w-6 text-emerald-500 mb-4" />
                <p className="text-[9px] font-black uppercase text-zinc-400 mb-1">Optimization</p>
                <p className="text-sm font-black italic">Active</p>
             </div>
          </div>

          <Button className="h-14 gap-4 rounded-2xl bg-sky-600 px-10 text-xs font-black uppercase tracking-widest text-white shadow-2xl shadow-sky-600/30 hover:bg-sky-700 transition-all hover:scale-105 active:scale-95 group">
             Explore Feature Roadmap
             <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
       </div>
    </div>
  );
}
