import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-[1px] border-gray-300 bg-[#181818]">
      {/* Desktop Footer */}
      <div
        id="desktop-footer"
        className="mx-auto flex w-full max-w-screen-xl flex-col justify-between gap-4 px-4 py-2 text-[#FFFBF2] max-md:hidden max-md:items-center md:flex-row"
      >
        <span className="text-md w-1/3 justify-items-center font-medium md:justify-items-start">
          <div className="flex">
            <span className="material-symbols-outlined mr-1">call</span>
            <Link href="tel:+4407392975905">07392975905</Link>
          </div>
          <div className="flex">
            <span className="material-symbols-outlined mr-1">call</span>
            <Link href="tel:+4407900617195">07900617195</Link>
          </div>
        </span>
        <div className="w-1/3 content-center justify-items-center">
          <div className="flex gap-4">
            <div className="relative mt-[3px] h-6 w-6">
              <Link href="https://www.instagram.com/hidden_haven_ayrshire_/">
                <Image src="/instagram_logo.png" alt="Instagram Logo" fill />
              </Link>
            </div>
            <div className="relative mt-[3px] h-6 w-6">
              <Link href="https://www.facebook.com/profile.php?id=61557749330755&locale=cy_GB">
                <Image src="/facebook_logo.png" alt="Facebook Logo" fill />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/3 justify-items-center max-md:text-center md:justify-items-end">
          <div className="flex">
            <span className="material-symbols-outlined mr-1">location_on</span>
            <div>36 Portland Road, Kilmarnock, KA1 2DJ</div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div
        id="mobile-footer"
        className="mx-4 flex justify-between justify-items-center md:hidden"
      >
        <div className="flex items-center">
          <div className="pr-2 pt-1">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <Link href="https://maps.app.goo.gl/LnJH3Bd5nYenHHsm7">Address</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative mr-1 mt-[3px] h-4 w-4">
            <Image src="/facebook_logo.png" alt="Facebook Logo" fill />
          </div>

          <div className="relative mr-1 mt-[3px] h-4 w-4">
            <Image src="/instagram_logo.png" alt="Instagram Logo" fill />
          </div>
        </div>

        <div className="flex items-center">
          <div className="pr-2 pt-1">
            <span className="material-symbols-outlined">call</span>
          </div>
          <Link href="tel:+4407392975905">Phone</Link>
        </div>
      </div>
    </footer>
  );
}
