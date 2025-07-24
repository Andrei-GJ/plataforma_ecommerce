"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

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
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}