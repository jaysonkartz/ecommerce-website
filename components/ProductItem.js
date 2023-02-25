/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductItem(product) {
  console.log(product.product.image);
  return (
    <div className="card">
      <Link href={`/product/${product.product.slug}`}>
        <Image
          className="rounded shadow"
          src={product.product.image}
          alt={product.product.name}
          width={1000}
          height={1000}
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
