import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Collapse from "@mui/material/Collapse";
import { green } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router";
import { useServiceOrderMutation } from "../../../../Redux/features/Service/OrderApi";
import { SuccessSnackBar } from "../../../ui/error/snackBar/SuccessSnackBar";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(180.03deg, #E41272 0.02%, #942DD9 99.98%)",
    borderRadius: "12px",
    color: "white",
    height: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "40px",
    paddingBottom: "30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "320px",
  },
  contactStyles: {
    width: "85px",
    height: "29px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #FFFFFF",
    borderRadius: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
    fontSize: "12px",
    fontWeight: 600,
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#f2f2f2",
      borderColor: "#f2f2f2",
      boxShadow: "none",
    },
  },
  loader: {
    color: "#FFFFFF",
    borderRadius: "8px",
    width: " 100%",
    position: "absolute",
    top: "0%",
    left: "0%",
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const DynamicSingleServiceOrderCard = ({
  price,
  deadline,
  role,
  _id,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  // Redux API
  const [serviceOrder, { isSuccess, isLoading }] = useServiceOrderMutation();

  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setSuccess(true);
    }
  }, [isSuccess]);

  deadline = deadline.slice(2, deadline.length);
  const { firstName, lastName, designation, _id: userId } = role || {};
  let name = `${firstName} ${lastName}` || "";
  name = name.length > 13 ? name.slice(0, 13) : name;

  // Function declarations
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleNewServiceOrder = () => {
    serviceOrder({
      service: _id,
      role: userId,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setSuccessSnackBarOpen(true);
    }
  }, [isSuccess, navigate]);

  const buttonSx = {
    width: "199px",
    height: "56px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #FFFFFF",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#f2f2f2",
      borderColor: "#f2f2f2",
      boxShadow: "none",
    },
    ...(success && {
      bgcolor: green[500],
      color: "#FFFFFF",
      border: "1px solid #4caf50",
      boxShadow: "none",
      "&:hover": {
        bgcolor: green[500],
        boxShadow: "none",
      },
    }),
    ...(isLoading && {
      border: "none",
      boxShadow: "none",
      bgcolor: "#f54595",
      color: "#FFFFFF",
      "&:hover": {
        bgcolor: "#f54595",
        boxShadow: "none",
      },
    }),
  };

  return (
    <Card className={classes.root}>
      <section className="w-[290px] lg:w-full h-auto flex flex-col justify-center items-center gap-y-[26px]">
        <h3 className="font-bold text-[32px] font-sans flex items-center">
          <TbCurrencyTaka />
          {price}
        </h3>
        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            variant="contained"
            sx={buttonSx}
            disabled={isLoading}
            onClick={handleNewServiceOrder}
            style={{ cursor: `${success ? "not-allowed" : "pointer"}` }}
          >
            {success ? "Done" : "Order Now"}
          </Button>
          {isLoading && (
            <Backdrop
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
              className={classes.loader}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </Box>
        <div className="w-full flex justify-between">
          <div className="flex flex-col items-center">
            <h6 className="text-[13px] font-extralight font-sans">
              Delivery in
            </h6>
            <span className="font-semibold text-[14px] font-sans">
              {deadline}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="text-[13px] font-extralight font-sans">Rating</h6>
            <span className="font-semibold text-[14px] font-sans">100%</span>
          </div>
          <div className="flex flex-col items-center w-[90px]">
            <h6 className="text-[13px] font-extralight font-sans">
              Response time
            </h6>
            <span className="font-semibold text-[14px] font-sans text-center">
              Within a few hours
            </span>
          </div>
        </div>
      </section>
      <Divider
        light
        style={{ backgroundColor: "white", marginTop: "20px", height: "0.5px" }}
      />
      <CardActions disableSpacing>
        <h3 className="font-extralight font-sans text-[14px]">
          Review: <span className="font-semibold">320</span>
        </h3>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
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
              <h4 className="text-[14px] font-extralight font-sans">
                {designation}
              </h4>
            </div>
          </section>
          <p className="text-[14px] font-normal font-sans mt-[15px]">
            We craft elegant and robust websites for Startups, Agencies and
            Enterprises. Experience a web design company who has been delivering
            progressive and result-oriented solutions for... Read more
          </p>
          <section className="mt-[23px] w-full flex justify-between items-center">
            <h4 className="text-[11px] font-semibold font-sans">Bangladesh</h4>
            <Button variant="contained" className={classes.contactStyles}>
              Contact
            </Button>
          </section>
        </CardContent>
      </Collapse>
      {successSnackBarOpen && (
        <SuccessSnackBar
          {...{
            setSuccessSnackBarOpen,
            successSnackBarOpen,
            message: "Order Placed",
          }}
        />
      )}
    </Card>
  );
};
