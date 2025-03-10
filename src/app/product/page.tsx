import React from "react";
import { Product } from "@/components/product";
// ✅ Fetch data on the server before rendering
async function getProductData() {
  try {
    const response = await fetch(
      "https://qa.hopscotch.in/api/product/1164122?currentTime=1741262218109",
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-GB,en;q=0.9",
          "api-version": "v2.0",
          "client-auth-method": "v1",
          "client-id": "web-client/1.0",
          "device-id": "ef3b8fca-4085-413a-9e54-eed96afbe5f4",
          "secret-key": "SdeF21dn1ll23ms1AEcn223Ln039kds",
          "x-nv-device": "sp",
          "x-nv-security-magic":
            "mk4bHEqmVrUGmxxD7sEMfwkgjBceXTtuAFkxG6aeQTQ3xtCbqpgkttUvt5m7KjNS",
        },
        method: "GET",
      }
    );

    if (!response.ok) throw new Error("Failed to fetch product data");

    return await response.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

// ✅ Server Component (Automatically gets SSR data)
export default async function ProductPage() {
  const productData = await getProductData(); // Fetch SSR data

  return (
    <div>
      <Product />
      {/* ✅ Render SSR data */}
      {productData ? (
        <pre>{JSON.stringify(productData, null, 2)}</pre>
      ) : (
        <p>Failed to load product data.</p>
      )}
    </div>
  );
}
