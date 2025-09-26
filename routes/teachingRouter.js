const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>Bonsoir je suis bob lennon et je suis un youtuber</h1>');
});

router.get('/javascript',(req,res)=>{
    res.send('<h1>JS is the best language ever</h1>');
});

router.get('/php',(req,res)=>{
    res.send('<h1>PHP is the best language ever</h1>');
});

router.get('/node',(req,res)=>{
    res.send('<h1>Node is the best language ever</h1>');
});

router.get('/node/express',(req,res)=>{
    res.send('<h1>Express is the best framework ever</h1>');
});



module.exports = router;