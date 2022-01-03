import React from 'react'
import { AppBar , Toolbar , Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

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
    return (
        <AppBar>
            <Toolbar className={classes.nav}>
              <Link to="/"><Typography className={classes.navLink}>Home</Typography></Link>
                <Typography className={classes.navLink}>Contact</Typography>
                <Typography className={classes.navLink}>About</Typography>
                <Typography className={classes.navLink}>Home</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
