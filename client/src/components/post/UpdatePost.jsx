// import {  } from "@mui/material"
import { useState , useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { makeStyles,Box, FormControl, InputBase , Button, TextareaAutosize, Typography} from "@material-ui/core"
import { AddCircle } from '@material-ui/icons'
import { getPost, updatePost } from '../../service/api'
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
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:15,
    },
    text:{
        flex:1,
        margin:'0px 50px',
        fontSize: 25
    },
    authDetail:{
        display:'flex',
        margin:'10px 0px',
        [theme.breakpoints.down('sm')]:{
            display:'block',
        }
    },
    textArea:{
        width:'100%',
        marginTop:40,
        fontSize:18,
        border:'none',
        '&:focus-visible':{
            outline:'none'
        }
    }
    
}));

const initialize = {
        title:'',
        discription:'',
        picture:'',
        username:'Code for interview',
        categories:'All',
        createDate: new Date(),
}

const UpdatePost=({ match })=> {
    const img = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    const classes = useStyle();
    const Navigate = useNavigate();
    const { id } = useParams();

    const [post , setPost ] = useState(initialize);

    useEffect( () => {
        const fetchData = async() =>{
           let data = await getPost(id);
           setPost(data);
           console.log(data);
        }
        fetchData();
    },[]);

    const changehandler = (e) => {
        setPost({...post, [e.target.name] : e.target.value})
    }

    const updateBlog = async () =>{
        await updatePost(id, post);
        Navigate(`/details/${post._id}`)
    }
    return (
        <Box className={classes.container}>
            <img src={img} alt="" className={classes.image} />
           <FormControl className={classes.form}>
               <AddCircle fontSize='large' color="action"/>
               <InputBase 
               placeholder="Title" 
               name = "title"
               onChange={ (e)=> changehandler(e)} 
               value={post.title} 
               className={classes.text}
               />
               <Button onClick={()=> updateBlog()} variant='contained' color='primary'  >Update</Button>
           </FormControl>
           <Box className={classes.authDetail}>
                <Typography className={classes.author}> Author: <span className={classes.authName}>{post.username}</span></Typography>
                <Typography name="createDate" onChange={(e)=> changehandler(e)} className={classes.dateCreated} style={{marginLeft:'auto'}}>{new Date(post.createDate).toDateString()}</Typography>
            </Box>
           <TextareaAutosize 
           placeholder='Tell your story....'
           name="discription"
           onChange={ (e)=> changehandler(e)}
           value={post.discription} 
           rowsMin={5} 
           className={classes.textArea}
           ></TextareaAutosize>
        </Box>

    )
}

export default UpdatePost;
