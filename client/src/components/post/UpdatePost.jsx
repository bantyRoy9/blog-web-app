// import {  } from "@mui/material"
import { makeStyles,Box, FormControl, InputBase , Button, TextareaAutosize} from "@material-ui/core"
import { AddCircle } from '@material-ui/icons'
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

const UpdatePost=()=> {
    const classes = useStyle();
    const img = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    return (
        <Box className={classes.container}>
            <img src={img} alt="" className={classes.image} />
           <FormControl className={classes.form}>
               <AddCircle fontSize='large' color="action"/>
               <InputBase placeholder="Title" className={classes.text}/>
               <Button variant='contained' color='primary' >Update</Button>
           </FormControl>
           <TextareaAutosize placeholder='Tell your story....' rowsMin={5} className={classes.textArea}></TextareaAutosize>
        </Box>

    )
}

export default UpdatePost;
