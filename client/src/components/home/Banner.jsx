import { Box , Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
 image:{
     background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/25%  #000`,
     width:'100%',
     backgroundRepeat:'repeat-x',
     backgroundSize:'cover',
     height:'50vh',
     display:"flex",
     justifyContent:"center",
     flexDirection:"column",
     alignItems:"center",
     '& :first-child':{
         fontSize:68,
         color:'#FFFF',
         textShadow:'2px 2px black'
        //  lineheight:'1'
     },
    //  '& :last-child':{
    //      fontSize:20,
    //     //  padding:" 0 2rem",
    //      background:'white'
    //      }
     }
 
});

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image}>
            <Typography>Create Your Own BLOGs</Typography>
            {/* <Typography>Banty</Typography> */}
        </Box>
    )
}

export default Banner