var express = require('express')
  , cors = require('cors')
  , app = express()
  , status = require('http-status');


app.use(express.static(__dirname + '/public'));
app.options('/api/engrus/:w', cors()); // enable pre-flight request for DELETE request


var port = process.env.PORT || 3000;

// Mongoose import
var mongoose = require('mongoose');

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://localhost:27017/glossaries', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('connection to db successful');
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var engRusSchema = new Schema({
    eng: String,
    rus: String,
    subject: String
});

// Mongoose Model definition
var engrus = mongoose.model('engrus', engRusSchema,
	'EngRus');//last parameter collection name

// Bootstrap express
//var app = express();

app.get('/api', function(req, res) {
	res.send('Welcome to the glossary');
});

//app.get('/engrus', cors(), function(req, res) {
//        engrus.findOne({ eng: "notebook"}, function (err, docs) {
//            res.json(docs);
//        });
//});

app.get('/api/engrus/:w', cors(), function(req, res) {
	if (req.params.w) {
		console.log("requested term: "+req.params.w);
        engrus.findOne({ eng: req.params.w}, function (error, docs) {
        if (error) {
            return res.
                status(status.INTERNAL_SERVER_ERROR).
                json({ error: error.toString() });
        }
        if (!docs) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
            res.json(docs);
        });
    }
});




var server = app.listen(port, function() {
        console.log('CORS-enabled web server listening on port %s.', port);
});
