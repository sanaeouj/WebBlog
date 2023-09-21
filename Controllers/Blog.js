const axios = require('axios')
// const {Add_Blog} = require('..api/blogApi')

exports.createBlog = (req,res) => {  
    const {title,description,author} = req.body
    const filename = req.file.filename
    console.log(req.body)
    console.log(req.file)
    const newBlog = {
        title_blog:title,
        description_blog:description,
        author_blog:author,
        image_blog: filename
    }
    axios.post('http://localhost:3000/blogs', newBlog)
     res.redirect('/allblogs')
    // res.end()
}

exports.getBlogs = async (req,res) => {
    const fetchBlog = await axios.get('http://localhost:3000/blogs')
    const blogs = await fetchBlog.data
    res.render('allBlogs',{blogs})
    res.end()
}
exports.deleteBlog=async (req,res) => {
    console.log("deleteBlog")
    const id =req.params.id
   axios.delete('http://localhost:3000/blogs/'+id)
   .then(()=>{
     res.status(202).send('delete worked')
   })
   .catch(()=>{
    return res.status(500).send('sever problem')
   })
}
exports.editBlog= async(req,res) => {
    const id =req.params.id
    const api=await axios.get('http://localhost:3000/blogs/'+id)
    const blog=await api.data
    res.render('edit',{blog})
}
exports.updateBlog=async (req,res) => {
    const id=req.params.id
    const api= await axios.get('http://localhost:3000/blogs/'+id)
    const blog=await api.data
    const updateBlog={
    title_blog:req.body.title_blog,
    description_blog:req.body.title_description,
    author_blog:req.body.title_author,
    image_blog: req.file?req.file.flename:blog.image_blog,
    }
    axios.patch('http://localhost:3000/blogs/'+id,updateBlog)
    .then(()=>{
        res.redirect('/allblogs')
    })
}
