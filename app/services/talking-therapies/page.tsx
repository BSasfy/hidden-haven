import { ServicesButton } from "@/app/_components/services-button/ServicesButton";

export default function ServicesPage() {
  return (
    <div className="text-[#FFFBF2]">
      <div className="h-40 content-center bg-[url('/talking-therapies.png')] bg-cover bg-center bg-no-repeat object-cover text-center md:h-72">
        <div className="p-4 text-5xl font-light italic drop-shadow-2xl xl:text-7xl">
          Talking Therapies
        </div>
      </div>
      <div className="px-10 py-12 font-extralight xl:px-20">
        <div className="justify-self-center pb-9 text-3xl font-bold xl:text-4xl">
          Talking Therapies
        </div>
        <div className="pb-7 text-justify text-xl xl:text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor{" "}
        </div>
        <div className="justify-self-center">
          <ServicesButton />
        </div>
      </div>
    </div>
  );
}
