import { Drawer, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import { findByLabelText } from "@testing-library/react";

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        // display: "flex",
        position: "inherit"
        
    },
    drawer: {
        width: drawerWidth,
        // flexShrink: 0,
        
        // backgroundColor: 
    },
    drawerPaper: {
        width: drawerWidth,

    }

}));

export default function SideBar() {
    const classes = useStyles();

    return (
        <diV className={classes.root}>
            <Drawer
                className={classes.drawer}
                position="inherit"
                variant="permanent"
                anchor="right"
                classes={{ paper: classes.drawerPaper}}>
                <div>
                    <Typography>
                        SideBar
                    </Typography>

                </div>

            </Drawer>
        </diV>

    );
}