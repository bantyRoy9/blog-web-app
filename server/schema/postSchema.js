import mongooes from 'mongoose'

const PostSchema = mongooes.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    discription:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: false
    },
    username:{
        type: String,
        required:false
    },
    categories:{
        type:String,
        required:false
    },
    createDate:{
        type:Date,
        required:true
    }
})
const post = mongooes.model('post', PostSchema)

export default post