import React from "react";
import { LocationSearching } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export enum MenuActions {
    scan = "scan"
}

export interface DrawerMenuProps {
    readonly open: boolean;
    readonly onClose: () => void;
    readonly onAction: (actionType: string) => void;
}

export const DrawerMenu = ({ open, onClose, onAction } : DrawerMenuProps) => {

    return (
        <div>
            <Drawer 
                anchor={"left"}
                open={open}
                onClose={onClose}>
                <Box 
                    role="presentation"
                    onClick={onClose}
                >
                    <List>
                        <ListItem key={"scan"}>
                            <ListItemButton onClick={() => onAction(MenuActions.scan)}>
                                <ListItemIcon>
                                    <LocationSearching />
                                </ListItemIcon>
                                <ListItemText primary={"scan"} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );

}