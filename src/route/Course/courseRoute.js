import { CourseCheckout } from "../../components/pages/Courses/CourseCheckout/CourseCheckout";
import { CourseLandingPage } from "../../components/pages/Courses/LandingPage/CourseLandingPage";

const courseRoute = [
  {
    id: 1,
    path: "/courses",
    element: <CourseLandingPage />,
  },
  {
    id: 3,
    path: "/course/checkout/:id",
    element: <CourseCheckout />,
  },
];

export default courseRoute;
