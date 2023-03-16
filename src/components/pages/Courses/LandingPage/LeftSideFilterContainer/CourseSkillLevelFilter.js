import React from "react";

// Third party packages
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

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

    const handleExpandClick = () => {
        setExpanded(!expanded1);
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    color: pink[700],
                                    "&.Mui-checked": {
                                        color: pink[500],
                                    },
                                }}
                            />
                        }
                        label="Begineer"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    color: pink[700],
                                    "&.Mui-checked": {
                                        color: pink[500],
                                    },
                                }}
                            />
                        }
                        label="Begineer to Advance"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    color: pink[700],
                                    "&.Mui-checked": {
                                        color: pink[500],
                                    },
                                }}
                            />
                        }
                        label="Intermediate"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    color: pink[700],
                                    "&.Mui-checked": {
                                        color: pink[500],
                                    },
                                }}
                            />
                        }
                        label="Advance"
                    />
                </FormGroup>
            </Collapse>
        </>
    );
};
