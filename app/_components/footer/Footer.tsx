import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-[1px] border-gray-300 bg-[#181818]">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col justify-between gap-4 px-4 py-2 text-[#FFFBF2] max-md:hidden max-md:items-center md:flex-row">
        <span className="text-md w-1/3 justify-items-center font-medium md:justify-items-start">
          <div>07392975905</div>
          <div>07900617195</div>
        </span>
        <div className="w-1/3 justify-items-center text-center">
          <div>Social Media</div>
        </div>
        <div className="w-1/3 justify-items-center max-md:text-center md:justify-items-end">
          <div>36 Portland Road, Kilmarnock, KA1 2DJ</div>
        </div>
      </div>
      <div className="flex justify-between justify-items-center md:hidden">
        <div className="flex pl-8">
          <div className="relative mr-1 mt-[3px] h-4 w-4">
            <Image src="/facebook_logo.png" alt="Facebook Logo" fill />
          </div>
          <div>Facebook</div>
        </div>

        <div className="flex">
          <div className="relative mr-1 mt-[3px] h-4 w-4">
            <Image src="/instagram_logo.png" alt="Facebook Logo" fill />
          </div>
          <div>Instagram</div>
        </div>
        <div className="flex">
          <div>
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <div>Address</div>
        </div>
        <div className="flex">
          <div>
            <span className="material-symbols-outlined">call</span>
          </div>
          <Link href="tel:+4407392975905" className="pr-8">
            Phone
          </Link>
        </div>
      </div>
    </footer>
  );
}
