import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Collapse from "@mui/material/Collapse";
import { green, red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useRejectOrderMutation } from "../../../../../../Redux/features/Service/OrderApi";
import { setIdForCancleOrder } from "../../../../../../Redux/features/Service/orderSlice";
import { OrderReview } from "../../OrderReview/OrderReview";

const useStyles = makeStyles({
    root: {
        background: "#FFFFFF",
        borderRadius: "12px",
        color: "black",
        height: "auto",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "40px",
        paddingBottom: "30px",
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        width: "320px",
    },
    contactStyles: {
        width: "85px",
        height: "33px",
        backgroundColor: "#f2f2f2",
        border: "1px solid #FFFFFF",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#000000",
        fontSize: "12px",
        fontWeight: 600,
        textTransform: "uppercase",
        boxShadow: "none",
        "&:hover": {
            backgroundColor: "#f2f2f2",
            borderColor: "#f2f2f2",
            boxShadow: "none",
        },
    },
    cancleButton: {
        width: "199px",
        height: "56px",
        backgroundColor: "#67868F",
        border: "1px solid #67868F",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: 600,
        textTransform: "uppercase",
        "&:hover": {
            backgroundColor: "#58737a",
            borderColor: "#58737a",
            boxShadow: "none",
        },
    },
});

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

const RunningOrderFeatureCard = ({ price, deadline, role }) => {
    // Hook variable declaration
    const [expanded, setExpanded] = useState(false);
    const [success, setSuccess] = useState(false);
    const [modal, setModal] = useState(false);
    const [acceptSuccess, setAcceptSuccess] = useState(false);
    const dispatch = useDispatch();

    // Redux API
    const [rejectOrder, { isLoading, isSuccess }] = useRejectOrderMutation();

    // get ID
    const orderID = useSelector(state => state.persistedReducer?.orderInfo?.runningOrder?.currentOrderIdFOrCancle);

    // JS Variable declaration
    const classes = useStyles();
    deadline = deadline.slice(2, deadline.length);
    const { firstName, lastName, designation } = role || {};
    let name = `${firstName} ${lastName}` || "";
    name = name.length > 13 ? name.slice(0, 13) : name;

    // Function declarations
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCancleOrder = () => {
        // write code
        if (typeof orderID !== "string") {
            alert("Something went wrong");
            return;
        }
        rejectOrder(orderID);
    };

    const modalControll = () => {
        setModal(!modal);
    };

    useEffect(() => {
        if (isSuccess) {
            setSuccess(true);
            dispatch(setIdForCancleOrder(null));
        }
    }, [isSuccess, dispatch]);

    // clead id from redux state when user back from this page
    window.addEventListener("popstate", () => {
        dispatch(setIdForCancleOrder(null));
    });

    // style
    const buttonSx = {
        backgroundColor: "#67868F",
        border: "1px solid #67868F",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: 500,
        textTransform: "uppercase",
        boxShadow: "none",
        "&:hover": {
            backgroundColor: "#58737a",
            borderColor: "#58737a",
            boxShadow: "none",
        },
        ...(success && {
            bgcolor: red[500],
            border: "1px solid #f44336",
            boxShadow: "none",
            "&:hover": {
                bgcolor: red[500],
                boxShadow: "none",
            },
        }),
        ...(isLoading && {
            border: "none",
            boxShadow: "none",
            "&:hover": {
                bgcolor: red[500],
                boxShadow: "none",
            },
        }),
    };

    const acceptButtonSX = {
        fontSize: "14px",
        fontWeight: 500,
        background: "#E42986",
        boxShadow: "none",
        "&:hover": {
            backgroundColor: "#ed1581",
            boxShadow: "none",
        },
        ...(acceptSuccess && {
            bgcolor: "#4caf50",
            "&:hover": {
                bgcolor: green[700],
            },
        }),
    };
    return (
        <>
            <Card className={classes.root}>
                <section className="w-[290px] lg:w-full h-auto flex flex-col justify-center items-center gap-y-[26px]">
                    <h3 className="font-bold text-[32px] font-sans flex items-center">
                        <TbCurrencyTaka />
                        {price}
                    </h3>
                    <Box sx={{ m: 1, position: "relative" }}>
                        <Button variant="contained" sx={acceptButtonSX} onClick={modalControll}>
                            Mark As Complete
                        </Button>
                        {isLoading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: green[500],
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    marginTop: "-12px",
                                    marginLeft: "-12px",
                                }}
                            />
                        )}
                    </Box>
                    <Box sx={{ m: 1, position: "relative" }}>
                        <Button
                            variant="contained"
                            disabled={isLoading}
                            sx={buttonSx}
                            style={{ cursor: `${isSuccess ? "not-allowed" : "pointer"}` }}
                            onClick={handleCancleOrder}
                        >
                            {isSuccess ? "Cancelled" : "Cancel This Order"}
                        </Button>
                        {isLoading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: green[500],
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    marginTop: "-12px",
                                    marginLeft: "-12px",
                                }}
                            />
                        )}
                    </Box>

                    {/* {isLoading ? <CircularProgress style={{ color: "#E41272" }} /> : "Cancle This Order"} */}

                    <div className="w-full flex justify-between">
                        <div className="flex flex-col items-center">
                            <h6 className="text-[13px] font-extralight font-sans">Delivery in</h6>
                            <span className="font-semibold text-[14px] font-sans">{deadline}</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <h6 className="text-[13px] font-extralight font-sans">Rating</h6>
                            <span className="font-semibold text-[14px] font-sans">100%</span>
                        </div>
                        <div className="flex flex-col items-center w-[90px]">
                            <h6 className="text-[13px] font-extralight font-sans">Response time</h6>
                            <span className="font-semibold text-[14px] font-sans text-center">Within a few hours</span>
                        </div>
                    </div>
                </section>
                <Divider
                    light
                    style={{
                        backgroundColor: "white",
                        marginTop: "20px",
                        height: "0.5px",
                    }}
                />
                <CardActions disableSpacing>
                    <h3 className="font-extralight font-sans text-[14px]">
                        Review: <span className="font-semibold">320</span>
                    </h3>
                    <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <section className="h-[65px] w-full flex items-center gap-x-[10px]">
                            <img
                                className="h-[65px] w-[65px] border-[3px] border-white rounded-full"
                                src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-1/240958666_3135436200050886_2786652077427541076_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_ohc=Udcpk4-k830AX_4mpk3&_nc_ht=scontent.frjh5-1.fna&oh=00_AfCoZqvkBCANzHVf9GVRiClj2OmKShidDvznXxKY7BNeKw&oe=63E50D3A"
                                alt=""
                            />
                            <div className="flex flex-col items-start justify-evenly h-full">
                                <h2 className="text-[21px] font-semibold font-sans">{name}</h2>
                                <h4 className="text-[14px] font-extralight font-sans">{designation}</h4>
                            </div>
                        </section>
                        <p className="text-[14px] font-normal font-sans mt-[15px]">
                            We craft elegant and robust websites for Startups, Agencies and Enterprises. Experience a web design company who has been
                            delivering progressive and result-oriented solutions for... Read more
                        </p>
                        <section className="mt-[23px] w-full flex justify-between items-center">
                            <h4 className="text-[11px] font-semibold font-sans">Bangladesh</h4>
                            <Button variant="contained" className={classes.contactStyles}>
                                Contact
                            </Button>
                        </section>
                    </CardContent>
                </Collapse>
            </Card>
            {modal && <OrderReview {...{ modalControll }} />}
        </>
    );
};

export default RunningOrderFeatureCard;
