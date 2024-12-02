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
        className="h-8 bg-[#FFFBF2]"
      />
      <input
        type="text"
        id="number"
        name="number"
        placeholder="Contact Number"
        className="h-8 bg-[#FFFBF2]"
      />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        className="h-8 bg-[#FFFBF2]"
      />
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Message..."
        className="h-40 bg-[#FFFBF2]"
      />
      <input
        type="submit"
        value="Send"
        className="h-12 w-28 self-end border-[0.25px] border-[#FFFBF2] bg-[#181818] text-xl"
      />
    </form>
  );
}
