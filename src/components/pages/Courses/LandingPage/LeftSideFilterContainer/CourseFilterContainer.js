import Card from "@mui/material/Card";
import React from "react";
import { CourseCategoryFilter } from "./CourseCategoryFilter";
import { CourseSkillLevelFilter } from "./CourseSkillLevelFilter";
import { CourseTypeFilter } from "./CourseTypeFilter";

export default function CourseFilterContainer() {
    return (
        <Card sx={{ height: "auto", maxWidth: 290, position: "sticky", top: 0, left: 0, zIndex: 1000 }}>
            <CourseTypeFilter />
            <CourseCategoryFilter />
            <CourseSkillLevelFilter />
        </Card>
    );
}
