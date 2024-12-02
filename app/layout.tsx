import "@/app/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { NavBar } from "./_components/nav-bar/NavBar";
import { Footer } from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <div className="h-[100vh]">
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
