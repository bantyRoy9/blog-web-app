import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../service/api';
import Post from './Post';

const Postes = () => {
    const [posts, setPosts] = useState([]);
    // const posts = [1,2,3,4,5,6,8,9];

    useEffect(()=>{
        const fetchData = async()=>{
            let data = await getAllPosts();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, []);

    return (
            posts.map(post =>(
                <Grid item lg={3} sm={4} xs={12}>
                   <Link to={`/details/${post._id}`}>
                        <Post post={post} />
                   </Link> 
                </Grid>
            ))
    )
}

export default Postes;