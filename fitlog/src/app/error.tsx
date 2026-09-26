"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({
  error,
  reset,
}: ErrorPageProps) => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-5">
      <div className="max-w-lg text-center">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-red-400">
          Something went wrong
        </p>

        <h1 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase md:text-5xl">
          Workout Library Failed
        </h1>

        <p className="mt-4 text-sm leading-6 text-white/40">
          We couldnt load the workout library right now.
          Please try again.
        </p>

        {process.env.NODE_ENV === "development" && (
          <p className="mt-4 break-words text-xs text-red-300/60">
            {error.message}
          </p>
        )}

        <button
          type="button"
          onClick={() => reset()}
          className="mt-7 bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
        >
          Try Again
        </button>
      </div>
    </main>
  );
};

export default ErrorPage;