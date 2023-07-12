import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SuccessSnackBar = ({ successSnackBarOpen, setSuccessSnackBarOpen, message }) => {
    return (
        <Snackbar open={successSnackBarOpen} autoHideDuration={6000} onClose={() => setSuccessSnackBarOpen(false)}>
            <Alert onClose={() => setSuccessSnackBarOpen(false)} severity="success" sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
};
