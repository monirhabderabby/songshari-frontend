// components
import MobileSingleProfilesUser from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileSingleProfilesUser";
import { PersonalDetailsMobile } from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/PersonalDetailsMobile";

const MobileMatrimonyPrivateRoutes = [
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
    {
        id: 2,
        path: "/dynamicpersonaldetails/:id",
        element: <PersonalDetailsMobile />,
    },
];

export default MobileMatrimonyPrivateRoutes;
