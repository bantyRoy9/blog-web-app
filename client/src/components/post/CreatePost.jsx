// import {  } from "@mui/material"
import { makeStyles,Box, FormControl, InputBase , Button, TextareaAutosize} from "@material-ui/core";
import {  AddCircle } from '@material-ui/icons';
import { useState, useEffect } from "react";
import { createPost, uploadFile } from "../../service/api";
import { useNavigate } from 'react-router-dom';
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
    username:'Code through Banty',
    categories:'Music',
    createDate: new Date(),
    
}
const CreatePost=()=> {
    const classes = useStyle();
    const img = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    const navigation = useNavigate();
    const [post, setPost]= useState(initialize);
    const [file, setFile]= useState('');

    useEffect(()=>{
        const getImage = async() =>{
            console.log(file);
            if(file){
            const data = new FormData();
            data.append("name", file.name);
            data.append('file', file);

            const image = await uploadFile(data);
            post.picture = image.data;
        }
    }
        getImage();
    },[file])

    const changehandler = (e)=>{
        setPost({...post, [e.target.name]: e.target.value})
    }
    const savePost = async () => {
        await createPost(post);
        navigation('/');
    }
    return (
        <Box className={classes.container}>
            <img src={img} alt="" className={classes.image} />
           <FormControl className={classes.form}>
                <label htmlFor="fileImg">
               <AddCircle fontSize='large' color="action"/>
               </label>
               <input 
                  type="file" 
                  id="fileImg"
                  style={{display:'none', cursor:"pointer"}}
                  onChange={(e) => setFile(e.target.files[0])}
                />
               <InputBase 
                onChange={(e)=> changehandler(e)}
                placeholder="Title" 
                name="title"
                className={classes.text}/>
               <Button onClick={()=> savePost()} variant='contained' color='primary' >Publish</Button>
           </FormControl>
           <TextareaAutosize
            onChange={(e)=> changehandler(e)}
             placeholder='Tell your story....' 
             name="discription"
            //  rowsMin={5}
              className={classes.textArea}></TextareaAutosize>
        </Box>

    )
}

export default CreatePost;
