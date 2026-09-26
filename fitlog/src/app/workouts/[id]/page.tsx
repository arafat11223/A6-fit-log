import Image from "next/image";
import Link from "next/link";
import { getWorkoutById } from "../../../lib/api";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        {/* Back Button */}
        <Link
          href="/#library"
          className="mb-8 inline-flex text-xs font-bold uppercase tracking-wider text-white/50 transition hover:text-[#ccff00]"
        >
          ← Back to Library
        </Link>

        {/* Main Details */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="border border-[#ccff00]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ccff00]"
                >
                  {group}
                </span>
              ))}

              <span className="border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60">
                {workout.difficulty}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-5 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-none md:text-6xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-white/55 md:text-base">
              {workout.description}
            </p>

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 border-y border-white/10 md:grid-cols-3">

              <div className="border-b border-white/10 p-4 md:border-r">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                  Equipment
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.equipment}
                </p>
              </div>

              <div className="border-b border-white/10 p-4 md:border-r">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                  Difficulty
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="border-b border-white/10 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                  Sets
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.sets}
                </p>
              </div>

              <div className="p-4 md:border-r">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                  Reps
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.reps}
                </p>
              </div>

              <div className="p-4 md:border-r">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                  Duration
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.duration} min
                </p>
              </div>

              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                  Calories
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.caloriesBurned}
                </p>
              </div>

            </div>

            {/* Rating */}
            <div className="mt-5">
              <span className="text-sm font-bold text-[#ccff00]">
                ★ {workout.rating}
              </span>

              <span className="ml-2 text-xs uppercase tracking-wider text-white/35">
                Rating
              </span>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                className="bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
              >
                Add to Today&apos;s Plan
              </button>

              <button
                type="button"
                className="border border-white/20 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                Save for Later
              </button>

            </div>
          </div>
        </div>

        {/* Instructions */}
        <section className="mt-16 border-t border-white/10 pt-12">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            HOW TO PERFORM
          </p>

          <h2 className="mt-3 font-[var(--font-oswald)] text-4xl font-bold uppercase md:text-5xl">
            Instructions
          </h2>

          <ol className="mt-8 max-w-4xl space-y-5">

            {workout.instructions.map((instruction, index) => (
              <li
                key={index}
                className="flex gap-5 border-b border-white/10 pb-5"
              >
                <span className="font-[var(--font-oswald)] text-2xl font-bold text-[#ccff00]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="pt-1 text-sm leading-7 text-white/60 md:text-base">
                  {instruction}
                </p>
              </li>
            ))}

          </ol>
        </section>
      </section>
    </main>
  );
};

export default WorkoutDetailsPage;