import Link from "next/link";
import Image from "next/image";
import Alert from "@mui/material/Alert";

export default function HomePage() {
  return (
    <main>
      <Alert severity="info">
        You can now book some of our services via the{" "}
        <Link
          href="https://the-haven-shop.square.site/s/appointments"
          className="font-bold underline"
        >
          BOOK NOW
        </Link>{" "}
        button. If you can&apos;t see what you&apos;re looking for, please call
        us on 07392975905! We&apos;re working on making all the services
        available for booking online.
      </Alert>
      <div className="relative flex h-[80vh] w-full flex-col content-center justify-end">
        <Image
          src="/homepage-hands.jpg"
          fill
          alt="hands holding flower"
          className="object-cover lg:object-contain"
        />
        <div className="relative mx-auto mb-[250px] block w-4/5 justify-self-center text-center text-3xl font-medium italic text-white md:w-1/2 md:text-4xl lg:text-5xl">
          For mental, physical and spiritual wellbeing
        </div>

        <Link
          className="relative mx-auto mb-9 block rounded-sm bg-[#C9AC7C] px-4 py-2 text-3xl"
          href="https://the-haven-shop.square.site/s/appointments"
        >
          Book Now
        </Link>
      </div>
    </main>
  );
}
