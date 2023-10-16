import { productSvc } from "..";
import { Product } from "../../model/product";

export const fetchProducts = async () => {
  try {
    const result = await productSvc.get<void, { data: Product[] }>("/products");

    return result.data;
  } catch (e) {
    console.log(e);
  }
};
