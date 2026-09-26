"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Workout } from "../types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  completed: number[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
  isCompleted: (id: number) => boolean;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export const FitLogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [completed, setCompleted] = useState<number[]>([]);

  const [isHydrated, setIsHydrated] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const loadStoredData = () => {
      try {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");
        const storedCompleted = localStorage.getItem("fitlog-completed");

        const parsedPlan: Workout[] = storedPlan
          ? JSON.parse(storedPlan)
          : [];

        const parsedSaved: Workout[] = storedSaved
          ? JSON.parse(storedSaved)
          : [];

        const parsedCompleted: number[] = storedCompleted
          ? JSON.parse(storedCompleted)
          : [];

        setPlan(parsedPlan);
        setSaved(parsedSaved);
        setCompleted(parsedCompleted);
      } catch (error) {
        console.error("Failed to load FitLog data:", error);
      } finally {
        setIsHydrated(true);
      }
    };

    loadStoredData();
  }, []);

  // Save plan
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, isHydrated]);

  // Save saved workouts
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, isHydrated]);

  // Save completed workouts
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(completed)
    );
  }, [completed, isHydrated]);

  const addToPlan = (workout: Workout) => {
    setPlan((currentPlan) => {
      if (currentPlan.length >= 5) {
        return currentPlan;
      }

      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );

    // If removed from plan, also remove completed status
    setCompleted((currentCompleted) =>
      currentCompleted.filter((completedId) => completedId !== id)
    );
  };

  const saveWorkout = (workout: Workout) => {
    setSaved((currentSaved) => {
      if (currentSaved.some((item) => item.id === workout.id)) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  const removeFromSaved = (id: number) => {
    setSaved((currentSaved) =>
      currentSaved.filter((workout) => workout.id !== id)
    );
  };

  const markAsDone = (id: number) => {
    setCompleted((currentCompleted) => {
      if (currentCompleted.includes(id)) {
        return currentCompleted;
      }

      return [...currentCompleted, id];
    });
  };

  const isCompleted = (id: number) => {
    return completed.includes(id);
  };

  const isInPlan = (id: number) => {
    return plan.some((workout) => workout.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((workout) => workout.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        completed,

        addToPlan,
        removeFromPlan,

        saveWorkout,
        removeFromSaved,

        markAsDone,
        isCompleted,

        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
};