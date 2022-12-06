import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    endpoints: builder => ({}),
    tagTypes: ["allGetFriendRequest"],
});

export default apiSlice;
