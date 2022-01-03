import axios from 'axios';

const URL = 'http://localhost:8000'

export const createPost = async (post) =>{
   try{ 
   await axios.post(`${URL}/create`,post)
}catch(error){
    console.log('Error While calling createPost API',error);
}}

export const getAllPosts = async()=>{
    try{
       let response= await axios.get(`${URL}/posts`)
       return response.data;
    }catch(err){
        console.log('Error while calling getAllpost API',err);
    }
}

export const getPost = async (id) => {
    try{
        let response = await axios.get(`${URL}/post/${id}`)
        return response.data;
    }catch(err){
        console.log('error while calling getpost api',err);
    }
}