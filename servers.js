const express =require('express');
const app=express()
const Port=process.env.PORT || 8000;
const server =express();
const multer=require('multer')
// Middleware
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/puclic/',express.static(__dirname+'Public'));
server.use(require('helmet')(config.helmetOptions));
if(config.compressionEnabled){
    server.use(require('compression')());
}
server.use(require('morgan')(config.morganFormat))

//ejs
server.set('view engine',config.viewEngine)
//
const blogRoutes=require('./Routes/blog');
const multer = require('multer');
server.use('/', blogRoutes);

//not found
 server.use((req,res)=>res.status(404).render(config.notFoundTemplate));