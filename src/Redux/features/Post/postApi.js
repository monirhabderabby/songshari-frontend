import apiSlice from "../../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDynamicPosts: builder.query({
            query: id => ({
                url: `/member/post/myposts/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        getMyPostsWithAuth: builder.query({
            query: () => ({
                url: "/member/post",
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        addUserPost: builder.mutation({
            query: data => ({
                url: "/member/post/add",
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useGetDynamicPostsQuery, useGetMyPostsWithAuthQuery, useAddUserPostMutation } = postApi;
