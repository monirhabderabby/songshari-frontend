import apiSlice from "../../api/apiSlice";

export const connectionApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addFriend: builder.mutation({
            query: id => ({
                url: `/member/connections/add/${id}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
        }),
        getAllSentRequest: builder.query({
            query: () => ({
                url: "/member/connections/sentRequests",
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        getAllFriendRequest: builder.query({
            query: () => ({
                url: "/member/connections/requests",
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        acceptFriendRequest: builder.mutation({
            query: ({ id }) => ({
                url: `/member/connections/accept/${id}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                // Ontimistic cache update
                const updatePatch = dispatch(
                    apiSlice.util.updateQueryData("getAllFriendRequest", undefined, draft => {
                        const result = draft?.data?.user?.filter(d => d._id !== arg?.id);
                        return {
                            success: true,
                            data: {
                                user: result,
                            },
                            message: "Data found",
                        };
                    })
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    updatePatch.undo();
                }
            },
        }),
        getAllConnectedConnections: builder.query({
            query: () => ({
                url: "/member/connections",
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        cancleSentRequest: builder.mutation({
            query: ({ id }) => ({
                url: `/member/connections/sentRequest/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                // Optimistic cache update start
                const updateResult = dispatch(
                    apiSlice.util.updateQueryData("getAllSentRequest", undefined, draft => {
                        const result = draft?.data?.user?.filter(d => d?._id !== arg.id);

                        // return new array
                        return {
                            success: true,
                            data: {
                                user: result,
                            },
                            message: "Data found",
                        };
                    })
                );

                // Final Decison of cache update
                try {
                    await queryFulfilled;
                } catch (error) {
                    updateResult.undo();
                }
            },
        }),
        getMatchedUsers: builder.query({
            query: () => ({
                url: "/member/connections/matchesAndPercentage",
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
        }),
        likeSingleProfile: builder.mutation({
            query: id => ({
                url: `/member/like/profile/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
        }),
        rejectFriendReqeust: builder.mutation({
            query: ({ id }) => ({
                url: `/member/connections/sentRequest/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                // Ontimistic cache update
                const updateResult = dispatch(
                    apiSlice.util.updateQueryData("getAllFriendRequest", undefined, draft => {
                        const result = draft?.data?.user?.filter(d => d?._id !== arg?.id);
                        return {
                            success: true,
                            data: {
                                user: result,
                            },
                            message: "Data found",
                        };
                    })
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    updateResult.undo();
                }
            },
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
    useLikeSingleProfileMutation,
    useRejectFriendReqeustMutation,
} = connectionApi;
