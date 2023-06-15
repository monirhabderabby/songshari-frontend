import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    regAsMember: builder.mutation({
      query: ({ data, ref }) => ({
        url: `/member/register/personalDetail?ref=${ref}`,
        method: "POST",
        body: data,
      }),
    }),
    loginAsMember: builder.mutation({
      query: (data) => ({
        url: "/member/login",
        method: "POST",
        body: data,
      }),
    }),
    regAsProfessional: builder.mutation({
      query: (data) => ({
        url: "/member/register/personalDetail",
        method: "POST",
        body: data,
      }),
    }),
    loginAsProfessional: builder.mutation({
      query: (data) => ({
        url: "/member/login",
        method: "POST",
        body: data,
      }),
    }),
    setPersonalDetails: builder.mutation({
      query: (data) => ({
        url: "/member/personalDetail",
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const updateResult = dispatch(
          apiSlice.util.updateQueryData(
            "getProfileDetailsWIthAuth",
            undefined,
            (draft) => {
              return {
                ...draft,
                coverPhoto: arg.coverPhoto,
              };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          updateResult.undo();
        }
      },
    }),
    setProfessionalDetails: builder.mutation({
      query: (data) => ({
        url: "/member/register/professionalDetail",
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
    }),
    setEducationalDetails: builder.mutation({
      query: (data) => ({
        url: "/member/register/educationalDetail",
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
    }),
    setPhysicalDetails: builder.mutation({
      query: (data) => ({
        url: "/member/register/physicalDetail",
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
    }),
    setOthersDetails: builder.mutation({
      query: (data) => ({
        url: "/member/register/othersDetail",
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
    }),
    setSiblingDetail: builder.mutation({
      query: (data) => ({
        url: "/member/register/siblingDetail",
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
    }),
    updatePersonalDetails: builder.mutation({
      query: (data) => ({
        url: `/member/personalDetail`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["UpdateUserInfo"],
    }),
    updateProfessionalDetails: builder.mutation({
      query: ({ data, id }) => ({
        url: `/member/professionalDetail/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["UpdateUserInfo"],
    }),
    updateEducationalDetails: builder.mutation({
      query: ({ data, id }) => ({
        url: `/member/educationalDetail/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["UpdateUserInfo"],
    }),
    updatePhysicalDetails: builder.mutation({
      query: (data) => ({
        url: `/member/physicalDetail`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["UpdateUserInfo"],
    }),
    updateOthersDetails: builder.mutation({
      query: (data) => ({
        url: `/member/othersDetail`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["UpdateUserInfo"],
    }),
    updateFamilyDetails: builder.mutation({
      query: (data) => ({
        url: `/member/familyDetail`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["UpdateUserInfo"],
    }),
    updateSiblingDetail: builder.mutation({
      query: ({ data, id }) => ({
        url: `/member/siblingDetail/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["UpdateUserInfo"],
    }),
    getProfileDetails: builder.query({
      query: (id) => ({
        url: `/member/personalDetail/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      keepUnusedDataFor: 30,
      providesTags: ["UpdateUserInfo"],
    }),
    getProfileDetailsWIthAuth: builder.query({
      query: () => ({
        url: "/member/personalDetail",
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      keepUnusedDataFor: 1,
      providesTags: ["UpdateUserInfo"],
    }),
    findFilteredUser: builder.mutation({
      query: ({ data, keyword, page }) => ({
        url: `/member/connections/search?_page=${
          page || ""
        }&_limit=9&_keyword=${keyword}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
    }),
    findFilteredUserByAdmin: builder.mutation({
      query: (data) => ({
        url: "/member/connections/search",
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("adminToken")}`,
        },
        body: data,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (otp) => ({
        url: `/verify/verifyEmail/id`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: otp,
      }),
    }),
    reSendOtp: builder.mutation({
      query: () => ({
        url: `/verify/sendOtpByToken`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    getPercentageOfProfileComplete: builder.query({
      query: () => ({
        url: "/member/completed",
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    updatePhotosOnProfile: builder.mutation({
      query: (photos) => ({
        url: `/member/personalDetail`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: photos,
      }),
    }),

    updateProfilePhoto: builder.mutation({
      query: (data) => ({
        url: "/member/personalDetail",
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const updateResult = dispatch(
          apiSlice.util.updateQueryData(
            "getProfileDetailsWIthAuth",
            undefined,
            (draft) => {
              return {
                ...draft,
                profilePhoto: arg.profilePhoto,
              };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          updateResult.undo();
        }
      },
    }),
    addNewCertificate: builder.mutation({
      query: ({ data, id }) => ({
        url: `/member/addNewCertificate/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["certificates"],
    }),
    getUsersAllNotification: builder.query({
      query: ({ page, limit }) => ({
        url: `/member/notification?_page=${page}&_limit=${limit}`,
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    getUserBadges: builder.query({
      query: () => ({
        url: `/member/badges`,
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    addNwMarriageCertificate: builder.mutation({
      query: ({ data, id }) => ({
        url: `/member/marriage/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["certificates"],
    }),
    getSwapData: builder.query({
      query: () => ({
        url: "/swap/get-unique-profile",
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    getSwapMatchedProfiles: builder.query({
      query: () => ({
        url: `/member/like/profile/matches`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    getDefaultPortionAccess: builder.query({
      query: () => ({
        url: "/member/get-profiles",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
    updatePortionAccess: builder.mutation({
      query: ({ data, portion }) => ({
        url: "/member/update-profiles",
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const updateResult = dispatch(
          apiSlice.util.updateQueryData(
            "getDefaultPortionAccess",
            undefined,
            (draft) => {
              let data;
              const oldProfile = draft?.profile;
              const { portion } = arg;

              if (portion === "Lawyer") {
                data = {
                  success: true,
                  profile: {
                    mattrimonyAccess: oldProfile.mattrimonyAccess,
                    lawyerAccess: !oldProfile.lawyerAccess,
                    agentAccess: oldProfile?.agentAccess,
                    kaziAccess: oldProfile?.kaziAccess,
                    shopAccess: oldProfile?.shopAccess,
                    courseAccess: oldProfile?.courseAccess,
                  },
                };
              } else if (portion === "Agent") {
                data = {
                  success: true,
                  profile: {
                    mattrimonyAccess: oldProfile.mattrimonyAccess,
                    lawyerAccess: oldProfile.lawyerAccess,
                    agentAccess: !oldProfile?.agentAccess,
                    kaziAccess: oldProfile?.kaziAccess,
                    shopAccess: oldProfile?.shopAccess,
                    courseAccess: oldProfile?.courseAccess,
                  },
                };
              } else if (portion === "Kazi") {
                data = {
                  success: true,
                  profile: {
                    mattrimonyAccess: oldProfile.mattrimonyAccess,
                    lawyerAccess: oldProfile.lawyerAccess,
                    agentAccess: oldProfile?.agentAccess,
                    kaziAccess: !oldProfile?.kaziAccess,
                    shopAccess: oldProfile?.shopAccess,
                    courseAccess: oldProfile?.courseAccess,
                  },
                };
              } else if (portion === "Shop") {
                data = {
                  success: true,
                  profile: {
                    mattrimonyAccess: oldProfile.mattrimonyAccess,
                    lawyerAccess: oldProfile.lawyerAccess,
                    agentAccess: oldProfile?.agentAccess,
                    kaziAccess: oldProfile?.kaziAccess,
                    shopAccess: !oldProfile?.shopAccess,
                    courseAccess: oldProfile?.courseAccess,
                  },
                };
              } else if (portion === "Course") {
                data = {
                  success: true,
                  profile: {
                    mattrimonyAccess: oldProfile.mattrimonyAccess,
                    lawyerAccess: oldProfile.lawyerAccess,
                    agentAccess: oldProfile?.agentAccess,
                    kaziAccess: oldProfile?.kaziAccess,
                    shopAccess: oldProfile?.shopAccess,
                    courseAccess: !oldProfile?.courseAccess,
                  },
                };
              }

              return data;
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          updateResult.undo();
        }
      },
    }),
    updateVideoBioOnProfile: builder.mutation({
      query: (data) => ({
        url: `/member/personalDetail`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["UpdateUserInfo"],
    }),
    getSingleProfessionDetailById: builder.query({
      query: (id) => ({
        url: `/member/get-professional-detail/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      providesTags: ["UpdateUserInfo"],
    }),
    getSingleEducationDetailById: builder.query({
      query: (id) => ({
        url: `/member/get-educational-detail/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      providesTags: ["UpdateUserInfo"],
    }),
    getSingleSiblingDetailById: builder.query({
      query: (id) => ({
        url: `/member/get-sibling-detail/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      providesTags: ["UpdateUserInfo"],
    }),
  }),
});

export const {
  useGetDefaultPortionAccessQuery,
  useUpdatePortionAccessMutation,
  useRegAsMemberMutation,
  useLoginAsMemberMutation,
  useLoginAsProfessionalMutation,
  useRegAsProfessionalMutation,
  useSetPersonalDetailsMutation,
  useSetProfessionalDetailsMutation,
  useSetEducationalDetailsMutation,
  useSetPhysicalDetailsMutation,
  useSetOthersDetailsMutation,
  useGetProfileDetailsQuery,
  useUpdatePersonalDetailsMutation,
  useUpdateEducationalDetailsMutation,
  useUpdatePhysicalDetailsMutation,
  useUpdateOthersDetailsMutation,
  useUpdateProfessionalDetailsMutation,
  useGetProfileDetailsWIthAuthQuery,
  useFindFilteredUserMutation,
  useUpdateProfilePhotoMutation,
  useVerifyEmailMutation,
  useReSendOtpMutation,
  useFindFilteredUserByAdminMutation,
  useGetPercentageOfProfileCompleteQuery,
  useUpdatePhotosOnProfileMutation,
  useUpdateFamilyDetailsMutation,
  useSetSiblingDetailMutation,
  useUpdateSiblingDetailMutation,
  useAddNewCertificateMutation,
  useGetUsersAllNotificationQuery,
  useGetUserBadgesQuery,
  useAddNwMarriageCertificateMutation,
  useGetSwapDataQuery,
  useGetSwapMatchedProfilesQuery,
  useUpdateVideoBioOnProfileMutation,
  useGetSingleProfessionDetailByIdQuery,
  useGetSingleEducationDetailByIdQuery,
  useGetSingleSiblingDetailByIdQuery,
} = userApi;
