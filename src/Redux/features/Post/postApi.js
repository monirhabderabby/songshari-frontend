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
            query: ({ data }) => ({
                url: "/member/post/add",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
            invalidatesTags: ["posts"],
        }),
        getMyPosts: builder.query({
            query: () => ({
                url: "/member/post/myposts",
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 600,
            providesTags: ["posts"],
        }),
        deletePost: builder.mutation({
            query: id => ({
                url: `/member/post/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            async onQueryStarted(id, { queryFulfilled, dispatch }) {
                // delete post from catch
                const pathResult = dispatch(
                    apiSlice.util.updateQueryData("getMyPosts", undefined, draft => {
                        console.log(draft);
                        const updatedArray = draft?.data?.posts?.filter(item => item._id !== id);

                        return {
                            message: "success",
                            success: true,
                            data: {
                                posts: updatedArray,
                            },
                        };
                    })
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    pathResult.undo();
                }
            },
        }),
    }),
});

export const { useGetDynamicPostsQuery, useGetMyPostsWithAuthQuery, useAddUserPostMutation, useGetMyPostsQuery, useDeletePostMutation } = postApi;
