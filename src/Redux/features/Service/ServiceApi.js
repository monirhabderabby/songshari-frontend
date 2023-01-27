import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addSingleService: builder.mutation({
      query: (data) => ({
        url: "/member/service/add",
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
    }),
    getMyServices: builder.query({
      query: () => ({
        url: "/member/service/myServices",
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    getServiceById: builder.query({
        query: (id) => ({
          url: `/member/service/${id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${getCookie("token")}`,
          },
        }),
      }),
  }),
});

export const { useAddSingleServiceMutation,useGetMyServicesQuery, useGetServiceByIdQuery } = serviceApi;
