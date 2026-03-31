"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Package,
  CreditCard,
  Settings,
  ShieldCheck,
  Bot,
  Zap,
  ChevronRight,
  CircuitBoard,
  Wrench,
  Car,
  FileText,
  UserCog,
  Utensils,
  Coffee,
  ShoppingCart,
  ChefHat,
  Barcode,
  Search,
  Tag,
  Truck,
  Scissors,
  CalendarDays,
  Sparkles,
  BookOpen,
  PlusCircle,
  ShieldAlert,
  ArrowLeftRight,
  Layers,
  ClipboardCheck,
  History,
  BellRing,
  Calculator,
  Warehouse,
  Receipt,
  Globe,
  Briefcase,
  LineChart,
  Hammer,
  Ticket,
  Menu,
  Trash2,
  Banknote,
  Timer,
  Printer,
  Monitor,
  Scale,
  Stamp,
  Percent,
  Mail,
  Smile,
  Image,
  StickyNote,
  Clock,
  Book,
  Map,
  ShoppingBag,
  Library,
  FlaskConical,
} from "lucide-react";
import { useBusiness } from "@/context/business-context";

export function Sidebar() {
  const { category } = useBusiness();

  const getNavContent = () => {
    switch (category) {
      case "Car Servicing":
        return [
          {
            label: "Dashboard",
            items: [
              { icon: LayoutDashboard, label: "Overview & Analytics", href: "/dashboard" },
              { icon: Bot, label: "AI Service Forecasting", href: "/dashboard/ai" },
            ],
          },
          {
            label: "Job & Service Management",
            items: [
              { icon: PlusCircle, label: "Create Job Card", href: "/dashboard/jobs/new" },
              { icon: Layers, label: "Active Bays", href: "/dashboard/jobs/active" },
              { icon: ClipboardCheck, label: "Quality Check", href: "/dashboard/jobs/quality" },
              { icon: Car, label: "Ready for Delivery", href: "/dashboard/jobs/ready" },
              { icon: History, label: "Job History", href: "/dashboard/jobs/history" },
            ],
          },
          {
            label: "Vehicles",
            items: [
              { icon: Search, label: "Vehicle Directory", href: "/dashboard/vehicles" },
              { icon: BellRing, label: "Service Reminders", href: "/dashboard/reminders" },
            ],
          },
          {
            label: "Inventory (Spare Parts)",
            items: [
              { icon: BookOpen, label: "Parts Catalog", href: "/dashboard/inventory/catalog" },
              { icon: Warehouse, label: "Stock Levels", href: "/dashboard/inventory/stock" },
              { icon: ArrowLeftRight, label: "Branch Transfers", href: "/dashboard/inventory/transfers" },
              { icon: ShieldAlert, label: "Reorder Alerts", href: "/dashboard/inventory/alerts" },
            ],
          },
          {
            label: "Commercial",
            items: [
              { icon: Hammer, label: "Service Packages", href: "/dashboard/services/packages" },
              { icon: Users, label: "Corporate Fleet", href: "/dashboard/customers/fleet" },
              { icon: Receipt, label: "Generate Invoice", href: "/dashboard/sales/invoice" },
              { icon: FileText, label: "Quotations", href: "/dashboard/sales/quote" },
            ],
          },
          {
            label: "Staff & Reports",
            items: [
              { icon: UserCog, label: "Mechanic Roster", href: "/dashboard/staff/roster" },
              { icon: Banknote, label: "Commission", href: "/dashboard/staff/commission" },
              { icon: LineChart, label: "Profit & Loss", href: "/dashboard/reports/pl" },
            ],
          },
        ];
      case "Restaurant & Cafe":
        return [
          {
            label: "Dashboard",
            items: [
              { icon: LayoutDashboard, label: "Live Sales", href: "/dashboard" },
              { icon: Bot, label: "AI Peak Predictions", href: "/dashboard/ai" },
            ],
          },
          {
            label: "POS & Kitchen",
            items: [
              { icon: Monitor, label: "POS Terminal", href: "/dashboard/pos" },
              { icon: Map, label: "Floor Map", href: "/dashboard/floor" },
              { icon: ChefHat, label: "KDS (Kitchen)", href: "/dashboard/kitchen" },
              { icon: Ticket, label: "Ready View", href: "/dashboard/ready" },
            ],
          },
          {
            label: "Menu & Inventory",
            items: [
              { icon: Menu, label: "Menu Items", href: "/dashboard/menu" },
              { icon: Utensils, label: "Recipe Mapping", href: "/dashboard/recipes" },
              { icon: Package, label: "Raw Materials", href: "/dashboard/inventory" },
              { icon: Trash2, label: "Wastage Log", href: "/dashboard/wastage" },
            ],
          },
          {
            label: "Business Control",
            items: [
              { icon: Banknote, label: "Petty Cash", href: "/dashboard/cash" },
              { icon: Timer, label: "Shift Register", href: "/dashboard/shifts" },
              { icon: ShoppingCart, label: "Vendors", href: "/dashboard/vendors" },
              { icon: LineChart, label: "Food Cost Analysis", href: "/dashboard/reports" },
            ],
          },
        ];
      case "Super Shop / Retail":
        return [
          {
            label: "Dashboard",
            items: [
              { icon: LayoutDashboard, label: "Daily Sales", href: "/dashboard" },
              { icon: Bot, label: "AI Depletion Alerts", href: "/dashboard/ai" },
            ],
          },
          {
            label: "POS Operations",
            items: [
              { icon: Barcode, label: "High-Speed Scan", href: "/dashboard/pos" },
              { icon: Scale, label: "Weighing Scale", href: "/dashboard/pos/scale" },
              { icon: History, label: "Hold / Suspend", href: "/dashboard/pos/hold" },
            ],
          },
          {
            label: "Product Master",
            items: [
              { icon: Package, label: "Product List", href: "/dashboard/products" },
              { icon: Layers, label: "Unit Management", href: "/dashboard/units" },
              { icon: Printer, label: "Barcode Labels", href: "/dashboard/barcodes" },
            ],
          },
          {
            label: "Inventory & Purchases",
            items: [
              { icon: Warehouse, label: "Current Stock", href: "/dashboard/inventory" },
              { icon: ClipboardCheck, label: "Physical Count", href: "/dashboard/audit" },
              { icon: Truck, label: "Suppliers", href: "/dashboard/suppliers" },
              { icon: ArrowLeftRight, label: "Inter-Branch", href: "/dashboard/transfers" },
            ],
          },
          {
            label: "Marketing",
            items: [
              { icon: Percent, label: "Discount Engine", href: "/dashboard/marketing/discounts" },
              { icon: Tag, label: "Coupon Codes", href: "/dashboard/marketing/coupons" },
              { icon: Users, label: "Members", href: "/dashboard/customers/members" },
            ],
          },
        ];
      case "Salon & Beauty":
        return [
          {
            label: "Dashboard",
            items: [
              { icon: LayoutDashboard, label: "Daily Bookings", href: "/dashboard" },
              { icon: Bot, label: "Revenue Analytics", href: "/dashboard/ai" },
            ],
          },
          {
            label: "Scheduling",
            items: [
              { icon: CalendarDays, label: "Appointment Calendar", href: "/dashboard/calendar" },
              { icon: Timer, label: "Walk-in Queue", href: "/dashboard/queue" },
              { icon: Mail, label: "Booking Approvals", href: "/dashboard/bookings" },
            ],
          },
          {
            label: "Service & Inventory",
            items: [
              { icon: Scissors, label: "Service Catalog", href: "/dashboard/services" },
              { icon: Sparkles, label: "Memberships", href: "/dashboard/memberships" },
              { icon: ShoppingBag, label: "Retail Stock", href: "/dashboard/retail" },
              { icon: FlaskConical, label: "Internal Usage", href: "/dashboard/internal" },
            ],
          },
          {
            label: "Professional",
            items: [
              { icon: Image, label: "Treatment History", href: "/dashboard/clients/history" },
              { icon: StickyNote, label: "Client Notes", href: "/dashboard/clients/notes" },
              { icon: UserCog, label: "Stylist Roster", href: "/dashboard/staff" },
              { icon: Banknote, label: "Tip Ledger", href: "/dashboard/tips" },
            ],
          },
        ];
      case "Library":
        return [
          {
            label: "Dashboard",
            items: [
              { icon: LayoutDashboard, label: "Library Insights", href: "/dashboard" },
              { icon: Bot, label: "Popular Books AI", href: "/dashboard/ai" },
            ],
          },
          {
            label: "Circulation",
            items: [
              { icon: BookOpen, label: "Books Catalog", href: "/dashboard/books" },
              { icon: ArrowLeftRight, label: "Check In / Out", href: "/dashboard/circulation" },
              { icon: Timer, label: "Overdue Items", href: "/dashboard/overdue" },
              { icon: CalendarDays, label: "Reservations", href: "/dashboard/reservations" },
            ],
          },
          {
            label: "Members",
            items: [
              { icon: Users, label: "Member Directory", href: "/dashboard/members" },
              { icon: PlusCircle, label: "New Registration", href: "/dashboard/members/new" },
              { icon: CreditCard, label: "Fine Payments", href: "/dashboard/fines" },
            ],
          },
          {
            label: "Inventory",
            items: [
              { icon: Book, label: "Shelving Units", href: "/dashboard/shelves" },
              { icon: Search, label: "Acquisitions", href: "/dashboard/acquisitions" },
              { icon: Tag, label: "Genre Tags", href: "/dashboard/genres" },
            ],
          },
        ];
      default:
        return [];
    }
  };

  const navSections = [
    ...getNavContent(),
    {
      label: "System Management",
      items: [
        { icon: Warehouse, label: "Business Units", href: "/dashboard/branches" },
        { icon: ShieldCheck, label: "Admin & Security", href: "/dashboard/admin" },
        { icon: Settings, label: "Core Settings", href: "/dashboard/settings" },
      ],
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-200 bg-white/80 backdrop-blur-xl transition-all duration-500">
      <div className="flex h-16 items-center border-b border-zinc-200 px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white shadow-lg shadow-sky-600/20">
            <CircuitBoard className="h-5 w-5" />
          </div>
          <span className="text-base font-bold tracking-tight text-zinc-900">Neurosale POS</span>
        </div>
      </div>

      <div className="flex h-[calc(100vh-4rem)] flex-col justify-between overflow-y-auto px-4 py-6">
        <div className="space-y-6">
          {navSections.map((section, sectionIdx) => (
            <div
              key={section.label}
              className="animate-in fade-in slide-in-from-left-4 duration-500 ease-out fill-mode-both"
              style={{ animationDelay: `${sectionIdx * 50}ms` }}
            >
              <p className="mb-2 px-2 text-[0.625rem] font-bold tracking-[0.14em] text-zinc-400 uppercase">
                {section.label}
              </p>
              <nav className="space-y-0.5">
                {section.items.map((item, i) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-600 transition-all duration-300 hover:bg-sky-50 hover:text-sky-700 hover:translate-x-1"
                  >
                    <div className="relative">
                      <item.icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110 group-hover:text-sky-600" />
                      {item.label === "AI Service Forecasting" && (
                        <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
                        </span>
                      )}
                    </div>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-2 text-sky-700">
              <Zap className="h-4 w-4 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">Enterprise Plan</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-sky-600/80">
              Active profile: <span className="font-bold text-sky-700">{category}</span>
            </p>
            <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-sky-600 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/20">
              Manage Billing
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
