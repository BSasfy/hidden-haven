import { ServicesButton } from "@/app/_components/services-button/ServicesButton";

export default function LaserClinicPage() {
  return (
    <div className="text-[#FFFBF2]">
      <div className="h-40 content-center bg-[url('/laser-clinic-medical.png')] bg-cover bg-center bg-no-repeat object-cover text-center md:h-72">
        <div className="p-4 text-4xl font-light italic drop-shadow-2xl xl:text-7xl">
          Laser Clinic & Medical
        </div>
      </div>
      <div className="px-10 py-12 font-extralight xl:px-20">
        <div className="pb-7 text-justify text-xl xl:text-2xl">
          <div className="pb-5 text-3xl font-bold text-[#C9AC7C] xl:text-4xl">
            Services
          </div>
          <ul className="ml-16 list-disc">
            <li>Laser treatment for fungal nail infection</li>
            <li>Laser Hair removal</li>
            <li>Age spot removal</li>
            <li>Red vein removal</li>
            <li>Ear wax removal by suction</li>
            <li>Verrucae and Wart treatment by cryotherapy</li>
          </ul>
        </div>
        <div className="justify-self-center pt-5">
          <ServicesButton />
        </div>
      </div>
    </div>
  );
}
