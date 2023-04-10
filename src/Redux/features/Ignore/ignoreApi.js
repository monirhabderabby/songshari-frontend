import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const deactivateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyIgnoredMembers: builder.query({
      query: ({page, limit,keyword}) => ({
        url: `/ignore/get-all?_page=${page}&_limit=${limit}&_keyword=${keyword}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    ignoreMember: builder.mutation({
      query: (id) => ({
        url: `/ignore/add/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    unignoreMember: builder.mutation({
      query: (id) => ({
        url: `/ignore/remove/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useGetMyIgnoredMembersQuery,useIgnoreMemberMutation, useUnignoreMemberMutation
} = deactivateApi;
