import apiSlice from "../../api/apiSlice";

export const matchesPreferenceApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addMatrimonyUserMatchPreference: builder.mutation({
            query: data => ({
                url: "/member/register/matchPreference",
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useAddMatrimonyUserMatchPreferenceMutation } = matchesPreferenceApi;
