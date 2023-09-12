// const {Get_Blogs}=require('../Api/BlogsApi')
// const endPointRendred=['addblog','edit'];

// exports.getBlogById=async id =>{
//     const api=await Get_Blogs()
//     const blogs=await api.data
//     const blog=blogs.filter(b =>b.id==id)
//     return blog

// }
// exports.CheckEndPoint=async (res,endpoint)=>{
//     if (endPointRendred.includes(endpoint)){
//         return res.render(endpoint);
//     }
// }