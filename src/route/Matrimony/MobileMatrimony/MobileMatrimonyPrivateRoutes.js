// components
import { MobileDynamicProfile } from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfile";
import MobileDynamicProfileActivity from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfileDetails/MobileDynamicProfileActivity";
import MobileDynamicProfileConnections from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicProfileDetails/MobileDynamicProfileConnections";
import MobileDynamicServicesContainer from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileDynamicServicesContainer/MobileDynamicServicesContainer";
import MobileUserConnections from "../../../components/pages/DynamicProfilePage/MobileDynamicProfile/MobileUserConnections/MobileUserConnections";
import { MobileAccordionPartner } from "../../../components/pages/FindPartner/MobileAccordionPartner/MobileAccordionPartner";
import { FilterResultsMobile } from "../../../components/pages/FindPartner/mobileVersion/FilterResultsMobile";
import { FindPartnersMobile } from "../../../components/pages/FindPartner/mobileVersion/FindPartnersMobile";
import { NewPartnersForMobile } from "../../../components/pages/FindPartner/mobileVersion/NewPartnersForMobile";
import { SuggestedpartnersForMobile } from "../../../components/pages/FindPartner/mobileVersion/SuggestedpartnersForMobile";
import { TopPartnersForMobile } from "../../../components/pages/FindPartner/mobileVersion/TopPartnersForMobile";
import MobileActivity from "../../../components/pages/MobileActivity/MobileActivity";
import MobileSingleProfilesUser from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileSingleProfilesUser";
import { PersonalDetailsMobile } from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/PersonalDetailsMobile";
import { NotificationForMobile } from "../../../components/SingleProfilesUser/Notification/NotificationForMobile";
import { AllPosts } from "../../../Wrapper/Home/mobileversion/allposts/AllPosts";
import { CertificateMov } from "../../../Wrapper/Home/mobileversion/CertificateForMobile/CertificateMov";
import EducationalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/EducationalCertificateMobile/EducationalCertificateMobile";
import PersonalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/PersonalCertificateMobile/PersonalCertificateMobile";
import ProfessionalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/ProfessionalCertificateMobile/ProfessionalCertificateMobile";
import { Like } from "../../../Wrapper/Home/mobileversion/Like";
import { MatchesMov } from "../../../Wrapper/Home/mobileversion/MatchesMov";
import MobileDynamicSingleServiceContainer from "../../../Wrapper/Home/mobileversion/MobileDynamicSingleServiceContainer/MobileDynamicSingleServiceContainer";
import MobileDynamicSingleServiceStatusContainer from "../../../Wrapper/Home/mobileversion/MobileDynamicSingleServiceStatusContainer/MobileDynamicSingleServiceStatusContainer";
import SuggestedAgentForMobile from "../../../Wrapper/Home/mobileversion/MobileFindLawyerAgentKazi/SuggestedAgentForMobile/SuggestedAgentForMobile";
import SuggestedKaziForMobile from "../../../Wrapper/Home/mobileversion/MobileFindLawyerAgentKazi/SuggestedKaziForMobile/SuggestedKaziForMobile";
import SuggestedLawyerForMobile from "../../../Wrapper/Home/mobileversion/MobileFindLawyerAgentKazi/SuggestedLawyerForMobile/SuggestedLawyerForMobile";
import MobileLawyerAgentKaziReviewsContainer from "../../../Wrapper/Home/mobileversion/MobileLawyerAgentKaziReviewsContainer/MobileLawyerAgentKaziReviewsContainer";
import MobileUserAgentServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserAgentServices";
import MobileUserAllServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserAllServices";
import MobileUserCancelledServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserCancelledServices";
import MobileUserCompletedServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserCompletedServices";
import MobileUserKaziServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserKaziServices";
import MobileUserLawyerServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserLawyerServices";
import MobileUserOngoingServices from "../../../Wrapper/Home/mobileversion/MobileUserServicesPage/MobileUserOngoingServices";
import { GalleryContainerForMobile } from "../../../Wrapper/Home/mobileversion/PhotoGallery/GalleryContainerForMobile";
import { Setting } from "../../../Wrapper/Home/mobileversion/setting/Setting";
import MobileStepper from "../../../Wrapper/Stepper/MobileStepper/MobileStepper";

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
    path: "/mobile-find-partner",
    element: <FindPartnersMobile />,
    nestedRoutes: [
      {
        id: 1,
        path: "suggested",
        element: <SuggestedpartnersForMobile />,
      },
      {
        id: 2,
        path: "top-partners",
        element: <TopPartnersForMobile />,
      },
      {
        id: 3,
        path: "new-partners",
        element: <NewPartnersForMobile />,
      },
      {
        id: 4,
        path: "filter-box",
        element: <MobileAccordionPartner />,
      },
      {
        id: 5,
        path: "filter-results",
        element: <FilterResultsMobile />,
      },
    ],
  },
  {
    id: 11,
    path: "/matchesmov",
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
  {
    id: 29,
    path: "/allServices",
    element: <MobileUserAllServices />,
  },
  {
    id: 30,
    path: "/ongoingServices",
    element: <MobileUserOngoingServices />,
  },
  {
    id: 31,
    path: "/cancelledServices",
    element: <MobileUserCancelledServices />,
  },
  {
    id: 32,
    path: "/agentServices",
    element: <MobileUserAgentServices />,
  },
  {
    id: 33,
    path: "/kaziServices",
    element: <MobileUserKaziServices />,
  },
  {
    id: 34,
    path: "/lawyerServices",
    element: <MobileUserLawyerServices />,
  },
  {
    id: 35,
    path: "/serviceMov/:id",
    element: <MobileDynamicSingleServiceContainer />,
  },
  {
    id: 36,
    path: "/serviceStatusMov/running/:id",
    element: <MobileDynamicSingleServiceStatusContainer />,
  },
  {
    id: 37,
    path: "/serviceStatusMov/cancelled/:id",
    element: <MobileDynamicSingleServiceStatusContainer />,
  },
  {
    id: 38,
    path: "/serviceStatusMov/completed/:id",
    element: <MobileDynamicSingleServiceStatusContainer />,
  },
  {
    id: 39,
    path: "/connections/:id",
    element: <MobileUserConnections />,
  },
  {
    id: 40,
    path: "/galleryMov/:id",
    element: <GalleryContainerForMobile />,
  },
  {
    id: 41,
    path: "/findLawyerMov",
    element: <SuggestedLawyerForMobile />,
  },
  {
    id: 42,
    path: "/findKaziMov",
    element: <SuggestedKaziForMobile role="kazi" />,
  },
  {
    id: 43,
    path: "/findAgentMov",
    element: <SuggestedAgentForMobile />,
  },
  {
    id: 44,
    path: "/dynamicConnectionsMov/:id",
    element: <MobileDynamicProfileConnections />,
  },
  {
    id: 45,
    path: "/dynamicActivityMov/:id",
    element: <MobileDynamicProfileActivity />,
  },
  {
    id: 46,
    path: "/dynamicGalleryMov/:id",
    element: <GalleryContainerForMobile />,
  },
  {
    id: 47,
    path: "/lawyerReviewsMov",
    element: <MobileLawyerAgentKaziReviewsContainer />,
  },
  {
    id: 48,
    path: "/agentReviewsMov",
    element: <MobileLawyerAgentKaziReviewsContainer />,
  },
  {
    id: 49,
    path: "/kaziReviewsMov",
    element: <MobileLawyerAgentKaziReviewsContainer />,
  },
  {
    id: 50,
    path: "/dynamicServicesMov/:id",
    element: <MobileDynamicServicesContainer />,
  },
  {
    id: 51,
    path: "/completedServices",
    element: <MobileUserCompletedServices />,
  },
  {
    id: 52,
    path: "/stepperMov",
    element: <MobileStepper />,
  },
  {
    id: 53,
    path: "/mobileprofile/:id",
    element: <MobileDynamicProfile />,
  },
];

export default MobileMatrimonyPrivateRoutes;
