"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useFitLog } from "../context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  const isWorkoutActive =
    pathname === "/" || pathname.startsWith("/workouts");

  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="border-b border-white/10 bg-[#090909]">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 md:gap-6 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="FitLog logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8 object-contain"
          />

          <span className="font-[var(--font-oswald)] text-lg font-bold tracking-wide text-white sm:text-xl">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
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
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="/my-plan"
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#ccff00] px-2.5 py-1.5 text-[10px] font-black uppercase text-black sm:gap-2 sm:px-3 sm:text-xs"
          >
            <span>Plan</span>
            <span>{plan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/30 px-2.5 py-1.5 text-[10px] font-black uppercase text-white sm:gap-2 sm:px-3 sm:text-xs"
          >
            <span>Saved</span>
            <span>{saved.length}</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-white/5 md:hidden">
        <nav className="mx-auto flex max-w-7xl px-4 sm:px-5">
          <Link
            href="/"
            className={`flex-1 py-3 text-center text-[10px] font-black uppercase tracking-wider transition ${
              isWorkoutActive
                ? "text-[#ccff00]"
                : "text-white/40 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`flex-1 py-3 text-center text-[10px] font-black uppercase tracking-wider transition ${
              isPlanActive
                ? "text-[#ccff00]"
                : "text-white/40 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;