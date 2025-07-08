import AppProvider from "@/lib/context/AppProvider";
import "@/styles/globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import View from "@/components/ui/view";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Zerokami",
    default: "Zerokami",
  },
  description: "Scan to get guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AppProvider>
          <Navbar />
          <View className="bg-app-secondary mx-auto max-2xl:w-[480px] max-sm:w-full flex flex-col items-center gap-8">
            {children}
          </View>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
