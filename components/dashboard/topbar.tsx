"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Bell,
  Search,
  User,
  LifeBuoy,
  LogOut,
  Settings,
  CreditCard,
  ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Topbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-zinc-200 bg-white/80 px-8 backdrop-blur-xl">
      <div className="flex w-full max-w-md items-center gap-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <Input
            type="search"
            placeholder="Search leads, branches, orders..."
            className="h-10 w-full rounded-xl border-zinc-200 bg-zinc-50 pl-10 text-sm focus-visible:ring-sky-600/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="relative text-zinc-500 hover:text-zinc-900"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 flex h-2 w-2 rounded-full bg-sky-600 ring-2 ring-white"></span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-500 hover:text-zinc-900"
        >
          <LifeBuoy className="h-5 w-5" />
        </Button>

        <div className="mx-2 h-6 w-px bg-zinc-200" />

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 rounded-xl p-1.5 transition-all hover:bg-zinc-50"
          >
            <div className="hidden flex-col items-end text-sm md:flex">
              <span className="font-semibold text-zinc-900 leading-tight">Nowshad Abir</span>
              <span className="text-[0.625rem] font-bold uppercase tracking-wider text-sky-700">
                Enterprise Admin
              </span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
              <User className="h-6 w-6 text-zinc-400" />
            </div>
            <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 animate-in fade-in slide-in-from-top-2 rounded-2xl border border-zinc-200 bg-white/95 p-2 shadow-xl shadow-zinc-200/50 backdrop-blur-xl duration-200">
              <div className="px-3 py-2">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-400">Account Control</p>
              </div>
              <div className="space-y-0.5">
                <Link
                  href="/dashboard/profile"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-600 transition-all hover:bg-sky-50 hover:text-sky-700"
                >
                  <User className="h-4.5 w-4.5" />
                  My Profile
                </Link>
                <Link
                  href="/dashboard/settings"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-600 transition-all hover:bg-sky-50 hover:text-sky-700"
                >
                  <Settings className="h-4.5 w-4.5" />
                  Security Settings
                </Link>
                <Link
                  href="/dashboard/billing"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-600 transition-all hover:bg-sky-50 hover:text-sky-700"
                >
                  <CreditCard className="h-4.5 w-4.5" />
                  Billing & Plans
                </Link>
              </div>
              <div className="my-2 h-px bg-zinc-100" />
              <button
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition-all hover:bg-red-50"
                onClick={() => setIsDropdownOpen(false)}
              >
                <LogOut className="h-4.5 w-4.5" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
