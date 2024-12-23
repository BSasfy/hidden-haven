export default function HomePage() {
  return (
    <main>
      <div className="flex h-[80vh] w-full flex-col content-center justify-end bg-[url('/homepage-hands.jpg')] bg-cover bg-center bg-no-repeat lg:bg-contain">
        <div className="mx-auto mb-[250px] block w-4/5 justify-self-center text-center text-3xl font-medium italic text-white md:w-1/2 md:text-4xl lg:text-5xl">
          For mental, physical and spiritual wellbeing
        </div>

        <button className="mx-auto mb-9 block rounded-sm bg-[#C9AC7C] px-4 py-2 text-3xl">
          Book Now
        </button>
      </div>
    </main>
  );
}
