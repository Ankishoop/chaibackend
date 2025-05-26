const express = require('express');

const app = express();


app.get('./health',function(req,res){
    const kidid = req.headers.kidid ;
    const user = req.headers.user;
    const pass = req.headers.pass;

    if(user != "Ankish" || pass != '123')
    {
        res.status(400).
    }
})