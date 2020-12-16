var express     = require('express');
var PORT        = 3000;
var application = express();

application.use((req,res,next)=>{
    console.log(req.url);
    next();
})

application.use(express.static('../src'));
application.use('/scripts', express.static(__dirname + '/../node_modules'));
application.listen(PORT, function() {
    console.log("Server started on port : " + PORT)
});
