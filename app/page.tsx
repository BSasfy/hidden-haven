export default function HomePage() {
  return (
    <main>
      <div className="relative h-[80vh] w-full content-center justify-items-center bg-[url('/homepage-hands.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mb-[10%] w-4/5 text-center text-4xl font-medium italic text-white md:w-1/2 lg:text-5xl">
          For mental, physical and spiritual wellbeing
        </div>
        <div className="w-full justify-items-center">
          <button className="absolute bottom-7 left-[36vw] rounded-sm bg-[#C9AC7C] px-4 py-2 text-3xl md:left-[43%]">
            Book Now
          </button>
        </div>
      </div>
    </main>
  );
}
