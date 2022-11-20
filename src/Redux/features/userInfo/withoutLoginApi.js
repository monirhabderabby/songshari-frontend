import apiSlice from "../../api/apiSlice";

export const withoutLoginApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getRecentMembers: builder.query({
            query: () => "withoutLogin/recentMembers",
        }),
    }),
});

export const { useGetRecentMembersQuery } = withoutLoginApi;
