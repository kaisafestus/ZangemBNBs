export default function AmenitiesGrid() {
  const items = [
    "24/7 Security",
    "CCTV Monitoring",
    "Electric Fence",
    "Biometric Access",
    "Fiber Internet",
    "Borehole Water Supply",
    "County Water Backup",
    "High-Speed Lifts",
    "Ample Parking",
    "Rooftop Terrace",
    "Natural Lighting",
    "Premium Finishes",
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((it, idx) => (
        <div
          key={idx}
          className="flex items-center space-x-3 rounded-xl border border-[#f08a24]/18 bg-[linear-gradient(160deg,rgba(22,13,9,0.96),rgba(40,23,15,0.90))] p-4 text-white/92 shadow-lg shadow-black/12 sm:p-4"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f08a24]/14 text-[#ffbf7a]">
            ✓
          </div>
          <div className="text-sm">{it}</div>
        </div>
      ))}
    </div>
  );
}
