import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage'

const storage = new GridFsStorage({
    url:'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    option:{ useNewUrlParser: true, useUnifiedTopology: true},
    file:( req , file) => {
        const match = ["image/png" , "image/jpg"]

        if(match.indexOf(file.memetype) === -1){
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucket:"photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({ storage })