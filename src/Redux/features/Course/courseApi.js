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
        getSingleCourseById: builder.query({
            query: id => ({
                url: `/course/get-course/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        buyCourse: builder.mutation({
            query: ({ id, data }) => ({
                url: `/course/buy-a-course/${id}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useGetAllCoursesQuery, useGetSingleCourseByIdQuery, useBuyCourseMutation } = courseApi;
