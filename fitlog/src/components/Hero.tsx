import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="border-b border-white/10 bg-[#050505]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* Hero Content */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00] md:text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
          >
            Browse Workouts

            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative flex min-h-[320px] items-center justify-center lg:min-h-[500px]">
          <Image
            src="/banner.png"
            alt="FitLog workout"
            width={700}
            height={700}
            priority
            className="h-auto w-full max-w-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;