const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('pages/research', {route: 'research'});
});

module.exports = router;