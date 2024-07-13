"use client";

import { addProduct } from "../_actions/product";

export default function AddProductPage() {
  return (
    <div className="container space-y-8">
      <h1 className="text-3xl">Add New Product</h1>
      <form action={addProduct} className="space-y-6">
        <div className="space-y-2">
          <label className="font-medium" htmlFor="title">
            Title
          </label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            className="border-2 border-black rounded-lg w-full p-2"
          />
        </div>
        <div className="space-y-2">
          <label className="font-medium" htmlFor="stock">
            Stock
          </label>
          <br />
          <input
            type="number"
            name="stock"
            id="stock"
            className="border-2 border-black rounded-lg w-full p-2"
          />
        </div>
        <div className="space-y-2">
          <label className="font-medium" htmlFor="price">
            Price
          </label>
          <br />
          <input
            type="number"
            name="price"
            id="price"
            className="border-2 border-black rounded-lg w-full p-2"
          />
        </div>
        <div className="space-y-2">
          <label className="font-medium" htmlFor="discount">
            Discount
          </label>
          <br />
          <input
            type="number"
            name="discount"
            id="discount"
            className="border-2 border-black rounded-lg w-full p-2"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            value="shojib116@gmail.com"
            hidden
            className="hidden"
          />
        </div>
        <button
          type="submit"
          className="border w-full p-2 rounded-lg font-semibold bg-green-200 hover:bg-green-300 hover:border-gray-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
