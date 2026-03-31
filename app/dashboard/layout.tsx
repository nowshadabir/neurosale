import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { BusinessProvider } from "@/context/business-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BusinessProvider>
      <div className="flex min-h-screen bg-[#fcfdfe]">
      <Sidebar />
      <div className="flex-1 pl-64 transition-all duration-500">
        <Topbar />
        <main className="min-h-[calc(100vh-4rem)] w-full px-6 py-6 animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out">
          {children}
        </main>
      </div>
    </div>
    </BusinessProvider>
  );
}
