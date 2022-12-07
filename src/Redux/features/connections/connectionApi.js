import apiSlice from "../../api/apiSlice";

export const connectionApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addFriend: builder.mutation({
            query: id => ({
                url: `/member/connections/add/${id}`,
                method: "POST",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            }),
        }),
        getAllSentRequest: builder.query({
            query: () => ({
                url: "/member/connections/sentRequests",
                method: "GET",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            }),
        }),
        getAllFriendRequest: builder.query({
            query: () => ({
                url: "/member/connections/requests",
                method: "GET",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            }),
        }),
        acceptFriendRequest: builder.mutation({
            query: ({ id }) => ({
                url: `/member/connections/accept/${id}`,
                method: "POST",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                dispatch(
                    apiSlice.util.updateQueryData("getAllFriendRequest", localStorage.getItem("accessToken"), draft => {
                        draft = draft.data.connectionRequests.filter(c => c._id !== arg.id);
                    })
                );
            },
        }),
        getAllConnectedConnections: builder.query({
            query: () => ({
                url: "/member/connections",
                method: "GET",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            }),
        }),
        cancleSentRequest: builder.mutation({
            query: ({ id }) => ({
                url: `/member/connections/sentRequest/${id}`,
                method: "DELETE",
            }),
        }),
        getMatchedUsers: builder.query({
            query: () => ({
                url: "/member/connections/matchesAndPercentage",
                method: "GET",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            }),
        }),
    }),
});

export const {
    useAddFriendMutation,
    useGetAllSentRequestQuery,
    useGetAllFriendRequestQuery,
    useAcceptFriendRequestMutation,
    useGetAllConnectedConnectionsQuery,
    useCancleSentRequestMutation,
    useGetMatchedUsersQuery,
} = connectionApi;