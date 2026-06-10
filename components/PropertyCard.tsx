import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  size: string;
  price: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
};

export default function PropertyCard({
  title,
  size,
  price,
  features,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#f08a24]/20 bg-[linear-gradient(160deg,rgba(24,13,9,0.94),rgba(45,24,15,0.82))] text-white/84 shadow-xl shadow-black/12">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(18,11,8,0.38))]" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-poppins text-lg font-semibold text-white sm:text-xl">
          {title}
        </h3>
        <div className="text-sm text-white/74">{size}</div>
        <div className="mt-2 font-semibold text-[#ff9f43]">{price}</div>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-white/84">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-md bg-[#d97706] px-4 py-3 text-white shadow-sm shadow-black/20 transition hover:bg-[#c96a04] sm:w-auto sm:py-2"
          >
            Book
          </Link>
        </div>
      </div>
    </article>
  );
}
