exports.findAllProjects = function(req,res){
    console.log("findAllProjects");
    var projects = ["a","b"];
    return res.send(projects);
}

exports.findProject = function(req,res){
    return res.send();
}

exports.createProject = function(req,res){
    return res.send();
}

exports.updateProject = function(req,res){
    return res.send();
}

exports.deleteProject = function(req,res){
    return res.send();
}

