export default function AboutPage() {
  return (
    <main>
      <div className="bg-black">
        <div className="flex flex-col gap-5 px-10 py-20 text-[#FFFBF2] xl:px-24">
          <div className="justify-self-center pb-5 text-4xl xl:font-light">
            About Us
          </div>
          <div className="text-justify text-2xl xl:text-3xl">
            Our approach, whether its mental, physical or spiritual wellness you
            are seeking, we spend time with our clients on their journey, Our
            team in Kilmarnock have a combined experience of over 50 years
            caring for and nurturing our clients when they come to us. As an
            already established team of therapists at “ Time to Relax” in
            Kilmarnock, we started Hidden Haven as a way continue to add to what
            we offer our clients, whether its laser treatments, massage and
            reflexology, facials and other holistic therapies to hypnotherapy
            and counselling , we can offer you quality time for you.{" "}
          </div>
          <div className="text-justify text-2xl xl:text-3xl">
            We continue to grow our range of workshops and wellness days and
            treatments in line with client need and demand.
          </div>
          <div className="mt-[10vh] w-2/3 self-center border-2 border-white"></div>
        </div>
      </div>
      <div className="relative h-[200px] w-full content-center justify-items-center bg-[url('/woman-behind-leaves.png')] bg-cover bg-center bg-no-repeat text-center">
        <button className="left-[36vw] rounded-sm bg-[#EFD8B1] px-8 py-4 text-3xl">
          Book Now
        </button>
      </div>
    </main>
  );
}
