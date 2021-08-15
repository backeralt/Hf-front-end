import './Header.css'
import logo from '../../assets/images/logo5HF.png'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core'
// import Image from "material-ui-image";
// import Paper from '@material-ui/core/Paper';


import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logoPaper: {
        flexGrow: 1,
        // backgroundcolor: #ffffcc,
        
    },
    // title: {
    //     flexGrow: 1,
    // },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#ffffcc' }}>
                <Toolbar>
                    <Paper variant="outlined" className={classes.logoPaper}>
                        <img src={logo} alt="HulumFurniture-Logo"  />

                    </Paper>

                    {/* <Image src={logo} alt="HulumFurniture-Logo" /> */}
                    {/* <img src={logo} alt="HulumFurniture-Logo" className={classes.menuButton} /> */}

                    <Button >Membership</Button>

                    <Button >Login</Button>
                    <Button >Signup</Button>

                </Toolbar>
            </ AppBar>
        </div>
    );
}


/* function Header() {
    return (
        <div>
            <AppBar postion="static" style={{ background: '#ffffcc' }}>
                <Toolbar>

                    <img src={logo} alt="HulumFurniture-Logo" />


                    <Button>
                        Membership
                    </Button>
                    <Button>
                        Login
                    </Button>
                    <Button>
                        Signup
                    </Button>


                </Toolbar>

            </AppBar>
        </div >
    )
}

export default Header; */

