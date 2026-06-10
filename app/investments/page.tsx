import ROIcalculator from "../../components/ROIcalculator";

export default function InvestmentsPage() {
  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12">
      <div className="site-section-shell px-5 py-8 sm:px-6 sm:py-10 md:px-8">
        <div className="orb orb-ember right-[6%] top-[-1rem] h-32 w-32" />
        <div className="orb orb-teal bottom-[-1rem] left-[12%] h-28 w-28 [animation-delay:2s]" />

        <h1 className="relative z-10 mb-4 text-2xl font-poppins font-bold text-white sm:text-3xl">
          Own an Apartment at Membley Star Heights
        </h1>

        <div className="relative z-10 grid grid-cols-1 gap-8 text-white/90 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-[#ffbf7a]">
              Studio Apartments
            </h2>
            <p className="mb-2">KSh 2,300,000 – 2,400,000</p>

            <h2 className="mt-4 text-xl font-semibold text-[#ffbf7a]">
              One Bedroom
            </h2>
            <p className="mb-2">KSh 4,400,000</p>

            <h3 className="mt-4 font-semibold text-white">Payment Plan</h3>
            <ul className="list-disc pl-6">
              <li>30% Deposit</li>
              <li>Balance over 12 Months</li>
            </ul>

            <h3 className="mt-4 font-semibold text-white">
              Investment Benefits
            </h3>
            <ul className="list-disc pl-6">
              <li>Sectional Title Deeds</li>
              <li>Ready for Occupation</li>
              <li>High Rental Demand</li>
              <li>Strong Capital Appreciation</li>
            </ul>

            <h3 className="mt-4 font-semibold text-white">
              Rental Returns (estimated)
            </h3>
            <p>Studios: KSh 16,000 – 18,000 Monthly</p>
            <p>One Bedroom: KSh 25,000 – 27,000 Monthly</p>
            <p className="mt-2 text-[#ff9f43]">Annual Yield: 9%+</p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#ffbf7a]">
              ROI Calculator
            </h2>
            <ROIcalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
