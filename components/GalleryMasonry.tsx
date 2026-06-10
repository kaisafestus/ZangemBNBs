import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
};

export default function GalleryMasonry({ images }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {images.map((image) => (
        <div
          key={image.src}
          className="group overflow-hidden rounded-2xl border border-[#f08a24]/18 bg-[linear-gradient(160deg,rgba(24,13,9,0.94),rgba(45,24,15,0.80))] shadow-xl shadow-black/12"
        >
          <div className="relative h-64 sm:h-72">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(18,11,8,0.44))]" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-[#ffdfbf]">
              {image.alt}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
