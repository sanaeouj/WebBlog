const axios = require('axios')
// const {Add_Blog} = require('..api/blogApi')

exports.createBlog = (req,res) => {
    // console.log(req.body)
    // console.log(req.file)

    const {title,description,author} = req.body
    const filename = req.file.filename

    const newBlog = {
        title_blog:title,
        description_blog:description,
        author_blog:author,
        image_blog: filename
    }


    // res.send(JSON.stringify(req.body))
    // res.status(200).send('data success')

    axios.post('http://localhost:3000/blogs', newBlog)
    return res.redirect('/allblogs')
    // res.end() axios.post('http://localhost:3000/blogs', newBlog)
        .then(() => {
            // La création du blog s'est bien déroulée, rediriger ou renvoyer une réponse réussie.
            return res.redirect('/allblogs'); // Ou renvoyez un message de réussite si nécessaire.
        })
        .catch((error) => {
            console.error(error);
            // Une erreur s'est produite lors de la création du blog.
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