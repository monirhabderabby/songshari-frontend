// components
import MobileLogin from "../../../components/pages/Authentications/MobileDesign/MobileLogin";
import MobileSignUp from "../../../components/pages/Authentications/MobileDesign/MobileSignUp";
import { MobileOTP } from "../../../components/pages/Authentications/OTP/MobileOTP";
import { MobileDynamicProfile } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfile";
import { MobileEducationalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileEducationalDetails";
import { MobileOthersDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileOthersDetails";
import { MobilePersonalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobilePersonalDetails";
import { MobilePhysicalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobilePhysicalDetails";
import { MobileProfessionalDetails } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileProfessionalDetails";
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
import MobileTopBride from "../../../components/pages/TopProfile/MobileTopProfile/MobileTopBride";
import MobileTopGroom from "../../../components/pages/TopProfile/MobileTopProfile/MobileTopGroom";
import Suggested from "../../../components/pages/TopProfile/Suggested";
import { AboutMov } from "../../../Wrapper/Home/mobileversion/about/AboutMov";
import { CommunityMov } from "../../../Wrapper/Home/mobileversion/comminuty/CommunityMov";
import { HistoryMov } from "../../../Wrapper/Home/mobileversion/history/HistoryMov";
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
        path: "/mobileDiamondPlan",
        element: <MobileDiamondPlan />,
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
];
export default MobileMatrimony;
