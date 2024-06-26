import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
 
import { cn } from "@/lib/utils"
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "ecommerce fashion Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <CartProvider >
            <NavBar />
              <ShoppingCartModal />
              {children}
            <Footer />
          </CartProvider>
      </body>
    </html>
  );
}
