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