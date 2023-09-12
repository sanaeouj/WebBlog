// routes/index.js

const express = require('express');
const router = express.Router();

// Importez les contrôleurs nécessaires
const { login, register, dashboard, allBlogs, addBlog } = require('../controllers/blogController');
const { Add_Blog } = require('../Api/BlogsApi');

// Définissez les routes principales
router.get('/', dashboard); // Page du tableau de bord
router.get('/blogs', allBlogs); // Page de tous les blogs
router.get('/blogs/edit/:id', addBlog); // Page d'édition de blog

router.use((req, res) => {
  res.status(404).render('404'); // Renvoie la vue 404.ejs en cas de route non trouvée
});

module.exports = router;
