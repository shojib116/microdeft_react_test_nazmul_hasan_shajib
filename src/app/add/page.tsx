"use client";

import { addProduct } from "../_actions/product";

export default function AddProductPage() {
  return (
    <div className="container space-y-8">
      <h1 className="text-3xl">Add New Product</h1>
      <form action={addProduct} className="space-y-6 lg:w-1/2">
        <InputGroup name="title" label="Title" type="text" />
        <InputGroup name="stock" label="Stock" type="number" />
        <InputGroup name="price" label="Price" type="number" />
        <InputGroup name="discount" label="Discount" type="number" />
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

function InputGroup({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) {
  return (
    <div className="space-y-2">
      <label className="font-medium" htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        type={type}
        name={name}
        id={name}
        className="border-2 border-black rounded-lg w-full p-2"
      />
    </div>
  );
}
