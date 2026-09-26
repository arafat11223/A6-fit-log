import Hero from "../components/Hero";
import WorkoutCard from "../components/WorkoutCard";
import { getWorkouts } from "../lib/api";

const Home = async () => {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

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

        {/* Workout Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;