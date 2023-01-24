import MobileLoginProfessional from "../../components/pages/Authentications/MobileDesign/MobileLoginProfessional";
import MobileSignUpProfessional from "../../components/pages/Authentications/MobileDesign/MobileSignUpProfessional";
import KaziPage from "../../components/pages/Kazi/KaziPage";

const kaziRoutes = [
    {
        id: 1,
        path: "/kazi",
        element: <KaziPage />,
    },
    {
        id: 3,
        path: "/mobile-signup-professional",
        element: <MobileSignUpProfessional />,
    },
    {
        id: 4,
        path: "/mobile-login-professional",
        element: <MobileLoginProfessional />,
    },
];

export default kaziRoutes;
