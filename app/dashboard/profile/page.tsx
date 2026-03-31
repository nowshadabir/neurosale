"use client";

import { useState, useRef, useEffect } from "react";
import {
  User,
  Mail,
  Building,
  Shield,
  Calendar,
  Clock,
  Edit,
  Camera,
  MapPin,
  Globe,
  Settings,
  ChevronDown,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBusiness } from "@/context/business-context";

type BusinessCategory =
  | "Car Servicing"
  | "Restaurant & Cafe"
  | "Super Shop / Retail"
  | "Salon & Beauty"
  | "Library";

export default function ProfilePage() {
  const { category, setCategory } = useBusiness();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  const categories: BusinessCategory[] = [
    "Car Servicing",
    "Restaurant & Cafe",
    "Super Shop / Retail",
    "Salon & Beauty",
    "Library",
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-10">
      <header className="flex items-end justify-between animate-in fade-in slide-in-from-top-4 duration-500 ease-out fill-mode-both">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Account Profile</h1>
          <p className="mt-2 text-zinc-500">Manage your personal information and account preferences.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 rounded-xl bg-white shadow-sm transition-all duration-300 hover:bg-zinc-50 hover:shadow-md">
            Cancel Changes
          </Button>
          <Button className="h-10 gap-2 rounded-xl bg-sky-600 px-5 text-white shadow-md shadow-sky-600/20 transition-all duration-300 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/30">
            <Plus className="hidden h-4 w-4 md:block" />
            Save Changes
          </Button>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Left Column: Form Sections */}
        <div className="space-y-8">
          {/* Profile Header Card */}
          <section className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-sm animate-in fade-in slide-in-from-left-6 duration-700 delay-150 ease-out fill-mode-both">
            <div className="h-32 bg-[linear-gradient(135deg,#0c4a6e_0%,#075985_100%)] opacity-90 transition-all duration-700 hover:opacity-100" />
            <div className="px-8 pb-8">
              <div className="relative -mt-12 flex items-end gap-6">
                <div className="group relative">
                  <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-zinc-50 shadow-lg ring-1 ring-zinc-200 transition-transform duration-500 group-hover:scale-105">
                    <User className="h-16 w-16 text-zinc-300 transition-colors duration-500 group-hover:text-sky-600/40" />
                  </div>
                  <button className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-xl bg-white text-zinc-600 shadow-md ring-1 ring-zinc-200 transition-all duration-300 hover:bg-sky-600 hover:text-white hover:scale-110">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <div className="mb-2">
                  <h2 className="text-2xl font-bold text-zinc-900">Nowshad Abir</h2>
                  <p className="flex items-center gap-2 text-sm text-zinc-500">
                    <Shield className="h-3.5 w-3.5 text-sky-600 animate-pulse" />
                    Enterprise Administrator
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Form Fields */}
          <section className="rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm animate-in fade-in slide-in-from-left-6 duration-700 delay-300 ease-out fill-mode-both">
            <div className="mb-8 flex items-center gap-2 border-b border-zinc-100 pb-4">
              <User className="h-5 w-5 text-sky-600" />
              <h3 className="text-lg font-bold text-zinc-900">Personal Information</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-zinc-400">First Name</Label>
                <Input id="firstName" defaultValue="Nowshad" className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all duration-300 focus:bg-white focus:shadow-md focus:shadow-sky-500/5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Last Name</Label>
                <Input id="lastName" defaultValue="Abir" className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all duration-300 focus:bg-white focus:shadow-md focus:shadow-sky-500/5" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Work Email</Label>
                <div className="relative group">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-sky-600" />
                  <Input id="email" defaultValue="nowshad@neurosale.ai" className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 pl-11 transition-all duration-300 focus:bg-white focus:shadow-md focus:shadow-sky-500/5" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone Number</Label>
                <Input id="phone" defaultValue="+880 1700-000000" className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all duration-300 focus:bg-white focus:shadow-md focus:shadow-sky-500/5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Location</Label>
                <div className="relative group">
                  <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-sky-600" />
                  <Input id="location" defaultValue="Dhaka, Bangladesh" className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 pl-11 transition-all duration-300 focus:bg-white focus:shadow-md focus:shadow-sky-500/5" />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm animate-in fade-in slide-in-from-left-6 duration-700 delay-500 ease-out fill-mode-both">
            <div className="mb-8 flex items-center gap-2 border-b border-zinc-100 pb-4">
              <Building className="h-5 w-5 text-sky-600" />
              <h3 className="text-lg font-bold text-zinc-900">Organization Details</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Company Name</Label>
                <Input id="companyName" defaultValue="Neurosale AI" className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all duration-300 focus:bg-white focus:shadow-md focus:shadow-sky-500/5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Business Category</Label>
                <div className="relative" ref={categoryRef}>
                  <button
                    id="category"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="flex h-11 w-full items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 text-sm text-zinc-700 outline-none transition-all duration-300 hover:border-zinc-300 focus:bg-white focus:ring-2 focus:ring-sky-600/20 focus:shadow-md"
                  >
                    <span>{category}</span>
                    <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isCategoryOpen && (
                    <div className="absolute bottom-full z-50 mb-2 w-full animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-zinc-200 bg-white/95 p-2 shadow-xl shadow-zinc-200/50 backdrop-blur-xl duration-300 ease-out fill-mode-both">
                      <div className="space-y-0.5">
                        {categories.map((cat, i) => (
                          <button
                            key={cat}
                            onClick={() => {
                              setCategory(cat as BusinessCategory);
                              setIsCategoryOpen(false);
                            }}
                            className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 animate-in fade-in slide-in-from-bottom-2 fill-mode-both ${
                              category === cat
                                ? "bg-sky-50 text-sky-700"
                                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                            }`}
                            style={{ animationDelay: `${i * 40}ms` }}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Meta Info */}
        <aside className="space-y-6">
          <Card className="border-0 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_100%)] shadow-sm ring-1 ring-zinc-200/80 animate-in fade-in slide-in-from-right-6 duration-700 delay-300 ease-out fill-mode-both hover:shadow-lg transition-all duration-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-sky-700">Account Meta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { icon: Calendar, label: "Created On", value: "Jan 12, 2024" },
                { icon: Clock, label: "Last Active", value: "Just now" },
                { icon: Shield, label: "Security Status", value: "Two-Factor Active", color: "emerald" },
              ].map((item, i) => (
                <div key={item.label} className="flex gap-4 animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style={{ animationDelay: `${500 + i * 100}ms` }}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">{item.label}</p>
                    <p className={`mt-1 text-sm font-semibold ${item.color === 'emerald' ? 'text-emerald-600' : 'text-zinc-900'}`}>{item.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-zinc-200/80 bg-zinc-900 text-white shadow-xl shadow-zinc-200/20 animate-in fade-in slide-in-from-right-6 duration-700 delay-500 ease-out fill-mode-both">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20 animate-pulse">
                  <Settings className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">System Preferences</h4>
                  <p className="text-xs text-zinc-400">Configure your app experience</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button className="group flex w-full items-center justify-between rounded-xl bg-white/5 py-2 px-3 text-xs text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:translate-x-1">
                  Enable Dark Mode
                  <div className="h-4 w-8 rounded-full bg-zinc-700 p-0.5 transition-colors group-hover:bg-zinc-600">
                    <div className="h-3 w-3 rounded-full bg-zinc-400" />
                  </div>
                </button>
                <button className="group flex w-full items-center justify-between rounded-xl bg-white/5 py-2 px-3 text-xs text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:translate-x-1">
                  Desktop Notifications
                  <div className="h-4 w-8 rounded-full bg-sky-600 p-0.5 transition-colors group-hover:bg-sky-500">
                    <div className="ml-auto h-3 w-3 rounded-full bg-white" />
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
