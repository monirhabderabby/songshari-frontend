import React from "react";

// Third party packages
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setSkillLevel } from "../../../../../Redux/features/Course/courseSlice";

// css
const ExpandMore = styled(props => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const CourseSkillLevelFilter = () => {
    const [expanded1, setExpanded] = React.useState(false);
    const dispatch = useDispatch();

    const skillLevelValue = useSelector(state => state.persistedReducer.course?.filter?.skillLevel);

    const handleExpandClick = () => {
        setExpanded(!expanded1);
    };
    const levels = [
        {
            id: 1,
            name: "Beginner",
        },
        {
            id: 2,
            name: "Intermediate",
        },
        {
            id: 3,
            name: "Advanced",
        },
    ];

    const handleSkillLevel = e => {
        dispatch(setSkillLevel(e.target.value));
    };
    return (
        <>
            <CardActions disableSpacing>
                <div className="text-[22px] text-gray-600 font-Nunito font-semibold">Skill Level</div>
                <ExpandMore expand={expanded1} onClick={handleExpandClick} aria-expanded={expanded1} aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <FormGroup
                    sx={{
                        paddingX: "20px",
                    }}
                >
                    {levels?.map(item => {
                        return (
                            <FormControlLabel
                                key={item.id}
                                control={
                                    <Checkbox
                                        sx={{
                                            color: pink[700],
                                            "&.Mui-checked": {
                                                color: pink[500],
                                            },
                                        }}
                                        value={item.name}
                                        checked={skillLevelValue === item?.name}
                                        onChange={handleSkillLevel}
                                    />
                                }
                                label={item.name}
                            />
                        );
                    })}
                </FormGroup>
            </Collapse>
        </>
    );
};
