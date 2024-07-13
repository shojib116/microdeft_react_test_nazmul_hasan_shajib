import Link from "next/link";
import { getProducts } from "./data/products";
import { Key } from "react";
import Image from "next/image";

type product = {
  id: number;
  title: string;
  stock: number;
  price: number;
  discount: number;
  payable_price: number;
  image: string;
};
export default async function Home() {
  const products = await getProducts();
  function discountPercentage(discount: number, price: number) {
    return ((discount / price) * 100).toFixed(0);
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl">Products</h1>
        <button className="border p-2 bg-green-300 rounded-lg font-semibold">
          <Link href="/add">Add Product</Link>
        </button>
      </div>

      <div>
        {products.map((product: product) => {
          return (
            <div key={product.id} className="border rounded-lg p-2 space-y-2">
              <div>
                <img src={product.image} alt={product.title} className="w-32" />
              </div>
              <div>{product.title}</div>
              <div className="text-sm">
                {product.payable_price}{" "}
                <del className="text-gray-400">{product.price}</del>{" "}
                <span className="border rounded-md p-1 bg-green-300 ">
                  {discountPercentage(product.discount, product.price)}%
                </span>
              </div>
              <button className="border bg-green-200 w-full p-1">
                Purchase
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
