const router = require('express').Router();

router.get('',(req,res)=>{
    if(req.user == null){
        res.status(401).send([]);
        return;
    }
    let {email,imagenUrl,name} = req.user;
    res.send({email,imagenUrl,name});
})

module.exports = router;
