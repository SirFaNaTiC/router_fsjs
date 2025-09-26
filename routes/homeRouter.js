const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<H1>Bienvenue</H1><p>Margaux est pas gentille</p>');
});

module.exports = router;