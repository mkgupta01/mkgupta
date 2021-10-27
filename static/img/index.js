const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true }))

//HTML SPECIFIC STUFF
app.set('views', __dirname + '/views');//setting views directory
app.engine('html', require('ejs').renderFile);//setting template engine as HTML

// ENDPOINTS
app.get('/',(req, res)=>{
    res.render('index.html');
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});