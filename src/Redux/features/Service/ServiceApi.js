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
    updateSingleService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/member/service/${id}`,
        method: "PUT",
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
    getSuggestedServices: builder.query({
      query: (page, keyword) => ({
        url: `/member/service/suggested?_page=${page}&_limit=10&_keyword=${keyword}`,
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
    deleteSingleService: builder.query({
      query: (id) => ({
        url: `/member/service/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useAddSingleServiceMutation,
  useGetMyServicesQuery,
  useGetServiceByIdQuery,
  useUpdateSingleServiceMutation,
  useGetSuggestedServicesQuery,
  useDeleteSingleServiceQuery,
} = serviceApi;
