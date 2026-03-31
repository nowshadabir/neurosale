"use client";

import { useBusiness } from "@/context/business-context";
import { CarServicingPartsCatalog } from "@/components/dashboard/industries/car-servicing-parts-catalog";
import { Package, Rocket, Construction, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartsCatalogPage() {
  const { category } = useBusiness();

  const renderCatalogView = () => {
    switch (category) {
      case "Car Servicing":
        return <CarServicingPartsCatalog />;
      default:
        return (
          <div className="flex min-h-[70vh] flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-700 fill-mode-both">
            <div className="relative mb-8">
               <div className="absolute inset-0 animate-ping rounded-full bg-sky-100 opacity-20" />
               <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-sky-50 text-sky-600 shadow-xl shadow-sky-600/10">
                  <Package className="h-12 w-12" />
               </div>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Intelligent Inventory for {category} Coming Soon
            </h2>
            <p className="mt-3 max-w-sm text-zinc-500">
              Engineering the most comprehensive multi-branch SKU and parts repository for the <span className="font-bold text-zinc-900">{category}</span> sector.
            </p>
            <div className="mt-8 flex items-center gap-4">
               <div className="flex h-10 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-600 shadow-sm">
                  <Construction className="h-4 w-4" />
                  Under Development
               </div>
               <Button className="h-10 gap-2 rounded-xl bg-sky-600 px-5 text-white shadow-md shadow-sky-600/20 hover:bg-sky-700">
                  Join Beta List
                  <ArrowRight className="h-4 w-4" />
               </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="py-2 h-full">
      {renderCatalogView()}
    </div>
  );
}
