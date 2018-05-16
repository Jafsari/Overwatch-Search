var jwt = require("jsonwebtoken")
var SECRET = 'woo'

exports.loginRequired =function(req,res,next){
    try {
        var token = req.headers.authorization.split(" ")[1]
        jwt.verify(token,SECRET,function(err,decoded){
            if (decoded){
                next();
            } else {
                res.status(401).send('Please log in first')
            }
        });
    }
    catch(ex){
        res.status(401).send("Please log in first")
    }
}

exports.ensureCorrectUser = function(req,res,next){
    try{
        var token = req.headers.authorization.split(" ")[1]
        jwt.verify(token,SECRET,function(err,decoded){
            if (decoded.user_id === req.params.id){
                next();
            }  else {
                res.status(401).send('Unauthorized');
            }
        })
    } catch(ex){
        res.status(401).send('Unauthorized');
    }
}