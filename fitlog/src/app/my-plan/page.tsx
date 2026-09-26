"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

import { useFitLog } from "../../context/FitLogContext";
import { Workout } from "../../types/workout";

type Tab = "plan" | "saved";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<Tab>("plan");

  const currentWorkouts =
    activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleRemove = (workout: Workout) => {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);
      toast.success("Removed from today's plan");
    } else {
      removeFromSaved(workout.id);
      toast.success("Removed from saved");
    }
  };

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            YOUR WORKOUT LOG
          </p>

          <h1 className="mt-3 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-none md:text-7xl">
            My Plan
          </h1>

          <p className="mt-5 text-sm leading-7 text-white/50 md:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <MetricCard
            label="Exercises"
            value={plan.length}
          />

          <MetricCard
            label="Minutes"
            value={totalMinutes}
          />

          <MetricCard
            label="Calories"
            value={totalCalories}
          />

        </div>

        {/* Tabs */}
        <div className="mt-12 flex border-b border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-4 text-xs font-black uppercase tracking-wider transition ${
              activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-white/40 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-4 text-xs font-black uppercase tracking-wider transition ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-white/40 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Loading / List / Empty */}
        <div className="mt-8">

          {currentWorkouts.length === 0 ? (
            <EmptyState activeTab={activeTab} />
          ) : (
            <div className="space-y-4">
              {currentWorkouts.map((workout) => (
                <WorkoutPlanCard
                  key={workout.id}
                  workout={workout}
                  activeTab={activeTab}
                  onRemove={() => handleRemove(workout)}
                />
              ))}
            </div>
          )}

        </div>

      </section>
    </main>
  );
};

interface MetricCardProps {
  label: string;
  value: number;
}

const MetricCard = ({
  label,
  value,
}: MetricCardProps) => {
  return (
    <div className="border border-white/10 bg-white/[0.02] p-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
        {label}
      </p>

      <p className="mt-3 font-[var(--font-oswald)] text-4xl font-bold">
        {value}
      </p>
    </div>
  );
};

interface WorkoutPlanCardProps {
  workout: Workout;
  activeTab: Tab;
  onRemove: () => void;
}

const WorkoutPlanCard = ({
  workout,
  activeTab,
  onRemove,
}: WorkoutPlanCardProps) => {
  return (
    <article className="flex flex-col gap-5 border border-white/10 bg-white/[0.02] p-4 md:flex-row md:items-center">

      {/* Image */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-white/5 md:h-32 md:w-48">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">

        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="text-[9px] font-bold uppercase tracking-wider text-[#ccff00]"
            >
              {group}
            </span>
          ))}
        </div>

        <h2 className="mt-2 font-[var(--font-oswald)] text-2xl font-bold uppercase">
          {workout.name}
        </h2>

        <p className="mt-1 text-xs text-white/40">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap gap-5 text-xs text-white/50">
          <span>◷ {workout.duration} min</span>

          <span>🔥 {workout.caloriesBurned} kcal</span>

          <span>★ {workout.rating}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">

        <Link
          href={`/workouts/${workout.id}`}
          className="border border-white/15 px-4 py-2 text-center text-[10px] font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          View Details
        </Link>

        {activeTab === "plan" && (
          <button
            type="button"
            onClick={() =>
              toast.success(`${workout.name} marked as done`)
            }
            className="bg-[#ccff00] px-4 py-2 text-[10px] font-black uppercase tracking-wide text-black"
          >
            ✓ Mark as Done
          </button>
        )}

        <button
          type="button"
          onClick={onRemove}
          className="border border-red-500/30 px-4 py-2 text-[10px] font-black uppercase tracking-wide text-red-400 transition hover:border-red-400 hover:text-red-300"
        >
          × Remove
        </button>

      </div>
    </article>
  );
};

interface EmptyStateProps {
  activeTab: Tab;
}

const EmptyState = ({
  activeTab,
}: EmptyStateProps) => {
  return (
    <div className="border border-dashed border-white/10 px-6 py-20 text-center">

      <h2 className="font-[var(--font-oswald)] text-3xl font-bold uppercase">
        Nothing Here Yet
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
        {activeTab === "plan"
          ? "Browse the library and add a lift to get today moving."
          : "Save workouts from the library and they will appear here."}
      </p>

      <Link
        href="/#library"
        className="mt-7 inline-block bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
      >
        Go to Workouts
      </Link>

    </div>
  );
};

export default MyPlanPage;