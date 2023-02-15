import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createSingleServices: builder.mutation({
            query: data => ({
                url: "/service/create",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
            invalidatesTags: ["myServices"],
        }),
        updateSingleService: builder.mutation({
            query: ({ id, data }) => ({
                url: `/service/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
            invalidatesTags: ["myServices"],
        }),
        getMyServices: builder.query({
            query: () => ({
                url: "/service/all",
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 0,
            providesTags: ["myServices"],
        }),
        getSuggestedServices: builder.query({
            query: (page, keyword) => ({
                url: `/member/service/suggested?_page=${page}&_limit=10&_keyword=${keyword}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        getServiceById: builder.query({
            query: id => ({
                url: `/service/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 0,
            providesTags: ["getServiceById"],
        }),
        serviceDelete: builder.mutation({
            query: id => ({
                url: `/service/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            invalidatesTags: ["myServices"],
        }),
        getServiceByUserId: builder.query({
            query: id => ({
                url: `/service/all-by-role/${id}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        changeServiceStatus: builder.mutation({
            query: id => ({
                url: `/service/status/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            invalidatesTags: ["getServiceById"],
        }),
        getAllServicesByrole: builder.query({
            query: ({ role, page, limit }) => ({
                url: `/service/all-by-user?role=${role}&page=${page}&limit=${limit}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
    }),
});

export const {
    useGetMyServicesQuery,
    useGetServiceByIdQuery,
    useUpdateSingleServiceMutation,
    useGetSuggestedServicesQuery,
    useCreateSingleServicesMutation,
    useServiceDeleteMutation,
    useGetServiceByUserIdQuery,
    useChangeServiceStatusMutation,
    useGetAllServicesByroleQuery,
} = serviceApi;
