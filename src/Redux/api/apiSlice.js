import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiBaseUrl } from "../../config/index"

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: apiBaseUrl,
    }),
    endpoints: builder => ({}),
    tagTypes: ["allGetFriendRequest"],
});

export default apiSlice;
