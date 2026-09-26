const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#050505]">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin border-2 border-white/20 border-t-[#ccff00]" />

        <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-white/50">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;