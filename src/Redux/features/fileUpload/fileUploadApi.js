import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const fileUploadApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        photosUploadOnServer: builder.mutation({
            query: data => ({
                url: "/upload/file",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        uploadCoverPhoto: builder.mutation({
            query: data => ({
                url: "/upload/file",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { usePhotosUploadOnServerMutation } = fileUploadApi;
