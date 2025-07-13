"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const sendButtonLabel = isSendButtonDisabled ? "Sending..." : "Send";
  function notifySent() {
    toast("Email sent, we will be in touch soon!");
  }
  function notifyError() {
    toast("Your email couldn't be sent. Please call us on 07392975905.");
  }

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
          notifySent();
        },
        (error) => {
          notifyError();
          console.log(error);
        },
      );

    setIsSendButtonDisabled(true);

    setTimeout(() => {
      setIsSendButtonDisabled(false);
      form.current?.reset();
    }, 2000);
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
        <input
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Name"
          className="h-8 bg-[#FFFBF2] pl-2 text-gray-800"
        />
        <input
          type="number"
          id="phone_number"
          name="phone_number"
          placeholder="Contact Number"
          className="h-8 bg-[#FFFBF2] pl-2 text-gray-800"
        />
        <input
          type="email"
          id="reply_to"
          name="reply_to"
          placeholder="Email"
          className="h-8 bg-[#FFFBF2] pl-2 text-gray-800"
          required
        />
        <textarea
          name="text"
          id="message"
          placeholder="Message..."
          rows={14}
          cols={10}
          wrap="soft"
          className="h-40 bg-[#FFFBF2] px-2 text-gray-800"
        />
        {/* <input
          type="textArea"
          id="message"
          name="message"
          placeholder="Message..."
          className="h-40 bg-[#FFFBF2] pl-2 text-gray-800"
        /> */}
        <input
          type="submit"
          value={sendButtonLabel}
          disabled={isSendButtonDisabled}
          className="h-12 w-28 self-end bg-[#C9AC7C] text-xl disabled:bg-gray-600 md:border-[0.25px] md:border-[#FFFBF2] md:bg-[#181818]"
        />
      </form>
      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </div>
  );
}
