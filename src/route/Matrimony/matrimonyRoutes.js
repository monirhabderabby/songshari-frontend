import { Inbox } from "../../components/Features/Messege/Inbox/Inbox";
import { MessegeBox } from "../../components/Features/Messege/Messeges/MessegeBox";
import Login from "../../components/pages/Authentications/Login";
import LoginAsProfessional from "../../components/pages/Authentications/LoginAsProfessional";
import { OTP } from "../../components/pages/Authentications/OTP/OTP";
import RegAsProfessional from "../../components/pages/Authentications/RegAsProfessional";
import Signup from "../../components/pages/Authentications/SignUp";
import Contact from "../../components/pages/Contact/Contact";
import { DynamicProfilePage } from "../../components/pages/DynamicProfilePage/DynamicProfilePage";
import FindAlawyerPage from "../../components/pages/FindAlawyer/FindAlawyerPage";
import { FindRecentLawyer } from "../../components/pages/FindAlawyer/FindRecentLawyer";
import { FilterResults } from "../../components/pages/FindPartner/FilterResults/FilterResults";
import { FindAPartnerSuggested } from "../../components/pages/FindPartner/FindAPartnerSuggested";
import FindPartners from "../../components/pages/FindPartner/FindPartners";
import { NearestPartners } from "../../components/pages/FindPartner/NearestPartners/NearestPartners";
import { TopPartners } from "../../components/pages/FindPartner/TopPartner/TopPartners";
import { OurTeams } from "../../components/pages/OurTeams/OurTeams";
import { Privacy } from "../../components/pages/Privacy/Privacy";
import Suggested from "../../components/pages/TopProfile/Suggested";
import TopBride from "../../components/pages/TopProfile/TopBride";
import TopGroom from "../../components/pages/TopProfile/TopGroom";
import PaymentSuccess from "../../components/shared/Success/PaymentSuccess";
import About from "../../Wrapper/About/About";
import Homepage from "../../Wrapper/Home/Homepage";
import MemberShip from "../../Wrapper/Membership/MemberShip";
import Shop from "../../Wrapper/Shop/Shop";
import ShopOrders from "../../Wrapper/Shop/ShopOrders/ShopOrders";
import ShopProducts from "../../Wrapper/Shop/ShopProducts/ShopProducts";

const matrimonyRoutes = [
    {
        id: 1,
        path: "/",
        element: <Homepage />,
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
        path: "/about",
        element: <About />,
    },
    {
        id: 5,
        path: "/membership",
        element: <MemberShip />,
    },
    {
        id: 6,
        path: "/regAsProfessional",
        element: <RegAsProfessional />,
    },
    {
        id: 7,
        path: "/loginAsProfessional",
        element: <LoginAsProfessional />,
    },
    {
        id: 8,
        path: "/contact",
        element: <Contact />,
    },
    {
        id: 9,
        path: "/profile/:id",
        element: <DynamicProfilePage />,
    },
    {
        id: 10,
        path: "/privacy-policy",
        element: <Privacy />,
    },
    {
        id: 11,
        path: "/our-teams",
        element: <OurTeams />,
    },
    {
        id: 12,
        path: "/find-partner",
        element: <FindPartners />,
        nestedRoutes: [
            {
                id: 1,
                path: "/find-partner/suggested",
                element: <FindAPartnerSuggested />,
            },
            {
                id: 2,
                path: "top",
                element: <TopPartners />,
            },
            {
                id: 3,
                path: "nearest",
                element: <NearestPartners />,
            },
            {
                id: 4,
                path: "filter",
                element: <FilterResults />,
            },
        ],
    },
    {
        id: 13,
        path: "/otp",
        element: <OTP />,
    },
    {
        id: 14,
        path: "/inbox",
        element: <Inbox />,
        nestedRoutes: [
            {
                id: 1,
                path: ":id",
                element: <MessegeBox />,
            },
        ],
    },
    {
        id: 15,
        path: "/shop",
        element: <Shop />,
        nestedRoutes: [
            { id: 1, path: "shopProducts", element: <ShopProducts /> },
            { id: 2, path: "shopOrders", element: <ShopOrders /> },
        ],
    },
    {
        id: 17,
        path: "/paymentSuccess",
        element: <PaymentSuccess />,
    },
    {
        id: 4,
        path: "/about",
        element: <About />,
    },
    {
        id: 5,
        path: "/membership",
        element: <MemberShip />,
    },
    {
        id: 6,
        path: "/regAsProfessional",
        element: <RegAsProfessional />,
    },
    {
        id: 7,
        path: "/loginAsProfessional",
        element: <LoginAsProfessional />,
    },
    {
        id: 8,
        path: "/contact",
        element: <Contact />,
    },
    {
        id: 9,
        path: "/profile/:id",
        element: <DynamicProfilePage />,
    },
    {
        id: 10,
        path: "/privacy-policy",
        element: <Privacy />,
    },
    {
        id: 11,
        path: "/our-teams",
        element: <OurTeams />,
    },
    {
        id: 12,
        path: "/find-partner",
        element: <FindPartners />,
        nestedRoutes: [
            {
                id: 1,
                path: "suggested",
                element: <FindAPartnerSuggested />,
            },
            {
                id: 2,
                path: "top",
                element: <TopPartners />,
            },
            {
                id: 3,
                path: "nearest",
                element: <NearestPartners />,
            },
            {
                id: 4,
                path: "filter",
                element: <FilterResults />,
            },
        ],
    },
    {
        id: 13,
        path: "/otp",
        element: <OTP />,
    },
    {
        id: 14,
        path: "/inbox",
        element: <Inbox />,
        nestedRoutes: [
            {
                id: 1,
                path: ":id",
                element: <MessegeBox />,
            },
        ],
    },
    {
        id: 15,
        path: "/findLawyers",
        element: <FindAlawyerPage />,
        nestedRoutes: [
            {
                id: 1,
                path: "recent",
                element: <FindRecentLawyer />,
            },
        ],
    },
];

export default matrimonyRoutes;
