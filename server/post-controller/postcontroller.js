
import Post from "../schema/postSchema.js";

export const createpost= async(req,res)=>{
    console.log(req.body);

    try{
        const post = await new Post(req.body);
        post.save(); 
        res.status(200).json('blog post successfull')
    }catch(err){
        res.status(500).json(err)
    }

}

export const getAllPosts = async (req, res) => {
    try{
        let posts = await Post.find({});
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err);
    }
}

export const getPost = async (req, res) => {
    try{
        let post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err)
    }
}