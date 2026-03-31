"use client";

import { useBusiness } from "@/context/business-context";
import { Construction, ArrowLeft, Rocket, Layers, Hammer, ShieldAlert, Sparkles, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

export default function CatchAllDashboardPage() {
  const { category } = useBusiness();
  const params = useParams();
  const router = useRouter();
  
  const path = Array.isArray(params.slug) ? params.slug.join(' / ') : params.slug;

  return (
    <div className="flex h-[calc(100vh-120px)] -mx-6 -mt-6 bg-zinc-50 overflow-hidden text-zinc-900 font-brand-sans selection:bg-sky-100 animate-in fade-in zoom-in-95 duration-1000 fill-mode-both items-center justify-center">
       <div className="text-center space-y-12 max-w-lg p-12 bg-white rounded-[3rem] shadow-2xl shadow-zinc-900/10 border border-zinc-100 relative group overflow-hidden">
          
          <div className="absolute top-0 right-0 p-32 bg-sky-500 opacity-[0.03] rounded-full blur-3xl -mr-24 -mt-24 group-hover:opacity-10 transition-opacity" />
          
          <div className="relative mb-8">
             <div className="flex h-24 w-24 mx-auto items-center justify-center rounded-3xl bg-zinc-900 text-white shadow-2xl shadow-zinc-950/20 relative">
                <Construction className="h-10 w-10 animate-bounce" />
             </div>
             <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center shadow-lg border-2 border-white">
                <Hammer className="h-4 w-4" />
             </div>
          </div>

          <div className="space-y-4">
             <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Engineering This Module</h2>
             <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest max-w-[280px] mx-auto italic leading-relaxed">
                Currently building the {path} workflow for the high-end <span className="text-zinc-600 underline decoration-sky-500/50 decoration-wavy">{category}</span> sector.
             </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-zinc-50/50 rounded-2xl border border-zinc-100 text-left">
                <ShieldAlert className="h-4 w-4 text-rose-500 mb-2" />
                <p className="text-[8px] font-black uppercase text-zinc-400">Security Gate</p>
                <p className="text-[10px] font-bold text-zinc-800">Operational Block</p>
             </div>
             <div className="p-4 bg-zinc-50/50 rounded-2xl border border-zinc-100 text-left">
                <Layers className="h-4 w-4 text-emerald-500 mb-2" />
                <p className="text-[8px] font-black uppercase text-zinc-400">Architecture</p>
                <p className="text-[10px] font-bold text-zinc-800 italic">V4-Alpha Ready</p>
             </div>
          </div>

          <div className="pt-4 flex flex-col gap-3">
             <Button 
                onClick={() => router.back()}
                variant="outline" 
                className="h-14 rounded-2xl border-zinc-200 text-xs font-black uppercase tracking-widest gap-2 hover:bg-zinc-50 group"
             >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Return to Safety
             </Button>
             <Button className="h-14 bg-zinc-900 text-white rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-black transition-all">
                Request Early Access
             </Button>
          </div>
          
          <div className="pt-8 flex items-center justify-center gap-4 text-zinc-200">
             <Sparkles className="h-5 w-5" />
             <div className="h-px w-12 bg-zinc-100" />
             <Rocket className="h-5 w-5" />
             <div className="h-px w-12 bg-zinc-100" />
             <BrainCircuit className="h-5 w-5" />
          </div>

       </div>
    </div>
  );
}
