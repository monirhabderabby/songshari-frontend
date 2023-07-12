import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const recentApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getRecentUsers: builder.query({
            query: () => "/withoutLogin/recentMembers",
            keepUnusedDataFor: 0,
        }),
        getRecentLawyers: builder.query({
            query: () => "/withoutLogin/recentLawyers",
            keepUnusedDataFor: 1200,
        }),
        getRecentKazis: builder.query({
            query: () => "/withoutLogin/recentKazi",
            keepUnusedDataFor: 1200,
        }),
        getRecentAgents: builder.query({
            query: () => "/withoutLogin/recentAgents",
            keepUnusedDataFor: 1200,
        }),
        getSuggestedUsers: builder.query({
            query: () => ({
                url: "/member/connections/suggested",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 1200,
        }),
    }),
});

export const { useGetRecentUsersQuery, useLazyGetRecentLawyersQuery, useGetRecentKazisQuery, useGetRecentAgentsQuery, useGetSuggestedUsersQuery } =
    recentApi;
