import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IContract} from "./types/contract";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://homaze-assignment.free.beeceptor.com/",
  }),
  endpoints: (build) => ({
    getContracts: build.query<IContract[], void>({
      query: () => ({ url: "/" }),
    }),
  }),
});


export const { useGetContractsQuery } = api;
