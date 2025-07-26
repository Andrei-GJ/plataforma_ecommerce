import React, { Suspense } from "react";
import ProductsClient from "./ProductsClient";

const MiscellaneousStoreInterface = () => {
  return (
    <Suspense fallback={<div className="flex min-h-screen bg-gray-50 items-center justify-center">
      <p className="text-gray-500">Cargando productos...</p>
    </div>}>
      <ProductsClient />
    </Suspense>
  );
};

export default MiscellaneousStoreInterface;
