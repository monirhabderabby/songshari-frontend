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
        getAllRequest: builder.query({
            query: () => ({
                url: "/member/connections/requests",
                method: "GET",
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
    }),
});

export const { useAddFriendMutation, useGetAllRequestQuery, useGetAllSentRequestQuery } = connectionApi;
