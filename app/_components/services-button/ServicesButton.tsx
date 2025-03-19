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
    </div>
  );
}
