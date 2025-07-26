"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import { CartProvider } from "@/context/CartContext";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Define las rutas donde NO quieres mostrar header/footer
  const hideHeaderFooter = [
    '/dashboardadmin'
  ].includes(pathname);

  if (hideHeaderFooter) {
    return (
      <CartProvider>
        {children}
        <Cart />
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <Header />
      {children}
      <Footer />
      <Cart />
    </CartProvider>
  );
}