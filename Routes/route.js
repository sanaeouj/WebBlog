const express = require('express');
const router = express.Router();
const multer = require('multer');
// Importez les contrôleurs nécessaires
const {allBlogs ,GetBlogs,createBlog,editBlog,deleteBlog,updateBlog} = require('../Controllers/Blog');
const { Add_Blog } = require('../Api/BlogsApi');
const database = require('../Models/database.json');
const db = new Database(database);

const storage=multer.diskStorage({
  destination:(req, file,cb)=>{
    cb(null,Date.now()+'-'+file.originalname);
  }
})
const upload =multer({storage:storage});

router.get('/addBlog',(req,res)=> {
  res.render('addBlog')
} ); // 

router.post('/createBlog',upload.single('avatar',createBlog))
router.get('/allBlogs', GetBlogs); // 
router.get('/edit/:id',editBlog)
router.post('/update/:id',updateBlog)

router.post('/api/users', (req, res) => {
  // Récupérez les données de l'utilisateur à partir de la requête.
  const user = req.body;
  // Enregistrez les données de l'utilisateur dans la base de données.
  db.saveUser(user);
  // Renvoyez une réponse à l'utilisateur.
  res.send('Utilisateur enregistré avec succès !');
});


module.exports = router;
