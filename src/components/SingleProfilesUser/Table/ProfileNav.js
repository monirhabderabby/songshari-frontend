/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
// import SwipeableViews from "react-swipeable-views";
// import UserAgentServices from "./UserAgentServices";
// import UserAllServices from "./UserAllServices";
// import UserCanceledServices from "./UserCanceledServices";
// import UserCompletedServices from "./UserCompletedServices";
// import UserKaziServices from "./UserKaziServices";
// import UserLawyerServices from "./UserLawyerServices";
// import UserOngoingServices from "./UserOngoingServices";

const AntTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
        backgroundColor: "#E42986",
    },
});

const AntTab = styled(props => <Tab disableRipple {...props} />)(({ theme }) => ({
    color: "#64748b",
    "&:hover": {
        color: "#FFBCCB",
        opacity: 1,
    },
    "&.Mui-selected": {
        color: "#E42986",
        fontWeight: theme.typography.fontWeightMedium,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const ProfileNav = ({setPage,matchesCount}) => {
    const [value, setValue] = useState(1);
    // const theme = useTheme();
    const navigate = useNavigate()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const handleChangeIndex = index => {
    //     setValue(index);
    // };
    useEffect(()=>{
        setPage(value)
        if(value===6){
            navigate("/my-orders/orderStatus")
        }
        if(value===7){
            navigate("/my-orders/myWallet")
        }
        if(value===8){
            navigate("/my-orders/successStory")
        }
        
    },[value])

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "512px",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#FFFFFF",
                    marginX: "auto",
                }}
                style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
            >
                <AntTabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
                    <AntTab value={1} label="Activity" />
                    <AntTab value={2} label="Profile" />
                    <AntTab value={3} label="Services" />
                    <AntTab value={4} label="Connections" />
                    <AntTab value={5} label="Matches" />
                    <AntTab value={6} label="My Orders" />
                    <AntTab value={7} label="Wallet" />
                    <AntTab value={8} label="Success Story" />
                </AntTabs>
            </Box>
            {/* <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={handleChangeIndex}>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <UserAllServices />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <UserOngoingServices />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <UserCompletedServices />
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <UserCanceledServices />
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    <UserAgentServices />
                </TabPanel>
                <TabPanel value={value} index={6} dir={theme.direction}>
                    <UserKaziServices />
                </TabPanel>
                <TabPanel value={value} index={7} dir={theme.direction}>
                    <UserLawyerServices />
                </TabPanel>
            </SwipeableViews> */}
        </>
    );
};

export default ProfileNav;
