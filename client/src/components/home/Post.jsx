import { Box, Typography  } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyle = makeStyles({
    container: {
        height: 350,
        margin: 10,
        border: '1px solid #d3cede',
        borderRadius: 10,
        display:'flex',
        flexDirection:'column',
        background:'whitesmoke'
    },
    image : {
        height : 130,
        width:'100%',
        borderRadius:'10px 10px 0 0',
        objectFit:'cover'
    },
    title: {
        fontSize: 12,
        color: '#878787',
        textAlign:'center'

    },
    heading: {
        fontSize: 18,
        textAlign:'center',
        fontWeight:'bolder'
        
    } ,
    auther:{
        fontSize:14,
        margin:'2px'

    },
    description:{
        overflow:'scroll',
        overflowX:'hidden',
        scrollbarWidth:'1px'
        // wordBreak:'break-word',
    },
    des:{
        fontSize:'12px'
    }



});


const Post = ({post}) => {
    const classes = useStyle();
    const img = post.picture || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
    return(
        <Box className={classes.container}>
            <img src={img} alt="Post"  className={classes.image}/>
            <Typography className={classes.title}>{post.categories}</Typography>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.auther}>Auther  ::   {post.username}</Typography>
            <Typography className={classes.description}>Description :<p className={classes.des}> {post.discription}</p></Typography>
        </Box>
    )
}
 export default Post