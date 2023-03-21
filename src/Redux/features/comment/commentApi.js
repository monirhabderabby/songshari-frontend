import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const commentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: ({ data, postId }) => ({
        url: `/member/comment/add/${postId}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
    addReplyToComment: builder.mutation({
      query: ({ data, commentId }) => ({
        url: `/member/reply/comment/${commentId}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
    getAllCommentOfPost: builder.query({
      query: ({ postId }) => ({
        url: `/member/comment/post/${postId}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      keepUnusedDataFor: 600,
      providesTags: ["posts"],
    }),
  }),
});

export const { useAddCommentMutation, useGetAllCommentOfPostQuery, useAddReplyToCommentMutation } = commentApi;
