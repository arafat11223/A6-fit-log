import { Workout } from "../types/workout";

const API_URL =
  "https://api.api-store.workers.dev/api/fitlog";

export const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch workouts. Status: ${response.status}`
    );
  }

  const data: Workout[] = await response.json();

  return data;
};

export const getWorkoutById = async (
  id: string
): Promise<Workout> => {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Workout not found. Status: ${response.status}`
    );
  }

  const data: Workout = await response.json();

  return data;
};