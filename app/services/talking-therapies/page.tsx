import { ServicesButton } from "@/app/_components/services-button/ServicesButton";

export default function ServicesPage() {
  return (
    <div className="text-[#f0ece3]">
      <div className="h-40 content-center bg-[url('/talking-therapies.png')] bg-cover bg-center bg-no-repeat object-cover text-center md:h-72">
        <h1 className="p-4 text-5xl italic drop-shadow-2xl xl:text-7xl">
          Talking Therapies
        </h1>
      </div>
      <div className="px-10 py-12 font-extralight xl:px-20">
        <div className="pb-7 text-xl xl:text-2xl">
          <div className="pb-5 text-3xl font-bold text-[#C9AC7C] xl:text-4xl">
            Services
          </div>
          <ul className="ml-12 list-disc md:ml-16">
            <li>Person Centred Counselling</li>
            <li>CBT therapy (Cognitive Behavioural Therapy)</li>
            <li>Hypnotherapy</li>
            <li>Life coaching</li>
            <li>EFT Technique/Tapping</li>
          </ul>
        </div>
        <div className="justify-self-center pt-5">
          <ServicesButton />
        </div>
      </div>
    </div>
  );
}
