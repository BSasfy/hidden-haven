import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <div className="relative flex h-[80vh] w-full flex-col content-center justify-end">
        <Image
          src="/homepage-hands.jpg"
          fill
          alt="hands holding flower"
          className="object-cover lg:object-contain"
        />
        <div className="mx-auto mb-[250px] block w-4/5 justify-self-center text-center text-3xl font-medium italic text-white md:w-1/2 md:text-4xl lg:text-5xl">
          For mental, physical and spiritual wellbeing
        </div>

        <Link
          className="mx-auto mb-9 block rounded-sm bg-[#C9AC7C] px-4 py-2 text-3xl"
          href="https://the-haven-shop.square.site/s/appointments"
        >
          Book Now
        </Link>
      </div>
    </main>
  );
}
