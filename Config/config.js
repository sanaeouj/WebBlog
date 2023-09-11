module.exports={
    port: process.env.PORT || 8500,
    staticFolderPath:'/Pulic',
    helmetOptions:{},
    CompressionEnabled:false,
    morganFormat:'combined',
    viewEngine  :'ejs',
    notFoundTemplate:'404',

};