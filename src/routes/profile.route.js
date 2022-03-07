const router = require('express').Router();
const path = require('path');

router.get('',(req,res)=>{
    if(req.user == null){
        res.redirect('/auth/login');
        return;
    }
    //console.log(req.user);
    res.sendFile(path.resolve('src/public/html/profile.html'));
})

module.exports = router;
