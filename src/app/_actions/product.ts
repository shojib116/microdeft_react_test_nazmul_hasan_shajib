"use server";

import axios from "axios";
import { redirect } from "next/navigation";

const base_url = "https://react-interview.1putym.easypanel.host/api/product";

export async function addProduct(formData: FormData) {
  const productData = Object.fromEntries(formData.entries());

  const response = await axios.post(base_url, productData);
  redirect("/");
}
