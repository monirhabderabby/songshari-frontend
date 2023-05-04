import apiSlice from "../../api/apiSlice";

export const verificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrUpdateSocketInfo: builder.mutation({
      query: (data) => ({
        url: "/group-call/socket-info/create-or-update",
        method: "POST",
        body: data,
      }),
    }),
    getSocketInfoById: builder.query({
      query: (id) => ({
        url: `/group-call/socket-info/${id}`,
      }),
    }),
  }),
});

export const {useCreateOrUpdateSocketInfoMutation,useGetSocketInfoByIdQuery} = verificationApi;
