import Link from "next/link";
import { ContactForm } from "../_components/contact-form/contact-form";

export default function ContactPage() {
  return (
    <div className="border-t-[0.5px] border-[#FFFBF2]">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:grid md:grid-cols-2 xl:p-4">
          <div className="md:py-7">
            <div className="max-md:h-32 max-md:content-center max-md:justify-items-center max-md:bg-[url('/woman-face-dark-leaves.png')] max-md:bg-cover max-md:bg-center max-md:bg-no-repeat">
              <div className="text-[40px] font-light md:pb-4 md:pl-16 md:text-3xl md:font-thin">
                Contact Us
              </div>
            </div>
            <div className="flex flex-col pl-10 text-2xl font-thin max-md:pt-10 md:pl-16">
              <div className="flex">
                <div className="pr-2 pt-1">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <Link href="tel:+4407392975905">07392975905</Link>
              </div>

              <div className="flex">
                <div className="pr-2 pt-1">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <Link href="tel:+4407900617195">07900617195</Link>
              </div>

              <div className="flex">
                <div className="pr-2 pt-1">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <Link href="mailto:enquiries@thehiddenhaven.co.uk">
                  enquiries@thehiddenhaven.co.uk
                </Link>
              </div>
            </div>
          </div>
          <div className="py-7 pl-4 max-md:hidden">
            <div className="text-3xl font-thin md:pb-4">Find Us</div>
            <div className="flex">
              <div className="pt-1">
                <span className="material-symbols-outlined pr-2">
                  location_on
                </span>
              </div>

              <div className="text-2xl font-thin">
                36 Portland Road, Kilmarnock, KA1 2DJ
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="content-center justify-items-center bg-cover bg-center bg-no-repeat md:bg-[url('/woman-face-dark-leaves.png')]">
            <div className="w-full px-10 py-7 md:px-24">
              <ContactForm />
            </div>
          </div>
          <div className="pb-10 pl-10 md:hidden">
            <div className="pb-4 text-3xl font-thin">Find Us</div>
            <div className="flex">
              <div className="pt-1">
                <span className="material-symbols-outlined pr-2">
                  location_on
                </span>
              </div>
              <div className="text-2xl font-thin">
                36 Portland Road, Kilmarnock, KA1 2DJ
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.664123431152!2d-4.506148687841733!3d55.60785900303366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48883357e9a4aa7f%3A0x767efd036602f70b!2sThe%20Hidden%20Haven%20Ayrshire!5e0!3m2!1sen!2suk!4v1733173453352!5m2!1sen!2suk"
            className="h-[400px] w-full border-0 md:hidden"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
          <div className="content-center justify-items-center max-md:py-10 max-md:text-center md:bg-[#C9AC7C]">
            <div className="pb-4 text-4xl max-md:font-thin max-md:italic">
              Hours
            </div>
            <div className="text-3xl italic max-md:hidden">
              <div className="flex">
                <div className="pr-2 md:font-bold">Tuesday</div> 10:00 - 13:00
              </div>
              <div className="flex">
                <div className="pr-2 md:font-bold">Wednesday</div> 09:00 - 19:00
              </div>
              <div className="flex">
                <div className="pr-2 md:font-bold">Thursday</div> 09:00 - 19:00
              </div>
              <div className="flex">
                <div className="pr-2 md:font-bold">Friday</div> 09:00 - 18:00
              </div>
              <div className="flex">
                <div className="pr-2 md:font-bold">Saturday</div> 09:00 - 15:00
              </div>
            </div>
            <div className="text-center text-2xl font-thin italic md:hidden">
              <div>Tuesday 10:00 - 13:00</div>
              <div>Wednesday 09:00 - 19:00</div>
              <div>Thursday 09:00 - 19:00</div>
              <div>Friday 09:00 - 18:00</div>
              <div>Saturday 09:00 - 15:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
