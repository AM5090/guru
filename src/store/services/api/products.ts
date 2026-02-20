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
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const accessToken =
        localStorage.getItem("accessToken") ||
        sessionStorage.getItem("accessToken");

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, void>({
      query: () => ({
        url: "products?select=id,title,brand,sku,rating,price&limit=40",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    searchProducts: builder.query<ProductsResponse, { querySearch: string }>({
      query: (params) => ({
        url: `products/search?q=${params?.querySearch}&select=id,title,brand,sku,rating,price&limit=40`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery, useLazySearchProductsQuery } = productsApi;
