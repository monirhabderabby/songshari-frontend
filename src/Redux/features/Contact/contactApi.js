import apiSlice from "../../api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendContactMessage: builder.mutation({
      query: (data) => ({
        url: `/contact/add`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
    useSendContactMessageMutation
} = contactApi;
