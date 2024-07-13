import axios from "axios";

const base_url = "https://react-interview.1putym.easypanel.host/api/product";

export async function getProducts() {
  const headers = { Accept: "Application/JSON" };
  const response = await axios.get(base_url, {
    headers,
    data: { email: "shojib116@gmail.com" },
  });

  return response.data.data;
}
