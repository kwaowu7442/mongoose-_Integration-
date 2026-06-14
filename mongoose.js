const mongoose = require('mongoose');

module.exports = function() {
    // Hardcoding the connection string directly avoids breaking on broken config files
    mongoose.connect('mongodb://127.0.0.1/mean-book');

    // Register the User model structure
    require('../app/models/user.server.model'); 
    
    return mongoose.connection;
};