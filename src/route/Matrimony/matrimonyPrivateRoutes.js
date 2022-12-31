import EditEducationalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditEducationalInfo";
import EditOthersInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditOthersInfo";
import EditPersonalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPersonalInfo";
import EditPhysicalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPhysicalInfo";
import EditProfesionalInfo from "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditProfesionalInfo";
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
                nestedRoutes: [
                    {
                        id: 1,
                        path: "personalinfo/:id",
                        element: <EditPersonalInfo />,
                    },
                    {
                        id: 2,
                        path: "profesionalinfo/:id",
                        element: <EditProfesionalInfo />,
                    },
                    {
                        id: 3,
                        path: "educationalinfo/:id",
                        element: <EditEducationalInfo />,
                    },
                    {
                        id: 4,
                        path: "physicalinfo/:id",
                        element: <EditPhysicalInfo />,
                    },
                    {
                        id: 5,
                        path: "othersinfo/:id",
                        element: <EditOthersInfo />,
                    },
                ],
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
