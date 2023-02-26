/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

export default function ProductItem(product) {
  return (
    <div className="card">
      <Link href={`/product/${product.product.slug}`}>
        <img
          className="rounded shadow"
          src={product.product.image}
          alt={product.product.name}
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.product.slug}`}>
          <h2 className="text-lg">{product.product.name}</h2>
        </Link>
        <p className="mb-2">{product.product.brand}</p>
        <p>${product.product.price}</p>
        <button className="primary-button" type="button">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
