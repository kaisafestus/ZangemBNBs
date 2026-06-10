import Image from "next/image";
import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import AmenitiesGrid from "../components/AmenitiesGrid";
import ReviewCarousel from "../components/ReviewCarousel";
import Link from "next/link";

export default function HomePage() {
  const studios = [
    {
      id: "studio-1",
      title: "Studio Type 1",
      size: "247 sq ft (23 sqm)",
      price: "$12–$14 Per Night",
      imageSrc: "/images/studio.png",
      imageAlt: "Studio Type 1 apartment interior",
      features: ["Queen bed", "Smart TV", "Kitchenette", "Fast Wi-Fi"],
    },
    {
      id: "studio-2",
      title: "Studio Type 2",
      size: "258 sq ft (24 sqm)",
      price: "$12–$14 Per Night",
      imageSrc: "/images/sitting.png",
      imageAlt: "Studio Type 2 sitting area",
      features: ["Queen bed", "Smart TV", "Kitchenette", "Workspace"],
    },
  ];

  return (
    <div className="pb-6">
      <Hero />

      <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12">
        <div className="site-section-shell px-5 py-8 sm:px-6 sm:py-10 md:px-8">
          <div className="orb orb-ember right-[-2rem] top-[-2rem] h-32 w-32" />
          <div className="orb orb-copper bottom-[-2rem] left-[20%] h-40 w-40 [animation-delay:2s]" />

          <h2 className="relative z-10 mb-4 text-2xl font-poppins font-bold text-white md:text-3xl">
            Featured Studios
          </h2>
          <p className="relative z-10 mb-8 max-w-2xl text-white/86">
            Warm, refined apartment options with premium finishes and a
            professional boutique atmosphere.
          </p>

          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {studios.map((s) => (
              <PropertyCard
                key={s.id}
                title={s.title}
                size={s.size}
                price={s.price}
                imageSrc={s.imageSrc}
                imageAlt={s.imageAlt}
                features={s.features}
              />
            ))}
          </div>
          <div className="relative z-10 mt-6">
            <Link
              href="/properties"
              className="font-semibold text-[#ffd3a8] underline underline-offset-4"
            >
              Explore all apartments
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-2 sm:px-6">
        <div className="site-section-shell px-5 py-8 sm:px-6 sm:py-10 md:px-8">
          <div className="orb orb-teal left-[-1rem] top-[10%] h-28 w-28" />
          <div className="orb orb-ember right-[8%] bottom-[-1rem] h-36 w-36 [animation-delay:1.5s]" />

          <h2 className="relative z-10 mb-4 text-2xl font-poppins font-bold text-white md:text-3xl">
            Amenities
          </h2>
          <p className="relative z-10 mb-8 max-w-2xl text-white/86">
            Security, comfort, and convenience wrapped in a richer, more
            elevated hospitality experience.
          </p>
          <div className="relative z-10">
            <AmenitiesGrid />
          </div>

          <div className="relative z-10 mt-8 overflow-hidden rounded-2xl border border-[#f08a24]/18 bg-[linear-gradient(160deg,rgba(24,13,9,0.94),rgba(45,24,15,0.80))] shadow-xl shadow-black/12 md:grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[260px]">
              <Image
                src="/images/parking.png"
                alt="Secure and ample parking at Zangem BnBs"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(18,11,8,0.50))]" />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff9f43]">
                Featured amenity
              </div>
              <h3 className="mt-3 font-poppins text-2xl font-bold text-white">
                Secure and ample parking for residents and guests
              </h3>
              <p className="mt-3 max-w-md text-white/86">
                Convenient on-site parking adds comfort, accessibility, and a
                more complete stay experience for every guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12">
        <div className="site-section-shell px-5 py-8 sm:px-6 sm:py-10 md:px-8">
          <div className="orb orb-copper left-[-1rem] bottom-[-1rem] h-36 w-36" />
          <div className="orb orb-ember right-[12%] top-[12%] h-28 w-28 [animation-delay:2.8s]" />

          <h2 className="relative z-10 mb-6 text-2xl font-poppins font-bold text-white md:text-3xl">
            What guests say
          </h2>
          <div className="relative z-10">
            <ReviewCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}
