import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const successStoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSuccessStory: builder.mutation({
      query: (data) => ({
        url: `/success-story/create`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["MySuccessStory"],
    }),
    getMySuccessStory: builder.query({
      query: () => ({
        url: `/success-story/my-story`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      providesTags: ["MySuccessStory"],
    }),
    getAllSuccessStory: builder.query({
      query: ({ page, limit }) => ({
        url: `/success-story/me/all?_page=${page}&_limit=${limit}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    getSuccessStoryById: builder.query({
      query: (id) => ({
        url: `/success-story/me/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateSuccessStoryMutation,
  useGetMySuccessStoryQuery,
  useGetAllSuccessStoryQuery,
  useGetSuccessStoryByIdQuery,
} = successStoryApi;
