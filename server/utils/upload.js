
const url = 'http://localhost:8000'
const uploadImage = async ( req , res) =>{
    try{
    if(!req.file){
        return res.status(404).json('file not found');
    }
    const imageURL = `${url}/file/${req.file.filename}`

    res.status(200).json(imageURL)
    }catch(err){
        res.status(500).json(err)
    }
}

export default uploadImage