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
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        required:true
    }
})
const post = mongooes.model('post', PostSchema)

export default post