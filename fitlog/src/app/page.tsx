import Hero from "../components/Hero";
import WorkoutLibrary from "../components/WorkoutLibrary";
import { getWorkouts } from "../lib/api";

const Home = async () => {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <WorkoutLibrary workouts={workouts} />
    </main>
  );
};

export default Home;