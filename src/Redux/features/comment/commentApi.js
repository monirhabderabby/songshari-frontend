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
      query: ({ postId ,limit,page}) => ({
        url: `/member/comment/post/${postId}?_limit=${limit}&_page=${page}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      keepUnusedDataFor: 600,
      providesTags: ["posts"],
    }),
    likeSingleComment: builder.mutation({
      query: (commentId) => ({
        url: `/member/comment/like/${commentId}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    likeSingleReply: builder.mutation({
      query: (replyId) => ({
        url: `/member/reply/like/${replyId}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
  }),
});

export const { useAddCommentMutation, useGetAllCommentOfPostQuery, useAddReplyToCommentMutation, useLikeSingleCommentMutation, useLikeSingleReplyMutation } = commentApi;
