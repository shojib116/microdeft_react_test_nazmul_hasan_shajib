import Link from "next/link";
import { getProducts } from "./data/products";

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
      <div className="flex flex-row justify-between mb-4">
        <h1 className="text-3xl">Products</h1>
        <button className="border py-2 px-4 bg-green-300 rounded-lg font-semibold">
          <Link href="/add">Add Product</Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product: product) => {
          return (
            <div
              key={product.id}
              className="border rounded-lg space-y-4 h-full w-full max-w-xs"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full"
                />
              </div>
              <div className="px-4 pb-8 space-y-3">
                <div className="font-bold text-lg">{product.title}</div>
                <div className="text-sm">
                  <span className="font-semibold">{product.payable_price}</span>{" "}
                  <del className="text-gray-400">{product.price}</del>{" "}
                  <span className="border rounded-md p-1 bg-green-300 font-medium">
                    {discountPercentage(product.discount, product.price)}%
                  </span>
                </div>
                <button className="border border-green-400 w-full p-2 rounded-md hover:bg-green-300 hover:border-black font-semibold">
                  Purchase
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
