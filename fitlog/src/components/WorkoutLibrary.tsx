"use client";

import { useState } from "react";

import WorkoutCard from "./WorkoutCard";
import { Workout } from "../types/workout";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

type SortOption = "duration" | "calories" | "rating";

const WorkoutLibrary = ({
  workouts,
}: WorkoutLibraryProps) => {
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <section
      id="library"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8"
    >
      {/* Section Heading + Sort */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            WORKOUTS
          </p>

          <h2 className="mt-3 font-[var(--font-oswald)] text-5xl font-bold uppercase md:text-6xl">
            The Library
          </h2>

          <p className="mt-4 text-sm text-white/50 sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <label
            htmlFor="workout-sort"
            className="text-xs font-bold uppercase tracking-wider text-white/40"
          >
            Sort By
          </label>

          <select
            id="workout-sort"
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value as SortOption
              )
            }
            className="border border-white/15 bg-[#111111] px-4 py-3 text-xs font-bold uppercase tracking-wide text-white outline-none transition focus:border-[#ccff00]"
          >
            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>
          </select>
        </div>
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;