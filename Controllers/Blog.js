const axios = require('axios')

exports.createBlog = (req,res) => {
      const {title,description,author} = req.body
    const filename = req.file.filename

    const newBlog = {
        title_blog:title,
        description_blog:description,
        author_blog:author,
        image_blog: filename
    }
    axios.post('http://localhost:3000/blogs', newBlog)
    return res.redirect('/allblogs')
        .then(() => {
            return res.redirect('/allblogs'); 
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).json({
                error: 'Internal Server Error',
                message: 'Une erreur interne du serveur s\'est produite lors du traitement de votre demande. Veuillez réessayer ultérieurement.'
            });
        });
    }
exports.getBlogs = async (req,res) => {
    const fetchBlog = await axios.get('http://localhost:3000/blogs')
    const blogs = await fetchBlog.data
    res.render('allBlogs',{blogs})
    res.end()
}
// router.post('/update-blog/:id', (req, res) => {
//     const blogId = req.params.id;
//     const updatedBlogData = req.body; 
//     res.redirect('/allblogs');
// });

// router.get('/delete-blog/:id', (req, res) => {
//     const blogId = req.params.id;
 
//     res.redirect('/allblogs');
// });
