// components 
import MobileLogin from "../../../components/pages/Authentications/MobileDesign/MobileLogin";
import MobileSignUp from "../../../components/pages/Authentications/MobileDesign/MobileSignUp";
import { DynamicProfilePage } from "../../../components/pages/DynamicProfilePage/DynamicProfilePage";
import MobileDiamondPlan from "../../../components/pages/Membership/MobileVersion/MobileDiamondPlan";
import MobileFreePlan from "../../../components/pages/Membership/MobileVersion/MobileFreePlan";
import MobileGoldPlan from "../../../components/pages/Membership/MobileVersion/MobileGoldPlan";
import UpgradePlan from "../../../components/pages/Membership/MobileVersion/UpgradePlan";
import MobileSuggested from "../../../components/pages/TopProfile/MobileTopProfile/MobileSuggested";
import MobileTopBride from "../../../components/pages/TopProfile/MobileTopProfile/MobileTopBride";
import MobileTopGroom from "../../../components/pages/TopProfile/MobileTopProfile/MobileTopGroom";
import Suggested from "../../../components/pages/TopProfile/Suggested";
import ProfileServices from "../../../components/SingleProfilesUser/ServicesSection/ProfileServices";
import { AboutMov } from "../../../Wrapper/Home/mobileversion/about/AboutMov";
import { AllPosts } from "../../../Wrapper/Home/mobileversion/allposts/AllPosts";
import { CertificateMov } from "../../../Wrapper/Home/mobileversion/CertificateMov";
import { CommunityMov } from "../../../Wrapper/Home/mobileversion/comminuty/CommunityMov";
import { HistoryMov } from "../../../Wrapper/Home/mobileversion/history/HistoryMov";
import { Like } from "../../../Wrapper/Home/mobileversion/Like";
import { MatchesMov } from "../../../Wrapper/Home/mobileversion/MatchesMov";
import { MeetMov } from "../../../Wrapper/Home/mobileversion/meet/MeetMov";
import { MobileHome } from "../../../Wrapper/Home/mobileversion/MobileHome";
import Certificate from "../../../Wrapper/Home/mobileversion/PhotoGallery/certificate/Certificate";
import { PrivacyMov } from "../../../Wrapper/Home/mobileversion/privacy/PrivacyMov";
import { Setting } from "../../../Wrapper/Home/mobileversion/setting/Setting";

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
        path: "/setting",
        element: <Setting />,
    },
    {
        id: 5,
        path: "/servicemov",
        element: <ProfileServices />,
    },
    {
        id: 6,
        path: "/aboutmov",
        element: <AboutMov />,
    },
    {
        id: 7,
        path: "/meetmov",
        element: <MeetMov />,
    },
    {
        id: 8,
        path: "/machesmov",
        element: <MatchesMov />,
    },
    {
        id: 9,
        path: "/certificatemov",
        element: <CertificateMov />,
    },
    {
        id: 10,
        path: "/like",
        element: <Like />,
    },
    {
        id: 11,
        path: "/historymov",
        element: <HistoryMov />,
    },
    {
        id: 12,
        path: "/privacymov",
        element: <PrivacyMov />,
    },
    {
        id: 13,
        path: "/communitymov",
        element: <CommunityMov />,
    },
    {
        id: 14,
        path: "/mobilecertificate",
        element: <Certificate />,
    },
    {
        id: 15,
        path: "/mobileupgrade",
        element: <UpgradePlan />,
    },
    {
        id: 16,
        path: "/mobileFreePlan",
        element: <MobileFreePlan />,
    },
    {
        id: 17,
        path: "/mobileGoldPlan",
        element: <MobileGoldPlan />,
    },
    {
        id: 18,
        path: "/mobileDiamondPlan",
        element: <MobileDiamondPlan />,
    },
    {
        id: 19,
        path: "/allposts",
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
        element: <h1>Hello</h1>,
      },
];
export default MobileMatrimony;
