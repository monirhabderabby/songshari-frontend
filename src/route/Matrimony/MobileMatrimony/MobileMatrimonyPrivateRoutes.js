// components
import MobileSingleProfilesUser from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileSingleProfilesUser";
import { PersonalDetailsMobile } from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/PersonalDetailsMobile";

const mobileMatrimonyPrivateRoutes = [
    {
        id: 1,
        path: "/mobileuserprofile",
        element: <MobileSingleProfilesUser />,
        nestedRoutes: [
            {
                id: 1,
                path: "personaldetailsmov",
                element: <PersonalDetailsMobile />,
            },
        ],
    },
];

export default mobileMatrimonyPrivateRoutes;
