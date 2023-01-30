// components
import { MobileInbox } from "../../../components/Features/MobileMessege/MobileInbox";
import MobileLogin from "../../../components/pages/Authentications/MobileDesign/MobileLogin";
import MobileLoginProfessional from "../../../components/pages/Authentications/MobileDesign/MobileLoginProfessional";
import MobileSignUp from "../../../components/pages/Authentications/MobileDesign/MobileSignUp";
import MobileSignUpProfessional from "../../../components/pages/Authentications/MobileDesign/MobileSignUpProfessional";
import { MobileOTP } from "../../../components/pages/Authentications/OTP/MobileOTP";
import { MobileDynamicProfile } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfile";
import { MobileDynamicEducationalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfileDetails/MobileDynamicEducationalDetails";
import MobileDynamicFamilyDetails from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfileDetails/MobileDynamicFamilyDetails";
import { MobileDynamicOtherDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfileDetails/MobileDynamicOtherDetails";
import { MobileDynamicPersonalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfileDetails/MobileDynamicPersonalDetails";
import { MobileDynamicPhysicalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfileDetails/MobileDynamicPhysicalDetails";
import { MobileDynamicProfessionalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfileDetails/MobileDynamicProfessionalDetails";
import MobileDynamicSiblingsDetails from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfileDetails/MobileDynamicSiblingsDetails";
import MobileEducationalInfoEdit from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileEditProfile/MobileEducationalInfoEdit";
import MobileFamilyInfoEdit from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileEditProfile/MobileFamilyInfoEdit";
import MobileOthersInfoEdit from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileEditProfile/MobileOthersInfoEdit";
import MobilePersonalInfoEdit from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileEditProfile/MobilePersonalInfoEdit";
import MobilePhysicalInfoEdit from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileEditProfile/MobilePhysicalInfoEdit";
import MobileProfessionalInfoEdit from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileEditProfile/MobileProfessionalInfoEdit";
import MobileSiblingsInfoEdit from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileEditProfile/MobileSiblingsInfoEdit";
import { MobileEducationalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileEducationalDetails";
import MobileFamilyDetails from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileFamilyDetails";
import { MobileOthersDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileOthersDetails";
import { MobilePersonalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobilePersonalDetails";
import { MobilePhysicalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobilePhysicalDetails";
import { MobileProfessionalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileProfessionalDetails";
import MobileSiblingsDetails from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileSiblingsDetails";
import { MobileAccordionPartner } from "../../../components/pages/FindPartner/MobileAccordionPartner/MobileAccordionPartner";
import { FilterResultsMobile } from "../../../components/pages/FindPartner/mobileVersion/FilterResultsMobile";
import { FindPartnersMobile } from "../../../components/pages/FindPartner/mobileVersion/FindPartnersMobile";
import { NewPartnersForMobile } from "../../../components/pages/FindPartner/mobileVersion/NewPartnersForMobile";
import { SuggestedpartnersForMobile } from "../../../components/pages/FindPartner/mobileVersion/SuggestedpartnersForMobile";
import { TopPartnersForMobile } from "../../../components/pages/FindPartner/mobileVersion/TopPartnersForMobile";
import MobileDiamondPlan from "../../../components/pages/Membership/MobileVersion/MobileDiamondPlan";
import MobileFreePlan from "../../../components/pages/Membership/MobileVersion/MobileFreePlan";
import MobileGoldPlan from "../../../components/pages/Membership/MobileVersion/MobileGoldPlan";
import UpgradePlan from "../../../components/pages/Membership/MobileVersion/UpgradePlan";
import MobileActivity from "../../../components/pages/MobileActivity/MobileActivity";
import MobileTopBride from "../../../components/pages/TopProfile/MobileTopProfile/MobileTopBride";
import MobileTopGroom from "../../../components/pages/TopProfile/MobileTopProfile/MobileTopGroom";
import Suggested from "../../../components/pages/TopProfile/Suggested";
import ProfileServices from "../../../components/SingleProfilesUser/ServicesSection/ProfileServices";
import { AboutMov } from "../../../Wrapper/Home/mobileversion/about/AboutMov";
import { AllPosts } from "../../../Wrapper/Home/mobileversion/allposts/AllPosts";
import { CertificateMov } from "../../../Wrapper/Home/mobileversion/CertificateForMobile/CertificateMov";
import { CommunityMov } from "../../../Wrapper/Home/mobileversion/comminuty/CommunityMov";
import { HistoryMov } from "../../../Wrapper/Home/mobileversion/history/HistoryMov";
import { Like } from "../../../Wrapper/Home/mobileversion/Like";
import { MatchesMov } from "../../../Wrapper/Home/mobileversion/MatchesMov";
import { MeetMov } from "../../../Wrapper/Home/mobileversion/meet/MeetMov";
import { MobileHome } from "../../../Wrapper/Home/mobileversion/MobileHome";
import { PrivacyMov } from "../../../Wrapper/Home/mobileversion/privacy/PrivacyMov";

// routes
const MobileMatrimony = [
    {
        id: 1,
        path: "/",
        element: <MobileHome />,
        nestedRoutes: [
            {
                id: 1,
                path: "/",
                element: <Suggested />,
            },
            {
                id: 2,
                path: "mobile-top-bride",
                element: <MobileTopBride />,
            },
            {
                id: 3,
                path: "mobile-top-groom",
                element: <MobileTopGroom />,
            },
        ],
    },
    {
        id: 2,
        path: "/mobile-login",
        element: <MobileLogin />,
    },
    {
        id: 3,
        path: "/mobile-signup",
        element: <MobileSignUp />,
    },
    {
        id: 4,
        path: "/servicemov",
        element: <ProfileServices />,
    },
    {
        id: 5,
        path: "/aboutmov",
        element: <AboutMov />,
    },
    {
        id: 6,
        path: "/meetmov",
        element: <MeetMov />,
    },
    {
        id: 7,
        path: "/machesmov",
        element: <MatchesMov />,
    },
    {
        id: 8,
        path: "/certificatemov",
        element: <CertificateMov />,
    },
    {
        id: 9,
        path: "/like",
        element: <Like />,
    },
    {
        id: 10,
        path: "/historymov",
        element: <HistoryMov />,
    },
    {
        id: 11,
        path: "/privacymov",
        element: <PrivacyMov />,
    },
    {
        id: 12,
        path: "/communitymov",
        element: <CommunityMov />,
    },
    {
        id: 13,
        path: "/mobileupgrade",
        element: <UpgradePlan />,
    },
    {
        id: 14,
        path: "/mobileFreePlan",
        element: <MobileFreePlan />,
    },
    {
        id: 15,
        path: "/mobileGoldPlan",
        element: <MobileGoldPlan />,
    },
    {
        id: 16,
        path: "/mobile/plan",
        element: <MobileDiamondPlan />,
    },
    {
        id: 17,
        path: "/mobile-allposts",
        element: <AllPosts />,
    },
    {
        id: 20,
        path: "/like",
        element: <Like />,
    },
    {
        id: 21,
        path: "/mobileprofile/:id",
        element: <MobileDynamicProfile></MobileDynamicProfile>,
    },
    {
        id: 22,
        path: "/personalprofile/:id",
        element: <MobilePersonalDetails />,
    },
    {
        id: 23,
        path: "/professionalprofile/:id",
        element: <MobileProfessionalDetails />,
    },
    {
        id: 24,
        path: "/educationalprofile/:id",
        element: <MobileEducationalDetails />,
    },
    {
        id: 25,
        path: "/physicalprofile/:id",
        element: <MobilePhysicalDetails />,
    },
    {
        id: 26,
        path: "/otherprofile/:id",
        element: <MobileOthersDetails />,
    },
    {
        id: 27,
        path: "/mobileActivityPage",
        element: <MobileActivity />,
    },
    {
        id: 28,
        path: "/mobileOtp",
        element: <MobileOTP />,
    },
    {
        id: 29,
        path: "/mobile-find-partner",
        element: <FindPartnersMobile />,
        nestedRoutes: [
            {
                id: 1,
                path: "suggested",
                element: <SuggestedpartnersForMobile />,
            },
            {
                id: 2,
                path: "top-partners",
                element: <TopPartnersForMobile />,
            },
            {
                id: 3,
                path: "new-partners",
                element: <NewPartnersForMobile />,
            },
            {
                id: 4,
                path: "filter-box",
                element: <MobileAccordionPartner />,
            },
            {
                id: 5,
                path: "filter-results",
                element: <FilterResultsMobile />,
            },
        ],
    },
    {
        id: 30,
        path: "/familyInfoEdit/:id",
        element: <MobileFamilyInfoEdit />,
    },
    {
        id: 31,
        path: "/siblingsInfoEdit/:id",
        element: <MobileSiblingsInfoEdit />,
    },
    {
        id: 32,
        path: "/othersInfoEdit/:id",
        element: <MobileOthersInfoEdit />,
    },
    {
        id: 33,
        path: "/physicalInfoEdit/:id",
        element: <MobilePhysicalInfoEdit />,
    },
    {
        id: 34,
        path: "/educationalInfoEdit/:id",
        element: <MobileEducationalInfoEdit />,
    },
    {
        id: 35,
        path: "/professionalInfoEdit/:id",
        element: <MobileProfessionalInfoEdit />,
    },
    {
        id: 36,
        path: "/personalInfoEdit/:id",
        element: <MobilePersonalInfoEdit />,
    },
    {
        id: 37,
        path: "/familyprofile/:id",
        element: <MobileFamilyDetails />,
    },
    {
        id: 38,
        path: "/siblingsprofile/:id",
        element: <MobileSiblingsDetails />,
    },
    {
        id: 39,
        path: "/personalProfileDynamic/:id",
        element: <MobileDynamicPersonalDetails />,
    },
    {
        id: 40,
        path: "/professionalProfileDynamic/:id",
        element: <MobileDynamicProfessionalDetails />,
    },
    {
        id: 41,
        path: "/educationalProfileDynamic/:id",
        element: <MobileDynamicEducationalDetails />,
    },
    {
        id: 42,
        path: "/physicalProfileDynamic/:id",
        element: <MobileDynamicPhysicalDetails />,
    },
    {
        id: 43,
        path: "/familyProfileDynamic/:id",
        element: <MobileDynamicFamilyDetails />,
    },
    {
        id: 44,
        path: "/siblingsProfileDynamic/:id",
        element: <MobileDynamicSiblingsDetails />,
    },
    {
        id: 45,
        path: "/otherProfileDynamic/:id",
        element: <MobileDynamicOtherDetails />,
    },
    {
        id: 46,
        path: "/mobile-signup-professional",
        element: <MobileSignUpProfessional />,
    },
    {
        id: 47,
        path: "/mobile-login-professional",
        element: <MobileLoginProfessional />,
    },
    {
        id: 48,
        path: "/mobile-inbox",
        element: <MobileInbox />,
    },
];
export default MobileMatrimony;
