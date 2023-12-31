const express = require ('express');
const app = express();
const PORT = process.env.PORT || 8000
const axios = require ('axios')
const {createBlog, getBlogs,deleteBlog,editBlog,updateBlog} = require ('./Controllers/Blog')
const multer = require('multer')
const users = require('./Models/database.json')



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



app.get('/login',(req,res)=>{
  res.render('login')
})
// add blog endpoint

app.get('/addBlog',(req,res) => {
    res.render('addBlog')
})

app.post('/createBlog',upload.single('avatar'), createBlog)


app.use('/allBlogs', getBlogs)

app.delete('/delete/:id',deleteBlog)
app.get('/edit/:id',editBlog)



  

//render is only for pages in 'views' folder

// app.use((req,res,next) => {
//     res.sendFile(__dirname + '/Public/html/404.html')
// });
      
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
