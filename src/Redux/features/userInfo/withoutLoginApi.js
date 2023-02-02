import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const withoutLoginApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getRecentMembers: builder.query({
            query: ({ searchTerm, page }) => `/withoutLogin/recentMembers?_role=member&_keyword=${searchTerm}&_limit=10&_page=${page}`,
            keepUnusedDataFor: 0,
            providesTags: ["AllRecentMembers"],
        }),
        getAllPlans: builder.query({
            query: () => "admin/plan",
        }),
        getTopBrideGroom: builder.query({
            query: gender => `/admin/priority-member/get-all-priority-member/?gender=${gender}`,
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
    }),
});

export const {
    useGetRecentMembersQuery,
    useGetAllPlansQuery,
    useGetTopBrideGroomQuery,
    useRejectSwipeAndMatchMemberMutation,
    useRewindUserMutation,
} = withoutLoginApi;
