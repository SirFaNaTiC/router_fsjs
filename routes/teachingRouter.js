const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('pages/teaching', {route: 'enseignement'});
});

router.get('/javascript',(req,res)=>{
    res.render('pages/javascript', {route: 'enseignement'});
});

router.get('/php',(req,res)=>{
    res.render('pages/php', {route: 'enseignement'});
});

router.get('/node',(req,res)=>{
    res.render('pages/node', {route: 'enseignement'});
});

router.get('/node/express',(req,res)=>{
    res.render('pages/express', {route: 'enseignement'});
});



module.exports = router;