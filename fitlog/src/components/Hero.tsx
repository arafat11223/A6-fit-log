import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="border-b border-white/10 bg-[#050505]">
            <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 sm:py-14 md:px-8 md:py-16 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:gap-16 lg:py-20">

                {/* Hero Content */}
                <div className="order-1">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#ccff00] sm:mb-5 sm:text-xs md:text-sm">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="max-w-3xl font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
                        Train With Intent.Log
                        <br />
                        Every Set.
                    </h1>

                    <p className="mt-5 max-w-xl text-xs leading-6 text-white/50 sm:mt-7 sm:text-sm sm:leading-7 md:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <Link
                        href="#library"
                        className="mt-6 inline-flex items-center gap-3 bg-[#ccff00] px-5 py-3 text-[11px] font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff33] sm:mt-8 sm:px-6 sm:text-sm"
                    >
                        Browse Workouts

                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                {/* Hero Image */}
                <div className="order-2 flex min-h-[220px] items-center justify-center sm:min-h-[280px] md:min-h-[340px] lg:min-h-[500px]">
                    <Image
                        src="/banner.png"
                        alt="FitLog workout"
                        width={700}
                        height={700}
                        priority
                        className="h-auto w-full max-w-[280px] object-contain sm:max-w-[360px] md:max-w-[450px] lg:max-w-[600px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;