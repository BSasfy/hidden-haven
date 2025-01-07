"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
      !form.current
    )
      throw new Error(
        "One of the sendForm params (serviceID, templateID, form, publicKey) is missing. Please check your environment variables",
      );
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert(error);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        className="h-8 bg-[#FFFBF2] pl-2 text-gray-800"
      />
      <input
        type="text"
        id="number"
        name="number"
        placeholder="Contact Number"
        className="h-8 bg-[#FFFBF2] pl-2 text-gray-800"
      />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        className="h-8 bg-[#FFFBF2] pl-2 text-gray-800"
      />
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Message..."
        className="h-40 bg-[#FFFBF2] pl-2 text-gray-800"
      />
      <input
        type="submit"
        value="Send"
        className="h-12 w-28 self-end bg-[#C9AC7C] text-xl md:border-[0.25px] md:border-[#FFFBF2] md:bg-[#181818]"
      />
    </form>
  );
}
