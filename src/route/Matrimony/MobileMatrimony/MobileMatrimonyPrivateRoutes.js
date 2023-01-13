// components
import MobileSingleProfilesUser from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileSingleProfilesUser";
import { PersonalDetailsMobile } from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/PersonalDetailsMobile";
import EducationalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/EducationalCertificateMobile/EducationalCertificateMobile";
import PersonalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/PersonalCertificateMobile/PersonalCertificateMobile";
import ProfessionalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/ProfessionalCertificateMobile/ProfessionalCertificateMobile";
import { MatchesMov } from "../../../Wrapper/Home/mobileversion/MatchesMov";
import { GalleryContainerForMobile } from "../../../Wrapper/Home/mobileversion/PhotoGallery/GalleryContainerForMobile";

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
    {
        id: 3,
        path: "/educationalCertificateMov",
        element: <EducationalCertificateMobile />,
    },
    {
        id: 4,
        path: "/professionalCertificateMov",
        element: <ProfessionalCertificateMobile />,
    },
    {
        id: 5,
        path: "/personalCertificateMov",
        element: <PersonalCertificateMobile />,
    },
    {
        id: 6,
        path: "/matchesmov",
        element: <MatchesMov />,
    },
    {
        id: 7,
        path: "/Gallery/mobile/:id",
        element: <GalleryContainerForMobile />,
    },
];

export default MobileMatrimonyPrivateRoutes;
