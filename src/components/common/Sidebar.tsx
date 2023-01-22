import { Avatar, Drawer, List, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: sizeConfigs.sidebar.width,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: sizeConfigs.sidebar.width,
                    boxSizing: 'border-box',
                    borderRight: '0px',
                    backgroundColor: colorConfigs.sidebar.bg,
                    color: colorConfigs.sidebar.color
                }   
            }}>
            <List disablePadding>
                <Toolbar>
                    <Stack
                        sx={{width: '100%'}}
                        direction='row'
                        justifyContent='center'>
                        <Avatar src={assets.images.logo}/>
                    </Stack>
                </Toolbar>
                {appRoutes.map((route, index) => (
                    route.sidebarProps ? (
                        <SidebarItem item={route}/>
                    ) : null
                ))}
            </List>
        </Drawer>
    );
};

export default SideBar;