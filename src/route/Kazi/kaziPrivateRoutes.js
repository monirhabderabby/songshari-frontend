import KaziActivity from "../../components/pages/Kazi/KaziActivity/KaziActivity";
import KaziReview from "../../components/pages/Kazi/KaziReview/KaziReview";
import KaziAddServiceForm from "../../components/pages/Kazi/KaziServices/AddServiceForm/KaziAddServiceForm";
import KaziServicesPage from "../../components/pages/Kazi/KaziServices/KaziServicesPages";
import KaziServiceDetailes from "../../components/pages/Kazi/KaziServices/serviceDetailes/KaziServiceDetailes";
import { KaziProfile } from "../../components/pages/Kazi/Profile/KaziProfile";
import { KaziProfileContainer } from "../../components/pages/Kazi/Profile/profileContainer/KaziProfileContainer";
import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";

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
            {
                id: 4,
                path: "kaziSingleServiceDetails/:id",
                element: <KaziServiceDetailes />,
            },
            {
                id: 5,
                path: "activity",
                element: <KaziActivity />,
            },
            {
                id: 6,
                path: "profile",
                element: <KaziProfileContainer />,
                nestedRoutes: [
                    {
                        id: 1,
                        path: "",
                        element: <ProfileDetails />,
                    },
                ],
            },
        ],
    },
];

export default kaziPrivateRoutes;
