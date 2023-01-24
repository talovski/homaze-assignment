import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContract } from "../types/contract";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://homaze.free.beeceptor.com/",
  }),
  endpoints: (build) => ({
    getContracts: build.query<IContract[], void>({
      query: () => ({ url: "/" }),
      transformResponse: (response: IContract[]) =>
        response.sort((a, b) => a.updated_timestmp - b.updated_timestmp),
    }),
  }),
});

export const { useGetContractsQuery } = api;
