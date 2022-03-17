import React from 'react'
import { AppBar , Toolbar , Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link  } from 'react-router-dom';
// import { useOktaAuth } from '@okta/okta-react';

const useStyle = makeStyles({
    nav:{
        fontsize:'30px',
        color:'black',
        justifyContent:"center",
        background:"white"
    },
    navLink:{
        padding:'1rem',
        cursor:'pointer'
    }

});
const Header=()=> {
    const classes = useStyle();
    // const history = useNavigate();
    // const { oktaAuth, authState } = useOktaAuth();

    // if (authState && authState.isPending) return null;

//   const login = async () => history('/login');

//   const logout = async () => oktaAuth.signOut();

    // const button = authState.isAuthenticated ?
    // <button onClick={logout}>Logout</button> :
    // <button onClick={login}>Login</button>;
    return (
        <AppBar>
            <Toolbar className={classes.nav}>
              <Link to="/"><p className={classes.navLink}>Home</p></Link>
                <p className={classes.navLink}>Contact</p>
                <p className={classes.navLink}>About</p>
                <p className={classes.navLink}>signin</p>
            </Toolbar>
        </AppBar>
    )
}

export default Header
