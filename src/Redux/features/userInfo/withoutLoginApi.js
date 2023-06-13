import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const withoutLoginApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getRecentMembers: builder.query({
            query: ({ searchTerm, page, role, limit }) =>
                `/withoutLogin/recentMembers?_role=${role}&_keyword=${searchTerm}&_limit=${limit}&_page=${page}`,
            keepUnusedDataFor: 60,
        }),
        getRecentMembersWithAuth: builder.query({
            query: ({ searchTerm, page, role, limit }) => ({
                url: `/withoutLogin/recent-members-by-me?_role=${role}&_keyword=${searchTerm}&_limit=${limit}&_page=${page}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 0,
            providesTags: ["AllRecentMembers"],
        }),
        getAllPlans: builder.query({
            query: () => "admin/plan",
        }),
        getTopBrideGroom: builder.query({
            query: gender => `/admin/priority-member/get-all-priority-member/?gender=${gender}`,
            keepUnusedDataFor: 0,
        }),
        rejectSwipeAndMatchMember: builder.mutation({
            query: id => ({
                url: `/member/like/profile/reject/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            invalidatesTags: ["AllRecentMembers"],
        }),
        rewindUser: builder.mutation({
            query: () => ({
                url: `/member/like/profile/rewind`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            invalidatesTags: ["AllRecentMembers"],
        }),
        swipeProfileLike: builder.mutation({
            query: id => ({
                url: `/member/like/profile/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            invalidatesTags: ["AllRecentMembers"],
        }),
    }),
});

export const {
    useGetRecentMembersQuery,
    useGetAllPlansQuery,
    useGetTopBrideGroomQuery,
    useRejectSwipeAndMatchMemberMutation,
    useRewindUserMutation,
    useGetRecentMembersWithAuthQuery,
    useSwipeProfileLikeMutation,
} = withoutLoginApi;
