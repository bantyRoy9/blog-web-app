import { Box , Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
 image:{
     background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
     width:'100%',
     height:'50vh',
     display:"flex",
     justifyContent:"center",
     flexDirection:"column",
     alignItems:"center",
     '& :first-child':{
         fontSize:68,
         color:'#FFFF',
        //  lineheight:'1'
     },
     '& :last-child':{
         fontSize:20,
        //  padding:" 0 2rem",
         background:'white'
         }
     }
 
});

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Banty</Typography>
        </Box>
    )
}

export default Banner