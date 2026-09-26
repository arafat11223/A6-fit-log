const Loading = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-5">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

        <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-white/50">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;