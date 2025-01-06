import Link from "next/link";

export function ServicesButton() {
  return (
    <Link
      className="rounded-sm bg-[#C9AC7C] px-4 py-2 text-3xl"
      href="https://the-haven-shop.square.site/s/appointments"
    >
      Book Now
    </Link>
  );
}
