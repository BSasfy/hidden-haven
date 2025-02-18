import { ServicesButton } from "@/app/_components/services-button/ServicesButton";

export default function BeautyPage() {
  return (
    <div className="text-[#FFFBF2]">
      <div className="h-40 content-center bg-[url('/beauty.png')] bg-cover bg-center bg-no-repeat object-cover text-center md:h-72">
        <h1 className="p-4 text-7xl italic drop-shadow-2xl">Beauty</h1>
      </div>
      <div className="px-10 py-12 font-extralight xl:px-20">
        <div className="pb-7 text-justify text-xl xl:text-2xl">
          <div className="pb-5 text-3xl font-bold text-[#C9AC7C] xl:text-4xl">
            Facials
          </div>
          We offer a variety of facials tailored to specific client needs, using
          deluxe Elemis products. <br /> Deluxe facial consists of double
          cleanse, exfoliation/scrub, tone mask and serum and moisturiser.
          <br /> Laser Facials Our Laser and IPL facial clinic offers treatments
          for red vein and skin pigmentation and we also offer our rejuvenation
          laser facial to treat fine lines and awake tired skin. <br />{" "}
          <div className="pb-5 pt-9 text-3xl font-bold text-[#C9AC7C] xl:text-4xl">
            Microneedling Facials
          </div>
          A microneedling facial (also known as Collagen Induction Therapy) is a
          New Age facial that uses a device to power a cartridge of tiny needles
          into the surface layers of the skin – usually on the face or neck.{" "}
          <br />
          Microneedling works at a far higher speed than the conventional Derma
          Roller treatment, which penetrates the skin only when rolled over its
          surface. This advanced technology means it is able to penetrate the
          skin up to 90,000 times per minute – producing more visible (and
          youthful!) results for you.
        </div>
        <div className="justify-self-center pt-5">
          <ServicesButton />
        </div>
      </div>
    </div>
  );
}
