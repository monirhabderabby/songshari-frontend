import apiSlice from "../../api/apiSlice";

export const withoutLoginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecentMembers: builder.query({
      query: () => "withoutLogin/recentMembers",
    }),
    getAllPlans: builder.query({
      query: () => "admin/plan",
    }),
    getTopBrideGroom: builder.query({
      query: (gender) =>
        `/admin/priority-member/get-all-priority-member/?gender=${gender}`,
    }),
  }),
});

export const {
  useGetRecentMembersQuery,
  useGetAllPlansQuery,
  useGetTopBrideGroomQuery,
} = withoutLoginApi;
