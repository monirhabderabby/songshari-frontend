import React from "react";

// Third party packages
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const BackDropLoader = ({ backDrop, setBackDrop }) => {
    return (
        <div>
            <Backdrop sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }} open={backDrop} onClick={() => setBackDrop(false)}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};
