import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const packageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPackages: builder.query({
      query: () => ({
        url: `/matrimony-package`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),

    buyPackage: builder.mutation({
      query: (data) => ({
        url: `/matrimony-package/buy-package`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllPackagesQuery,
  useBuyPackageMutation
} = packageApi;
