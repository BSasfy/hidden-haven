"use client";

export function ContactForm() {
  function onsubmit() {
    alert("Email sent!");
  }
  return (
    <form onSubmit={onsubmit} className="flex flex-col gap-3">
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
