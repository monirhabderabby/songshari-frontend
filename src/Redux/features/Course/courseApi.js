import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllCourses: builder.query({
            query: ({ page, limit, categroyId, typeId, skill }) => ({
                url: `/course/all-courses?page=${page}&limit=${limit}&categroyId=${categroyId}&typeId=${typeId}&skill=${skill}`,
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
        getMyCourses: builder.query({
            query: () => ({
                url: `/course/my-courses`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getAllTypes: builder.query({
            query: () => ({
                url: "/course/all-types",
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getAllCourseCategory: builder.query({
            query: () => ({
                url: `/shop/category/get-all-categories?type=course`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getMyCourseMilestion: builder.query({
            query: id => ({
                url: `/course/section/all-sections/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        contentStatusUpdate: builder.mutation({
            query: id => ({
                url: `/course/content/change-status/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        createCourseReview: builder.mutation({
            query: data => ({
                url: "/course/review/create",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        getAllReviewsByCourseID: builder.query({
            query: id => ({
                url: `/course/review/all/${id}?page=1&limit=3`,
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getCourseReviewOfMe: builder.query({
            query: id => ({
                url: `/course/review/mine/${id}`,
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
    }),
});

export const {
    useGetAllCoursesQuery,
    useGetSingleCourseByIdQuery,
    useBuyCourseMutation,
    useGetMyCoursesQuery,
    useGetAllTypesQuery,
    useGetAllCourseCategoryQuery,
    useGetMyCourseMilestionQuery,
    useContentStatusUpdateMutation,
    useCreateCourseReviewMutation,
    useGetAllReviewsByCourseIDQuery,
    useGetCourseReviewOfMeQuery,
} = courseApi;
