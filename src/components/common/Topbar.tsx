import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = () => {
    return (
        <AppBar
        position="fixed"
        sx={{
            width: `calc(100% - ${sizeConfigs.topbar.width})`,
            ml: sizeConfigs.topbar.width,
            boxShadow: 'unset',
            backgroundColor: colorConfigs.mainBg,
            color: colorConfigs.topbar.color
        }}>
            <Toolbar>
                <Typography variant="h3">
                    FITT
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;