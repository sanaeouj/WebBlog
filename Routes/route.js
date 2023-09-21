const express = require('express');
const router = express.Router();
const multer = require('multer');
// Importez les contrôleurs nécessaires
const {allBlogs ,getBlogs,createBlog} = require('../Controllers/Blog');

const storage=multer.diskStorage({
  destination:(req, file,cb)=>{
    cb(null,Date.now()+'-'+file.originalname);
  }
})
const upload =multer({storage:storage});

router.get('/addBlog',(req,res)=> {
  res.render('addBlog')
} ); // 
app.get('/login',(req,res)=>{
    res.render('login')
})


router.post('/createBlog',upload.single('avatar'),createBlog)
router.get('/allBlogs', getBlogs); // 
router.use((req, res) => {
  res.status(404).render('404'); // Renvoie la vue 404.ejs en cas de route non trouvée
});
module.exports = router;
