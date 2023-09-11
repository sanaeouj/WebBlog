const express =require('express');
const server =express();
const helmet=require('helmet');
const compression = require('compression');
const morgan=require('morgan');
const config=require('./Config/config');


// Middleware
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(__dirname+config.staticFolderPath,{maxAge: 3000}));
server.use(require('helmet')(config.helmetOptions));
if(config.compressionEnabled){
    server.use(require('compression')());
}
server.use(require('morgan')(config.morganFormat))

//ejs
server.set('view engine',config.viewEngine)
//
const blogRoutes=require('./Routes/blog');
server.use('/', blogRoutes);

//not found
 server.use((req,res)=>res.status(404).render(config.notFoundTemplate));