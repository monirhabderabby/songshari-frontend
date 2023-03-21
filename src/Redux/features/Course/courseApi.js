import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllCourses: builder.query({
            query: ({ page, limit }) => ({
                url: `/course/all-courses?page=${page}&limit=${limit}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
    }),
});

export const { useGetAllCoursesQuery } = courseApi;
