import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-screen-xl md:px-16 md:py-10">
      <div className="grid h-[600px] w-full gap-5 max-md:p-10 md:grid-cols-2 md:gap-3">
        <div className="relative content-center text-center text-[#FFFBF2]">
          <Image
            src="/beauty.png"
            fill
            alt="woman receiving facial treatment"
            className="object-cover"
          />
          <Link href="/services/beauty" className="relative">
            <div className="p-4 text-4xl font-bold drop-shadow-2xl">Beauty</div>
            <div className="w-1/3 justify-self-center border-2"></div>
            <div className="text-xl font-normal">View More</div>
          </Link>
        </div>
        <div className="relative content-center text-center text-[#FFFBF2]">
          <Image
            src="/massage.png"
            fill
            alt="woman receiving a massage"
            className="object-cover"
          />
          <Link href="/services/massage" className="relative">
            <div className="p-4 text-4xl font-bold drop-shadow-2xl">
              Massage
            </div>
            <div className="w-1/3 justify-self-center border-2"></div>
            <div className="text-xl font-normal">View More</div>
          </Link>
        </div>
        <div className="relative content-center text-center text-[#FFFBF2]">
          <Image
            src="/talking-therapies.png"
            fill
            alt="woman and therapist in session"
            className="object-cover"
          />
          <Link href="/services/talking-therapies" className="relative">
            <div className="p-4 text-4xl font-bold drop-shadow-2xl">
              Talking Therapies
            </div>
            <div className="w-1/3 justify-self-center border-2"></div>
            <div className="text-xl font-normal">View More</div>
          </Link>
        </div>
        <div className="relative content-center text-center text-[#FFFBF2]">
          <Image
            src="/laser-clinic-medical.png"
            fill
            alt="woman receiving laser treatment on face"
            className="object-cover"
          />
          <Link href="/services/laser-clinic-medical" className="relative">
            <div className="p-4 text-4xl font-bold drop-shadow-2xl">
              Laser Clinic & Medical
            </div>
            <div className="w-1/3 justify-self-center border-2"></div>
            <div className="text-xl font-normal">View More</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
