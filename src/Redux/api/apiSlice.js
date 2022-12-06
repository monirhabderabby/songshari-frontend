import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api-shongshari.onrender.com",
    }),
    endpoints: builder => ({}),
    tagTypes: ["allGetFriendRequest"],
});

export default apiSlice;
