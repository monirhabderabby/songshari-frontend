import React from "react";

// Third party packages
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useGetAllTypesQuery } from "../../../../../Redux/features/Course/courseApi";
import { LineWaveLoader } from "../../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";

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

export const CourseTypeFilter = () => {
    const [expanded1, setExpanded] = React.useState(false);
    const { data, isLoading, isError } = useGetAllTypesQuery();

    const { types } = data || {};

    const handleCheckbox = e => {
        console.log(e.target.value);
    };

    let content;
    if (isLoading) {
        content = (
            <div className="h-[200px] w-full flex justify-center items-center">
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="h-[150px] w-full flex justify-center items-center text-[15px] text-gray-400 font-outfit text-center">
                Something went wrong! Please try again later.
            </div>
        );
    } else if (!isLoading && types?.length > 0) {
        content = (
            <FormGroup
                sx={{
                    paddingX: "20px",
                }}
            >
                {types?.map(item => {
                    return (
                        <FormControlLabel
                            key={item?._id}
                            control={
                                <Checkbox
                                    sx={{
                                        color: pink[700],
                                        "&.Mui-checked": {
                                            color: pink[500],
                                        },
                                    }}
                                    value={item?._id}
                                    onChange={handleCheckbox}
                                />
                            }
                            label={item?.name}
                        />
                    );
                })}
            </FormGroup>
        );
    }

    const handleExpandClick = () => {
        setExpanded(!expanded1);
    };
    return (
        <>
            <CardActions disableSpacing>
                <div className="text-[22px] text-gray-600 font-Nunito font-semibold">Course Type</div>
                <ExpandMore expand={expanded1} onClick={handleExpandClick} aria-expanded={expanded1} aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
                {content}
            </Collapse>
        </>
    );
};
