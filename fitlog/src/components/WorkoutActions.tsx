"use client";

import { useFitLog } from "../context/FitLogContext";
import { Workout } from "../types/workout";
import toast from "react-hot-toast";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      toast("Workout is already in today's plan");
      return;
    }

    addToPlan(workout);

    toast.success("Added to today's plan");
  };

  const handleSaveWorkout = () => {
    if (alreadySaved) {
      toast("Workout is already saved");
      return;
    }

    saveWorkout(workout);

    toast.success("Workout saved for later");
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {/* Add to Plan */}
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={alreadyInPlan}
        className={`px-6 py-3 text-xs font-black uppercase tracking-wide transition ${
          alreadyInPlan
            ? "cursor-not-allowed bg-white/10 text-white/40"
            : "bg-[#ccff00] text-black hover:bg-[#d8ff33]"
        }`}
      >
        {alreadyInPlan
          ? "Already in Today's Plan"
          : "Add to Today's Plan"}
      </button>

      {/* Save */}
      <button
        type="button"
        onClick={handleSaveWorkout}
        disabled={alreadySaved}
        className={`border px-6 py-3 text-xs font-black uppercase tracking-wide transition ${
          alreadySaved
            ? "cursor-not-allowed border-white/10 text-white/30"
            : "border-white/20 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
        }`}
      >
        {alreadySaved ? "Saved" : "Save for Later"}
      </button>
    </div>
  );
};

export default WorkoutActions;