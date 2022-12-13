import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { Button, Stack } from "@mui/material";
export const Dashboard = () => {
  return (
    <Stack direction="column" spacing={2} sx={{ width: 300, marginLeft: 20 }}>
      <Button
        to="/"
        color="warning"
        variant="contained"
        startIcon={<DashboardOutlinedIcon />}
        padding={5}
      >
        Dashboard
      </Button>

      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<PersonOutlineOutlinedIcon />}
        padding={5}
      >
        User
      </Button>

      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<LayersOutlinedIcon />}
        padding={5}
      >
        Lawyer
      </Button>

      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<RecordVoiceOverOutlinedIcon />}
        padding={5}
      >
        Agent
      </Button>
      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<ContactPhoneOutlinedIcon />}
        padding={5}
      >
        Kazi
      </Button>
      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<LocalMallOutlinedIcon />}
        padding={5}
      >
        Shop
      </Button>
      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<ContentPasteOutlinedIcon />}
        padding={5}
      >
        Courses
      </Button>

      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<TableChartOutlinedIcon />}
        padding={5}
      >
        Packages
      </Button>

      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<VerifiedOutlinedIcon />}
        padding={5}
      >
        Badges
      </Button>

      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<GroupOutlinedIcon />}
        padding={5}
      >
        Employee
      </Button>

      <Button
        to="/"
        color="warning"
        variant="outlined"
        startIcon={<ColorLensOutlinedIcon />}
        padding={5}
      >
        Sponsor
      </Button>
    </Stack>
  );
};
