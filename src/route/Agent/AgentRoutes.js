import FindAgentPage from "../../components/pages/Agent/FindAgent/FindAgentPage";
import { FindRecentAgent } from "../../components/pages/Agent/FindAgent/FindRecentAgent";

const AgentRoutes = [
    {
        id: 1,
        path: "agent",
        element: <FindAgentPage />,
        nestedRoutes: [
            {
                id: 1,
                path: "recent",
                element: <FindRecentAgent />,
            },
        ],
    },
];

export default AgentRoutes;
