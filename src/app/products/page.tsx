import { Suspense } from "react";
import Products from "@/components/Products";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando productos...</div>}>
      <Products />
    </Suspense>
  );
}
