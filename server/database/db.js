import mongoose from "mongoose";

const DBconnection = async () => {
    
    try{
    const URL = 'mongodb+srv://user:12345@cluster0.ustvu.mongodb.net/BLOG_WEB?retryWrites=true&w=majority';
    await mongoose.connect(URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
        // useFindAndModify:false
    });
    console.log('db connected');
}
catch(error){
        console.log('db not connected',error);
}
}
export default DBconnection