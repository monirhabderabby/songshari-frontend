import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";
import { SingleProfiles } from "../../components/SingleProfilesUser/SingleProfiles";
import { Container } from "../../Wrapper/Stepper/Container";

const matrimonyPrivateRoutes = [
    {
        id: 1,
        path: "/userprofile",
        element: <SingleProfiles />,
        nestedRoutes: [
            {
                id: 1,
                path: "",
                element: <ProfileDetails />,
            },
            {
                id: 2,
                path: "edit",
            },
        ],
    },
    {
        id: 2,
        path: "/stepper",
        element: <Container />,
    },
];

export default matrimonyPrivateRoutes;
