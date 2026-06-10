export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[#f08a24]/18 bg-[linear-gradient(180deg,rgba(11,8,6,0.97),rgba(20,12,8,0.94))] py-10 text-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="font-poppins text-lg font-bold text-white">
              Zangem BnBs
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#ffc48c] sm:text-sm sm:tracking-[0.22em]">
              Your Home Above the City
            </div>
          </div>

          <div className="mt-6 text-sm text-white/84 md:mt-0">
            <div>Office: Membley Star Heights — 10th Floor, Ruiru</div>
            <div>Phone: +254 798 999000</div>
            <div>Email: info@naiverah.com</div>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/68">
          © {new Date().getFullYear()} Zangem BnBs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
