import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransitionOverlay from "../components/TransitionOverlay";
import ResetHomeScroll from "../components/ResetHomeScroll";

export const metadata = {
  title: "Khadeeja Shanum",
  description: "AI & Data Science Student Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ResetHomeScroll />

        <TransitionOverlay />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}