import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiBaseUrl } from "../../config/index";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({}),
  tagTypes: [
    "allGetFriendRequest",
    "posts",
    "AllRecentMembers",
    "myServices",
    "getServiceById",
    "allOrders",
    "AllOrdersByMember",
    "reviewByUserAndService",
    "MyOrders",
    "MySuccessStory",
    "allTickets",
    "ignoredUsers",
    "myWithdrawRequests",
    "certificates",
    "UpdateUserInfo",
  ],
});

export default apiSlice;
