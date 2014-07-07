
exports.validateAPIRequest = function (req, res, next) {
    var accessToken = req.header('access_token');

    this.validAccessToken = function(accessToken){
        console.log("accessToken = "+accessToken);
        if(accessToken!=null){
            return true;
        }
        else{
            return false;
        }

    }

    //Skip this route
    if(req.originalUrl == '/api/access-token'){
        next();
    }
    //If valid access token then proceed else
    else if (this.validAccessToken(accessToken)) {
        next();
    }
    //Else give Error
    else {
        res.status(401).send({error:'missing access token'});

    }




}

exports.provideAccessToken = function(req,res){

}