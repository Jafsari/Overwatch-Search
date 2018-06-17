const express = require('express');
const router = express.Router();
const { User } = require("../models");
var auth = require('../middleware/auth')
const overwatch = require('overwatch-api');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const schema = require('../search-schema');

router.get("/", (req,res,next) => {
    return User.find().then(users => {
        return res.json(users);
    }).catch(function(ex){
        res.status(400).send(ex.message)
    })
})

router.get('/:id', (req,res,next) => {
    return User.findById(req.params.id).then(function(response) {
        return res.json(response);
    }).catch(function(response){
        res.status(400).send(response.message);
    })
})


router.post('/',(req,res,next) => {
    return User.create(req.body).then(function(response){
        return res.status(200).json(response);
    }).catch(function(response){
        return res.status(400).send(response.message)
    })
})

router.patch("/:id",(req,res,next) => {
    return User.findByIdAndUpdate(req.params.id,req.body).then(function(response){
        return res.status(200).json(response);
    }).catch(function(response){
        return res.status(404).json(response.message)
    })
});

router.delete('/:id',(req,res,next) => {
    return User.findByIdAndRemove(req.params.id).then(function(response){
        return res.json({
            status:204,
            title:"Success",
            message:"Successfully Deleted!"
        });
    });
})

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