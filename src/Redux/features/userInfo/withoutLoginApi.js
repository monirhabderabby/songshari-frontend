import apiSlice from "../../api/apiSlice";

export const withoutLoginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecentMembers: builder.query({
      query: () => "withoutLogin/recentMembers",
    }),
    getAllPlans: builder.query({
      query: () => "admin/plan",
    }),
  }),
});

export const { useGetRecentMembersQuery, useGetAllPlansQuery } =
  withoutLoginApi;
