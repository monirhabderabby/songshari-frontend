// components
import MobileActivity from "../../../components/pages/MobileActivity/MobileActivity";
import MobileSingleProfilesUser from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileSingleProfilesUser";
import { PersonalDetailsMobile } from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/PersonalDetailsMobile";
import { NotificationForMobile } from "../../../components/SingleProfilesUser/Notification/NotificationForMobile";
import ProfileServices from "../../../components/SingleProfilesUser/ServicesSection/ProfileServices";
import { AllPosts } from "../../../Wrapper/Home/mobileversion/allposts/AllPosts";
import { CertificateMov } from "../../../Wrapper/Home/mobileversion/CertificateForMobile/CertificateMov";
import EducationalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/EducationalCertificateMobile/EducationalCertificateMobile";
import PersonalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/PersonalCertificateMobile/PersonalCertificateMobile";
import ProfessionalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/ProfessionalCertificateMobile/ProfessionalCertificateMobile";
import { Like } from "../../../Wrapper/Home/mobileversion/Like";
import { MatchesMov } from "../../../Wrapper/Home/mobileversion/MatchesMov";
import { GalleryContainerForMobile } from "../../../Wrapper/Home/mobileversion/PhotoGallery/GalleryContainerForMobile";
import { Setting } from "../../../Wrapper/Home/mobileversion/setting/Setting";

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

    {
        id: 8,
        path: "/setting",
        element: <Setting />,
    },
    {
        id: 9,
        path: "/notifications",
        element: <NotificationForMobile />,
    },

    {
        id: 10,
        path: "/servicemov",
        element: <ProfileServices />,
    },
    {
        id: 11,
        path: "/machesmov",
        element: <MatchesMov />,
    },

    {
        id: 12,
        path: "/certificatemov",
        element: <CertificateMov />,
    },

    {
        id: 13,
        path: "/like",
        element: <Like />,
    },
    {
        id: 14,
        path: "/mobile-allposts",
        element: <AllPosts />,
    },
    {
        id: 15,
        path: "/mobileActivityPage",
        element: <MobileActivity />,
    },
];

export default MobileMatrimonyPrivateRoutes;
