
import Login from "../../../components/pages/Authentications/Login";
import Signup from "../../../components/pages/Authentications/SignUp";
import Suggested from "../../../components/pages/TopProfile/Suggested";
import TopBride from "../../../components/pages/TopProfile/TopBride";
import TopGroom from "../../../components/pages/TopProfile/TopGroom";
import ProfileServices from "../../../components/SingleProfilesUser/ServicesSection/ProfileServices";
import { AboutMov } from "../../../Wrapper/Home/mobileversion/about/AboutMov";
import { CertificateMov } from "../../../Wrapper/Home/mobileversion/CertificateMov";
import { Like } from "../../../Wrapper/Home/mobileversion/Like";
import { MatchesMov } from "../../../Wrapper/Home/mobileversion/MatchesMov";
import { MeetMov } from "../../../Wrapper/Home/mobileversion/meet/MeetMov";
import { MobileHome } from "../../../Wrapper/Home/mobileversion/MobileHome";
import { Setting } from "../../../Wrapper/Home/mobileversion/setting/Setting";

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
                path: "top-bride",
                element: <TopBride />,
            },
            {
                id: 3,
                path: "top-groom",
                element: <TopGroom />,
            },
        ],
    },
    {
        id: 2,
        path: "/login",
        element: <Login />,
    },
    {
        id: 3,
        path: "/signup",
        element: <Signup />,
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

 
];
export default MobileMatrimony;
