import apiSlice from "../../api/apiSlice";

export const withoutLoginApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getRecentMembers: builder.query({
            query: ({ searchTerm }) => `/withoutLogin/recentMembers?_role=member&_keyword=${searchTerm}&_limit=10&_page=1`,
            keepUnusedDataFor: 0,
        }),
        getAllPlans: builder.query({
            query: () => "admin/plan",
        }),
        getTopBrideGroom: builder.query({
            query: gender => `/admin/priority-member/get-all-priority-member/?gender=${gender}`,
        }),
    }),
});

export const { useGetRecentMembersQuery, useGetAllPlansQuery, useGetTopBrideGroomQuery } = withoutLoginApi;
