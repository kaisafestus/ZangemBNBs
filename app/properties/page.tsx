import PropertyCard from "../../components/PropertyCard";

export default function PropertiesPage() {
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

  const oneBeds = [
    {
      id: "one-1",
      title: "One Bedroom",
      size: "505 sq ft (47 sqm)",
      price: "Contact for Pricing",
      imageSrc: "/images/bedroom.png",
      imageAlt: "One bedroom apartment interior",
      features: [
        "Separate bedroom",
        "Living room",
        "Full kitchen",
        "Balcony views",
      ],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12">
      <div className="site-section-shell px-5 py-8 sm:px-6 sm:py-10 md:px-8">
        <div className="orb orb-copper right-[10%] top-[-1rem] h-28 w-28" />
        <div className="orb orb-ember left-[10%] bottom-[-2rem] h-36 w-36 [animation-delay:2.4s]" />

        <h1 className="relative z-10 mb-6 text-2xl font-poppins font-bold text-white sm:text-3xl">
          Apartments
        </h1>

        <h2 className="relative z-10 mb-4 text-2xl font-semibold text-[#ffd3a8]">
          Studio Apartments
        </h2>
        <div className="relative z-10 mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
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

        <h2 className="relative z-10 mb-4 text-2xl font-semibold text-[#ffd3a8]">
          One Bedroom Apartments
        </h2>
        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {oneBeds.map((b) => (
            <PropertyCard
              key={b.id}
              title={b.title}
              size={b.size}
              price={b.price}
              imageSrc={b.imageSrc}
              imageAlt={b.imageAlt}
              features={b.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
