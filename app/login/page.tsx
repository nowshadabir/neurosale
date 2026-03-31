"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, KeyRound } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setLoginSuccess(true);

    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_10%_5%,rgba(2,132,199,0.16),transparent_32%),radial-gradient(circle_at_90%_0%,rgba(14,165,233,0.14),transparent_28%),linear-gradient(180deg,#f4fbff_0%,#ffffff_58%)]">
      <div className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-6 px-6 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-10">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase">
            <Building2 className="size-3.5" />
            Neurosale POS Access
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Login to access your
              <span className="block text-sky-700">/pos workspace</span>
            </h1>
            <p className="max-w-xl text-zinc-600">
              Secure sign-in for operators, managers, and branch teams.
              Continue to your POS dashboard seamlessly.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white/80 p-4">
              <p className="text-sm font-medium text-zinc-900">99.99% uptime</p>
              <p className="mt-1 text-xs text-zinc-600">Always-on branch operations</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white/80 p-4">
              <p className="text-sm font-medium text-zinc-900">24/7 support</p>
              <p className="mt-1 text-xs text-zinc-600">Human help when you need it</p>
            </div>
          </div>
        </section>

        <Card className="border-zinc-200/90 bg-white/90 shadow-xl shadow-sky-100/50">
          <CardHeader className="space-y-2">
            <CardTitle className="flex items-center gap-2 text-2xl text-zinc-900">
              <KeyRound className="size-5 text-sky-700" />
              Sign in
            </CardTitle>
            <p className="text-sm text-zinc-600">
              Enter your business account credentials.
            </p>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="manager@business.com"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-zinc-600">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-zinc-300 accent-sky-700"
                  />
                  Remember me
                </label>
                <Link href="#" className="font-medium text-sky-700 hover:text-sky-800">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-10 w-full gap-2 bg-sky-600 text-white hover:bg-sky-700"
              >
                {isSubmitting ? "Signing in..." : "Continue to /dashboard"}
                <ArrowRight className="size-4" />
              </Button>

              {loginSuccess ? (
                <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                  <CheckCircle2 className="size-4" />
                  Login successful. Redirecting to dashboard...
                </div>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
