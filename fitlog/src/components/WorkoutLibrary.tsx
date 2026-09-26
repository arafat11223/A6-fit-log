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

  const [searchTerm, setSearchTerm] = useState("");

  // Search workouts
  const filteredWorkouts = workouts.filter((workout) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    const matchesName = workout.name
      .toLowerCase()
      .includes(search);

    const matchesEquipment = workout.equipment
      .toLowerCase()
      .includes(search);

    const matchesMuscleGroup = workout.muscleGroups.some(
      (group) =>
        group.toLowerCase().includes(search)
    );

    return (
      matchesName ||
      matchesEquipment ||
      matchesMuscleGroup
    );
  });

  // Sort workouts
  const sortedWorkouts = [...filteredWorkouts].sort(
    (a, b) => {
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
    }
  );

  return (
    <section
      id="library"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8"
    >
      {/* Section Heading */}
      <div className="mb-10">
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

      {/* Search + Sort */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="w-full md:max-w-md">
          <label
            htmlFor="workout-search"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40"
          >
            Search Workouts
          </label>

          <input
            id="workout-search"
            type="text"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Search by name, equipment or muscle..."
            className="w-full border border-white/15 bg-[#111111] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#ccff00]"
          />
        </div>

        {/* Sort */}
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

      {/* Result Count */}
      <div className="mb-5">
        <p className="text-xs uppercase tracking-wider text-white/30">
          Showing {sortedWorkouts.length} of{" "}
          {workouts.length} workouts
        </p>
      </div>

      {/* Empty Search State */}
      {sortedWorkouts.length === 0 ? (
        <div className="border border-dashed border-white/10 px-6 py-20 text-center">
          <h3 className="font-[var(--font-oswald)] text-3xl font-bold uppercase">
            No Workouts Found
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
            Try another workout name, muscle group,
            or equipment.
          </p>

          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="mt-6 bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
          >
            Clear Search
          </button>
        </div>
      ) : (
        /* Workout Grid */
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkoutLibrary;