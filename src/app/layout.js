import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "Developed by Tanjiya Zahir Bhuiyan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Navbar/>
          <main className="bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto w-full">
              {children}  
            </div>
          </main> 
        <Footer/>
        
      </body>
    </html>
  );
}
