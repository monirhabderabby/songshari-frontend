import { CourseAccess } from "../../components/pages/Courses/CourseAccess/CourseAccess";

const coursePrivateRoutes = [
    {
        id: 1,
        path: "/course/access/:id",
        element: <CourseAccess />,
    },
];

export default coursePrivateRoutes;
