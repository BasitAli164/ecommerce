import Header from "@/components/Header/Header";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cartContext";
import { WishlistProvider } from "../context/wishlistContext";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  variable: "--font-poppins", // map to a CSS variable
});

export const metadata = {
  title: "Exclusive | Online Shopping for Fashion, Electronics & More",
  description:
    "Shop online at Exclusive for women's & men's fashion, electronics, home & lifestyle, medicine, sports, toys, groceries, pets, health & beauty. Best deals & fast delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="overflow-x-hidden">
        <WishlistProvider>
          <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
