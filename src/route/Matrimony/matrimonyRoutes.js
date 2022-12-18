import Membership from "../../components/membership/Membership";
import Login from "../../components/pages/Authentications/Login";
import LoginAsProfessional from "../../components/pages/Authentications/LoginAsProfessional";
import RegAsProfessional from "../../components/pages/Authentications/RegAsProfessional";
import Signup from "../../components/pages/Authentications/SignUp";
import Contact from "../../components/pages/Contact/Contact";
import { DynamicPhotosGallary } from "../../components/pages/DynamicProfilePage/DynamicPhotosGallary";
import { DynamicProfilePage } from "../../components/pages/DynamicProfilePage/DynamicProfilePage";
import FindPartners from "../../components/pages/FindPartner/FindPartners";
import { OurTeams } from "../../components/pages/OurTeams/OurTeams";
import { Privacy } from "../../components/pages/Privacy/Privacy";
import SingleProfiles from "../../components/SingleProfilesUser/SingleProfiles";
import About from "../../Wrapper/About/About";
import Homepage from "../../Wrapper/Home/Homepage";
import { Container } from "../../Wrapper/Stepper/Container";

const matrimonyRoutes = [
    {
        path: "/",
        element: Homepage,
    },
    {
        path: "/login",
        element: Login,
    },
    {
        path: "/signup",
        element: Signup,
    },
    {
        path: "/userprofile",
        element: SingleProfiles,
    },
    {
        path: "/about",
        element: About,
    },
    {
        path: "/membership",
        element: Membership,
    },
    {
        path: "/regAsProfessional",
        element: RegAsProfessional,
    },
    {
        path: "/loginAsProfessional",
        element: LoginAsProfessional,
    },
    {
        path: "/contact",
        element: Contact,
    },
    {
        path: "/profile/:id",
        element: DynamicProfilePage,
    },
    {
        path: "/gallery/:id",
        element: DynamicPhotosGallary,
    },
    {
        path: "/privacy-policy",
        element: Privacy,
    },
    {
        path: "/our-teams",
        element: OurTeams,
    },
    {
        path: "/find-partner",
        element: FindPartners,
    },
    {
        path: "/stepper",
        element: Container,
    },
];
