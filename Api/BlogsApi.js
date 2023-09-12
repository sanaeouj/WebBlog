const axios=require('axios')
const BlogApi=axios.create({
    baseURL:'http://localhost:3000/Blogs',
    headers:{
        'Content-Type':'application/json'
    }
})
exports.Add_Blog = (blog) => BlogApi.post('/', blog);
exports.Get_Blog = () => BlogApi.get('/'); // Vous n'avez pas besoin d'un paramètre ici
exports.Delete_Blog = (id) => BlogApi.delete(`/${id}`); 
exports.Edit_Blog = (id, newBlog) => BlogApi.patch(`/${id}`, newBlog);
const axios= require('axios');
