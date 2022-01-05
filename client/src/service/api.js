import axios from 'axios';

const URL = 'http://localhost:8000'

export const createPost = async (post) =>{
   try{ 
   await axios.post(`${URL}/create`,post)
}catch(error){
    console.log('Error While calling createPost API',error);
}}

export const getAllPosts = async(params)=>{
    try{
       let response= await axios.get(`${URL}/posts${params}`)
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

export const updatePost = async (id, post) => {
    try{
        await axios.post(`${URL}/update/${id}`, post)
    }catch(err){
        console.log('error while calling updatepost', err);
    }
}

export const deletePost = async (id) => {
    try{
        await axios.delete(`${URL}/delete/${id}`)
    }catch(err){
        console.log('error while calling deletepost', err);
    }
}