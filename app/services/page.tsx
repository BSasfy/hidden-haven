import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-screen-xl md:px-16 md:py-10">
      <div className="grid h-[600px] w-full gap-5 max-md:p-10 md:grid-cols-2 md:gap-3">
        <div className="content-center bg-[url('/beauty.png')] bg-cover bg-center bg-no-repeat object-cover text-center text-[#FFFBF2]">
          <Link href="/services/beauty">
            <div className="p-4 text-4xl font-bold drop-shadow-2xl">Beauty</div>
            <div className="w-1/3 justify-self-center border-2"></div>
            <div className="text-xl font-normal">View More</div>
          </Link>
        </div>
        <div className="content-center bg-[url('/massage.png')] bg-cover bg-center bg-no-repeat object-cover text-center text-[#FFFBF2]">
          <Link href="/services/massage">
            <div className="p-4 text-4xl font-bold drop-shadow-2xl">
              Massage
            </div>
            <div className="w-1/3 justify-self-center border-2"></div>
            <div className="text-xl font-normal">View More</div>
          </Link>
        </div>
        <div className="content-center bg-[url('/talking-therapies.png')] bg-cover bg-center bg-no-repeat object-cover text-center text-[#FFFBF2]">
          <Link href="/services/talking-therapies">
            <div className="p-4 text-4xl font-bold drop-shadow-2xl">
              Talking Therapies
            </div>
            <div className="w-1/3 justify-self-center border-2"></div>
            <div className="text-xl font-normal">View More</div>
          </Link>
        </div>
        <div className="content-center bg-[url('/laser-clinic-medical.png')] bg-cover bg-center bg-no-repeat object-cover text-center text-[#FFFBF2]">
          <Link href="/services/laser-clinic-medical">
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
