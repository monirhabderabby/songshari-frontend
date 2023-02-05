import React from "react";

// Third party packages
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const BackDropLoader = ({ open, setOpen }) => {
    return (
        <div>
            <Backdrop sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }} open={open} onClick={e => setOpen(false)}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};
