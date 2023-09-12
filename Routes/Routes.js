// routes/index.js

const express = require('express');
const router = express.Router();

// Importez les contrôleurs nécessaires
const { login, register, dashboard, allBlogs, addBlog } = require('../controllers/blogController');
const { Add_Blog } = require('../Api/BlogsApi');


router.get('/', 404); // 
router.get('/allBlogs', allBlogs); // 
router.get('/addBlog', addBlog); // 

router.use((req, res) => {
  res.status(404).render('404'); // Renvoie la vue 404.ejs en cas de route non trouvée
});

module.exports = router;
