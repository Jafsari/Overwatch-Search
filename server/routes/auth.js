const express = require("express");
const router = express.Router();
const { User } = require("../models/")
const jwt = require("jsonwebtoken")
const SECRET = "woo"
const overwatch = require('overwatch-api');

router.post('/signup', function(req,res){
    return User.create(req.body).then(function(response){
        var token = jwt.sign({ user_id: response.id}, SECRET);
        res.status(200).send({token})
    }).catch(function(err){
        res.status(400).send(err.message)
    })
});

router.post('/login', function(req,res){
    return User.findOne({username:req.body.username}).then(function(user){
        user.comparePassword(req.body.password, function(err, isMatch){
            if(isMatch){
                var token = jwt.sign({ user_id: user.id}, SECRET);
                res.status(200).send({token})
            } else {
                res.status(400).send('Invalid Credentials')
            }
        })
    }, function(err){
        res.status(400).send('Invalid Credentials')
    })
});

router.post('/search',(req,res,next) =>{
    console.log(req.body)
    const platform = req.body.platform;
    const region = req.body.region;
    const tag = req.body.tag;
    
    overwatch.getProfile(platform, region, tag, (json) => {
     return res.status(200).json(json)
    });
})

module.exports = router;