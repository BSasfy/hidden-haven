import "@/app/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { NavBar } from "./_components/nav-bar/NavBar";
import { Footer } from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Hidden Haven",
  description: "Treatments in Ayrshire",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-[#181818]">
        <div className="">
          <NavBar />
          {children}
          <div className="align-bottom">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
