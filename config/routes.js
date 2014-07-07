module.exports = function (app, config) {


    //Security Routes
    var secureFilter = require('../app/security/securefilter');
    app.all('/api/*', secureFilter.validateAPIRequest);
    app.post('/api/access-token', secureFilter.provideAccessToken);

    //Project Routes
    var projects = require('../app/controllers/project');
    app.get('/api/projects', projects.findAllProjects);
    app.get('/api/projects/:id', projects.findProject);
    app.post('/api/projects', projects.createProject);
    app.put('/api/projects/:id', projects.updateProject);
    app.delete('/api/projects/:id', projects.deleteProject);

}