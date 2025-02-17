import Link from "next/link";
import Alert from "@mui/material/Alert";

export function ServicesButton() {
  return (
    <div className="flex flex-col">
      <Link
        className="self-center rounded-sm bg-[#C9AC7C] px-4 py-2 text-3xl"
        href="https://the-haven-shop.square.site/s/appointments"
      >
        Book Now
      </Link>
      <Alert severity="info" className="mt-6">
        You can now book some of our services via the{" "}
        <Link
          href="https://the-haven-shop.square.site/s/appointments"
          className="font-bold underline"
        >
          BOOK NOW
        </Link>
        &nbsp;button. If you can&apos;t see what you&apos;re looking for, please
        call us on 07392975905! We&apos;re working on making all the services
        available for booking online.
      </Alert>
    </div>
  );
}
