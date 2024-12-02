import Link from "next/link";
import { ContactForm } from "../_components/contact-form/contact-form";

export default function ContactPage() {
  return (
    <div className="border-t-[0.5px] border-[#FFFBF2]">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 xl:p-4">
          <div className="py-7 pl-16">
            <div className="pb-4 text-3xl font-thin">Contact Us</div>
            <div className="flex flex-col text-2xl font-thin">
              <Link href="tel:+4407392975905">07392975905</Link>
              <Link href="tel:+4407900617195">07900617195</Link>
              <Link href="mailto:enquiries@thehiddenhaven.co.uk">
                enquiries@thehiddenhaven.co.uk
              </Link>
            </div>
          </div>
          <div className="py-7 pl-4">
            <div className="pb-4 text-3xl font-thin">Find Us</div>
            <div className="text-2xl font-thin">
              36 Portland Road, Kilmarnock, KA1 2DJ
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="content-center justify-items-center bg-[url('/woman-face-dark-leaves.png')] bg-cover bg-center bg-no-repeat">
            <div className="w-full px-24 py-7">
              <ContactForm />
            </div>
          </div>
          <div className="content-center justify-items-center bg-[#C9AC7C]">
            <div>
              <div className="pb-4 text-4xl">Hours</div>
              <div className="text-3xl italic">
                <div className="flex">
                  <div className="pr-2 font-bold">Tuesday</div> 10:00 - 13:00
                </div>
                <div className="flex">
                  <div className="pr-2 font-bold">Wednesday</div> 09:00 - 19:00
                </div>
                <div className="flex">
                  <div className="pr-2 font-bold">Thursday</div> 09:00 - 19:00
                </div>
                <div className="flex">
                  <div className="pr-2 font-bold">Friday</div> 09:00 - 18:00
                </div>
                <div className="flex">
                  <div className="pr-2 font-bold">Saturday</div> 09:00 - 15:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
