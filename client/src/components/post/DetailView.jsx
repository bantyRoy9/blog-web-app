import { Box, Typography } from "@mui/material"
import { makeStyles } from "@material-ui/core"
import { Edit , Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useState , useEffect} from 'react'
import { getPost } from '../../service/api'
const useStyle = makeStyles((theme)=>({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('sm')]:{
            padding:0
        }

    },
    image:{
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float:'right'
    },
    icon:{
        margin:5,
        border: '1px solid #878787',
        borderRadius: 10,
        padding: 5,
        cursor:'pointer'
    },
    heading:{
        fontSize: '30px',
        fontWeight: 600,
        textAlign:'center',
        margin: 20

    },
    authDetail:{
        display:'flex',
        margin:'10px 0px',
        [theme.breakpoints.down('sm')]:{
            display:'block',
        }
    },
}));

const DetailView = ({ match })=> {
    const classes = useStyle();
    const img = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

    const [post, setPost] = useState({});

    useEffect( () => {
        const fetchData = async () => {
           let data = await getPost(match.params.id);
           console.log(data);
           setPost(data);
        }
        fetchData();
    }, []);
    return (
        <Box className={classes.container}>
            <img src={img} alt="" className={classes.image} />
            <Box className={classes.icons} >
            <Link to='/update'><Edit  className={classes.icon} color='primary'></Edit></Link>
            <Delete className={classes.icon} color='error'></Delete>
            </Box>
            <Box>
            <p className={classes.heading}>{post.title}</p>
            </Box>
            <Box className={classes.authDetail}>
                <Typography className={classes.author}> Author: <span className={classes.authName}>{post.username}</span></Typography>
                <Typography className={classes.dateCreated} style={{marginLeft:'auto'}}>12 Jun 2021</Typography>
            </Box>
            <Box className={classes.description}>{post.discription}</Box>

        </Box>
    )
}

export default DetailView;