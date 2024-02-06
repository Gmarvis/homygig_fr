import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "./nextToast";
import "react-toastify/dist/ReactToastify.min.css";
import ThemeProviders from "@/context/themeContext";

export const metadata: Metadata = {
  title: "homygig",
  description: "the best home service provission listing application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* {
          >>>>>>>>>>>>>>THE APP THEME PROVIDER IS NO WORKING PROPERLY
          >>>>>>>>>>>>>>CUSTOMIZED COLORS WON'T CHANGE AS THEME MODE CHANGE
          } */}
      {/* <ThemeProviders> */}
      <body className="">
        <ToastContainer />

        {children}
      </body>
      {/* </ThemeProviders> */}
    </html>
  );
}
