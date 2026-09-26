import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="max-w-xl text-center">
        <p className="font-[var(--font-oswald)] text-8xl font-bold text-[#ccff00] md:text-9xl">
          404
        </p>

        <h1 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase md:text-5xl">
          Workout Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/40">
          The page you are looking for doesnt exist.
          Lets get you back to the workout library.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-[#ccff00] px-7 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
        >
          Back to Library
        </Link>
      </div>
    </main>
  );
};

export default NotFound;