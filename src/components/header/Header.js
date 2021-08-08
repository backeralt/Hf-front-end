/* import './Header.css'
import Membership from './elements/Membership';
import LogIn from './elements/LogIn';
import SignUp from './elements/SignUp';

function Header(){
    return(
        <div className="">
            <img src="" alt="hulumFurniture-Logo"/>
            <Membership/>
            <LogIn/>
            <SignUp/>
        </div>

    );
    
}

export default Header;
 */

import logo from '../../assets/images/logo4HF.png'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { inherits } from '@babel/types'

function Header() {
    return (
        <div>
            <AppBar postion="static" style={{background: '#ffffcc'}}>
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
        </div>
    )
}

export default Header;