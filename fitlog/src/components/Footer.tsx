const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto flex min-h-28 max-w-7xl flex-col items-start justify-between gap-6 px-5 py-7 md:flex-row md:items-center md:px-8">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center bg-[#ccff00] text-sm font-black text-black">
            FL
          </span>

          <span className="text-lg font-black tracking-tight text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs uppercase tracking-wide text-white/40">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;