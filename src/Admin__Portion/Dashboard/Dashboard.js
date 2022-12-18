//configurition like react
import * as React from "react";
import { Outlet } from "react-router";
//Third party components
import Drawer from "@mui/material/Drawer";
// Mui icons
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
//components
import { DrawerItem } from "./drawerItem";

//set drawer width
const drawerWidth = 350;

export function Dashboard(props) {
  //data from props
  const { window } = props;
  //hooks variables
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //functions for toggle open
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //for maintain container responsive
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{
          width: { xs: 0, sm: 50, md: 50, lg: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
        className="shadow-lg"
      >
        {/* Drawer for mobile tablet and dextop version */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none", lg: 'none', md: 'none' },
            "& .MuiDrawer-paper": {
              boxShadow: '2px 2px 10px 2px #0000001F',
              width: 200
            }
          }}
        >
          {<DrawerItem />}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              border: 'none',
              width: drawerWidth,
              boxShadow: '2px 2px 10px 2px #0000001F',

            }
          }}
          open
        >
          {<DrawerItem />}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block", md: "block", lg: 'none' },
            "& .MuiDrawer-paper": {
              width: 50, boxShadow: '2px 2px 10px 2px #0000001F',
            }
          }}
          open
        >
          {<DrawerItem />}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Box className="p-2" sx={{
          display: { sm: "none", xs: "flex", md: 'none', lg: 'none' },
          background: "linear-gradient(83.26deg, #E41272 17.33%, #C94964 98.93%)",
          alignItems: 'center'
        }}>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 4, ml: 4, }}
          >
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
          <h2 className="text-white">Dashboard</h2>
        </Box>
        <div className="ml-4">
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}



