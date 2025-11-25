import "./globals.css";
import type { ReactNode } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "GGWoA Foundation",
  description: "Unlocking the potential in Africa's landscape",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-ggwBg text-ggwDark font-body antialiased">
        <NavBar />
        <div className="min-h-[calc(100vh-5rem)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
