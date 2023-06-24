import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const findLawyerKaziAgentFilterApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfessionalFilterTypes: builder.query({
      query: () => ({
        url: "/professional/get-all-types",
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
  }),
});

export const { useGetProfessionalFilterTypesQuery } =
  findLawyerKaziAgentFilterApi;
