var mongoose = require('mongoose');
var engRus = mongoose.model('engrus'); //model and schema included in models/db.js file
var status = require('http-status');


//glossaries home
module.exports.ctrlHome = function(req, res) {
	res.json({ title: 'Welcome to glossaries' });
}

//find translation
module.exports.ctrlTranslateEngRus = function(req, res) {
  console.log('Source term:', req.params);
  if (req.params.w) {
		console.log("requested term: "+req.params.w);
        engRus.findOne({ eng: req.params.w}, { _id:0, rus: 1, subject: 1 }, function (error, docs) {
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
};