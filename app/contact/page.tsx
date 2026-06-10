import Map from "../../components/Map";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12">
      <div className="site-section-shell px-5 py-8 sm:px-6 sm:py-10 md:px-8">
        <div className="orb orb-ember right-[-2rem] top-[-2rem] h-32 w-32" />
        <div className="orb orb-teal bottom-[-1rem] left-[14%] h-28 w-28 [animation-delay:1.4s]" />

        <h1 className="relative z-10 mb-4 text-2xl font-poppins font-bold text-white sm:text-3xl">
          Contact
        </h1>

        <div className="relative z-10 grid grid-cols-1 gap-8 text-white/90 md:grid-cols-2">
          <div>
            <h2 className="font-semibold text-[#ffbf7a]">Office</h2>
            <p>Membley Star Heights — 10th Floor, Ruiru</p>

            <h2 className="mt-4 font-semibold text-[#ffbf7a]">Phone</h2>
            <p>+254 798 999000</p>

            <h2 className="mt-4 font-semibold text-[#ffbf7a]">Email</h2>
            <p>
              <a
                href="mailto:info@naiverah.com"
                className="text-[#ffbf7a] underline underline-offset-4"
              >
                info@naiverah.com
              </a>
            </p>

            <div className="mt-6">
              <a
                href="https://wa.me/254798999000"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#d97706] px-4 py-3 text-white transition hover:bg-[#c96a04] sm:w-auto sm:py-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-semibold text-[#ffbf7a]">Location</h2>
            <div className="h-64 overflow-hidden rounded-2xl border border-[#f08a24]/18 bg-black/10 sm:h-72">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
