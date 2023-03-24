import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerMenu, MenuActions } from "./DrawerMenu";
import { useState } from "react";

export interface MainBarProps {
  readonly onActionClick: (action: string) => void;
}

export const MainBar = ({ onActionClick }: MainBarProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Thermo-STAT
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerMenu 
        open={isDrawerOpen} 
        onClose={() => setDrawerOpen(!isDrawerOpen)}
        onAction={onActionClick}
      />
    </Box>
    );
}
