"use client";

import { useBusiness } from "@/context/business-context";
import { CheckCircle2, LayoutGrid, Construction, ArrowRight, Truck, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReadyPage() {
  const { category } = useBusiness();

  const renderReadyView = () => {
    switch (category) {
      case "Restaurant & Cafe":
        return (
          <div className="flex h-[calc(100vh-120px)] -mx-6 -mt-6 bg-zinc-50 overflow-hidden text-zinc-900 font-brand-sans selection:bg-sky-100 animate-in fade-in duration-700 fill-mode-both items-center justify-center">
             <div className="text-center space-y-6 max-w-sm">
                <div className="flex h-24 w-24 mx-auto items-center justify-center rounded-3xl bg-sky-50 text-sky-600 shadow-xl shadow-sky-600/10 relative">
                   <div className="absolute inset-0 animate-ping rounded-full bg-sky-100 opacity-20" />
                   <Package className="h-12 w-12" />
                </div>
                <div>
                   <h2 className="text-2xl font-black uppercase tracking-tighter text-zinc-900">Live "Ready" Queue Coming Soon</h2>
                   <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-2">Expeditor & Guest Ready View for {category}</p>
                </div>
                <div className="pt-8 space-y-3">
                   <Button className="w-full h-14 rounded-2xl bg-zinc-900 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-zinc-900/10">
                      View Feature Roadmap
                   </Button>
                </div>
             </div>
          </div>
        );
      default:
        // Already handled by Car Servicing at /dashboard/jobs/ready? 
        // No, this is /dashboard/ready.
        return (
          <div className="flex min-h-[70vh] flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-700 fill-mode-both">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Operational "Ready" View for {category} Coming Soon
            </h2>
          </div>
        );
    }
  };

  return (
    <div className="h-full">
      {renderReadyView()}
    </div>
  );
}
