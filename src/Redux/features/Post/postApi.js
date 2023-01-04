import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDynamicPosts: builder.query({
            query: id => ({
                url: `/member/post/myposts/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        getMyPostsWithAuth: builder.query({
            query: () => ({
                url: "/member/post",
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        addUserPost: builder.mutation({
            query: data => ({
                url: "/member/post/add",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useGetDynamicPostsQuery, useGetMyPostsWithAuthQuery, useAddUserPostMutation } = postApi;
