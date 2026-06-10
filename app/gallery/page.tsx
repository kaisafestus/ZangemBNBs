import GalleryMasonry from "../../components/GalleryMasonry";

const galleryImages = [
  { src: "/images/background.png", alt: "Background image" },
  { src: "/images/bedroom.png", alt: "Bedroom apartment interior" },
  { src: "/images/kitchen.png", alt: "Kitchen area" },
  { src: "/images/logo.png", alt: "Zangem BnBs logo" },
  { src: "/images/parking.png", alt: "Parking area" },
  { src: "/images/sitting.png", alt: "Sitting area" },
  { src: "/images/studio.png", alt: "Studio apartment interior" },
];

export default function GalleryPage() {
  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12">
      <div className="site-section-shell px-5 py-8 sm:px-6 sm:py-10 md:px-8">
        <div className="orb orb-copper right-[10%] top-[-1rem] h-28 w-28" />
        <div className="orb orb-ember bottom-[-2rem] left-[8%] h-36 w-36 [animation-delay:2.2s]" />

        <h1 className="relative z-10 mb-6 text-2xl font-poppins font-bold text-white sm:text-3xl">
          Photo & Video Gallery
        </h1>
        <div className="relative z-10">
          <GalleryMasonry images={galleryImages} />
        </div>
      </div>
    </section>
  );
}
