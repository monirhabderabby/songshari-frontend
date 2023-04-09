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
    }),
  }),
});

export const { useCreateSuccessStoryMutation } = successStoryApi;
