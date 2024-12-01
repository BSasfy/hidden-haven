export default function AboutPage() {
  return (
    <main>
      <div className="bg-black">
        <div className="flex flex-col gap-11 px-24 py-20 text-[#FFFBF2]">
          <div className="text-4xl font-light">About Us</div>
          <div className="text-3xl font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
