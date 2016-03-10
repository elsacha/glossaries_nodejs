var mongoose = require('mongoose');

// Mongoose Schema definition
var engRusSchema = new mongoose.Schema({
    eng: String,
    rus: String,
    subject: String
});

// Mongoose Model definition
mongoose.model('engrus', engRusSchema,
    'EngRus');//last parameter collection name