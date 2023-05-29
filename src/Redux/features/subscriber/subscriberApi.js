import apiSlice from "../../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addSubscriber: builder.mutation({
            query: data => ({
                url: "/subscriber/save",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["myServices"],
        }),
    }),
});

export const { useAddSubscriberMutation } = serviceApi;
