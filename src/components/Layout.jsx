import logo from '../assets/images/logo5HF.png'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core'


const drawerWidth = 275;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        background: '#ffffcc',
        zIndex: theme.zIndex.drawer + 1,
        // zIndex: 1400
    },
    logoPaper: {
        background: '#ffffcc',
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        // flexShrink: 0,
    },
    drawerPaper: {

        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        // display: 'flex',
        padding: theme.spacing(2),
    },
    buttons: {
        variant: 'contained',
        background: '#cc6600',
        // padding: 2 
        // backgroundColor: '#663300'
        // background: '#663300'
    }
}
));

export default function Layout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Paper variant="outlined" className={classes.logoPaper}>
                        <img src={logo} alt="HulumFurniture-Logo" />

                    </Paper>
                    <div >
                        <Button className={classes.buttons}> Membership </Button>

                        <Button className={classes.buttons}>Login</Button>
                        <Button className={classes.buttons}>Signup</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>

                {/* {/* <Toolbar /> */}
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>
            <Drawer
                className={classes.drawer}
                anchor="right"
                variant="permanent"

                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />

                <div className={classes.drawerContainer}>
                    <p>This is working</p>
                    <p>This is working</p>
                    <p>This is working</p>
                    <p>This is working</p>
                </div>
                <Toolbar />

            </Drawer>
        </div>
    );
}


/*
const useStyles = makeStyles((theme) => ({
    root: {
        // order: 'inherit'
        // order: 'initial'
        // display: "flex",
        // position: "inherit"
        // position: "inherit"

    },
    header: {
        position: 'relative',
        // zIndex: theme.zIndex.sidebar + 1,
        zIndex: 1400
    },
    sidebar: {
        // order: 2

    }

}));

function Layout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header className={classes.header} />
            <SideBar className={classes.sidebar} />

        </div>
    )
}

export default Layout; */