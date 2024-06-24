import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VectorComponent from "@/components/home/VectorComponent";
import SmoothScrolling from "@/components/layout/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Singularity",
  description: "Created by Clicktap Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SmoothScrolling>{children}</SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
