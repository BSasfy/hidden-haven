import Link from "next/link";

export default function ServicesListPage() {
  return (
    <main>
      <div className="bg-black">
        <div className="flex flex-col gap-5 px-10 py-20 text-[#FFFBF2] xl:px-24">
          <div className="justify-self-center pb-9 text-3xl font-bold text-[#C9AC7C] xl:text-4xl">
            List of Services
          </div>
          <div className="text-justify text-xl xl:text-3xl">
            To book in, please give us a call on{" "}
            <Link href="tel:+4407392975905">07392975905</Link>
          </div>
          <div className="max-w-fit pl-4 max-md:py-10">
            <div className="text-3xl italic">
              <table className="table-fixed border-collapse border border-gray-500">
                <thead>
                  <tr>
                    <th className="border border-gray-500">Treatment</th>
                    <th className="border border-gray-500">Duration</th>
                    <th className="border border-gray-500">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 font-bold">
                      Ear Candling
                    </td>
                    <td className="border border-gray-500">45 mins</td>
                    <td className="border border-gray-500">£35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-[10vh] w-2/3 self-center border-2 border-white"></div>
        </div>
      </div>
      <div className="relative h-[200px] w-full content-center justify-items-center bg-[url('/woman-behind-leaves.png')] bg-cover bg-center bg-no-repeat text-center">
        <Link
          className="left-[36vw] rounded-sm bg-[#C9AC7C] px-8 py-4 text-3xl"
          href="https://the-haven-shop.square.site/s/appointments"
        >
          Book Now
        </Link>
      </div>
    </main>
  );
}
