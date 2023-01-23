import KaziPage from "../../components/pages/Kazi/KaziPage";
import { AddKaziServiceForm } from "../../components/pages/Kazi/KaziServices/KaziServiceAddForm/AddKaziServiceForm";

const kaziRoutes = [
    {
        id: 1,
        path: "/kazi",
        element: <KaziPage />,
    },
    {
        id: 2,
        path: "/addKaziService",
        element: <AddKaziServiceForm />,
    },
];

export default kaziRoutes;
