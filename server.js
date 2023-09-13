const express = require ('express');
const app = express();
const PORT = process.env.PORT || 7000
const axios = require ('axios')
const {createBlog, getBlogs} = require ('./Controllers/Blog')
const multer = require('multer')

// Set up Multer for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null,Date.now() + '-' + file.originalname);
    },
  });

const upload = multer({ storage: storage });
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static('Public'))
// add blog endpoint
app.get('/addBlog',(req,res) => {
    res.render('addBlog')
})
//login
app.get('/login',(req,res) => {
  res.render('login.ejs')
})
//registre 
app.get('/registre',(req,res) => {
  res.render('registre.ejs')
})

app.post('/createblog',upload.single('avatar'), createBlog)
app.get('/allBlogs', getBlogs)  

app.use((req,res,next) => {
    res.sendFile(__dirname + '/Public/404.html')
});
      
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

