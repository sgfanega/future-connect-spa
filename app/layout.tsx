import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "@/app/main.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import BootstrapClient from "./components/bootstrapClient";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future Connect",
  description: "An Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        <BootstrapClient/>
      </body>
    </html>
  );
}
