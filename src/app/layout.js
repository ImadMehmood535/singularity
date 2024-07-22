import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/layout/Footer";
import VectorComponent from "@/components/home/VectorComponent";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import CircularProgressBar from "@/components/layout/CircularProgressbar";
import ProgressComponent from "@/components/layout/ProgressComponent";
import BothHeader from "@/components/layout/BothHeader";
import BothFooter from "@/components/layout/BothFooter";
import Toaster from "@/components/general/Toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Toaster />
        <ProgressComponent />
        <div className="fixed z-[999]  bottom-5 md:bottom-[50px] right-6 md:right-12">
          <CircularProgressBar />
        </div>

        <BothHeader />
        <SmoothScrolling>{children}</SmoothScrolling>
        <BothFooter />
      </body>
    </html>
  );
}
