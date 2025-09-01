import Header from "@/components/Header/Header";
import "./globals.css";
import { CartProvider } from "@/context/cartContext";

export const metadata = {
  title: "Exclusive | Online Shopping for Fashion, Electronics & More",
  description: "Shop online at Exclusive for women's & men's fashion, electronics, home & lifestyle, medicine, sports, toys, groceries, pets, health & beauty. Best deals & fast delivery.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins overflow-x-hidden">
<CartProvider>
          <Header/>
        {children}
</CartProvider>
      </body>
    </html>
  );
}
