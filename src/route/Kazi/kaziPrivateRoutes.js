import { KaziReview } from "../../components/pages/Kazi/KaziReview/KaziReview";
import KaziAddServiceForm from "../../components/pages/Kazi/KaziServices/AddServiceForm/KaziAddServiceForm";
import KaziServicesPage from "../../components/pages/Kazi/KaziServices/KaziServicesPages";
import { KaziProfile } from "../../components/pages/Kazi/Profile/KaziProfile";

const kaziPrivateRoutes = [
    {
        id: 1,
        path: "/kaziProfile",
        element: <KaziProfile />,
        nestedRoutes: [
            {
                id: 1,
                path: "kaziServices",
                element: <KaziServicesPage />,
            },
            {
                id: 2,
                path: "review",
                element: <KaziReview />,
            },
            {
                id: 3,
                path: "kaziAddServiceForm",
                element: <KaziAddServiceForm />,
            },
        ],
    },
];

export default kaziPrivateRoutes;
