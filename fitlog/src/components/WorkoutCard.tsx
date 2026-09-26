import Image from "next/image";
import Link from "next/link";
import { Workout } from "../types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden border border-white/10 bg-[#0b0b0b] transition hover:border-[#ccff00]/50"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        <span className="absolute right-3 top-3 bg-black/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {workout.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="border border-[#ccff00]/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ccff00]"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="mt-4 font-[var(--font-oswald)] text-2xl font-bold uppercase text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 text-sm text-white/45">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
              Duration
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.duration} min
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
              Calories
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.caloriesBurned}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
              Rating
            </p>
            <p className="mt-1 text-sm font-bold text-[#ccff00]">
              ★ {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;