"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isWorkoutActive =
    pathname === "/" || pathname.startsWith("/workouts");

  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="border-b border-white/10 bg-[#090909]">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center bg-[#ccff00] text-sm font-black text-black">
            FL
          </span>

          <span className="text-xl font-black tracking-tight text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-bold uppercase tracking-wide transition ${
              isWorkoutActive
                ? "bg-[#ccff00] text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`px-4 py-2 text-sm font-bold uppercase tracking-wide transition ${
              isPlanActive
                ? "bg-[#ccff00] text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-black uppercase text-black"
          >
            <span>Plan</span>
            <span>0</span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-xs font-black uppercase text-white"
          >
            <span>Saved</span>
            <span>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;