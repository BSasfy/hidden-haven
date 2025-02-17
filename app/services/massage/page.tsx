import { ServicesButton } from "@/app/_components/services-button/ServicesButton";

export default function ServicesPage() {
  return (
    <div className="text-[#FFFBF2]">
      <div className="h-40 content-center bg-[url('/massage.png')] bg-cover bg-center bg-no-repeat object-cover text-center md:h-72">
        <div className="p-4 text-7xl font-light italic drop-shadow-2xl">
          Massage
        </div>
      </div>
      <div className="px-10 py-12 font-extralight xl:px-20">
        <div className="pb-7 text-justify text-xl xl:text-2xl">
          <div className="pb-5 leading-10">
            We offer a variety of massage treatments, aromatherapy, lymphatic
            drainage, deep tissue and pregnancy. <br /> Not sure which massage
            would suit you best? Contact us and we can help you decide according
            to your needs!
          </div>
          <div className="pb-5 text-3xl font-bold text-[#C9AC7C] xl:text-4xl">
            Lava tummy treatments
          </div>
          <p className="pb-5">
            Warmed shells just glide across the muscles to provide a deep
            relaxing treatment.
          </p>
          <p className="pb-5">
            We specialise in Lava Tummy Massage. <br /> This short treatment is
            one of the most effective in relieving the discomfort of...
          </p>
          <ul className="ml-16 list-disc">
            <li>Bloating</li>
            <li>IBS</li>
            <li>Constipation</li>
            <li>Diverticulitis</li>
            <li>Colitis</li>
          </ul>
          <div className="pb-5 pt-9 text-3xl font-bold text-[#C9AC7C] xl:text-4xl">
            Ear Candling
          </div>
          <p className="pb-5">
            This treatment involves the use of special hollow candles which are
            lit and inserted into the ear to create a gentle suction, sending
            tiny vibrations down the candle to gently manipulate the ear canal.{" "}
          </p>
          <p className="pb-5">
            Any excess pressure within the inner ear can be released, reducing
            congestion in the nose, sinuses and throat. This induces a feeling
            of tranquillity, composure, comfort and relief.
          </p>
          <div className="pb-5 pt-9 text-3xl font-bold text-[#C9AC7C] xl:text-4xl">
            Ear Acupuncture
          </div>
          <p className="pb-5">
            Ear acupuncture is a diagnostic and therapeutic self-regulating
            homeostatic mechanism of the whole body. <br />
            This is primarily a preventive form of medicine, unlike non-steroid
            anti-inflammatory drugs.
          </p>
          <p className="pb-5">
            Ear acupuncture is easily available for diagnosis and treatment. The
            auricular (ear) represents a micro map of the body.
          </p>
          <br /> Auriculotherapy is known for the reductions of
          <ul className="ml-16 list-disc">
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Insomnia</li>
            <li>It is also very useful in addiction issues</li>
          </ul>
          <div className="pb-5 pt-9 text-3xl font-bold text-[#C9AC7C] xl:text-4xl">
            Reflexology
          </div>
          Your therapist will work on pressure points or reflexes on the feet
          which affect the entire body. <br /> An excellent treatment for
          reducing stress levels and improving well-being and energy.
        </div>
        <div className="justify-self-center pt-5">
          <ServicesButton />
        </div>
      </div>
    </div>
  );
}
