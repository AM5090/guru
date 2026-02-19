import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";
import type { OrdersTableData } from "../../../components/Table/type";

interface ProductsResponse {
  limit: number;
  products: OrdersTableData[];
  skip: number;
  total: number;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, void>({
      query: () => "products?select=id,title,brand,sku,rating,price&limit=40",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
