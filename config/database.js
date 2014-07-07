var mongoose = require('mongoose');

module.exports = function (config) {
    mongoose.connect(config.db, function (err, res) {
        if (err) {
            console.log ('ERROR connecting to mongodb ' + err);
            console.log(err);
        }
    });
}
